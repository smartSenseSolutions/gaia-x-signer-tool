;`/ pragma: allowlist-secret /`

import STATUS_CODES from 'http-status-codes'
import supertest from 'supertest'

import app from '../../../app'
import Utils from '../../../utils/common-functions'
import { AppMessages, ROUTES } from '../../../utils/constants'

import { participantJson, holderDdoJson, ServiceOfferingParticipantJson, serviceOfferingTestJSON } from '../../../assets'
import axios from 'axios'
const exampleCertificate = process.env.SSL_CERTIFICATE as string

//mocking - Utils

jest.mock('../../../utils/common-functions', () => {
	return {
		...jest.requireActual('../../../utils/common-functions'),
		verification: () => {
			return true
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		fetchParticipantJson: async () => {
			const mockPJ = JSON.parse(JSON.stringify(participantJson))
			return { ...mockPJ }
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		callServiceOfferingCompliance: async () => {
			const { validSOComplianceResponse } = serviceOfferingTestJSON
			const mockPJ = JSON.parse(JSON.stringify(validSOComplianceResponse))
			return { ...mockPJ }
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		getDDOfromDID: (did: string, resolver: any) => {
			if (did == 'did:web:greenworld.proofsense.in') return { didDocument: holderDdoJson }
		},
		generatePublicJWK: () => {
			return {}
		},
		getPublicKeys: () => {
			const { verificationMethod } = holderDdoJson
			const { publicKeyJwk } = verificationMethod[0]
			return publicKeyJwk
		},
		addProof: () => {
			const { serviceOfferingProof } = serviceOfferingTestJSON
			return serviceOfferingProof
		},
		removeDuplicates: () => {
			const { uniqueVC } = serviceOfferingTestJSON
			return uniqueVC
		},
		createVP: () => {
			const { serviceOfferingVP } = serviceOfferingTestJSON
			return serviceOfferingVP
		},
		calcVeracity: () => {
			const { veracityResponse } = serviceOfferingTestJSON
			return veracityResponse
		},
		calcTransparency: () => {
			return 1
		},
		calcTrustIndex: () => {
			return 0.625
		},
		generateDID: () => {
			return {}
		}
	}
})

describe('/v1/gaia-x/verify', () => {
	const validBody = {
		policies: ['integrityCheck', 'holderSignature', 'complianceSignature', 'complianceCheck'],
		url: 'https://greenworld.proofsense.in/.well-known/participant.json'
	}
	describe('Failing Cases', () => {
		describe('validation error', () => {
			it('empty body', async () => {
				const error = {
					error: "Invalid value of param 'policies'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('url is invalid', async () => {
				const body = {
					policies: ['integrityCheck', 'holderSignature', 'complianceSignature', 'complianceCheck'],
					url: ''
				}
				const error = {
					error: "Invalid value of param 'url'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
				body.url = 'abc'

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('policies is invalid', async () => {
				const body: {
					policies: string[]
					url: string
				} = {
					policies: [],
					url: 'https://greenworld.proofsense.in/.well-known/participant.json'
				}
				const error = {
					error: "Invalid value of param 'policies'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
				body.policies = ['invalid policies']
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
		})
		describe('general failing case', () => {
			it('fail to fetch participant json from url', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					throw new Error('Fail to fetch')
				})
				const body = validBody
				const error = {
					error: 'Fail to fetch',
					message: AppMessages.SIG_VERIFY_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('fetched participantJson in invalid form', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					return {}
				})
				const body = validBody
				const error = {
					error: `VC not found`,
					message: AppMessages.PARTICIPANT_VC_FOUND_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('vc invalid', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					return { ...participantJson, selfDescriptionCredential: { ...participantJson.selfDescriptionCredential, verifiableCredential: 'verifiable credential' } }
				})
				const body = validBody
				const error = {
					error: `VC not valid`,
					message: AppMessages.PARTICIPANT_VC_INVALID
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})

				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					//creating deep copy
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					delete mockParticipantJson.selfDescriptionCredential.verifiableCredential
					return { ...mockParticipantJson }
				})
				error.error = 'VC not found'
				error.message = AppMessages.PARTICIPANT_VC_FOUND_FAILED
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})

				jest.resetAllMocks()
			})
			it('compliance credential invalid', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					delete mockParticipantJson.complianceCredential
					return { ...mockParticipantJson }
				})
				const body = validBody
				const error = {
					error: `Compliance Credential not found`,
					message: AppMessages.COMPLIANCE_CRED_FOUND_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})

				jest.resetAllMocks()

				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					delete mockParticipantJson.complianceCredential.proof

					return { ...mockParticipantJson }
				})

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('type invalid in selfDescription', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					delete mockParticipantJson.selfDescriptionCredential.type
					return { ...mockParticipantJson }
				})
				const body = validBody
				const error = {
					error: `Credential Type not supported`,
					message: `Credential Type not supported`
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					mockParticipantJson.selfDescriptionCredential.type = ['randomProof']
					return { ...mockParticipantJson }
				})
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('vc found without gx:LegalParticipant', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					mockParticipantJson.selfDescriptionCredential.verifiableCredential = [
						{
							'@context': [
								'https://www.w3.org/2018/credentials/v1',
								'https://w3id.org/security/suites/jws-2020/v1',
								'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
							],
							type: ['VerifiableCredential'],
							issuanceDate: '2023-07-28T11:13:56.533Z',
							credentialSubject: {
								'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
								type: 'gx:GaiaXTermsAndConditions',
								'gx:termsAndConditions':
									'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
								id: 'https://greenworld.proofsense.in/.well-known/participant.json#2'
							},
							issuer: 'did:web:greenworld.proofsense.in',
							id: 'did:web:greenworld.proofsense.in',
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-07-31T11:47:31.186Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:greenworld.proofsense.in',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..FhIctfvYnWlNaUVCduHe9sPSOLZUyfwuz6EbMbwtN1DYhRD0P9fCHJfKbF5TwWI9i2S0rF2LlM3lXK00RxNJN2qFTpeydR01kxDzYZrlEUZO7xXyy8XdYxwZaEwXRfSrbNkKI1AcsHLoANofo460udlIAEj9hAqHvM4tS05ZMIx8jI1a3LBI6K879zENeoSOyn713lIU5hMSU4jhX06iT152PUqAiyrMbJFHKp9KI2JlZs0T90vB5JYYo9V_Lqe3n3Ad3sn5Yi7bBZJipHEsSavHYRQqEbvANdWFWDuU_7aClNbWeQrCPhbMdS3x5RVmBzRVYin-YXQVyBcp5FXhKQ'
							}
						}
					]
					return { ...mockParticipantJson }
				})
				const body = validBody
				const error = {
					error: `VC with type 'gx:LegalParticipant' or  'gx:ServiceOffering' not found!!`,
					message: "VC with type 'gx:LegalParticipant'  or 'gx:ServiceOffering' not found!!"
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.BAD_REQUEST)
						expect(response.body).toEqual(error)
					})
			})
		})
		describe('integrityCheck', () => {
			it('integrity fails', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
					mockParticipantJson.selfDescriptionCredential.verifiableCredential[1].id = 'did:web:whiteworld.proofsense.in'
					return { ...mockParticipantJson }
				})

				const body = validBody
				body.policies = ['integrityCheck']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						integrityCheck: false,
						valid: false
					}
				}

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('holderSignature', () => {
			it('error from verification', async () => {
				jest.spyOn(Utils, 'verification').mockImplementation(async () => {
					throw new Error('Verification failed due to xyz reason')
				})
				const body = validBody
				body.policies = ['holderSignature']

				const error = {
					message: AppMessages.SIG_VERIFY_FAILED,
					error: 'Verification failed due to xyz reason'
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('verification returns false', async () => {
				jest.spyOn(Utils, 'verification').mockImplementation(async () => {
					return false
				})
				const body = validBody
				body.policies = ['holderSignature']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						holderSignature: false,
						valid: false
					}
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('complianceSignature', () => {
			it('error from verification', async () => {
				jest.spyOn(Utils, 'verification').mockImplementation(async () => {
					throw new Error('Verification failed due to xyz reason')
				})
				const body = validBody
				body.policies = ['complianceSignature']

				const error = {
					message: AppMessages.SIG_VERIFY_FAILED,
					error: 'Verification failed due to xyz reason'
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('verification returns false', async () => {
				jest.spyOn(Utils, 'verification').mockImplementation(async () => {
					return false
				})
				const body = validBody
				body.policies = ['complianceSignature']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						complianceSignature: false,
						valid: false
					}
				}

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
	})
	describe('success case', () => {
		describe('integrityCheck', () => {
			it('integrity successful', async () => {
				const body = validBody
				body.policies = ['integrityCheck']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						integrityCheck: true,
						valid: true
					}
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('holderSignature', () => {
			it('holder sig validated', async () => {
				const body = validBody
				body.policies = ['holderSignature']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						holderSignature: true,
						valid: true
					}
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('complianceSignature', () => {
			it('compliance signature verified', async () => {
				const body = validBody
				body.policies = ['complianceSignature']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						complianceSignature: true,
						valid: true
					}
				}

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('check all', () => {
			it('compliance signature verified', async () => {
				const body = validBody
				body.policies = ['holderSignature', 'integrityCheck', 'complianceSignature']

				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						holderSignature: true,
						integrityCheck: true,
						complianceSignature: true,
						valid: true
					}
				}

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
		describe('serviceOffering testcase', () => {
			it('testing verification api for serviceoffering', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					const mockParticipantJson = JSON.parse(JSON.stringify(ServiceOfferingParticipantJson))
					return { ...mockParticipantJson }
				})
				const body = validBody
				body.policies = ['holderSignature', 'integrityCheck', 'complianceSignature', 'complianceCheck']
				const message = {
					message: AppMessages.SIG_VERIFY_SUCCESS,
					data: {
						holderSignature: true,
						integrityCheck: true,
						complianceSignature: true,
						complianceCheck: true,
						valid: true
					}
				}

				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.VERIFY}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.OK)
						expect(response.body).toEqual(message)
					})
				jest.resetAllMocks()
			})
		})
	})
})

describe('/v1/create-web-did', () => {
	const validBody = {
		domain: 'dev.smartproof.in',
		tenant: 'smart',
		services: [
			{
				type: 'CredentialRegistry',
				serviceEndpoint: 'https://ssi.eecc.de/api/registry/vcs'
			}
		],
		x5u: 'https://dev.smartproof.in/.well-known/x509CertificateChain.pem'
	}
	describe('failing case', () => {
		it('validation error', async () => {
			const error = {
				error: "Invalid value of param 'domain'",
				message: 'Validation Error, please provide valid req.body'
			}
			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
					expect(response.body).toEqual(error)
				})
			const body = {
				domain: 'dev.smartproof.in',
				x5u: 'abc'
			}
			error.error = "Invalid value of param 'x5u'"
			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
					expect(response.body).toEqual(error)
				})
			const body2 = {
				domain: 'dev.smartproof.in',
				tenant: 'smart',
				services: [
					{
						type: '',
						serviceEndpoint: 'https://ssi.eecc.de/api/registry/vcs'
					}
				]
			}
			error.error = "Invalid value of param 'services[0].type'"

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body2)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
					expect(response.body).toEqual(error)
				})
			const body3 = {
				domain: 'dev.smartproof.in',
				tenant: 'smart',
				services: [
					{
						type: 'CredentialRegistry',
						serviceEndpoint: 'abc2'
					}
				]
			}
			error.error = "Invalid value of param 'services[0].serviceEndpoint'"

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body3)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
					expect(response.body).toEqual(error)
				})
			const body4 = {
				domain: 'dev.smartproof.in',
				services: 'abc'
			}
			error.error = "Invalid value of param 'services'"
			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body4)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
					expect(response.body).toEqual(error)
				})
		})
		it('Axios get certificate fails', async () => {
			jest.spyOn(axios, 'get').mockResolvedValue(undefined)
			const body = validBody
			const error = {
				error: "Cannot read properties of undefined (reading 'data')",
				message: 'DID creation failed.'
			}

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
					expect(response.body).toEqual(error)
				})

			jest.resetAllMocks()
		})
		it('generatePublicJWK returns undefined', async () => {
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'generatePublicJWK').mockResolvedValue(undefined)
			const body = validBody
			const error = {
				error: 'fail to create publicKeyJWK',
				message: 'DID creation failed.'
			}

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
					expect(response.body).toEqual(error)
				})
		})
		it('generateDID returns undefined', async () => {
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'generatePublicJWK').mockResolvedValue({})
			jest.spyOn(Utils, 'generateDID').mockResolvedValue(undefined)
			const body = validBody
			const error = {
				error: 'fail to create did',
				message: 'DID creation failed.'
			}

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
					expect(response.body).toEqual(error)
				})
		})
	})
	describe('success case', () => {
		it('successful case', async () => {
			const did = {
				'@context': ['https://www.w3.org/ns/did/v1'],
				id: 'did:web:dev.smartproof.in',
				verificationMethod: [
					{
						'@context': 'https://w3c-ccg.github.io/lds-jws2020/contexts/v1/',
						id: 'did:web:dev.smartproof.in',
						type: 'JsonWebKey2020',
						controller: 'did:web:dev.smartproof.in',
						publicKeyJwk: {
							crv: 'Ed25519',
							kty: 'OKP',
							alg: 'PS256',
							x5u: 'https://dev.smartproof.in/.well-known/x509CertificateChain.pem',
							x: 'yM1FmySIISrMqruOIjLwKpbwsaUbRLEEH6r1gDWmW4s' /*pragma: allowlist secret*/
						}
					}
				],
				assertionMethod: ['did:web:dev.smartproof.in#JWK2020-RSA']
			}
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'generateDID').mockResolvedValue({ ...did })

			const body = validBody
			const responseData = {
				data: {
					did: {
						...did
					}
				},
				message: 'DID created successfully.'
			}

			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.CREATE_WEB_DID}`)
				.send(body)
				.expect((response) => {
					expect(response.status).toBe(STATUS_CODES.OK)
					expect(response.body).toEqual(responseData)
				})
		})
	})
})

describe('/gaia-x/service-offering', () => {
	describe('Negative scenarios', () => {
		describe('Validation checks', () => {
			it('Empty request body', async () => {
				const error = {
					error: "Invalid value of param 'privateKey'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('Invalid issuer value', async () => {
				const { invalidIssuerJSON } = serviceOfferingTestJSON
				const error = {
					error: "Invalid value of param 'issuer'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(invalidIssuerJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('Invalid verificationMethod value', async () => {
				const { invalidMerificationMethodJSON } = serviceOfferingTestJSON
				const error = {
					error: "Invalid value of param 'verificationMethod'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(invalidMerificationMethodJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('Invalid serviceOffering object', async () => {
				const { invalidSO } = serviceOfferingTestJSON
				const error = {
					error: "Invalid value of param 'vcs.serviceOffering'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(invalidSO)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
		})
		describe('Unresolvable links/data', () => {
			it('fail to resolve legal participant url', async () => {
				jest.spyOn(Utils, 'fetchParticipantJson').mockImplementation(async () => {
					throw new Error('Fail to fetch')
				})
				const { validReqJSON: validJSON } = serviceOfferingTestJSON
				const error = {
					error: 'Fail to fetch',
					message: AppMessages.SD_SIGN_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(validJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('fail to call service offering compliance service', async () => {
				jest.spyOn(Utils, 'callServiceOfferingCompliance').mockImplementation(async () => {
					throw new Error('error while calling compliance service')
				})
				jest.spyOn(Utils, 'getDDOfromDID').mockImplementation(async () => {
					return { didDocument: holderDdoJson }
				})
				const { validReqJSON: validJSON } = serviceOfferingTestJSON
				const error = {
					error: 'error while calling compliance service',
					message: AppMessages.SD_SIGN_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(validJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('fail to calculate veracity: LP proof verification method and did verification method id not matched', async () => {
				jest.spyOn(Utils, 'callServiceOfferingCompliance').mockImplementation(async () => {
					const { validSOComplianceResponse } = serviceOfferingTestJSON
					return validSOComplianceResponse
				})
				jest.spyOn(Utils, 'getDDOfromDID').mockImplementation(async () => {
					return { didDocument: holderDdoJson }
				})
				jest.spyOn(Utils, 'calcVeracity').mockImplementation(async () => {
					throw new Error('Participant proof verification method and did verification method id not matched')
				})
				const { validReqJSON: validJSON } = serviceOfferingTestJSON
				const error = {
					error: 'Participant proof verification method and did verification method id not matched',
					message: AppMessages.SD_SIGN_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(validJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('fail to calculate veracity: Verifiable credential array not found in participant self description', async () => {
				jest.spyOn(Utils, 'callServiceOfferingCompliance').mockImplementation(async () => {
					const { validSOComplianceResponse } = serviceOfferingTestJSON
					return validSOComplianceResponse
				})
				jest.spyOn(Utils, 'getDDOfromDID').mockImplementation(async () => {
					return { didDocument: holderDdoJson }
				})
				jest.spyOn(Utils, 'calcVeracity').mockImplementation(async () => {
					throw new Error('Verifiable credential array not found in participant self description')
				})
				const { validReqJSON: validJSON } = serviceOfferingTestJSON
				const error = {
					error: 'Verifiable credential array not found in participant self description',
					message: AppMessages.SD_SIGN_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(validJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
			it('fail to calculate transparency', async () => {
				jest.spyOn(Utils, 'callServiceOfferingCompliance').mockImplementation(async () => {
					const { validSOComplianceResponse } = serviceOfferingTestJSON
					return validSOComplianceResponse
				})
				jest.spyOn(Utils, 'getDDOfromDID').mockImplementation(async () => {
					return { didDocument: holderDdoJson }
				})
				jest.spyOn(Utils, 'calcTransparency').mockImplementation(async () => {
					throw new Error('Error while calculating transparency')
				})
				const { validReqJSON: validJSON } = serviceOfferingTestJSON
				const error = {
					error: 'Error while calculating transparency',
					message: AppMessages.SD_SIGN_FAILED
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(validJSON)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.INTERNAL_SERVER_ERROR)
						expect(response.body).toEqual(error)
					})
				jest.resetAllMocks()
			})
		})
	})
	describe('Positive scenarios', () => {
		it('fail to calculate transparency', async () => {
			jest.spyOn(Utils, 'callServiceOfferingCompliance').mockImplementation(async () => {
				const { validSOComplianceResponse } = serviceOfferingTestJSON
				return validSOComplianceResponse
			})
			jest.spyOn(Utils, 'getDDOfromDID').mockImplementation(async () => {
				return { didDocument: holderDdoJson }
			})
			const { validReqJSON: validJSON, successResponse } = serviceOfferingTestJSON
			await supertest(app)
				.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
				.send(validJSON)
				.expect((response) => {
					expect(response.status).toEqual(STATUS_CODES.OK)
					expect(response.body).toEqual(successResponse)
				})
			jest.resetAllMocks()
		})
	})
})
