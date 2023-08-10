;`/ pragma: allowlist-secret /`

export const participantJson = {
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

export const holderDdoJson = {
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

export const ServiceOfferingParticipantJson = {
	selfDescriptionCredential: {
		'@context': 'https://www.w3.org/2018/credentials/v1',
		type: ['VerifiablePresentation'],
		verifiableCredential: [
			{
				credentialSubject: {
					'gx:legalName': 'Green World',
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalRegistrationNumber': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1'
					}
				},
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T14:50:13.675362556Z',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T09:20:22.514Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..CqSFSFXPXis6rf8sLz1K2uDhJ0_27BOlZS3O4SKjiPkXcCfZ1de9zqBoflEOro8zzxFfs67FaLayT2rbrKrGNaYJlFdxLcrJOTjZSfglzlQ_ycwTrHv1ttclO7n-ltaXHPI2mPtm29pfI7akIr9aRjo7mb76Qq0caQJlM7aaSCmVD1uKEOO3m9RddEDCLCppZtcWwP5j5NISI37YbU_7s8I7tPvmP-FvO3DoavPoXjulQRFF0HWluf3XGk5di13SURGmv9ScEkXG-zy8BboQPBl7bJUTfeQx9RXIeHyGsL_I8Mv5K4qGIO9QxRbvljV6EVec0qznLlwH9rfte9Ko8A'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: 'VerifiableCredential',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-08-07T09:20:18.648Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-08-07T09:20:18.647Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T09:20:21.626Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..KLF44CckOeQwOFymPnjbwG0sqwFC4KOxk_7GSh0QeRFWNtN6Z2tMGdgK03tzs20W0NKba2uwueEyNsvJfdy_uGgp-JtxtWKml5vXDFac1PrIsjpZht6UicYiByph1y4-i_XlOYjkj-A1WKo5HFw1tz07hhj-amhgxVwi55VnJdnMe0CBLsgyrmdlYVbEdiril6b4qkaya6MGnxRl1nkzlwGql2Ob9rFSB-bh0ptOufA4ITOyw2t4h13dM6IlQuXknDC-9ktL90L3RBmVQsFOrBzDc7zpchqpSpZ1JMzOMPex5PhtVvravOiVkwJooyGWEjFBpioMyXbmDCPb5QLRdw'
				}
			},
			{
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				credentialSubject: {
					'@Context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					'gx:termsAndConditions':
						'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
					type: 'gx:GaiaXTermsAndConditions'
				},
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T14:50:13.675362556Z',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				type: ['VerifiableCredential'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T09:20:23.112Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TP7xdQ12Mgco417naAMoIhT5yCyBC8Lsd0g6JhAMRW0_I3KE1slR0dg4sNyLTg-3k6rTDMDorhHxUlT_UBbzi3pRRkzRna58XNWKhCn0X49R1sipd3HyFNLXd-FXi5QsjLPCqXnRVvsJbNF8Ad8Wjv-crfQimPvjElVGNd-HS_ocfq3cIu62YO5wy2peXEjSYrUpsRwnJjgsvHEAvsXatJeOmM8Who0J6ubaqBLPTU4P4DX8e5t2d9aymeO-qYUYBPgkBIwZbdJ8kriiZK4dOK45na_wc_3HDwCWlDbjhUMC5nCEPorGNKGWEDXmWE5UFe6KX9UYfrVHy_lBOdAQYA'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T10:09:50.583Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a' /* pragma: allowlist-secret */
					},
					'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/Database_service_policy.json',
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
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/Database_service.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:09:51.463Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Hptu8yf_PgqcdVZUB1Dnfjdhdo4SzJGH3Dj0zeW-np6QkUYw_vGHUvKuYaKJG1yPHV-SzVtxikPyYGtL0lGSguIWZJafIJqjg4BD2AGPLY-ZPwBPd_tB9ja2umORweBOCFTpEYwsPwKX9JCpkJY5QWyA-7lVj_Qc1J48bRFg9SoBQ-5KgFqjzN-rnn4FE6SBeeWKtnCc_Qx9jZGDo0ohR3e89maVQiCxfJotwAjMG7EbzkBv5xfkGF693JT7dmxVwOng8lmkEvHkvNaaq-ruSAzb4DCDQuxM5iMKwtCd17p8UjpmHlVa68R_bpOLsRjlGfcU7PMpVLszx5VQgls4Yg'
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
		id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/c024be5a-6a16-4f5f-994d-0b4cc0c349e9',
		issuer: 'did:web:compliance.lab.gaia-x.eu:development',
		issuanceDate: '2023-08-07T10:10:02.075Z',
		expirationDate: '2023-11-05T10:10:02.075Z',
		credentialSubject: [
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
				integrity: 'sha256-1df89fcce569d60f0d9a60b714c14c75d6155cbba69c237bc0b6ee354a1c6e27',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				integrity: 'sha256-0ce342223262043292d2aa59352746f60272bff848f28f0e449617c310acd8bf',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
				integrity: 'sha256-688b3f169025c45adbf8cec8f25fe9d67b38407d41a7189cc917c4cfbb7dec93',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/Database_service.json',
				integrity: 'sha256-9b7d7940005e5be2ccbaf817e0a2d7dcbf23ad653e37dd957a8aa75cc67cea29',
				version: '22.10'
			}
		],
		proof: {
			type: 'JsonWebSignature2020',
			created: '2023-08-07T10:10:02.726Z',
			proofPurpose: 'assertionMethod',
			jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..F1hfx9D_fiIWEorDON30VzGIRqrIXzLCnEsDFXFY4o9Ll7z9F980BHkXtIxza4FGoU83YlzrOPDu9k06qw9d2Vq99bW2l16E3wlGdRSIx2wdk_vvRpXUk4-Ed7y_2X5Hkq2wbailc08A1mzK0-QjJ6MrM2VyRFyTf6C-AHv6ea1Id9Z2rIszDAUgOujAFFo1xkoQflxntgUElQ7h-BHeo6e6N1cvID38-HY_fgRc_FoaIE8mQWbTUJytPb4IjFdLZ8vC8soH2kgZxt77OsmfZd9BhCoN8IIL3Un5MysfcG-aAaj05doNYfxb0uLK016Sh3DXyGitOScfa4kMVvzPHw',
			verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
		}
	}
}

export const holderDdoJson2 = {
	didDocument: {
		'@context': ['https://www.w3.org/ns/did/v1'],
		id: 'did:web:greenworld.proofsense.in',
		verificationMethod: [
			{
				'@context': 'https://w3c-ccg.github.io/lds-jws2020/contexts/v1/',
				id: 'did:web:greenworld.proofsense.in',
				type: 'JsonWebKey2020',
				controller: 'did:web:greenworld.proofsense.in',
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
}

export const serviceOfferingTestJSON = {
	invalidIssuerJSON: {
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
	},
	invalidMerificationMethodJSON: {
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
	},
	invalidSO: {
		issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	validReqJSON: {
		issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
		privateKey:
			'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ3I4aFpRSGM4emZaN3MKTTlJRWt6eld2SFlLY0hsQUwraFhISXlINEtSL1BVTzJrUlg5RFlGL0J4RnhreUViWUJaR3NObTY5NXc0bXJ5RQpFUUtiVytldGhKRDE4bjhrNVpnbERIV29zZmpLMDVVTGxSK3dWYzEwWXB6eUdlSmlsWHBCWkhuc0tnQ3JpUlcvClJMQXMzVU1EVWpMQkJmUVBrOTlWSlhJRTlTeEJpb2FVYTRDL0d6YXhVdzQyM3hiMHF4Q1VIWHJ4VktQS2sra0QKdFFESmNFK3k5T3dFZjQ2ZjNuRFVYdk84VTZKTUp6dUNJTWxsWDdHVkRLNWdGdlE4TU9Pa3hPdnBpUXV1ZlB1ZwpOSXMzSnJNQmF6cDVvWkVYK3BESFRDOTZ6RHVCVko4MVU0OE9KWVl4aWQzN05lTXJKTk9jMjZlUWlpbm44SjZNCmZLOENNU3hWQWdNQkFBRUNnZ0VBSWR0VzBtcTBPRzdWWXF3bmYvZ2dCQ1p5MWNaazBhTTlUQjNXZkJEYlF5U2sKbHlmRlhTRVNMUm1Pc1Q3bngzU3BuanpIZXAyeitKOWJYR1BmRUFsT09xZitSVGQ5R3A1TTBZcTlCajBaQUpNZAo1M3h6RTIwcHVlK0srTTdvK1VGMm83YXRuVGQrRDBpOGEvK1I4eHVVVE95Y0NzN3B5a0Z6T2RoWU5hcXpEcXB1CkJ4WWFiSnRDMEpSN21OMHk2ZWltNitDeEtleUloc2FRS05Cd21jMklHclZMN0o3TFgwbVFINXF4MWJBYjY0T0gKU3gxb2VxOVdnL1dRN3ZVTG0vaTEwc1REMmxMWmNqVGdYK1JsVjkrWm1JTXErNElwSjZsUUlTaU1jeDIxZkVSawpzdzdCeC9WZ0pKbnlwUlB2S0wwWDhIMER0aG94WXRqSGZUQXZCYmZDc1FLQmdRRE44NXRlSU1QRm1VZ01Qd1M0Cm54dzcvMnA5cHF1Z09vczl6TlR4elhIV012MkVRMVRXRmExVHk5SDJuZnAydFNzaUNPSVNBcnU1Sm9Va3ZCNXEKbVFhVFIrWlpDSWdUNE5iVTZmZUNEZTRMUWZ5eUtxQm5KdU5BUmVlMExuSGx4UHEzTU5DMEU3ZE5BWU5xbE04agpDWXBCTy8zUHhVU014SlhMNWc3K1orMzRDUUtCZ1FEVnV2Sng1YWZZejNNZnh5S0RrVzJHazd3YXEyTDNmcmFtClU2TnZadjl3UjhSb3N0SFRwWmx4aFRKZXFoNU1lcFBrNDluQ09aYmRDaGtGcGN2ZStHbTEzOXUyOCtBcm0vZmEKUXJuZk5VaXg1eEtuRlhZaXR0MzNnemJOYWlCcWJXTm1SSlEzaExmcmNWbWQ3QjQ4M3BOeVIyQW5zd2dnUkVybAphdVFlYUhrczdRS0JnR296bThPL081VHl4UDlqbzhpY2E4L1lsdzV5V3dCR0VEVnZJY1FMQUEvSHZZbHR1eHFtCmxQbW9HZjZGV25uS1ZKSzVaL0tIckV2K3ZCdkVVaDhBQ0M3OG5hRDkwRVlINUdCb3dmUXp3TFBYZERwZjF0VTYKYldkZ1pPbzZKUXVxTnVzdVpnRG1SZGlVMWpLb3grTzJjSy9SQXNJWVpJLytjNHh3ZHZ6amxRZ1pBb0dCQUxDZwpubHVoL3VRZURIWG1pNDlQVDhRM3N1d1hWdUpSeFlBTy9ySEIzTGRkbCtNdVpGa1VNWXF2R01GQ3RXZGVwWG96CkVuS0FSVHpHYTRkUFRQd25MclV2R3RSSEZxcnphaERsczlYU294RGlkWGUvTkxIYmpmUk9hNnUyV0xPYlV0bmgKTXR2dXdrL0FqTjhGa3JlYStSOG4vVDdScFpXRTJxQmRoY2ZiYnNqQkFvR0FESys0NmJtdHVJd0FrRytqNWJsYQpxSXBPRFB2QldiQzk5VnJUVU5DRGNRbDZSRVQ3NjJzdlkya2cyNlFtNUZkdTFSMDA3SHE0aXdHSmNraHUvWDlaCm81NVk4STkwVE1PU2Nvb0FLaEIrc1ZxYmlXUGhwQTlaOXRSUlRXRzQ2WGg2RWtxaGRMSTB0dWJ6eS96aUFLT1QKK052UVdxNE83Q05aTDdBZ2xMR2ZHd0U9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=',
		vcs: {
			serviceOffering: {
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-09T07:02:26.961Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://aws.amazon.com/compliance/?hp=tile&tile=security'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
						},
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1']
			}
		}
	},
	validLPJSON: {
		selfDescriptionCredential: {
			'@context': 'https://www.w3.org/2018/credentials/v1',
			type: ['VerifiablePresentation'],
			verifiableCredential: [
				{
					credentialSubject: {
						'gx:legalName': 'Green World',
						'gx:headquarterAddress': { 'gx:countrySubdivisionCode': 'BE-BRU' },
						'gx:legalAddress': { 'gx:countrySubdivisionCode': 'BE-BRU' },
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
						type: 'gx:LegalParticipant',
						'gx:legalRegistrationNumber': { id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1' }
					},
					'@context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					type: ['VerifiableCredential'],
					id: 'did:web:casio50.smart-x.smartsenselabs.com',
					issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
					issuanceDate: '2023-08-07T16:04:30.307219451Z',
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-07T10:34:33.838Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..btTzZ3J0O-DcSe8rumxVLBF1jIrHFmonLQ8FWgvrl0ueQGt9VOnRZF5RFN6fHm7Sgx2N4O9EdTFwvV5II-l4nLKK6qHd_f97zNsonL7BRxQ0RB4GpbE6m0pR_XljCzKIQG6RZVyZTAeOdsyWBzGm1M_2hnmTLkBMB33GAJW8fI1d_ou4KbxUfkPiFCfnTUPM3uP5WXGuqC2XqUInL5NJKFZGD6Ld1l6PzPqEGYn-m1UCGQyh6w7l-2NVRT-FHpo3_HHY-xU7RX2F7tDZffCOTbOeiV15xktZWj233BFrcvhBHZ0a14IfifTVFUH0GYmwUPMF1BSS7LCNldFetkcCWQ'
					}
				},
				{
					'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
					type: 'VerifiableCredential',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
					issuer: 'did:web:registration.lab.gaia-x.eu:development',
					issuanceDate: '2023-08-07T10:34:32.101Z',
					credentialSubject: {
						'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
						type: 'gx:legalRegistrationNumber',
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
						'gx:leiCode': '9695007586GCAKPYJ703',
						'gx:leiCode-countryCode': 'FR'
					},
					evidence: [{ 'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/', 'gx:executionDate': '2023-08-07T10:34:32.101Z', 'gx:evidenceOf': 'gx:leiCode' }],
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-07T10:34:33.102Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Jdx7tQNdCdFc5Gnp1gx8SJ5rqKYAqGXzqEhOJgMnXpmn4MFZvwG97UdnGwgmcqYHsjdqFxEysZDoDnkrmBV-_B1zy2oEcZ9P2I95LS6_H8EfgB6wWdlxyAjg5Hnp-QFoR0N8p6n-hKwEkF1R3e1pVHE2txcTfiGQOfqQGd4EwZAu9Ph6YBdAuYrgBmr4zSEEYNQ5LQRSMvljHSG-h_KHhR4-Fcc-YI_ZUtdPuXbH7IiAo9gAdtPFAW6KDzVKsN1klEzJxp5rVkHYwjsLFCn7wNrYw6u7pbLsSXWRKKypw4gTcdVP6jft4orbLOOWE4gadfkv7AXh8Egk9yIlx_VLBQ'
					}
				},
				{
					'@context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					credentialSubject: {
						'@Context': [
							'https://www.w3.org/2018/credentials/v1',
							'https://w3id.org/security/suites/jws-2020/v1',
							'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
						],
						'gx:termsAndConditions':
							'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
						type: 'gx:GaiaXTermsAndConditions'
					},
					id: 'did:web:casio50.smart-x.smartsenselabs.com',
					issuanceDate: '2023-08-07T16:04:30.307219451Z',
					issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
					type: ['VerifiableCredential'],
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-07T10:34:34.513Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SWXsvdPCdnLCnVIkO1cYRca1JMGk0qLVvyW8-cqeHBHn7PbAL0grpW3X0ZyMekncWgJ0-vXBaSdre1OfLSbBXZgpxgqha8OKaCMGqqbSC4IYMmuUeUOvZ_pIAyabFy6OHc45Sm3YT3os7xezF6rl5Kbwn-_nPSZE0izAv269at9Gs_aYUE79UTLyX-_Its4gadRuDdcAhznsrHx4rbNpX9kNh_389zB_lu1lTlt2VqjXBYnbMbknW9-k3lVZZm6giVFxa3fNEAh-1x30-ZdmOs8KNS8mWNl_8SFSE0bmN4BB-3J91bG2aZ8G9GWzu4x3lI-1WmlnEDj5WhaE69Dq0A'
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
			id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/857d3ba5-af13-4cda-ad96-38cd5c7db9b6',
			issuer: 'did:web:compliance.lab.gaia-x.eu:development',
			issuanceDate: '2023-08-07T10:34:42.828Z',
			expirationDate: '2023-11-05T10:34:42.828Z',
			credentialSubject: [
				{
					type: 'gx:compliance',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
					integrity: 'sha256-372994ed4b18b7f4252626a48c510aa170cb3a04717d2501ccf1982ed85a9b12',
					version: '22.10'
				},
				{
					type: 'gx:compliance',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
					integrity: 'sha256-20059a7a182d8a840ee25f8773446aa2f0564c0ff82d359b8a1b194bf1f98045',
					version: '22.10'
				},
				{
					type: 'gx:compliance',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
					integrity: 'sha256-f897639cb8a0236874ec395a3b0443986fcf5e3b1ac4ac1f3978e72e685dea2f',
					version: '22.10'
				}
			],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-07T10:34:43.508Z',
				proofPurpose: 'assertionMethod',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..E-20cReJq39u3zMwydaYArg-OwrAEphnWUOIZmrH27MgMtTQ3VbEYRRGuTdlqPJDF9Wgc8ROYaaxUXRi67uEbODERseK78EOBjAubp-6s5nzFQGIz6NBPpzG6zDZEEaS8Zkn62Kp3aF-yEUD7agh_cI5C0JbCuUDbw4CVnQGW9-vFVbHLPloMHufoRKat-QcoZz_6gMs1ebMJBbG4A92-vebAxPJOU3Hn3_Wp5qse-N3w3FC0JS1gkfE9naNSd2E2dQ348a4REr1FuAl4HAttdRyx2i-fj75juu9aOw8p1rTppDr7_Uo1ljS7mg0igoS2QEsnWqGacyZ7GaYjs2a9Q',
				verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
			}
		}
	},
	validSOComplianceReq: {
		'@context': 'https://www.w3.org/2018/credentials/v1',
		type: ['VerifiablePresentation'],
		verifiableCredential: [
			{
				credentialSubject: {
					'gx:legalName': 'Green World',
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalRegistrationNumber': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1'
					}
				},
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T16:04:30.307219451Z',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:33.838Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..btTzZ3J0O-DcSe8rumxVLBF1jIrHFmonLQ8FWgvrl0ueQGt9VOnRZF5RFN6fHm7Sgx2N4O9EdTFwvV5II-l4nLKK6qHd_f97zNsonL7BRxQ0RB4GpbE6m0pR_XljCzKIQG6RZVyZTAeOdsyWBzGm1M_2hnmTLkBMB33GAJW8fI1d_ou4KbxUfkPiFCfnTUPM3uP5WXGuqC2XqUInL5NJKFZGD6Ld1l6PzPqEGYn-m1UCGQyh6w7l-2NVRT-FHpo3_HHY-xU7RX2F7tDZffCOTbOeiV15xktZWj233BFrcvhBHZ0a14IfifTVFUH0GYmwUPMF1BSS7LCNldFetkcCWQ'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: 'VerifiableCredential',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-08-07T10:34:32.101Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-08-07T10:34:32.101Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:33.102Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Jdx7tQNdCdFc5Gnp1gx8SJ5rqKYAqGXzqEhOJgMnXpmn4MFZvwG97UdnGwgmcqYHsjdqFxEysZDoDnkrmBV-_B1zy2oEcZ9P2I95LS6_H8EfgB6wWdlxyAjg5Hnp-QFoR0N8p6n-hKwEkF1R3e1pVHE2txcTfiGQOfqQGd4EwZAu9Ph6YBdAuYrgBmr4zSEEYNQ5LQRSMvljHSG-h_KHhR4-Fcc-YI_ZUtdPuXbH7IiAo9gAdtPFAW6KDzVKsN1klEzJxp5rVkHYwjsLFCn7wNrYw6u7pbLsSXWRKKypw4gTcdVP6jft4orbLOOWE4gadfkv7AXh8Egk9yIlx_VLBQ'
				}
			},
			{
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				credentialSubject: {
					'@Context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					'gx:termsAndConditions':
						'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
					type: 'gx:GaiaXTermsAndConditions'
				},
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T16:04:30.307219451Z',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				type: ['VerifiableCredential'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:34.513Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SWXsvdPCdnLCnVIkO1cYRca1JMGk0qLVvyW8-cqeHBHn7PbAL0grpW3X0ZyMekncWgJ0-vXBaSdre1OfLSbBXZgpxgqha8OKaCMGqqbSC4IYMmuUeUOvZ_pIAyabFy6OHc45Sm3YT3os7xezF6rl5Kbwn-_nPSZE0izAv269at9Gs_aYUE79UTLyX-_Its4gadRuDdcAhznsrHx4rbNpX9kNh_389zB_lu1lTlt2VqjXBYnbMbknW9-k3lVZZm6giVFxa3fNEAh-1x30-ZdmOs8KNS8mWNl_8SFSE0bmN4BB-3J91bG2aZ8G9GWzu4x3lI-1WmlnEDj5WhaE69Dq0A'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-09T07:02:26.961Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://aws.amazon.com/compliance/?hp=tile&tile=security'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
						},
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-09T11:11:24.187Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..kTLyHo2yz10zMtVnl8UKYCtlPD4ZQVr85v3Otm8QQf4SDfgWWpq1iaJliPTqhz8qQjabh1ufopfFC2RUucI2ZYa56tZtJACqnOU9saO_EEPSybgcLB1Oyfg8HFg90oHaJGU4hJdz4zOhve19oLGqHk8i1HHLtfgwsSfEux3XaDMBvluadMOdcE0mQsXXLFAAoAQgjZzmrVfcBneXeAz0a9oVdCINA1wQbBxb5rVlh0Lr3z82M_Fe39b5eSUNQfDP3d1A4KkoVkNZvFDlCV93C6VJ2Gc3kerz92uQMCsaZuKk1-enoSy_W0JCv_XsqhzpuQR_r3T_KPRsh2rDrKPFIA'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-08T11:27:35.542Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK_policy.json',
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-08T11:27:39.660Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..NRX1pJRgbrwmA3jnqSkeGX65BpMXK2BnN5bKnWcEN6ir7UgGEZrkDvHlbzwVtbqgb-sKzFsDm2iEbXW9VJHjB6iO-inAMqFeH-lJjKHe9cVMmvFy6enjeuiJrlfvBq7jLE_qU57lAhSMMNFVJ-lJtcnPSCKQuH99Dg1OsY0dnw_jWQEwQZBth25v0BTb9i3UaMQ6qkZuUlQG6Ukm46DnYhy_5ZfzlrcPV9VwqHsJOMem6SWoodhgfKSM_E8AAAM6Cn3VEljAMGb3GsmLE21GzSei7mZ9CIKfLzReygRjJsVXV9Eis1fZkMn5WMf06xSugQRlsnDtPy0YR5oK1TfIWQ'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-08T11:29:26.389Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9_policy.json',
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-08T11:29:30.054Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..aPp616viJ513iRXLe2rb5Z3uF4RvghlirrijmeMeBLu5ML7xJenPmpvuAP0qQ8xat9cWjWdBqmEOJ2tnUzPP1Qq1k1mDRYU5n42eaxVDEflDP4yrRMsAEYWZkrb-iMCGa6q-ivh0a9GGkOhLmZcHzN8XLZHhPkqz_eZ4PgP3UVlOsNpMIZFf3J_mCVkEhsIDZe03qU6vc7-japiI4NtJzeUlzyHHKhTuaiRCE87ac7_0D1oQPkll6eFY-50peLiFq_2NjPsNCdW1p7rtqoZSDwuy7_TJ7RT1mBlem4AIumtddBNmkcnvZm5zdADnRzRjJBJZI7O4JSylM3Xo0aB6fA'
				}
			}
		]
	},
	validSOComplianceResponse: {
		'@context': [
			'https://www.w3.org/2018/credentials/v1',
			'https://w3id.org/security/suites/jws-2020/v1',
			'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
		],
		type: ['VerifiableCredential'],
		id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/0d8948ed-ddb8-4285-bf93-275d70c6f659',
		issuer: 'did:web:compliance.lab.gaia-x.eu:development',
		issuanceDate: '2023-08-09T11:11:43.551Z',
		expirationDate: '2023-11-07T11:11:43.551Z',
		credentialSubject: [
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
				integrity: 'sha256-372994ed4b18b7f4252626a48c510aa170cb3a04717d2501ccf1982ed85a9b12',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				integrity: 'sha256-20059a7a182d8a840ee25f8773446aa2f0564c0ff82d359b8a1b194bf1f98045',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
				integrity: 'sha256-f897639cb8a0236874ec395a3b0443986fcf5e3b1ac4ac1f3978e72e685dea2f',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json',
				integrity: 'sha256-338aca800d7abb5b2010ac1ca46eef55042dcebea06cba0ef2cae9cbfcfcf782',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json',
				integrity: 'sha256-401e6999d2491a4f2f22df6fbd0105df2fe7e7324e82802e20289be82c4bc72e',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json',
				integrity: 'sha256-70312488f04f1de60e0857a71bbdc899aee59f4615f3193d7ffeaed84af89a65',
				version: '22.10'
			}
		],
		proof: {
			type: 'JsonWebSignature2020',
			created: '2023-08-09T11:11:44.286Z',
			proofPurpose: 'assertionMethod',
			jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..MSQjozv_WMQk6CCe2XssIFSUzsUkbS_vC8TlwG3F4j6ZcudOdcySwBflN4qyUdVA5Z5WZDFnkUL7IS2h3XwHCKmtQFX99b1wBlrGaf7mt9y--9-XVx_EDg_LmNbeNSjxUdyJFf_xh2lYx5wNstuyQeC2-CjyAuwPXwBKiOS2NkcTokwTdyLAekgeSU01LyrYyGJwFn39pGXkB1Dn8EiMNhU58cHtRVXUy8J4xmx4RGUDRBaASVVO1rNqAcBsfHAh_8CGpr-HxWD1gqnBm4-kILv_3R7gmpNDlFjH4vu-mYEDJtKvdHZWP-mwYtEt37IA3JZ1aRzeQVtzIU7A7yUphg',
			verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
		}
	},
	veracityResponse: {
		veracity: 0.25,
		certificateDetails: {
			validFrom: 'Aug  7 08:16:38 2023 GMT',
			validTo: 'Nov  5 08:16:37 2023 GMT',
			subject: {
				jurisdictionCountry: null,
				jurisdictionSate: null,
				jurisdictionLocality: null,
				businessCategory: null,
				serialNumber: null,
				country: null,
				state: null,
				locality: null,
				organization: null,
				commonName: 'casio50.smart-x.smartsenselabs.com'
			},
			issuer: {
				commonName: 'R3',
				organization: "Let's Encrypt",
				country: 'US'
			}
		}
	},
	uniqueVC: [
		{
			credentialSubject: {
				'gx:legalName': 'Green World',
				'gx:headquarterAddress': {
					'gx:countrySubdivisionCode': 'BE-BRU'
				},
				'gx:legalAddress': {
					'gx:countrySubdivisionCode': 'BE-BRU'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
				type: 'gx:LegalParticipant',
				'gx:legalRegistrationNumber': {
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1'
				}
			},
			'@context': [
				'https://www.w3.org/2018/credentials/v1',
				'https://w3id.org/security/suites/jws-2020/v1',
				'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
			],
			type: ['VerifiableCredential'],
			id: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-07T16:04:30.307219451Z',
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-07T10:34:33.838Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..btTzZ3J0O-DcSe8rumxVLBF1jIrHFmonLQ8FWgvrl0ueQGt9VOnRZF5RFN6fHm7Sgx2N4O9EdTFwvV5II-l4nLKK6qHd_f97zNsonL7BRxQ0RB4GpbE6m0pR_XljCzKIQG6RZVyZTAeOdsyWBzGm1M_2hnmTLkBMB33GAJW8fI1d_ou4KbxUfkPiFCfnTUPM3uP5WXGuqC2XqUInL5NJKFZGD6Ld1l6PzPqEGYn-m1UCGQyh6w7l-2NVRT-FHpo3_HHY-xU7RX2F7tDZffCOTbOeiV15xktZWj233BFrcvhBHZ0a14IfifTVFUH0GYmwUPMF1BSS7LCNldFetkcCWQ'
			}
		},
		{
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			type: 'VerifiableCredential',
			id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
			issuer: 'did:web:registration.lab.gaia-x.eu:development',
			issuanceDate: '2023-08-07T10:34:32.101Z',
			credentialSubject: {
				'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
				type: 'gx:legalRegistrationNumber',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				'gx:leiCode': '9695007586GCAKPYJ703',
				'gx:leiCode-countryCode': 'FR'
			},
			evidence: [
				{
					'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
					'gx:executionDate': '2023-08-07T10:34:32.101Z',
					'gx:evidenceOf': 'gx:leiCode'
				}
			],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-07T10:34:33.102Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Jdx7tQNdCdFc5Gnp1gx8SJ5rqKYAqGXzqEhOJgMnXpmn4MFZvwG97UdnGwgmcqYHsjdqFxEysZDoDnkrmBV-_B1zy2oEcZ9P2I95LS6_H8EfgB6wWdlxyAjg5Hnp-QFoR0N8p6n-hKwEkF1R3e1pVHE2txcTfiGQOfqQGd4EwZAu9Ph6YBdAuYrgBmr4zSEEYNQ5LQRSMvljHSG-h_KHhR4-Fcc-YI_ZUtdPuXbH7IiAo9gAdtPFAW6KDzVKsN1klEzJxp5rVkHYwjsLFCn7wNrYw6u7pbLsSXWRKKypw4gTcdVP6jft4orbLOOWE4gadfkv7AXh8Egk9yIlx_VLBQ'
			}
		},
		{
			'@context': [
				'https://www.w3.org/2018/credentials/v1',
				'https://w3id.org/security/suites/jws-2020/v1',
				'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
			],
			credentialSubject: {
				'@Context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				'gx:termsAndConditions':
					'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
				type: 'gx:GaiaXTermsAndConditions'
			},
			id: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-07T16:04:30.307219451Z',
			issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
			type: ['VerifiableCredential'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-07T10:34:34.513Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SWXsvdPCdnLCnVIkO1cYRca1JMGk0qLVvyW8-cqeHBHn7PbAL0grpW3X0ZyMekncWgJ0-vXBaSdre1OfLSbBXZgpxgqha8OKaCMGqqbSC4IYMmuUeUOvZ_pIAyabFy6OHc45Sm3YT3os7xezF6rl5Kbwn-_nPSZE0izAv269at9Gs_aYUE79UTLyX-_Its4gadRuDdcAhznsrHx4rbNpX9kNh_389zB_lu1lTlt2VqjXBYnbMbknW9-k3lVZZm6giVFxa3fNEAh-1x30-ZdmOs8KNS8mWNl_8SFSE0bmN4BB-3J91bG2aZ8G9GWzu4x3lI-1WmlnEDj5WhaE69Dq0A'
			}
		},
		{
			type: 'VerifiableCredential',
			id: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-09T07:02:26.961Z',
			credentialSubject: {
				'gx:termsAndConditions': {
					'gx:URL': 'https://aws.amazon.com/service-terms/',
					'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
				},
				'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f_policy.json'],
				'gx:dataAccountExport': {
					'gx:requestType': 'API',
					'gx:accessType': 'physical',
					'gx:formatType': 'pdf'
				},
				'gx:aggregationOf': [
					{
						id: 'https://aws.amazon.com/compliance/?hp=tile&tile=security'
					}
				],
				'gx:dependsOn': [
					{
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
					},
					{
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
					}
				],
				'gx:dataProtectionRegime': 'GDPR2016',
				type: 'gx:ServiceOffering',
				'gx:providedBy': {
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json'
			},
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-10T08:56:34.345Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..D_y1Up9IgDTrtxtC9ISFp2c6uCtVzt9m2zDw17Ju1Kdv3zOpOCWZ_eWg6jl1EYaTvSSmxK4-nk-tMmhsLxA0Gb76kvD-92w39Ni8PvLrgAaLSt4mFoCsmLI3dQL0ZOV7AbSTrZ9HoL0jp7AEkc9Y_UXFaqtUdXTvk31AA1LFbp_1dvF41Mza3gUVfUAAWq-Sg0IL-TCX7n6rFByGh5Tol-uR5vT8k5WxzVwjlS_g-qRQ-aOI-sh3XOO324Dbe6tUOh5sDnhbsAhMDzNjC5eBsuoNFVi7AADuE4Gvdd97C3Yn1ICYqjT9AbiuEi2WPPPIaLGLAIhdB-UX5MAs-1CHzQ'
			}
		},
		{
			type: 'VerifiableCredential',
			id: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-08T11:27:35.542Z',
			credentialSubject: {
				'gx:termsAndConditions': {
					'gx:URL': 'https://aws.amazon.com/service-terms/',
					'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
				},
				'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK_policy.json',
				'gx:dataAccountExport': {
					'gx:requestType': 'API',
					'gx:accessType': 'physical',
					'gx:formatType': 'pdf'
				},
				'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
				'gx:dataProtectionRegime': 'GDPR2016',
				type: 'gx:ServiceOffering',
				'gx:providedBy': {
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
			},
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-08T11:27:39.660Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..NRX1pJRgbrwmA3jnqSkeGX65BpMXK2BnN5bKnWcEN6ir7UgGEZrkDvHlbzwVtbqgb-sKzFsDm2iEbXW9VJHjB6iO-inAMqFeH-lJjKHe9cVMmvFy6enjeuiJrlfvBq7jLE_qU57lAhSMMNFVJ-lJtcnPSCKQuH99Dg1OsY0dnw_jWQEwQZBth25v0BTb9i3UaMQ6qkZuUlQG6Ukm46DnYhy_5ZfzlrcPV9VwqHsJOMem6SWoodhgfKSM_E8AAAM6Cn3VEljAMGb3GsmLE21GzSei7mZ9CIKfLzReygRjJsVXV9Eis1fZkMn5WMf06xSugQRlsnDtPy0YR5oK1TfIWQ'
			}
		},
		{
			type: 'VerifiableCredential',
			id: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-08T11:29:26.389Z',
			credentialSubject: {
				'gx:termsAndConditions': {
					'gx:URL': 'https://aws.amazon.com/service-terms/',
					'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
				},
				'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9_policy.json',
				'gx:dataAccountExport': {
					'gx:requestType': 'API',
					'gx:accessType': 'physical',
					'gx:formatType': 'pdf'
				},
				'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
				'gx:dataProtectionRegime': 'GDPR2016',
				type: 'gx:ServiceOffering',
				'gx:providedBy': {
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
			},
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-08T11:29:30.054Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..aPp616viJ513iRXLe2rb5Z3uF4RvghlirrijmeMeBLu5ML7xJenPmpvuAP0qQ8xat9cWjWdBqmEOJ2tnUzPP1Qq1k1mDRYU5n42eaxVDEflDP4yrRMsAEYWZkrb-iMCGa6q-ivh0a9GGkOhLmZcHzN8XLZHhPkqz_eZ4PgP3UVlOsNpMIZFf3J_mCVkEhsIDZe03qU6vc7-japiI4NtJzeUlzyHHKhTuaiRCE87ac7_0D1oQPkll6eFY-50peLiFq_2NjPsNCdW1p7rtqoZSDwuy7_TJ7RT1mBlem4AIumtddBNmkcnvZm5zdADnRzRjJBJZI7O4JSylM3Xo0aB6fA'
			}
		}
	],
	serviceOfferingProof: {
		type: 'JsonWebSignature2020',
		created: '2023-08-10T08:56:34.345Z',
		proofPurpose: 'assertionMethod',
		verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
		jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..D_y1Up9IgDTrtxtC9ISFp2c6uCtVzt9m2zDw17Ju1Kdv3zOpOCWZ_eWg6jl1EYaTvSSmxK4-nk-tMmhsLxA0Gb76kvD-92w39Ni8PvLrgAaLSt4mFoCsmLI3dQL0ZOV7AbSTrZ9HoL0jp7AEkc9Y_UXFaqtUdXTvk31AA1LFbp_1dvF41Mza3gUVfUAAWq-Sg0IL-TCX7n6rFByGh5Tol-uR5vT8k5WxzVwjlS_g-qRQ-aOI-sh3XOO324Dbe6tUOh5sDnhbsAhMDzNjC5eBsuoNFVi7AADuE4Gvdd97C3Yn1ICYqjT9AbiuEi2WPPPIaLGLAIhdB-UX5MAs-1CHzQ'
	},
	serviceOfferingVP: {
		'@context': 'https://www.w3.org/2018/credentials/v1',
		type: ['VerifiablePresentation'],
		verifiableCredential: [
			{
				credentialSubject: {
					'gx:legalName': 'Green World',
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalRegistrationNumber': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1'
					}
				},
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T16:04:30.307219451Z',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:33.838Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..btTzZ3J0O-DcSe8rumxVLBF1jIrHFmonLQ8FWgvrl0ueQGt9VOnRZF5RFN6fHm7Sgx2N4O9EdTFwvV5II-l4nLKK6qHd_f97zNsonL7BRxQ0RB4GpbE6m0pR_XljCzKIQG6RZVyZTAeOdsyWBzGm1M_2hnmTLkBMB33GAJW8fI1d_ou4KbxUfkPiFCfnTUPM3uP5WXGuqC2XqUInL5NJKFZGD6Ld1l6PzPqEGYn-m1UCGQyh6w7l-2NVRT-FHpo3_HHY-xU7RX2F7tDZffCOTbOeiV15xktZWj233BFrcvhBHZ0a14IfifTVFUH0GYmwUPMF1BSS7LCNldFetkcCWQ'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: 'VerifiableCredential',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-08-07T10:34:32.101Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-08-07T10:34:32.101Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:33.102Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Jdx7tQNdCdFc5Gnp1gx8SJ5rqKYAqGXzqEhOJgMnXpmn4MFZvwG97UdnGwgmcqYHsjdqFxEysZDoDnkrmBV-_B1zy2oEcZ9P2I95LS6_H8EfgB6wWdlxyAjg5Hnp-QFoR0N8p6n-hKwEkF1R3e1pVHE2txcTfiGQOfqQGd4EwZAu9Ph6YBdAuYrgBmr4zSEEYNQ5LQRSMvljHSG-h_KHhR4-Fcc-YI_ZUtdPuXbH7IiAo9gAdtPFAW6KDzVKsN1klEzJxp5rVkHYwjsLFCn7wNrYw6u7pbLsSXWRKKypw4gTcdVP6jft4orbLOOWE4gadfkv7AXh8Egk9yIlx_VLBQ'
				}
			},
			{
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				credentialSubject: {
					'@Context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					'gx:termsAndConditions':
						'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
					type: 'gx:GaiaXTermsAndConditions'
				},
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-07T16:04:30.307219451Z',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				type: ['VerifiableCredential'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-07T10:34:34.513Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SWXsvdPCdnLCnVIkO1cYRca1JMGk0qLVvyW8-cqeHBHn7PbAL0grpW3X0ZyMekncWgJ0-vXBaSdre1OfLSbBXZgpxgqha8OKaCMGqqbSC4IYMmuUeUOvZ_pIAyabFy6OHc45Sm3YT3os7xezF6rl5Kbwn-_nPSZE0izAv269at9Gs_aYUE79UTLyX-_Its4gadRuDdcAhznsrHx4rbNpX9kNh_389zB_lu1lTlt2VqjXBYnbMbknW9-k3lVZZm6giVFxa3fNEAh-1x30-ZdmOs8KNS8mWNl_8SFSE0bmN4BB-3J91bG2aZ8G9GWzu4x3lI-1WmlnEDj5WhaE69Dq0A'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-09T07:02:26.961Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://aws.amazon.com/compliance/?hp=tile&tile=security'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
						},
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-10T08:56:34.345Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..D_y1Up9IgDTrtxtC9ISFp2c6uCtVzt9m2zDw17Ju1Kdv3zOpOCWZ_eWg6jl1EYaTvSSmxK4-nk-tMmhsLxA0Gb76kvD-92w39Ni8PvLrgAaLSt4mFoCsmLI3dQL0ZOV7AbSTrZ9HoL0jp7AEkc9Y_UXFaqtUdXTvk31AA1LFbp_1dvF41Mza3gUVfUAAWq-Sg0IL-TCX7n6rFByGh5Tol-uR5vT8k5WxzVwjlS_g-qRQ-aOI-sh3XOO324Dbe6tUOh5sDnhbsAhMDzNjC5eBsuoNFVi7AADuE4Gvdd97C3Yn1ICYqjT9AbiuEi2WPPPIaLGLAIhdB-UX5MAs-1CHzQ'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-08T11:27:35.542Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK_policy.json',
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-08T11:27:39.660Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..NRX1pJRgbrwmA3jnqSkeGX65BpMXK2BnN5bKnWcEN6ir7UgGEZrkDvHlbzwVtbqgb-sKzFsDm2iEbXW9VJHjB6iO-inAMqFeH-lJjKHe9cVMmvFy6enjeuiJrlfvBq7jLE_qU57lAhSMMNFVJ-lJtcnPSCKQuH99Dg1OsY0dnw_jWQEwQZBth25v0BTb9i3UaMQ6qkZuUlQG6Ukm46DnYhy_5ZfzlrcPV9VwqHsJOMem6SWoodhgfKSM_E8AAAM6Cn3VEljAMGb3GsmLE21GzSei7mZ9CIKfLzReygRjJsVXV9Eis1fZkMn5WMf06xSugQRlsnDtPy0YR5oK1TfIWQ'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-08T11:29:26.389Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
					},
					'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9_policy.json',
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-08T11:29:30.054Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..aPp616viJ513iRXLe2rb5Z3uF4RvghlirrijmeMeBLu5ML7xJenPmpvuAP0qQ8xat9cWjWdBqmEOJ2tnUzPP1Qq1k1mDRYU5n42eaxVDEflDP4yrRMsAEYWZkrb-iMCGa6q-ivh0a9GGkOhLmZcHzN8XLZHhPkqz_eZ4PgP3UVlOsNpMIZFf3J_mCVkEhsIDZe03qU6vc7-japiI4NtJzeUlzyHHKhTuaiRCE87ac7_0D1oQPkll6eFY-50peLiFq_2NjPsNCdW1p7rtqoZSDwuy7_TJ7RT1mBlem4AIumtddBNmkcnvZm5zdADnRzRjJBJZI7O4JSylM3Xo0aB6fA'
				}
			}
		]
	},
	successResponse: {
		data: {
			completeSD: {
				selfDescriptionCredential: {
					'@context': 'https://www.w3.org/2018/credentials/v1',
					type: ['VerifiablePresentation'],
					verifiableCredential: [
						{
							credentialSubject: {
								'gx:legalName': 'Green World',
								'gx:headquarterAddress': {
									'gx:countrySubdivisionCode': 'BE-BRU'
								},
								'gx:legalAddress': {
									'gx:countrySubdivisionCode': 'BE-BRU'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
								type: 'gx:LegalParticipant',
								'gx:legalRegistrationNumber': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1'
								}
							},
							'@context': [
								'https://www.w3.org/2018/credentials/v1',
								'https://w3id.org/security/suites/jws-2020/v1',
								'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
							],
							type: ['VerifiableCredential'],
							id: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-07T16:04:30.307219451Z',
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-07T10:34:33.838Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..btTzZ3J0O-DcSe8rumxVLBF1jIrHFmonLQ8FWgvrl0ueQGt9VOnRZF5RFN6fHm7Sgx2N4O9EdTFwvV5II-l4nLKK6qHd_f97zNsonL7BRxQ0RB4GpbE6m0pR_XljCzKIQG6RZVyZTAeOdsyWBzGm1M_2hnmTLkBMB33GAJW8fI1d_ou4KbxUfkPiFCfnTUPM3uP5WXGuqC2XqUInL5NJKFZGD6Ld1l6PzPqEGYn-m1UCGQyh6w7l-2NVRT-FHpo3_HHY-xU7RX2F7tDZffCOTbOeiV15xktZWj233BFrcvhBHZ0a14IfifTVFUH0GYmwUPMF1BSS7LCNldFetkcCWQ'
							}
						},
						{
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							type: 'VerifiableCredential',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
							issuer: 'did:web:registration.lab.gaia-x.eu:development',
							issuanceDate: '2023-08-07T10:34:32.101Z',
							credentialSubject: {
								'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
								type: 'gx:legalRegistrationNumber',
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
								'gx:leiCode': '9695007586GCAKPYJ703',
								'gx:leiCode-countryCode': 'FR'
							},
							evidence: [
								{
									'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
									'gx:executionDate': '2023-08-07T10:34:32.101Z',
									'gx:evidenceOf': 'gx:leiCode'
								}
							],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-07T10:34:33.102Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Jdx7tQNdCdFc5Gnp1gx8SJ5rqKYAqGXzqEhOJgMnXpmn4MFZvwG97UdnGwgmcqYHsjdqFxEysZDoDnkrmBV-_B1zy2oEcZ9P2I95LS6_H8EfgB6wWdlxyAjg5Hnp-QFoR0N8p6n-hKwEkF1R3e1pVHE2txcTfiGQOfqQGd4EwZAu9Ph6YBdAuYrgBmr4zSEEYNQ5LQRSMvljHSG-h_KHhR4-Fcc-YI_ZUtdPuXbH7IiAo9gAdtPFAW6KDzVKsN1klEzJxp5rVkHYwjsLFCn7wNrYw6u7pbLsSXWRKKypw4gTcdVP6jft4orbLOOWE4gadfkv7AXh8Egk9yIlx_VLBQ'
							}
						},
						{
							'@context': [
								'https://www.w3.org/2018/credentials/v1',
								'https://w3id.org/security/suites/jws-2020/v1',
								'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
							],
							credentialSubject: {
								'@Context': [
									'https://www.w3.org/2018/credentials/v1',
									'https://w3id.org/security/suites/jws-2020/v1',
									'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
								],
								'gx:termsAndConditions':
									'The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).',
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
								type: 'gx:GaiaXTermsAndConditions'
							},
							id: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-07T16:04:30.307219451Z',
							issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
							type: ['VerifiableCredential'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-07T10:34:34.513Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SWXsvdPCdnLCnVIkO1cYRca1JMGk0qLVvyW8-cqeHBHn7PbAL0grpW3X0ZyMekncWgJ0-vXBaSdre1OfLSbBXZgpxgqha8OKaCMGqqbSC4IYMmuUeUOvZ_pIAyabFy6OHc45Sm3YT3os7xezF6rl5Kbwn-_nPSZE0izAv269at9Gs_aYUE79UTLyX-_Its4gadRuDdcAhznsrHx4rbNpX9kNh_389zB_lu1lTlt2VqjXBYnbMbknW9-k3lVZZm6giVFxa3fNEAh-1x30-ZdmOs8KNS8mWNl_8SFSE0bmN4BB-3J91bG2aZ8G9GWzu4x3lI-1WmlnEDj5WhaE69Dq0A'
							}
						},
						{
							type: 'VerifiableCredential',
							id: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-09T07:02:26.961Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
								},
								'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f_policy.json'],
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': [
									{
										id: 'https://aws.amazon.com/compliance/?hp=tile&tile=security'
									}
								],
								'gx:dependsOn': [
									{
										id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
									},
									{
										id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
									}
								],
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-10T08:56:34.345Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..D_y1Up9IgDTrtxtC9ISFp2c6uCtVzt9m2zDw17Ju1Kdv3zOpOCWZ_eWg6jl1EYaTvSSmxK4-nk-tMmhsLxA0Gb76kvD-92w39Ni8PvLrgAaLSt4mFoCsmLI3dQL0ZOV7AbSTrZ9HoL0jp7AEkc9Y_UXFaqtUdXTvk31AA1LFbp_1dvF41Mza3gUVfUAAWq-Sg0IL-TCX7n6rFByGh5Tol-uR5vT8k5WxzVwjlS_g-qRQ-aOI-sh3XOO324Dbe6tUOh5sDnhbsAhMDzNjC5eBsuoNFVi7AADuE4Gvdd97C3Yn1ICYqjT9AbiuEi2WPPPIaLGLAIhdB-UX5MAs-1CHzQ'
							}
						},
						{
							type: 'VerifiableCredential',
							id: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-08T11:27:35.542Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
								},
								'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK_policy.json',
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-08T11:27:39.660Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..NRX1pJRgbrwmA3jnqSkeGX65BpMXK2BnN5bKnWcEN6ir7UgGEZrkDvHlbzwVtbqgb-sKzFsDm2iEbXW9VJHjB6iO-inAMqFeH-lJjKHe9cVMmvFy6enjeuiJrlfvBq7jLE_qU57lAhSMMNFVJ-lJtcnPSCKQuH99Dg1OsY0dnw_jWQEwQZBth25v0BTb9i3UaMQ6qkZuUlQG6Ukm46DnYhy_5ZfzlrcPV9VwqHsJOMem6SWoodhgfKSM_E8AAAM6Cn3VEljAMGb3GsmLE21GzSei7mZ9CIKfLzReygRjJsVXV9Eis1fZkMn5WMf06xSugQRlsnDtPy0YR5oK1TfIWQ'
							}
						},
						{
							type: 'VerifiableCredential',
							id: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-08T11:29:26.389Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': '689be3192f5686526bdddb450463f6c2f752c23b2820a2aae35e6779889e817a'
								},
								'gx:policy': 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9_policy.json',
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': 'https://aws.amazon.com/compliance/?hp=tile&tile=security',
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-08T11:29:30.054Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..aPp616viJ513iRXLe2rb5Z3uF4RvghlirrijmeMeBLu5ML7xJenPmpvuAP0qQ8xat9cWjWdBqmEOJ2tnUzPP1Qq1k1mDRYU5n42eaxVDEflDP4yrRMsAEYWZkrb-iMCGa6q-ivh0a9GGkOhLmZcHzN8XLZHhPkqz_eZ4PgP3UVlOsNpMIZFf3J_mCVkEhsIDZe03qU6vc7-japiI4NtJzeUlzyHHKhTuaiRCE87ac7_0D1oQPkll6eFY-50peLiFq_2NjPsNCdW1p7rtqoZSDwuy7_TJ7RT1mBlem4AIumtddBNmkcnvZm5zdADnRzRjJBJZI7O4JSylM3Xo0aB6fA'
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
					issuer: 'did:web:compliance.lab.gaia-x.eu:development',
					expirationDate: '2023-11-07T11:11:43.551Z',
					id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/0d8948ed-ddb8-4285-bf93-275d70c6f659',
					issuanceDate: '2023-08-09T11:11:43.551Z',
					credentialSubject: [
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0',
							integrity: 'sha256-372994ed4b18b7f4252626a48c510aa170cb3a04717d2501ccf1982ed85a9b12',
							version: '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#1',
							integrity: 'sha256-20059a7a182d8a840ee25f8773446aa2f0564c0ff82d359b8a1b194bf1f98045',
							version: '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#2',
							integrity: 'sha256-f897639cb8a0236874ec395a3b0443986fcf5e3b1ac4ac1f3978e72e685dea2f',
							version: '22.10'
						},
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_iD3f.json',
							integrity: 'sha256-338aca800d7abb5b2010ac1ca46eef55042dcebea06cba0ef2cae9cbfcfcf782',
							type: 'gx:compliance',
							version: '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_xSoK.json',
							integrity: 'sha256-401e6999d2491a4f2f22df6fbd0105df2fe7e7324e82802e20289be82c4bc72e',
							version: '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_Mxt9.json',
							integrity: 'sha256-70312488f04f1de60e0857a71bbdc899aee59f4615f3193d7ffeaed84af89a65',
							version: '22.10'
						}
					],
					proof: {
						created: '2023-08-09T11:11:44.286Z',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..MSQjozv_WMQk6CCe2XssIFSUzsUkbS_vC8TlwG3F4j6ZcudOdcySwBflN4qyUdVA5Z5WZDFnkUL7IS2h3XwHCKmtQFX99b1wBlrGaf7mt9y--9-XVx_EDg_LmNbeNSjxUdyJFf_xh2lYx5wNstuyQeC2-CjyAuwPXwBKiOS2NkcTokwTdyLAekgeSU01LyrYyGJwFn39pGXkB1Dn8EiMNhU58cHtRVXUy8J4xmx4RGUDRBaASVVO1rNqAcBsfHAh_8CGpr-HxWD1gqnBm4-kILv_3R7gmpNDlFjH4vu-mYEDJtKvdHZWP-mwYtEt37IA3JZ1aRzeQVtzIU7A7yUphg',
						proofPurpose: 'assertionMethod',
						type: 'JsonWebSignature2020',
						verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
					}
				}
			},
			trustIndex: {
				veracity: 0.25,
				transparency: 1,
				trustIndex: 0.625,
				certificateDetails: {
					validFrom: 'Aug  7 08:16:38 2023 GMT',
					validTo: 'Nov  5 08:16:37 2023 GMT',
					subject: {
						jurisdictionCountry: null,
						jurisdictionSate: null,
						jurisdictionLocality: null,
						businessCategory: null,
						serialNumber: null,
						country: null,
						state: null,
						locality: null,
						organization: null,
						commonName: 'casio50.smart-x.smartsenselabs.com'
					},
					issuer: {
						commonName: 'R3',
						organization: "Let's Encrypt",
						country: 'US'
					}
				}
			}
		},
		message: 'Service offering SD signed successfully'
	}
}
