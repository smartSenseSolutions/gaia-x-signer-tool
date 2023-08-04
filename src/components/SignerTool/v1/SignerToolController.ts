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
				console.log(`❌ DDO not found for given did: '${issuer}' in proof`)
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
			console.log(complianceCredential ? '🔒 SD signed successfully (compliance service)' : '❌ SD signing failed (compliance service)')
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
				console.error(`❌ DDO not found for given did: '${issuer}' in proof`)
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
			console.log(complianceCredential ? '🔒 SD signed successfully (compliance service)' : '❌ SD signing failed (compliance service)')

			const completeSD = {
				selfDescriptionCredential: selfDescriptionCredential,
				complianceCredential: complianceCredential
			}

			// Calculate Veracity
			const { veracity, certificateDetails } = await Utils.calcVeracity(verifiableCredential, resolver)
			console.log('🔒 veracity calculated')

			// Calculate Transparency
			const { credentialSubject } = serviceOffering
			const transparency: number = await Utils.calcTransparency(credentialSubject)
			console.log('🔒 transparency calculated')

			// Calculate TrustIndex
			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			console.log('🔒 trustIndex calculated')

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
			console.error(`❌ ${AppMessages.SD_SIGN_FAILED} :- error \n`, error)
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

			console.log('fetching participant json...')
			const participantJson = await Utils.fetchParticipantJson(participantUrl)

			//check if VC not null or in other form
			if (!participantJson?.selfDescriptionCredential?.verifiableCredential) {
				console.log(`❌ No Verifiable Credential Found`)
				res.status(400).json({
					error: `VC not found`,
					message: AppMessages.PARTICIPANT_VC_FOUND_FAILED
				})
				return
			} else if (!Array.isArray(participantJson.selfDescriptionCredential.verifiableCredential)) {
				console.log(`❌ Verifiable Credential isn't array`)
				res.status(400).json({
					error: `VC not valid`,
					message: AppMessages.PARTICIPANT_VC_INVALID
				})
				return
			}

			// check if complianceCred not null
			if (!participantJson?.complianceCredential || !participantJson?.complianceCredential?.proof) {
				console.log(`❌ Compliance Credential Not Found`)
				res.status(400).json({
					error: `Compliance Credential not found`,
					message: AppMessages.COMPLIANCE_CRED_FOUND_FAILED
				})
				return
			}

			// check VC are of valid type
			const { verifiableCredential, type } = participantJson.selfDescriptionCredential
			if (!Array.isArray(type) || !(type.includes('VerifiableCredential') || type.includes('VerifiablePresentation'))) {
				console.log(`❌ Credential Type not supported`)
				res.status(400).json({
					error: `Credential Type not supported`,
					message: `Credential Type not supported`
				})
				return
			}
			//fetching VC with subject type gx:LegalParticipant
			const VC = verifiableCredential?.find((vc: VerifiableCredentialDto) => vc?.credentialSubject.type === 'gx:LegalParticipant')

			if (!VC) {
				console.log(`❌ Verifiable Credential doesn't have type 'gx:LegalParticipant'`)
				res.status(400).json({
					error: `VC with type 'gx:LegalParticipant' not found!!`,
					message: "VC with type 'gx:LegalParticipant' not found!!"
				})
				return
			}
			for (const policy of policies) {
				console.log(`Executing ${policy} check ...`)
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
								console.log(`❌ Integrity Failed`)
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
				console.error(`❌ Invalid participant self description url format`)
				throw new Error('Invalid participant self description url format')
			}
			if (!Utils.IsValidURL(serviceOfferingSD)) {
				console.error(`❌ Invalid service offering self description url format`)
				throw new Error('Invalid service offering self description url format')
			}

			// get the json document of participant self description
			const {
				selfDescriptionCredential: { verifiableCredential }
			} = (await axios.get(participantSD)).data
			const { veracity, certificateDetails } = await Utils.calcVeracity(verifiableCredential, resolver)
			console.log('veracity :-', veracity)

			// get the json document of service offering
			const {
				selfDescriptionCredential: { credentialSubject }
			} = (await axios.get(serviceOfferingSD)).data
			const transparency: number = await Utils.calcTransparency(credentialSubject)
			console.log('transparency :-', transparency)

			const trustIndex: number = Utils.calcTrustIndex(veracity, transparency)
			console.log('trustIndex :-', trustIndex)

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
			console.error(`❌ ${AppMessages.TRUST_INDEX_CALC_FAILED} : ${error}`)
			res.status(500).json({
				error: (error as Error).message,
				message: AppMessages.TRUST_INDEX_CALC_FAILED
			})
		}
	}
}

export default new SignerToolController()
