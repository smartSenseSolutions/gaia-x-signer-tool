import axios from 'axios'
import crypto, { createHash } from 'crypto'
import { Resolver } from 'did-resolver'
import express, { Request, Response } from 'express'
import STATUS_CODES from 'http-status-codes'
import * as jose from 'jose'
import jsonld from 'jsonld'
import web from 'web-did-resolver'

import { ComplianceCredential, VerifiableCredentialDto, VerificationStatus } from '../../../interface'
import Utils from '../../../utils/common-functions'
import { AppConst, AppMessages } from '../../../utils/constants'
import { logger } from '../../../utils/logger'

const webResolver = web.getResolver()
const resolver = new Resolver(webResolver)
export const privateRoute = express.Router()

class SignerToolController {
	GXLegalParticipant = async (req: Request, res: Response): Promise<void> => {
		try {
			const { issuer, verificationMethod } = req.body
			const vc = req.body.vcs
			let { privateKey } = req.body
			const { legalParticipant, legalRegistrationNumber, gaiaXTermsAndConditions } = vc

			const ddo = await Utils.getDDOfromDID(issuer, resolver)
			if (!ddo) {
				logger.error(__filename, 'GXLegalParticipant', `❌ DDO not found for given did: '${issuer}' in proof`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `DDO not found for given did: '${issuer}' in proof`
				})
				return
			}
			const { x5u } = await Utils.getPublicKeys(ddo.didDocument)
			privateKey = Buffer.from(privateKey, 'base64').toString('ascii')

			const legalRegistrationNumberVc = await Utils.issueRegistrationNumberVC(axios, legalRegistrationNumber)
			logger.info(__filename, 'GXLegalParticipant', 'legalRegistrationNumber vc created', legalRegistrationNumber)

			const vcsMap = new Map()
			if (legalParticipant.credentialSubject['gx:parentOrganization']) {
				for (let i = 0; i < legalParticipant.credentialSubject['gx:parentOrganization'].length; i++) {
					const lp = (await axios.get(legalParticipant.credentialSubject['gx:parentOrganization'][i].id)).data
					const {
						selfDescriptionCredential: { verifiableCredential }
					} = lp
					for (const vc of verifiableCredential) {
						const lpId = vc.credentialSubject.id
						if (!vcsMap.has(lpId)) {
							vcsMap.set(lpId, vc)
						}
					}
				}
			}

			if (legalParticipant.credentialSubject['gx:subOrganization']) {
				for (let i = 0; i < legalParticipant.credentialSubject['gx:subOrganization'].length; i++) {
					const lp = (await axios.get(legalParticipant.credentialSubject['gx:subOrganization'][i].id)).data
					const {
						selfDescriptionCredential: { verifiableCredential }
					} = lp
					for (const vc of verifiableCredential) {
						const lpId = vc.credentialSubject.id
						if (!vcsMap.has(lpId)) {
							vcsMap.set(lpId, vc)
						}
					}
				}
			}
			const vcs = [legalParticipant, legalRegistrationNumberVc, gaiaXTermsAndConditions]

			for (let index = 0; index < vcs.length; index++) {
				const vc = vcs[index]
				// eslint-disable-next-line no-prototype-builtins
				if (!vc.hasOwnProperty('proof')) {
					const proof = await Utils.addProof(jsonld, axios, jose, crypto, vc, privateKey, verificationMethod, AppConst.RSA_ALGO, x5u)
					vcs[index].proof = proof
				}
			}

			vcs.push(...Array.from(vcsMap.values()))

			const selfDescription = Utils.createVP(vcs)
			const complianceCredential = (await axios.post(process.env.COMPLIANCE_SERVICE as string, selfDescription)).data
			// const complianceCredential = vcs
			if (complianceCredential) {
				logger.info(__filename, 'GXLegalParticipant', '🔒 SD signed successfully (compliance service)', req.custom.uuid)
			} else {
				logger.error(__filename, 'GXLegalParticipant', '❌ SD signing failed (compliance service)', req.custom.uuid)
			}

			// // await publisherService.publishVP(complianceCredential);
			const completeSD = {
				selfDescriptionCredential: selfDescription,
				complianceCredential: complianceCredential
			}

			res.status(STATUS_CODES.OK).json({
				data: completeSD,
				message: AppMessages.VP_SUCCESS
			})
		} catch (e: any) {
			console.log(JSON.stringify(e))
			res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				error: (e as Error).message,
				message: AppMessages.VP_FAILED
			})
		}
	}

	ServiceOffering = async (req: Request, res: Response): Promise<void> => {
		try {
			let { privateKey } = req.body
			const {
				verificationMethod,
				issuer: issuerDID,
				vcs: { serviceOffering }
			} = req.body

			// Data received in provided by will be the LP URL.
			// Extract it and fetch LP JSON from the URL
			const legalParticipantURL = serviceOffering['credentialSubject']['gx:providedBy']['id']
			const legalParticipant = await Utils.fetchParticipantJson(legalParticipantURL)
			let {
				selfDescriptionCredential: { verifiableCredential }
			} = legalParticipant

			// Get DID document of issuer from issuer DID
			const ddo = await Utils.getDDOfromDID(issuerDID, resolver)
			if (!ddo) {
				logger.error(__filename, 'ServiceOffering', `❌ DDO not found for given did: '${issuerDID}' in proof`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `DDO not found for given did: '${issuerDID}' in proof`
				})
				return
			}

			// Extract certificate url from did document
			const { x5u } = await Utils.getPublicKeys(ddo.didDocument)

			// Decrypt private key(received in request) from base64 to raw string
			privateKey = Buffer.from(privateKey, 'base64').toString('ascii')

			// Sign service offering self description with private key(received in request)
			const proof = await Utils.addProof(jsonld, axios, jose, crypto, serviceOffering, privateKey, verificationMethod, AppConst.RSA_ALGO, x5u)
			serviceOffering.proof = proof
			verifiableCredential.push(serviceOffering)

			const { credentialSubject: serviceOfferingCS } = serviceOffering
			// Extract VC of dependant Services & Resources
			const resolvableLinks = [...serviceOfferingCS['gx:dependsOn'], ...serviceOfferingCS['gx:aggregationOf']]
			const vcIDs: string[] = []
			for (const { id: vpLink } of resolvableLinks) {
				if (!vcIDs.includes(vpLink)) {
					vcIDs.push(vpLink)
					const {
						selfDescriptionCredential: { verifiableCredential: childVC }
					} = (await axios.get(vpLink)).data
					verifiableCredential = [...verifiableCredential, ...childVC]
				}
			}
			verifiableCredential = Utils.removeDuplicates(verifiableCredential, 'id')

			// Create VP for service offering
			const selfDescriptionCredentialVP = Utils.createVP(verifiableCredential)

			// Call compliance service to sign in gaia-x
			const complianceCredential = await Utils.callServiceOfferingCompliance(selfDescriptionCredentialVP)

			const completeSD = {
				selfDescriptionCredential: selfDescriptionCredentialVP,
				complianceCredential: complianceCredential
			}

			// Calculate Veracity
			const { veracity, certificateDetails } = await Utils.calcVeracity(verifiableCredential, resolver)
			logger.debug(__filename, 'ServiceOffering', '🔒 veracity calculated', req.custom.uuid)

			// Calculate Transparency
			const transparency: number = await Utils.calcTransparency(serviceOfferingCS)
			logger.debug(__filename, 'ServiceOffering', '🔒 transparency calculated', req.custom.uuid)

			// Calculate TrustIndex
			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			logger.debug(__filename, 'ServiceOffering', '🔒 trustIndex calculated', req.custom.uuid)

			res.status(STATUS_CODES.OK).json({
				data: {
					completeSD,
					trustIndex: {
						veracity,
						transparency,
						trustIndex,
						certificateDetails
					}
				},
				message: AppMessages.SD_SIGN_SUCCESS
			})
		} catch (error) {
			// logger.error(__filename, 'ServiceOffering', `❌ ${AppMessages.SD_SIGN_FAILED}`, req.custom.uuid, error)
			res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				error: (error as Error).message,
				message: AppMessages.SD_SIGN_FAILED
			})
		}
	}

	Verify = async (req: Request, res: Response): Promise<void> => {
		/**
		 * Request Body :
		  	1. url : EG . https://greenworld.proofsense.in/.well-known/participant.json
		 	2. policies : policy we want to check
		 */

		//todo : compliance check is remaining
		try {
			const { url, policies } = req.body
			const verificationStatus: VerificationStatus = {
				valid: false
			}

			logger.debug(__filename, 'Verify', 'fetching participant json...', req.custom.uuid)
			const participantJson = await Utils.fetchParticipantJson(url)

			//check if VC not null or in other form
			if (!participantJson?.selfDescriptionCredential?.verifiableCredential) {
				logger.error(__filename, 'Verify', `❌ No Verifiable Credential Found`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `VC not found`,
					message: AppMessages.PARTICIPANT_VC_FOUND_FAILED
				})
				return
			} else if (!Array.isArray(participantJson.selfDescriptionCredential.verifiableCredential)) {
				logger.error(__filename, 'Verify', `❌ Verifiable Credential isn't array`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `VC not valid`,
					message: AppMessages.PARTICIPANT_VC_INVALID
				})
				return
			}

			// check if complianceCred not null
			if (!participantJson?.complianceCredential || !participantJson?.complianceCredential?.proof) {
				logger.error(__filename, 'Verify', `❌ Compliance Credential Not Found`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `Compliance Credential not found`,
					message: AppMessages.COMPLIANCE_CRED_FOUND_FAILED
				})
				return
			}

			// check VC are of valid type
			const { verifiableCredential, type } = participantJson.selfDescriptionCredential
			if (!Array.isArray(type) || !(type.includes('VerifiableCredential') || type.includes('VerifiablePresentation'))) {
				logger.error(__filename, 'Verify', `❌ Credential Type not supported`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `Credential Type not supported`,
					message: `Credential Type not supported`
				})
				return
			}
			//fetching VC with subject type gx:LegalParticipant
			const VC = verifiableCredential?.find(
				(vc: VerifiableCredentialDto) => vc?.credentialSubject.type === 'gx:LegalParticipant' || vc?.credentialSubject.type === 'gx:ServiceOffering'
			)

			if (!VC) {
				logger.error(__filename, 'Verify', `❌ Verifiable Credential doesn't have type 'gx:LegalParticipant' or  'gx:ServiceOffering'`, req.custom.uuid)
				res.status(STATUS_CODES.BAD_REQUEST).json({
					error: `VC with type 'gx:LegalParticipant' or  'gx:ServiceOffering' not found!!`,
					message: "VC with type 'gx:LegalParticipant'  or 'gx:ServiceOffering' not found!!"
				})
				return
			}
			for (const policy of policies) {
				logger.debug(__filename, 'Verify', `Executing ${policy} check ...`, req.custom.uuid)
				switch (policy) {
					case AppConst.VERIFY_LP_POLICIES[0]: {
						// integrity check
						let allChecksPassed = true

						for (const vc of participantJson.selfDescriptionCredential.verifiableCredential) {
							const integrityHash = `sha256-${createHash('sha256').update(JSON.stringify(vc)).digest('hex')}`
							const credIntegrityHash = participantJson.complianceCredential?.credentialSubject?.find((cs: ComplianceCredential) => cs.id == vc.credentialSubject.id)?.integrity
							const integrityCheck = integrityHash === credIntegrityHash

							if (!integrityCheck) {
								allChecksPassed = false
								logger.error(__filename, 'Verify', `❌ Integrity Failed`, req.custom.uuid)
								break
							}
						}
						verificationStatus.integrityCheck = allChecksPassed
						break
					}

					case AppConst.VERIFY_LP_POLICIES[1]: {
						//holder sig verification
						for (const vc of verifiableCredential) {
							const vcProof = JSON.parse(JSON.stringify(vc.proof))
							const vcCredentialContent = JSON.parse(JSON.stringify(vc))
							delete vcCredentialContent.proof
							verificationStatus.holderSignature = await Utils.verification(vcCredentialContent, vcProof, true, resolver)
						}
						break
					}
					case AppConst.VERIFY_LP_POLICIES[2]: {
						// compliance sig verification

						const complianceCred = JSON.parse(JSON.stringify(participantJson.complianceCredential))
						const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
						delete complianceCred.proof
						verificationStatus.complianceSignature = await Utils.verification(complianceCred, complianceProof, false, resolver)
						break
					}
					case AppConst.VERIFY_LP_POLICIES[3]: {
						verificationStatus.complianceCheck = true
						break
					}
				}
			}

			let validity = true

			for (const status in verificationStatus) {
				if (status !== 'valid' && !verificationStatus[status as keyof typeof verificationStatus]) {
					validity = false
					break
				}
			}

			verificationStatus.valid = validity
			res.status(STATUS_CODES.OK).json({
				data: { ...verificationStatus },
				message: AppMessages.SIG_VERIFY_SUCCESS
			})
		} catch (error) {
			res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				error: (error as Error).message,
				message: AppMessages.SIG_VERIFY_FAILED
			})
		}
	}

	GetTrustIndex = async (req: Request, res: Response): Promise<void> => {
		try {
			const { participantSD, serviceOfferingSD } = req.body
			if (!Utils.IsValidURL(participantSD)) {
				logger.error(__filename, 'GetTrustIndex', `❌ Invalid participant self description url format`, req.custom.uuid)
				throw new Error('Invalid participant self description url format')
			}
			if (!Utils.IsValidURL(serviceOfferingSD)) {
				logger.error(__filename, 'GetTrustIndex', `❌ Invalid service offering self description url format`, req.custom.uuid)
				throw new Error('Invalid service offering self description url format')
			}

			// get the json document of participant self description
			const {
				selfDescriptionCredential: { verifiableCredential }
			} = (await axios.get(participantSD)).data
			const { veracity, certificateDetails } = await Utils.calcVeracity(verifiableCredential, resolver)
			logger.debug(__filename, 'GetTrustIndex', `veracity :- ${veracity}`, req.custom.uuid)

			// get the json document of service offering
			const {
				selfDescriptionCredential: { verifiableCredential: verifiableCredentialVCS }
			} = (await axios.get(serviceOfferingSD)).data

			const serviceOfferingVC = verifiableCredentialVCS.find((credential: any) => {
				const {
					credentialSubject: { type, id }
				} = credential
				return type === 'gx:ServiceOffering' && id === serviceOfferingSD
			})

			const { credentialSubject } = serviceOfferingVC
			const transparency: number = await Utils.calcTransparency(credentialSubject)
			logger.debug(__filename, 'GetTrustIndex', `transparency :-, ${transparency}`, req.custom.uuid)

			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			logger.debug(__filename, 'GetTrustIndex', `trustIndex :-, ${trustIndex}`, req.custom.uuid)

			res.status(STATUS_CODES.OK).json({
				message: 'Success',
				data: {
					veracity,
					transparency,
					trustIndex,
					certificateDetails
				}
			})
		} catch (error) {
			logger.error(__filename, 'GetTrustIndex', `❌ ${AppMessages.TRUST_INDEX_CALC_FAILED} : ${error}`, req.custom.uuid)
			res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				error: (error as Error).message,
				message: AppMessages.TRUST_INDEX_CALC_FAILED
			})
		}
	}

	CreateWebDID = async (req: Request, res: Response): Promise<void> => {
		try {
			const { domain, tenant, services } = req.body
			let x5uURL = req.body.x5u
			const didId = tenant ? `did:web:${domain}:${tenant}` : `did:web:${domain}`

			if (!x5uURL) {
				x5uURL = tenant ? `https://${domain}/${tenant}/x509CertificateChain.pem` : `https://${domain}/.well-known/x509CertificateChain.pem`
			}
			const certificate = (await axios.get(x5uURL)).data as string
			const publicKeyJwk = await Utils.generatePublicJWK(jose, AppConst.RSA_ALGO, certificate, x5uURL)
			if (!publicKeyJwk) {
				logger.error(__filename, 'CreateWebDID', '❌ fail to create publicKeyJWK', req.custom.uuid)
				throw new Error('fail to create publicKeyJWK')
			}
			const did = await Utils.generateDID(didId, publicKeyJwk, services)
			if (!did) {
				logger.error(__filename, 'CreateWebDID', '❌ fail to create did', req.custom.uuid)
				throw new Error('fail to create did')
			}
			res.status(STATUS_CODES.OK).json({
				data: { did },
				message: AppMessages.DID_SUCCESS
			})
		} catch (e) {
			res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				error: (e as Error).message,
				message: AppMessages.DID_FAILED
			})
		}
	}
}

export default new SignerToolController()
