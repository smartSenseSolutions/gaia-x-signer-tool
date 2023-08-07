import axios from 'axios'
import crypto, { createHash } from 'crypto'
import { Resolver } from 'did-resolver'
import express, { Request, Response } from 'express'
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
				res.status(400).json({
					error: `DDO not found for given did: '${issuer}' in proof`
				})
				return
			}
			const { x5u } = await Utils.getPublicKeys(ddo.didDocument)
			privateKey = Buffer.from(privateKey, 'base64').toString('ascii')
			// privateKey = process.env.PRIVATE_KEY as string

			const legalRegistrationNumberVc = await Utils.issueRegistrationNumberVC(axios, legalRegistrationNumber)
			const vcs = [legalParticipant, legalRegistrationNumberVc, gaiaXTermsAndConditions]
			for (let index = 0; index < vcs.length; index++) {
				const vc = vcs[index]
				// eslint-disable-next-line no-prototype-builtins
				if (!vc.hasOwnProperty('proof')) {
					const proof = await Utils.addProof(jsonld, axios, jose, crypto, vc, privateKey, verificationMethod, AppConst.RSA_ALGO, x5u)
					vcs[index].proof = proof
				}
			}
			const selfDescription = Utils.createVP(vcs)
			const complianceCredential = (await axios.post(process.env.COMPLIANCE_SERVICE as string, selfDescription)).data
			// // const complianceCredential = {}
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

			res.status(200).json({
				data: completeSD,
				message: AppMessages.VP_SUCCESS
			})
		} catch (e) {
			res.status(500).json({
				error: (e as Error).message,
				message: AppMessages.VP_FAILED
			})
		}
	}

	ServiceOffering = async (req: Request, res: Response): Promise<void> => {
		try {
			let { privateKey } = req.body
			const {
				legalParticipantURL,
				verificationMethod,
				issuer,
				vcs: { serviceOffering }
			} = req.body

			const legalParticipant = (await axios.get(legalParticipantURL)).data
			// const legalParticipant = require('./../../legalParticipant.json')
			const {
				selfDescriptionCredential: { verifiableCredential }
			} = legalParticipant

			const ddo = await Utils.getDDOfromDID(issuer, resolver)
			if (!ddo) {
				logger.error(__filename, 'ServiceOffering', `❌ DDO not found for given did: '${issuer}' in proof`, req.custom.uuid)
				res.status(400).json({
					error: `DDO not found for given did: '${issuer}' in proof`
				})
				return
			}

			const { x5u } = await Utils.getPublicKeys(ddo.didDocument)
			privateKey = Buffer.from(privateKey, 'base64').toString('ascii')

			const proof = await Utils.addProof(jsonld, axios, jose, crypto, serviceOffering, privateKey, verificationMethod, AppConst.RSA_ALGO, x5u)
			serviceOffering.proof = proof
			verifiableCredential.push(serviceOffering)

			// Create VP for service offering
			const selfDescriptionCredential = Utils.createVP(verifiableCredential)

			// Call compliance service to sign in gaia-x
			const complianceCredential = (await axios.post(process.env.COMPLIANCE_SERVICE as string, selfDescriptionCredential)).data
			if (complianceCredential) {
				logger.info(__filename, 'ServiceOffering', '🔒 SD signed successfully (compliance service)', req.custom.uuid)
			} else {
				logger.error(__filename, 'ServiceOffering', '❌ SD signing failed (compliance service)', req.custom.uuid)
			}

			const completeSD = {
				selfDescriptionCredential: selfDescriptionCredential,
				complianceCredential: complianceCredential
			}

			// Calculate Veracity
			const { veracity, certificateDetails } = await Utils.calcVeracity(verifiableCredential, resolver)
			logger.debug(__filename, 'ServiceOffering', '🔒 veracity calculated', req.custom.uuid)

			// Calculate Transparency
			const { credentialSubject } = serviceOffering
			const transparency: number = await Utils.calcTransparency(credentialSubject)
			logger.debug(__filename, 'ServiceOffering', '🔒 transparency calculated', req.custom.uuid)

			// Calculate TrustIndex
			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			logger.debug(__filename, 'ServiceOffering', '🔒 trustIndex calculated', req.custom.uuid)

			res.status(200).json({
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
			logger.error(__filename, 'ServiceOffering', `❌ ${AppMessages.SD_SIGN_FAILED} :- error \n ${error}`, req.custom.uuid)

			res.status(500).json({
				error: (error as Error).message,
				message: AppMessages.SD_SIGN_FAILED
			})
		}
	}

	Verify = async (req: Request, res: Response): Promise<void> => {
		/* Request Body :
		 * 1. Participant URL : EG . https://greenworld.proofsense.in/.well-known/participant.json
		 */
		//todo : compliance check is remaining
		try {
			const { participantUrl, policies } = req.body
			const verificationStatus: VerificationStatus = {
				valid: false
			}

			logger.debug(__filename, 'Verify', 'fetching participant json...', req.custom.uuid)
			const participantJson = await Utils.fetchParticipantJson(participantUrl)

			//check if VC not null or in other form
			if (!participantJson?.selfDescriptionCredential?.verifiableCredential) {
				logger.error(__filename, 'Verify', `❌ No Verifiable Credential Found`, req.custom.uuid)
				res.status(400).json({
					error: `VC not found`,
					message: AppMessages.PARTICIPANT_VC_FOUND_FAILED
				})
				return
			} else if (!Array.isArray(participantJson.selfDescriptionCredential.verifiableCredential)) {
				logger.error(__filename, 'Verify', `❌ Verifiable Credential isn't array`, req.custom.uuid)
				res.status(400).json({
					error: `VC not valid`,
					message: AppMessages.PARTICIPANT_VC_INVALID
				})
				return
			}

			// check if complianceCred not null
			if (!participantJson?.complianceCredential || !participantJson?.complianceCredential?.proof) {
				logger.error(__filename, 'Verify', `❌ Compliance Credential Not Found`, req.custom.uuid)
				res.status(400).json({
					error: `Compliance Credential not found`,
					message: AppMessages.COMPLIANCE_CRED_FOUND_FAILED
				})
				return
			}

			// check VC are of valid type
			const { verifiableCredential, type } = participantJson.selfDescriptionCredential
			if (!Array.isArray(type) || !(type.includes('VerifiableCredential') || type.includes('VerifiablePresentation'))) {
				logger.error(__filename, 'Verify', `❌ Credential Type not supported`, req.custom.uuid)
				res.status(400).json({
					error: `Credential Type not supported`,
					message: `Credential Type not supported`
				})
				return
			}
			//fetching VC with subject type gx:LegalParticipant
			const VC = verifiableCredential?.find((vc: VerifiableCredentialDto) => vc?.credentialSubject.type === 'gx:LegalParticipant')

			if (!VC) {
				logger.error(__filename, 'Verify', `❌ Verifiable Credential doesn't have type 'gx:LegalParticipant'`, req.custom.uuid)
				res.status(400).json({
					error: `VC with type 'gx:LegalParticipant' not found!!`,
					message: "VC with type 'gx:LegalParticipant' not found!!"
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
						const vcProof = JSON.parse(JSON.stringify(VC.proof))
						const vcCredentialContent = JSON.parse(JSON.stringify(VC))
						delete vcCredentialContent.proof
						verificationStatus.holderSignature = await Utils.verification(vcCredentialContent, vcProof, true, resolver)
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
			res.status(200).json({
				data: { ...verificationStatus },
				message: AppMessages.SIG_VERIFY_SUCCESS
			})
		} catch (error) {
			res.status(500).json({
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
				selfDescriptionCredential: { credentialSubject }
			} = (await axios.get(serviceOfferingSD)).data
			const transparency: number = await Utils.calcTransparency(credentialSubject)
			logger.debug(__filename, 'GetTrustIndex', `transparency :-, ${transparency}`, req.custom.uuid)

			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			logger.debug(__filename, 'GetTrustIndex', `trustIndex :-, ${trustIndex}`, req.custom.uuid)

			res.status(200).json({
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
			res.status(500).json({
				error: (error as Error).message,
				message: AppMessages.TRUST_INDEX_CALC_FAILED
			})
		}
	}

	CreateWebDID = async (req: Request, res: Response): Promise<void> => {
		try {
			const { domain, tenant, services } = req.body
			const didId = tenant ? `did:web:${domain}:${tenant}` : `did:web:${domain}`
			const x5uURL = tenant ? `https://${domain}/${tenant}/x509CertificateChain.pem` : `https://${domain}/.well-known/x509CertificateChain.pem`
			const certificate = (await axios.get(x5uURL)).data as string
			const publicKeyJwk = await Utils.generatePublicJWK(jose, AppConst.RSA_ALGO, certificate, x5uURL)
			const did = Utils.generateDID(didId, publicKeyJwk, services)
			res.status(200).json({
				data: { did },
				message: AppMessages.DID_SUCCESS
			})
		} catch (e) {
			res.status(500).json({
				error: (e as Error).message,
				message: AppMessages.DID_FAILED
			})
		}
	}
}

export default new SignerToolController()
