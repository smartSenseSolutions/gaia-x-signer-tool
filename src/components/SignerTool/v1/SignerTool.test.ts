import STATUS_CODES from 'http-status-codes'
import supertest from 'supertest'

import app from '../../../app'
import Utils from '../../../utils/common-functions'
import { AppMessages, ROUTES } from '../../../utils/constants'

const participantJson = {
	selfDescriptionCredential: {
		'@context': 'https://www.w3.org/2018/credentials/v1',
		type: ['VerifiablePresentation'],
		verifiableCredential: [
			{
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:greenworld.proofsense.in',
				issuer: 'did:web:greenworld.proofsense.in',
				issuanceDate: '2023-07-28T11:13:53.734Z',
				credentialSubject: {
					id: 'https://greenworld.proofsense.in/.well-known/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalName': 'Green World',
					'gx:legalRegistrationNumber': {
						id: 'https://greenworld.proofsense.in/.well-known/participant.json#1'
					},
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					}
				},
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-07-31T11:47:29.107Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:greenworld.proofsense.in',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..JGOf4c0q0LkWbRvKZkpCdjGKvdWMrBHMVwXQ2HIxrXKJ8wHRXGvPonvVhbQHcm6WLsYeuDpS3JiDCVnBJxYMYiGI1iE7UbzS7zidhOJxdjqhN0vhezRTL0rgb326Em6hAF5LLVBKhW1YvhnQwoFaJ-iGVYVjQ1zxe1ohVDfDOfqI9wAEFdorQ7_nr4ZD-RmvnfvRykmXxr5VGjyFyTVZ8ZSeeDVYizscNapAkdo2iOLfLvcwxYZhC_mzASuTWHKMm1avSxQNVF3SB7ZcNoMIe3PqE6x5lKZtReiwoEUdI3_WoarQn8NmRC2GB0Hz8lLj1XcZbI9gBEacQ6uzbk-MZQ'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: 'VerifiableCredential',
				id: 'https://greenworld.proofsense.in/.well-known/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-07-31T11:47:23.611Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://greenworld.proofsense.in/.well-known/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-07-31T11:47:23.611Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-07-31T11:47:24.471Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..V8mpPyGpzHsoHLA6GcCEhJYrTscV1EO-b9XbO5wf22eqM5tj6GCgNqaN8MQmA7MZWiq5NAf9KieHEPtpjJMsOJUKvp7d66iO6ylXzLMwEyte1fMOE_tGJdL3PPrQbsr3j-q3-aGv9wdp7jTJRksMliU2P9-JUpCmqr8JApmnv0Ndxg-hFl6VzrUxJdOEaHuuqo71LBfULHzsMNT0RALjRzN9FbUTO0sTNv5HzHqL1uMPuv1GzIICRG1PyN8VZWI6VXCI0aNcd7AP9D3rhmazmbLfxHED1blJ5eAf5fdJ61nDVpxbS09Pqj9zRSSlZJ0DEaq4Fn_M4g_1RbHrW6Q8iw'
				}
			},
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
	},
	complianceCredential: {
		'@context': [
			'https://www.w3.org/2018/credentials/v1',
			'https://w3id.org/security/suites/jws-2020/v1',
			'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
		],
		type: ['VerifiableCredential'],
		id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/18796976-180e-4093-ad4f-7109df1c843a',
		issuer: 'did:web:compliance.lab.gaia-x.eu:development',
		issuanceDate: '2023-07-31T11:47:40.929Z',
		expirationDate: '2023-10-29T11:47:40.929Z',
		credentialSubject: [
			{
				type: 'gx:compliance',
				id: 'https://greenworld.proofsense.in/.well-known/participant.json#0',
				integrity: 'sha256-e90774858dc28e973b67d4a9f556e74b34304f748e6c31b6ea6eaa65b02bf4d4',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://greenworld.proofsense.in/.well-known/participant.json#1',
				integrity: 'sha256-18f7c8532b1f1dcb3ed55447ff3a52e967cb37c7ccc3b108e033804954fc25f1',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://greenworld.proofsense.in/.well-known/participant.json#2',
				integrity: 'sha256-76abc0e83542bda3d76f5306f5635a22a5c21df440b62bbafa2eb3453599dfe4',
				version: '22.10'
			}
		],
		proof: {
			type: 'JsonWebSignature2020',
			created: '2023-07-31T11:47:41.567Z',
			proofPurpose: 'assertionMethod',
			jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..gCYEQBJ8DQlwoOVs-7kQ-KjQPkJxw8ns_GXKaRD-1ucnFjYb2PrDk60Mw4E3Qw5igog5oIpKmx6pHdeSnY-5Rs7NEgDVH4mhEq3KELeSn0hSz9uql2dLBMelthqAVPigeC9JhEO2j0a2UA6OFw6m5M7BCYA3IZANOf9TWqcuXRtQNBPTOK7vVIRbZx8VH8QTMGYxgniq3SqR6NTkFzFn8CwKL_iCW76tw4brRkWR0YtB_5BqNNUqCXAsdCO0SjPFCSJwWOPZgJbdRvxNjtZNJS9frAeMJHM2yit_fOIAqOW1GE3XP5ilqMOmdjyuUYd3X9V0ZhoUJotUVnepSnrPtg',
			verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development'
		}
	}
}

const holderDdoJson = {
	'@context': ['https://www.w3.org/ns/did/v1'],
	id: 'did:web:greenworld.proofsense.in',
	//pragma: allowlist secret
	verificationMethod: [
		{
			'@context': 'https://w3c-ccg.github.io/lds-jws2020/contexts/v1/',
			id: 'did:web:greenworld.proofsense.in',
			type: 'JsonWebKey2020',
			controller: 'did:web:greenworld.proofsense.in',
			//removed n to pass Detect secret
			publicKeyJwk: {
				kty: 'RSA',
				e: 'AQAB',
				alg: 'PS256',
				x5u: 'https://greenworld.proofsense.in/.well-known/x509CertificateChain.pem'
			}
		}
	],
	assertionMethod: ['did:web:greenworld.proofsense.in#JWK2020-RSA']
}

const validBody = {
	policies: ['integrityCheck', 'holderSignature', 'complianceSignature', 'complianceCheck'],
	url: 'https://greenworld.proofsense.in/.well-known/participant.json'
}

//mocking - Utils
jest.mock('../../../utils/common-functions', () => {
	return {
		...jest.requireActual('../../../utils/common-functions'),
		verification: () => {
			return true
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		fetchParticipantJson: async (url: string) => {
			const mockPJ = JSON.parse(JSON.stringify(participantJson))
			return { ...mockPJ }
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		getDDOfromDID: (did: string, resolver: any) => {
			if (did == 'did:web:greenworld.proofsense.in') return { didDocument: holderDdoJson }
		}
	}
})

describe('/verifyLegalParticipant', () => {
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
					error: "VC with type 'gx:LegalParticipant' not found!!",
					message: "VC with type 'gx:LegalParticipant' not found!!"
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
				const body = {
					legalParticipantURL: 'verifiableCredential',
					verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
					privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
					vcs: {
						serviceOffering: {
							type: 'VerifiableCredential',
							id: 'did:web:casio34.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-07T07:42:56.073Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
								},
								'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/Storage service_policy.json',
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
								'gx:dependsOn': 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview',
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/Storage service.json'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1']
						}
					}
				}
				const error = {
					error: "Invalid value of param 'issuer'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('Invalid verificationMethod value', async () => {
				const body = {
					legalParticipantURL: 'verifiableCredential',
					issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
					privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
					vcs: {
						serviceOffering: {
							type: 'VerifiableCredential',
							id: 'did:web:casio34.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-07T07:42:56.073Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
								},
								'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/Storage service_policy.json',
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
								'gx:dependsOn': 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview',
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/Storage service.json'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1']
						}
					}
				}
				const error = {
					error: "Invalid value of param 'verificationMethod'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
			it('Invalid serviceOffering object', async () => {
				const body = {
					legalParticipantURL: 'verifiableCredential',
					issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
					verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
					privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
				}
				const error = {
					error: "Invalid value of param 'vcs.serviceOffering'",
					message: AppMessages.VALIDATION_ERROR
				}
				await supertest(app)
					.post(`${ROUTES.V1}${ROUTES.V1_APIS.SERVICE_OFFERING}`)
					.send(body)
					.expect((response) => {
						expect(response.status).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY)
						expect(response.body).toEqual(error)
					})
			})
		})
	})

	describe('Positive scenarios', () => {})
})
