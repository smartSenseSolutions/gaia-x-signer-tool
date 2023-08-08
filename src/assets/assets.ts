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
				controller: 'did:web:greenworld.proofsense.in'
			}
		],
		assertionMethod: ['did:web:greenworld.proofsense.in#JWK2020-RSA']
	}
}
