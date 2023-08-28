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

export const legalRegistrationNumberJson = {
	'@context': ['https://www.w3.org/2018/credentials/v1'],
	type: 'VerifiableCredential',
	id: 'did:web:example.com:legalRegistrationNumber1',
	issuer: 'did:web:localhost%3A3000',
	issuanceDate: '2023-03-31T13:32:07.979Z',
	credentialSubject: {
		'@context': {
			gx: 'http://localhost:3000/gx#'
		},
		type: 'gx:legalRegistrationNumber',
		id: 'did:web:gaia-x.eu:legalRegistrationNumber.json',
		'gx:vatID': 'FR79537407926'
	},
	proof: {
		type: 'JsonWebSignature2020',
		created: '2023-03-31T13:32:08.528Z',
		proofPurpose: 'assertionMethod',
		verificationMethod: 'did:web:localhost%3A3000',
		jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..hhuXhVcYLICP3R0mGjyjfA6yZOw0qlRkQLFh5aTEBWEwgb6Fwr8LpPl5vHRVTNz7P6lR-AJ9SrJF7C_Bij-zbT3uRthRss0gWMO2bTBbqrhqN_I2tT7mUMZcl0F-DfjRPo4oVo2VV0MNgh23Ep6P0JjXv7PA0Wl_yb3Rt0ZFvkCigdxhatkdOPfENt-ArXyBgNn5JghSUwCzE5xbmuVeU93aFlA8gIWYh-FdtgggfoGIDObJVTuEqzy5kvfERSTa-gXpVctqFOYRGMS4jYzC9qj4YS4KKqeGafSsj60G2rOJkB6rcUYvzTe543QKv2V9bkCgfH3aAxt15FMeH7D6uA'
	}
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
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidMerificationMethodJSON: {
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidSO: {
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	validReqJSON: {
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
		privateKey:
			'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ2ZzYy9rVUNBblZnL2QKOStMRHdCVFZyUnptcW5MaFJBUFlTeExFTjd3UlZlWjFyZHVkZFFkc3FxbnVEUVdyOThqbmF4WjNFZldIcE1kSwpGbkJWQ1F2dzM2NjZQeWJhVUg0UE5NUmNuMURabllZUlEzN2U2ZnM3WktQcUtrS3lpdElZVURCZlN1VHhEWjV1ClYvbHZvN1BrMXp3Y3YyN0V0Wmo2N2tub2JBRmxUWEZTbWVnRmQzelZZVHExRktZZ2VXRVBmL2FKS0I4NEhLc20KTUN4YWd3RXNuS0txOVUyam1SeUhYUmxEVGdWSEVydU5qZ0hDQlNPY2dkT244dzdQTFlNMDN5TEgxQUFpQXBObwpQTmRJa2xtS2NSODJkMmcyYWVNNmFzUThuQ2RWZ0RLUGpDQnpOMUhlUzBWK0hlNHRpdi8reG0vYlByelVETzFsCitWWUo0MXAvQWdNQkFBRUNnZ0VBQVA3MDlLQ1ViWW10d1lYL1pESTRuN3owd1I3b0x2dXVxKzg5SkMzcHdxeEQKdGQ5QjVaQ3Yvc0RIaS9VT3MrNitoRCttaHVQaEVLcGpid0ZEcFZjL2VPR3VySS9hT0Q1Smh5V3BtU1RNeHdyVQpwZTZ5WHc0QU5GZm5BZzZRNzUyTkJPQnpVckQ5amlLd3JFWm8xVEtsQW9zeHN0ZndGOWd1V0xDMlp2c2d3bjNiClFoT3hhdldHcW9qa29xUnJJV1R2VVNNSzVpQkIyenNGWENHbmY0SmFPZjFjY3VJd0gwQ3lFREtDSHJKaUJjU08KeGxFUk5PQUFicWlGc1I0QU5ldjdZWjFqRk1JU2hJNXRyc0xnSC9LSkE4T21pSWVvWjVPcHV2L3kvaUtyRU9QQgpIdzA0bVNJQ1BXUW5SelRycDVneDRTdUJ5VGVsRTh0aFFNVXUwV0p5cVFLQmdRREtmOWVYYWtpeGJYdFdSQ0FHCmJzR1B1elNVK1FuMUp6WVpRdkE1NnEyWnhKT3lUTXI0aEpsN081UEZNdmtpT2tRWnpGdXZXL3VlaFNjbFRkUi8Kc0RnbTNoMDB0KzFPOHRYUU0xVHdibks1MWhRaEZ3RlVLb2xkc1lmNlJ6dk9MRy9DYmZiZld0Rkd4NFR0aFJLagp0T2ZUMTFKZ3phTS9VeGxUamszaE41NXlpUUtCZ1FESjR0ZmZiWFFlVGYxc2VSNXVtaWxzSFlJKzk2QmNXOUFMCjNNSnlOLzNSdWRyVTlHclExY2FBbmE4N1F6cEFrVk05MlZDVGpFT00rOW0vTkJCTlBVR3h4bWdQN2lWRFlqQWMKdVZRckVscWJMR0g3QUN4KytsMXZpYWlPZ3Q4VnpoL2l1WkpRaThWR0ZUd2tIVDk1UXRNaHRxRzI4QS8vVVpSOQpGZ3VacW1sQ3h3S0JnUURJK3F0cVAzV1lpNVhQSDl3OUppMzhUb3c0a3hlNzlrZnVPSTZlblBuaDFNWFdQL3R2ClBvUHFXRTRvZVpma3pibUxkVlZHTFdBRmpCZzNJUkVZRGprYzhuUkFQNUJMUEI3VC9pNStWdENNK3htTllmelMKb1VrbThhMkl6S3hoeTU2OGRWR0JpdXlNZURmSldic1BPZHloVjJNT2F1cHNUamlqd21ndmNIbFZLUUtCZ0NRYQpkUkIzdW5SUTdpa2YzOWxYcUdDMVJqMk1leGtKTWtOc3p6a3QyaTVQVmxzTytxc3VEN21nZVYzWHYrc2NFZzdWCmRodHMwZ2U4WWt4WE96TVU2VktwY0tLb3EvRkk5ZUd0SXVndytCTVg5TTIyVWo3QzkwS2pFNG1vemN4UWVGTkwKYkdjTEY5UllwOUN0aWxSZEp2UzRmR01DdTFtbGRUQ0phTG1xUi9peEFvR0FaeGhlcXR0UHVrWUU4ditJcjRCWQp4VjRIVFF1NnpHOEdoeFplVWJnOW00aWdBR09HbXBITE5uWml4aUZaZ0pDbFpzVmtnd3Avd3h5bWJlQStnNW9lCk5zWm02T2I1R2FaRmFPNlZuVHlSdlVrWS9xVmNjRlBzUSt0ZEVIUG5OVVhGNHF3cjJWVERCUGk0czRjTDJ1bUEKS1h2YnV3ZVVzRmE4YjlSTTVUVm16Rjg9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0K',
		vcs: {
			serviceOffering: {
				type: 'VerifiableCredential',
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-23T16:30:57.209178226Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': 'e9aedbf8c9b87ecb285a45c84444c72c69c546beb9457daa0e3543edd9b3b76c'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://wizard-api1.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/resource_86e8a7a9-c341-4049-abc7-dcf20e1736fe.json'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/service_S7GZ.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:labelLevel': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_52faca44-8ee4-4954-ad99-1043542f9bf1.json'],
					'gx:providedBy': {
						id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
					'gx:name': 'Service_soft_level',
					'gx:description': 'test service data'
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
						'gx:legalName': 'Ferrari S.p.A.',
						'gx:headquarterAddress': { 'gx:countrySubdivisionCode': 'BE-BRU' },
						'gx:legalAddress': { 'gx:countrySubdivisionCode': 'BE-BRU' },
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
						type: 'gx:LegalParticipant',
						'gx:legalRegistrationNumber': { id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1' }
					},
					'@context': [
						'https://www.w3.org/2018/credentials/v1',
						'https://w3id.org/security/suites/jws-2020/v1',
						'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
					],
					type: ['VerifiableCredential'],
					id: 'did:web:ferrari.smart-x.smartsenselabs.com',
					issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
					issuanceDate: '2023-08-22T14:41:15.096514618Z',
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-22T14:41:17.396Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..bYibkJs5ci0QXMdwwoGEPiCXTk9Kgl5a6EzczrcznWxRrsmhMQD22R6F_0tjlu7uTgwwjjWfBrh0kkKPJ8ELUsOWpRRTWvkBEc5pd9NSz9RCLzTFUOTRXIPeY9_BS-yRckZXBY2xB0jVCJ6lBZIeGUJDy1qXb2fc3_erNhMZF51CH2CSg5EtO3e6dtDMCx6rhJ3r32et0uxppQo5riIQ_R3WaPZ8qq2MRFFZiGtVPpk7Uz6aXHR3lL5frWNYxslb1wTxSFEHk-z1AHKs4ZUBVMMmpQ-dfihgyh1BAfaybcjDdeMUPwODqYxDH3n1Wirh47ZJKWmyzTpNc1OKfGliKw'
					}
				},
				{
					'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
					type: ['VerifiableCredential'],
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
					issuer: 'did:web:registration.lab.gaia-x.eu:development',
					issuanceDate: '2023-08-22T14:41:15.806Z',
					credentialSubject: {
						'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
						type: 'gx:legalRegistrationNumber',
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
						'gx:leiCode': '9695007586GCAKPYJ703',
						'gx:leiCode-countryCode': 'FR'
					},
					evidence: [{ 'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/', 'gx:executionDate': '2023-08-22T14:41:15.806Z', 'gx:evidenceOf': 'gx:leiCode' }],
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-22T14:41:16.756Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DnK9JSd_fv5AJEFBV6CUyvJBjhBd-An5OvPyOLW3wHxIUfXB3mypV9rEr5ymvq1Hhf0c8JEi2q14Kd84ugS6XZtq4rHP3lagnsmaUOYwV47kJOt9ZG0GjNsF9u5faIdb4NjiSJAl89rIt8e8WbcZHm2sVxqJYAOS14oKFLb6sFNvtU1IWGy3-LB-A1iYd1bpHlZdnbGLLh_HLNfOSrrSzUoHawvKtTt1RRwn_Ymf-xYjALoVV3o-R6Kto0Sq3GXv-vxqcvOhdV4NcgdHbXVZ89x39n7tu4DeaKVh2L9XdmCn9EB-bZ4-I39B4RdqYOeNiCTPr1eOqMXxaAgortglJA'
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
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
						type: 'gx:GaiaXTermsAndConditions'
					},
					id: 'did:web:ferrari.smart-x.smartsenselabs.com',
					issuanceDate: '2023-08-22T14:41:15.096514618Z',
					issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
					type: ['VerifiableCredential'],
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-22T14:41:17.683Z',
						proofPurpose: 'assertionMethod',
						verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..H-SLRuyM2q194B2TVmShWBWi_8NZAMOTBwuJLWCpQx9mOhhGHGEkZqd-42KYIpriPevBoGPCdwtJ-ICmtbeU-IFvmLU4yPcsH_mVb1JD2GzslcRCi4Cx2fz8gOpTk8K09JT-WAbEUeM_1NP_nW4q3gVYuRI2ctvqV7A8-nn9jMUxgH0Ba0r0tHDtn9i4YIBF7qXUz5T1dg23tnxEmEVEz_Iup2Vi7a_5UhOqtY_cdpt00lEFasF7mErSYuzOxVbKt0o_mP6mOcMuOjK1yxOPoSAyQV_hZzH3XszfYvMLdwT2w0Fvz5Lihb8ErJGQsYIM5leWI0RuLiub1eXlYUoQmA'
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
			id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/f425a315-97d0-45d3-b8e8-3bd9ea551411',
			issuer: 'did:web:compliance.lab.gaia-x.eu:development',
			issuanceDate: '2023-08-22T14:41:25.465Z',
			expirationDate: '2023-11-20T14:41:25.465Z',
			credentialSubject: [
				{
					type: 'gx:compliance',
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
					integrity: 'sha256-67d8a0b190e5c300b3ac7c4f57e1f5ca9180aa33198ee06345b1c99d54592bcf',
					version: '22.10'
				},
				{
					type: 'gx:compliance',
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
					integrity: 'sha256-4e093c4979652cd0a6e0ff83e441f05b6e0e8d3c879c5443b2bb61ab4bb1f032',
					version: '22.10'
				},
				{
					type: 'gx:compliance',
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
					integrity: 'sha256-6f18993ad25984393c2c1a8395f028d8bbf91db492b1c103f496a5a01089a634',
					version: '22.10'
				}
			],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-22T14:41:25.815Z',
				proofPurpose: 'assertionMethod',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..rTpYyj-zhdxtE59Kg45Jj7Cflja0dl8VWsvv64_YLga70Sbg81KXot_CN23SlmSjfJj78clbdSiEZm7sTQVTfrbIBoo5-qZPIJQgd_gdqcr6CDfGg-EhR0PGRKkQKFRGkuby8jcMX27IGf-yJ5h1SFTRokv_UHxIHvLsfof9xz7c8dS0cqh_qvpgxu371UMLu8TH79w56z1hTH3zjZIEu3aXwuXiDYFSYkp9i1Y3K6g2bUWjA7-Nk-jtz-v41C-ppZNyRdPZs3DzmVRHUu9Xjps9ScF3TTCh3VZM8_YFAiUTUzCEqK0OyawNqm8CcUVPab6Zllg0YJiFYh55fZrGuw',
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
					'gx:legalName': 'Ferrari S.p.A.',
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalRegistrationNumber': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1'
					}
				},
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-22T14:41:15.096514618Z',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:17.396Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..bYibkJs5ci0QXMdwwoGEPiCXTk9Kgl5a6EzczrcznWxRrsmhMQD22R6F_0tjlu7uTgwwjjWfBrh0kkKPJ8ELUsOWpRRTWvkBEc5pd9NSz9RCLzTFUOTRXIPeY9_BS-yRckZXBY2xB0jVCJ6lBZIeGUJDy1qXb2fc3_erNhMZF51CH2CSg5EtO3e6dtDMCx6rhJ3r32et0uxppQo5riIQ_R3WaPZ8qq2MRFFZiGtVPpk7Uz6aXHR3lL5frWNYxslb1wTxSFEHk-z1AHKs4ZUBVMMmpQ-dfihgyh1BAfaybcjDdeMUPwODqYxDH3n1Wirh47ZJKWmyzTpNc1OKfGliKw'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: ['VerifiableCredential'],
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-08-22T14:41:15.806Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-08-22T14:41:15.806Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:16.756Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DnK9JSd_fv5AJEFBV6CUyvJBjhBd-An5OvPyOLW3wHxIUfXB3mypV9rEr5ymvq1Hhf0c8JEi2q14Kd84ugS6XZtq4rHP3lagnsmaUOYwV47kJOt9ZG0GjNsF9u5faIdb4NjiSJAl89rIt8e8WbcZHm2sVxqJYAOS14oKFLb6sFNvtU1IWGy3-LB-A1iYd1bpHlZdnbGLLh_HLNfOSrrSzUoHawvKtTt1RRwn_Ymf-xYjALoVV3o-R6Kto0Sq3GXv-vxqcvOhdV4NcgdHbXVZ89x39n7tu4DeaKVh2L9XdmCn9EB-bZ4-I39B4RdqYOeNiCTPr1eOqMXxaAgortglJA'
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
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
					type: 'gx:GaiaXTermsAndConditions'
				},
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-22T14:41:15.096514618Z',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				type: ['VerifiableCredential'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:17.683Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..H-SLRuyM2q194B2TVmShWBWi_8NZAMOTBwuJLWCpQx9mOhhGHGEkZqd-42KYIpriPevBoGPCdwtJ-ICmtbeU-IFvmLU4yPcsH_mVb1JD2GzslcRCi4Cx2fz8gOpTk8K09JT-WAbEUeM_1NP_nW4q3gVYuRI2ctvqV7A8-nn9jMUxgH0Ba0r0tHDtn9i4YIBF7qXUz5T1dg23tnxEmEVEz_Iup2Vi7a_5UhOqtY_cdpt00lEFasF7mErSYuzOxVbKt0o_mP6mOcMuOjK1yxOPoSAyQV_hZzH3XszfYvMLdwT2w0Fvz5Lihb8ErJGQsYIM5leWI0RuLiub1eXlYUoQmA'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-23T16:30:57.209178226Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': 'e9aedbf8c9b87ecb285a45c84444c72c69c546beb9457daa0e3543edd9b3b76c'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://wizard-api1.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/resource_86e8a7a9-c341-4049-abc7-dcf20e1736fe.json'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:labelLevel': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_52faca44-8ee4-4954-ad99-1043542f9bf1.json'],
					'gx:providedBy': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
					'gx:name': 'Service_soft_level',
					'gx:description': 'test service data'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-25T12:46:55.876Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-23T18:43:21.237205029Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://www.volkswagen.co.uk/en/privacy.html',
						'gx:hash': 'de6375fa23c25ea4efb79a66b91d3ad6f270614e38622d9e730985f4f159cfa1'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'Support Centre',
						'gx:accessType': 'physical',
						'gx:formatType': 'application/pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/resource_a00d558e-f8b1-4f7b-a42b-4ba9957df400.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
					'gx:name': 'Volkswagon India 5 Year Service Package',
					'gx:description': 'SO1'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-23T13:13:24.487Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..BY9SK1RqsoaX4kDc3PkmNFlfz0Hk9liOhyHWcCCtud7vfByrv8WOYRqp4JvLd4_3QOHF3Qg2aVTveLiTw9hKPzxc87_cF_RmEeIptHlpAqGvlZa3VN-5PFjGdXFLbdBw4zzs4s6OybhKdeYyeVSAKUgO855GGnkoxa1rOnO53DkExZ5UdinbJSvSramPgACPA14fEYjLQwmTbmKU6shnTMDw92HB-lolVfLNi-EFGstATnaL8z3aznx8xFB1mhiujyCG1BqWGF7TjiBEiuXUQ7v5y7BmYv7N50XRrWozm5qXS7xAvO1Iegtwl8lV1VDpJWN55Omk4FQOcSbGRaG-bQ'
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
		id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/a8ad7ca1-6cd8-4f65-aece-495cec34bc4b',
		issuer: 'did:web:compliance.lab.gaia-x.eu:development',
		issuanceDate: '2023-08-25T12:47:09.776Z',
		expirationDate: '2023-11-23T12:47:09.776Z',
		credentialSubject: [
			{
				type: 'gx:compliance',
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
				'gx:integrity': 'sha256-67d8a0b190e5c300b3ac7c4f57e1f5ca9180aa33198ee06345b1c99d54592bcf',
				'gx:version': '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
				'gx:integrity': 'sha256-4e093c4979652cd0a6e0ff83e441f05b6e0e8d3c879c5443b2bb61ab4bb1f032',
				'gx:version': '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
				'gx:integrity': 'sha256-6f18993ad25984393c2c1a8395f028d8bbf91db492b1c103f496a5a01089a634',
				'gx:version': '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
				'gx:integrity': 'sha256-726533fd93da9ae5e5420cd76a65adca8db810a06098b8c4894fc4d85c11abdb',
				'gx:version': '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
				'gx:integrity': 'sha256-2379edc62860f181a05563211ebe0f36775b3882581e8721ec7def00dd5731f8',
				'gx:version': '22.10'
			}
		],
		proof: {
			type: 'JsonWebSignature2020',
			created: '2023-08-25T12:47:10.429Z',
			proofPurpose: 'assertionMethod',
			jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..EfUcCFQGEEOZZHPwEwcl0r8V4LW3gR34_YA-2z5EM-1JzgQw_eA6iJmEsjc4SLRF-GMkavQNkbB3qpcofzmJWG_pACFTb-uoV9GRriq3oHo2NEQ3INNjhg_lrAs78hLSPTCu8cuGOMxK2q4QAaRcZCMIuVOpaAybfaW8Ym-5lscOuS7zp1qPy8WofrdINPN5xOWWRdQrkHnnHIkQ5ZrmrnAzr1vUv67k_xvhJfRr3Z7XJTqLupe76eRVpw9x4U3qqPrtGXE1afKZN6Skhxcya1Sv2hi263GJuO-zJYLT1a0R1mSITELQzg_5-2BpuWpC3dUZuWnp9hMY6my1-CyqSA',
			verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
		}
	},
	veracityResponse: {
		veracity: 0.25,
		certificateDetails: {
			validFrom: 'Aug 22 13:39:54 2023 GMT',
			validTo: 'Nov 20 13:39:53 2023 GMT',
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
				commonName: 'ferrari.smart-x.smartsenselabs.com'
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
				'gx:legalName': 'Ferrari S.p.A.',
				'gx:headquarterAddress': {
					'gx:countrySubdivisionCode': 'BE-BRU'
				},
				'gx:legalAddress': {
					'gx:countrySubdivisionCode': 'BE-BRU'
				},
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
				type: 'gx:LegalParticipant',
				'gx:legalRegistrationNumber': {
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1'
				}
			},
			'@context': [
				'https://www.w3.org/2018/credentials/v1',
				'https://w3id.org/security/suites/jws-2020/v1',
				'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
			],
			type: ['VerifiableCredential'],
			id: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-22T14:41:15.096514618Z',
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-22T14:41:17.396Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..bYibkJs5ci0QXMdwwoGEPiCXTk9Kgl5a6EzczrcznWxRrsmhMQD22R6F_0tjlu7uTgwwjjWfBrh0kkKPJ8ELUsOWpRRTWvkBEc5pd9NSz9RCLzTFUOTRXIPeY9_BS-yRckZXBY2xB0jVCJ6lBZIeGUJDy1qXb2fc3_erNhMZF51CH2CSg5EtO3e6dtDMCx6rhJ3r32et0uxppQo5riIQ_R3WaPZ8qq2MRFFZiGtVPpk7Uz6aXHR3lL5frWNYxslb1wTxSFEHk-z1AHKs4ZUBVMMmpQ-dfihgyh1BAfaybcjDdeMUPwODqYxDH3n1Wirh47ZJKWmyzTpNc1OKfGliKw'
			}
		},
		{
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			type: ['VerifiableCredential'],
			id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
			issuer: 'did:web:registration.lab.gaia-x.eu:development',
			issuanceDate: '2023-08-22T14:41:15.806Z',
			credentialSubject: {
				'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
				type: 'gx:legalRegistrationNumber',
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
				'gx:leiCode': '9695007586GCAKPYJ703',
				'gx:leiCode-countryCode': 'FR'
			},
			evidence: [
				{
					'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
					'gx:executionDate': '2023-08-22T14:41:15.806Z',
					'gx:evidenceOf': 'gx:leiCode'
				}
			],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-22T14:41:16.756Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DnK9JSd_fv5AJEFBV6CUyvJBjhBd-An5OvPyOLW3wHxIUfXB3mypV9rEr5ymvq1Hhf0c8JEi2q14Kd84ugS6XZtq4rHP3lagnsmaUOYwV47kJOt9ZG0GjNsF9u5faIdb4NjiSJAl89rIt8e8WbcZHm2sVxqJYAOS14oKFLb6sFNvtU1IWGy3-LB-A1iYd1bpHlZdnbGLLh_HLNfOSrrSzUoHawvKtTt1RRwn_Ymf-xYjALoVV3o-R6Kto0Sq3GXv-vxqcvOhdV4NcgdHbXVZ89x39n7tu4DeaKVh2L9XdmCn9EB-bZ4-I39B4RdqYOeNiCTPr1eOqMXxaAgortglJA'
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
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
				type: 'gx:GaiaXTermsAndConditions'
			},
			id: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-22T14:41:15.096514618Z',
			issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
			type: ['VerifiableCredential'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-22T14:41:17.683Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..H-SLRuyM2q194B2TVmShWBWi_8NZAMOTBwuJLWCpQx9mOhhGHGEkZqd-42KYIpriPevBoGPCdwtJ-ICmtbeU-IFvmLU4yPcsH_mVb1JD2GzslcRCi4Cx2fz8gOpTk8K09JT-WAbEUeM_1NP_nW4q3gVYuRI2ctvqV7A8-nn9jMUxgH0Ba0r0tHDtn9i4YIBF7qXUz5T1dg23tnxEmEVEz_Iup2Vi7a_5UhOqtY_cdpt00lEFasF7mErSYuzOxVbKt0o_mP6mOcMuOjK1yxOPoSAyQV_hZzH3XszfYvMLdwT2w0Fvz5Lihb8ErJGQsYIM5leWI0RuLiub1eXlYUoQmA'
			}
		},
		{
			type: 'VerifiableCredential',
			id: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-23T16:30:57.209178226Z',
			credentialSubject: {
				'gx:termsAndConditions': {
					'gx:URL': 'https://aws.amazon.com/service-terms/',
					'gx:hash': 'e9aedbf8c9b87ecb285a45c84444c72c69c546beb9457daa0e3543edd9b3b76c'
				},
				'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi_policy.json'],
				'gx:dataAccountExport': {
					'gx:requestType': 'API',
					'gx:accessType': 'physical',
					'gx:formatType': 'pdf'
				},
				'gx:aggregationOf': [
					{
						id: 'https://wizard-api1.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/resource_86e8a7a9-c341-4049-abc7-dcf20e1736fe.json'
					}
				],
				'gx:dependsOn': [
					{
						id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json'
					}
				],
				'gx:dataProtectionRegime': 'GDPR2016',
				type: 'gx:ServiceOffering',
				'gx:labelLevel': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_52faca44-8ee4-4954-ad99-1043542f9bf1.json'],
				'gx:providedBy': {
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
				'gx:name': 'Service_soft_level',
				'gx:description': 'test service data'
			},
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-25T12:46:55.876Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
			}
		},
		{
			type: 'VerifiableCredential',
			id: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
			issuanceDate: '2023-08-23T18:43:21.237205029Z',
			credentialSubject: {
				'gx:termsAndConditions': {
					'gx:URL': 'https://www.volkswagen.co.uk/en/privacy.html',
					'gx:hash': 'de6375fa23c25ea4efb79a66b91d3ad6f270614e38622d9e730985f4f159cfa1'
				},
				'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS_policy.json'],
				'gx:dataAccountExport': {
					'gx:requestType': 'Support Centre',
					'gx:accessType': 'physical',
					'gx:formatType': 'application/pdf'
				},
				'gx:aggregationOf': [
					{
						id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/resource_a00d558e-f8b1-4f7b-a42b-4ba9957df400.json'
					}
				],
				'gx:dataProtectionRegime': 'GDPR2016',
				type: 'gx:ServiceOffering',
				'gx:providedBy': {
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
				'gx:name': 'Volkswagon India 5 Year Service Package',
				'gx:description': 'SO1'
			},
			'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
			proof: {
				type: 'JsonWebSignature2020',
				created: '2023-08-23T13:13:24.487Z',
				proofPurpose: 'assertionMethod',
				verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
				jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..BY9SK1RqsoaX4kDc3PkmNFlfz0Hk9liOhyHWcCCtud7vfByrv8WOYRqp4JvLd4_3QOHF3Qg2aVTveLiTw9hKPzxc87_cF_RmEeIptHlpAqGvlZa3VN-5PFjGdXFLbdBw4zzs4s6OybhKdeYyeVSAKUgO855GGnkoxa1rOnO53DkExZ5UdinbJSvSramPgACPA14fEYjLQwmTbmKU6shnTMDw92HB-lolVfLNi-EFGstATnaL8z3aznx8xFB1mhiujyCG1BqWGF7TjiBEiuXUQ7v5y7BmYv7N50XRrWozm5qXS7xAvO1Iegtwl8lV1VDpJWN55Omk4FQOcSbGRaG-bQ'
			}
		}
	],
	serviceOfferingProof: {
		type: 'JsonWebSignature2020',
		created: '2023-08-25T12:46:55.876Z',
		proofPurpose: 'assertionMethod',
		verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
		jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
	},
	serviceOfferingVP: {
		'@context': 'https://www.w3.org/2018/credentials/v1',
		type: ['VerifiablePresentation'],
		verifiableCredential: [
			{
				credentialSubject: {
					'gx:legalName': 'Ferrari S.p.A.',
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalRegistrationNumber': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1'
					}
				},
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-22T14:41:15.096514618Z',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:17.396Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..bYibkJs5ci0QXMdwwoGEPiCXTk9Kgl5a6EzczrcznWxRrsmhMQD22R6F_0tjlu7uTgwwjjWfBrh0kkKPJ8ELUsOWpRRTWvkBEc5pd9NSz9RCLzTFUOTRXIPeY9_BS-yRckZXBY2xB0jVCJ6lBZIeGUJDy1qXb2fc3_erNhMZF51CH2CSg5EtO3e6dtDMCx6rhJ3r32et0uxppQo5riIQ_R3WaPZ8qq2MRFFZiGtVPpk7Uz6aXHR3lL5frWNYxslb1wTxSFEHk-z1AHKs4ZUBVMMmpQ-dfihgyh1BAfaybcjDdeMUPwODqYxDH3n1Wirh47ZJKWmyzTpNc1OKfGliKw'
				}
			},
			{
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				type: ['VerifiableCredential'],
				id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
				issuer: 'did:web:registration.lab.gaia-x.eu:development',
				issuanceDate: '2023-08-22T14:41:15.806Z',
				credentialSubject: {
					'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
					type: 'gx:legalRegistrationNumber',
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
					'gx:leiCode': '9695007586GCAKPYJ703',
					'gx:leiCode-countryCode': 'FR'
				},
				evidence: [
					{
						'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
						'gx:executionDate': '2023-08-22T14:41:15.806Z',
						'gx:evidenceOf': 'gx:leiCode'
					}
				],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:16.756Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DnK9JSd_fv5AJEFBV6CUyvJBjhBd-An5OvPyOLW3wHxIUfXB3mypV9rEr5ymvq1Hhf0c8JEi2q14Kd84ugS6XZtq4rHP3lagnsmaUOYwV47kJOt9ZG0GjNsF9u5faIdb4NjiSJAl89rIt8e8WbcZHm2sVxqJYAOS14oKFLb6sFNvtU1IWGy3-LB-A1iYd1bpHlZdnbGLLh_HLNfOSrrSzUoHawvKtTt1RRwn_Ymf-xYjALoVV3o-R6Kto0Sq3GXv-vxqcvOhdV4NcgdHbXVZ89x39n7tu4DeaKVh2L9XdmCn9EB-bZ4-I39B4RdqYOeNiCTPr1eOqMXxaAgortglJA'
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
					id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
					type: 'gx:GaiaXTermsAndConditions'
				},
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-22T14:41:15.096514618Z',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				type: ['VerifiableCredential'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-22T14:41:17.683Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..H-SLRuyM2q194B2TVmShWBWi_8NZAMOTBwuJLWCpQx9mOhhGHGEkZqd-42KYIpriPevBoGPCdwtJ-ICmtbeU-IFvmLU4yPcsH_mVb1JD2GzslcRCi4Cx2fz8gOpTk8K09JT-WAbEUeM_1NP_nW4q3gVYuRI2ctvqV7A8-nn9jMUxgH0Ba0r0tHDtn9i4YIBF7qXUz5T1dg23tnxEmEVEz_Iup2Vi7a_5UhOqtY_cdpt00lEFasF7mErSYuzOxVbKt0o_mP6mOcMuOjK1yxOPoSAyQV_hZzH3XszfYvMLdwT2w0Fvz5Lihb8ErJGQsYIM5leWI0RuLiub1eXlYUoQmA'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-23T16:30:57.209178226Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://aws.amazon.com/service-terms/',
						'gx:hash': 'e9aedbf8c9b87ecb285a45c84444c72c69c546beb9457daa0e3543edd9b3b76c'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'API',
						'gx:accessType': 'physical',
						'gx:formatType': 'pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://wizard-api1.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/resource_86e8a7a9-c341-4049-abc7-dcf20e1736fe.json'
						}
					],
					'gx:dependsOn': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:labelLevel': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_52faca44-8ee4-4954-ad99-1043542f9bf1.json'],
					'gx:providedBy': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
					'gx:name': 'Service_soft_level',
					'gx:description': 'test service data'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-25T12:46:55.876Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
				}
			},
			{
				type: 'VerifiableCredential',
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				issuanceDate: '2023-08-23T18:43:21.237205029Z',
				credentialSubject: {
					'gx:termsAndConditions': {
						'gx:URL': 'https://www.volkswagen.co.uk/en/privacy.html',
						'gx:hash': 'de6375fa23c25ea4efb79a66b91d3ad6f270614e38622d9e730985f4f159cfa1'
					},
					'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS_policy.json'],
					'gx:dataAccountExport': {
						'gx:requestType': 'Support Centre',
						'gx:accessType': 'physical',
						'gx:formatType': 'application/pdf'
					},
					'gx:aggregationOf': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/resource_a00d558e-f8b1-4f7b-a42b-4ba9957df400.json'
						}
					],
					'gx:dataProtectionRegime': 'GDPR2016',
					type: 'gx:ServiceOffering',
					'gx:providedBy': {
						id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0'
					},
					id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
					'gx:name': 'Volkswagon India 5 Year Service Package',
					'gx:description': 'SO1'
				},
				'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-23T13:13:24.487Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..BY9SK1RqsoaX4kDc3PkmNFlfz0Hk9liOhyHWcCCtud7vfByrv8WOYRqp4JvLd4_3QOHF3Qg2aVTveLiTw9hKPzxc87_cF_RmEeIptHlpAqGvlZa3VN-5PFjGdXFLbdBw4zzs4s6OybhKdeYyeVSAKUgO855GGnkoxa1rOnO53DkExZ5UdinbJSvSramPgACPA14fEYjLQwmTbmKU6shnTMDw92HB-lolVfLNi-EFGstATnaL8z3aznx8xFB1mhiujyCG1BqWGF7TjiBEiuXUQ7v5y7BmYv7N50XRrWozm5qXS7xAvO1Iegtwl8lV1VDpJWN55Omk4FQOcSbGRaG-bQ'
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
								'gx:legalName': 'Ferrari S.p.A.',
								'gx:headquarterAddress': {
									'gx:countrySubdivisionCode': 'BE-BRU'
								},
								'gx:legalAddress': {
									'gx:countrySubdivisionCode': 'BE-BRU'
								},
								id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
								type: 'gx:LegalParticipant',
								'gx:legalRegistrationNumber': {
									id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1'
								}
							},
							'@context': [
								'https://www.w3.org/2018/credentials/v1',
								'https://w3id.org/security/suites/jws-2020/v1',
								'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
							],
							type: ['VerifiableCredential'],
							id: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-22T14:41:15.096514618Z',
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-22T14:41:17.396Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..bYibkJs5ci0QXMdwwoGEPiCXTk9Kgl5a6EzczrcznWxRrsmhMQD22R6F_0tjlu7uTgwwjjWfBrh0kkKPJ8ELUsOWpRRTWvkBEc5pd9NSz9RCLzTFUOTRXIPeY9_BS-yRckZXBY2xB0jVCJ6lBZIeGUJDy1qXb2fc3_erNhMZF51CH2CSg5EtO3e6dtDMCx6rhJ3r32et0uxppQo5riIQ_R3WaPZ8qq2MRFFZiGtVPpk7Uz6aXHR3lL5frWNYxslb1wTxSFEHk-z1AHKs4ZUBVMMmpQ-dfihgyh1BAfaybcjDdeMUPwODqYxDH3n1Wirh47ZJKWmyzTpNc1OKfGliKw'
							}
						},
						{
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							type: ['VerifiableCredential'],
							id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
							issuer: 'did:web:registration.lab.gaia-x.eu:development',
							issuanceDate: '2023-08-22T14:41:15.806Z',
							credentialSubject: {
								'@context': 'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#',
								type: 'gx:legalRegistrationNumber',
								id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
								'gx:leiCode': '9695007586GCAKPYJ703',
								'gx:leiCode-countryCode': 'FR'
							},
							evidence: [
								{
									'gx:evidenceURL': 'https://api.gleif.org/api/v1/lei-records/',
									'gx:executionDate': '2023-08-22T14:41:15.806Z',
									'gx:evidenceOf': 'gx:leiCode'
								}
							],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-22T14:41:16.756Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:registration.lab.gaia-x.eu:development#X509-JWK2020',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..DnK9JSd_fv5AJEFBV6CUyvJBjhBd-An5OvPyOLW3wHxIUfXB3mypV9rEr5ymvq1Hhf0c8JEi2q14Kd84ugS6XZtq4rHP3lagnsmaUOYwV47kJOt9ZG0GjNsF9u5faIdb4NjiSJAl89rIt8e8WbcZHm2sVxqJYAOS14oKFLb6sFNvtU1IWGy3-LB-A1iYd1bpHlZdnbGLLh_HLNfOSrrSzUoHawvKtTt1RRwn_Ymf-xYjALoVV3o-R6Kto0Sq3GXv-vxqcvOhdV4NcgdHbXVZ89x39n7tu4DeaKVh2L9XdmCn9EB-bZ4-I39B4RdqYOeNiCTPr1eOqMXxaAgortglJA'
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
								id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
								type: 'gx:GaiaXTermsAndConditions'
							},
							id: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-22T14:41:15.096514618Z',
							issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
							type: ['VerifiableCredential'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-22T14:41:17.683Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..H-SLRuyM2q194B2TVmShWBWi_8NZAMOTBwuJLWCpQx9mOhhGHGEkZqd-42KYIpriPevBoGPCdwtJ-ICmtbeU-IFvmLU4yPcsH_mVb1JD2GzslcRCi4Cx2fz8gOpTk8K09JT-WAbEUeM_1NP_nW4q3gVYuRI2ctvqV7A8-nn9jMUxgH0Ba0r0tHDtn9i4YIBF7qXUz5T1dg23tnxEmEVEz_Iup2Vi7a_5UhOqtY_cdpt00lEFasF7mErSYuzOxVbKt0o_mP6mOcMuOjK1yxOPoSAyQV_hZzH3XszfYvMLdwT2w0Fvz5Lihb8ErJGQsYIM5leWI0RuLiub1eXlYUoQmA'
							}
						},
						{
							type: 'VerifiableCredential',
							id: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-23T16:30:57.209178226Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://aws.amazon.com/service-terms/',
									'gx:hash': 'e9aedbf8c9b87ecb285a45c84444c72c69c546beb9457daa0e3543edd9b3b76c'
								},
								'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi_policy.json'],
								'gx:dataAccountExport': {
									'gx:requestType': 'API',
									'gx:accessType': 'physical',
									'gx:formatType': 'pdf'
								},
								'gx:aggregationOf': [
									{
										id: 'https://wizard-api1.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/resource_86e8a7a9-c341-4049-abc7-dcf20e1736fe.json'
									}
								],
								'gx:dependsOn': [
									{
										id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json'
									}
								],
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:labelLevel': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_52faca44-8ee4-4954-ad99-1043542f9bf1.json'],
								'gx:providedBy': {
									id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
								'gx:name': 'Service_soft_level',
								'gx:description': 'test service data'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-25T12:46:55.876Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
							}
						},
						{
							type: 'VerifiableCredential',
							id: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
							issuanceDate: '2023-08-23T18:43:21.237205029Z',
							credentialSubject: {
								'gx:termsAndConditions': {
									'gx:URL': 'https://www.volkswagen.co.uk/en/privacy.html',
									'gx:hash': 'de6375fa23c25ea4efb79a66b91d3ad6f270614e38622d9e730985f4f159cfa1'
								},
								'gx:policy': ['https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS_policy.json'],
								'gx:dataAccountExport': {
									'gx:requestType': 'Support Centre',
									'gx:accessType': 'physical',
									'gx:formatType': 'application/pdf'
								},
								'gx:aggregationOf': [
									{
										id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/resource_a00d558e-f8b1-4f7b-a42b-4ba9957df400.json'
									}
								],
								'gx:dataProtectionRegime': 'GDPR2016',
								type: 'gx:ServiceOffering',
								'gx:providedBy': {
									id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0'
								},
								id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
								'gx:name': 'Volkswagon India 5 Year Service Package',
								'gx:description': 'SO1'
							},
							'@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/security/suites/jws-2020/v1'],
							proof: {
								type: 'JsonWebSignature2020',
								created: '2023-08-23T13:13:24.487Z',
								proofPurpose: 'assertionMethod',
								verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
								jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..BY9SK1RqsoaX4kDc3PkmNFlfz0Hk9liOhyHWcCCtud7vfByrv8WOYRqp4JvLd4_3QOHF3Qg2aVTveLiTw9hKPzxc87_cF_RmEeIptHlpAqGvlZa3VN-5PFjGdXFLbdBw4zzs4s6OybhKdeYyeVSAKUgO855GGnkoxa1rOnO53DkExZ5UdinbJSvSramPgACPA14fEYjLQwmTbmKU6shnTMDw92HB-lolVfLNi-EFGstATnaL8z3aznx8xFB1mhiujyCG1BqWGF7TjiBEiuXUQ7v5y7BmYv7N50XRrWozm5qXS7xAvO1Iegtwl8lV1VDpJWN55Omk4FQOcSbGRaG-bQ'
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
					id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/a8ad7ca1-6cd8-4f65-aece-495cec34bc4b',
					issuer: 'did:web:compliance.lab.gaia-x.eu:development',
					issuanceDate: '2023-08-25T12:47:09.776Z',
					expirationDate: '2023-11-23T12:47:09.776Z',
					credentialSubject: [
						{
							type: 'gx:compliance',
							id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#0',
							'gx:integrity': 'sha256-67d8a0b190e5c300b3ac7c4f57e1f5ca9180aa33198ee06345b1c99d54592bcf',
							'gx:version': '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#1',
							'gx:integrity': 'sha256-4e093c4979652cd0a6e0ff83e441f05b6e0e8d3c879c5443b2bb61ab4bb1f032',
							'gx:version': '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://ferrari.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/participant.json#2',
							'gx:integrity': 'sha256-6f18993ad25984393c2c1a8395f028d8bbf91db492b1c103f496a5a01089a634',
							'gx:version': '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_0Tbi.json',
							'gx:integrity': 'sha256-726533fd93da9ae5e5420cd76a65adca8db810a06098b8c4894fc4d85c11abdb',
							'gx:version': '22.10'
						},
						{
							type: 'gx:compliance',
							id: 'https://wizard-api.smart-x.smartsenselabs.com/182af7e9-b10b-42da-95f4-7f8289ec330e/service_Z5RS.json',
							'gx:integrity': 'sha256-2379edc62860f181a05563211ebe0f36775b3882581e8721ec7def00dd5731f8',
							'gx:version': '22.10'
						}
					],
					proof: {
						type: 'JsonWebSignature2020',
						created: '2023-08-25T12:47:10.429Z',
						proofPurpose: 'assertionMethod',
						jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..EfUcCFQGEEOZZHPwEwcl0r8V4LW3gR34_YA-2z5EM-1JzgQw_eA6iJmEsjc4SLRF-GMkavQNkbB3qpcofzmJWG_pACFTb-uoV9GRriq3oHo2NEQ3INNjhg_lrAs78hLSPTCu8cuGOMxK2q4QAaRcZCMIuVOpaAybfaW8Ym-5lscOuS7zp1qPy8WofrdINPN5xOWWRdQrkHnnHIkQ5ZrmrnAzr1vUv67k_xvhJfRr3Z7XJTqLupe76eRVpw9x4U3qqPrtGXE1afKZN6Skhxcya1Sv2hi263GJuO-zJYLT1a0R1mSITELQzg_5-2BpuWpC3dUZuWnp9hMY6my1-CyqSA',
						verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
					}
				}
			},
			trustIndex: {
				veracity: 0.25,
				transparency: 1.6,
				trustIndex: 0.925,
				certificateDetails: {
					validFrom: 'Aug 22 13:39:54 2023 GMT',
					validTo: 'Nov 20 13:39:53 2023 GMT',
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
						commonName: 'ferrari.smart-x.smartsenselabs.com'
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

export const legalParticipantTestJSON = {
	invalidIssuerJSON: {
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidVerificationMethodJSON: {
		issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidLegalParticipant: {
		issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidLegalRegistrationNumber: {
		issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
		vcs: {
			legalParticipant: {}
		}
	},
	invalidGaiaXTermsAndConditions: {
		issuer: 'did:web:casio34.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio34.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
		vcs: {
			legalParticipant: {},
			legalRegistrationNumber: {}
		}
	},
	validReqJSON: {
		issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:casio50.smart-x.smartsenselabs.com',
		privateKey:
			'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ3I4aFpRSGM4emZaN3MKTTlJRWt6eld2SFlLY0hsQUwraFhISXlINEtSL1BVTzJrUlg5RFlGL0J4RnhreUViWUJaR3NObTY5NXc0bXJ5RQpFUUtiVytldGhKRDE4bjhrNVpnbERIV29zZmpLMDVVTGxSK3dWYzEwWXB6eUdlSmlsWHBCWkhuc0tnQ3JpUlcvClJMQXMzVU1EVWpMQkJmUVBrOTlWSlhJRTlTeEJpb2FVYTRDL0d6YXhVdzQyM3hiMHF4Q1VIWHJ4VktQS2sra0QKdFFESmNFK3k5T3dFZjQ2ZjNuRFVYdk84VTZKTUp6dUNJTWxsWDdHVkRLNWdGdlE4TU9Pa3hPdnBpUXV1ZlB1ZwpOSXMzSnJNQmF6cDVvWkVYK3BESFRDOTZ6RHVCVko4MVU0OE9KWVl4aWQzN05lTXJKTk9jMjZlUWlpbm44SjZNCmZLOENNU3hWQWdNQkFBRUNnZ0VBSWR0VzBtcTBPRzdWWXF3bmYvZ2dCQ1p5MWNaazBhTTlUQjNXZkJEYlF5U2sKbHlmRlhTRVNMUm1Pc1Q3bngzU3BuanpIZXAyeitKOWJYR1BmRUFsT09xZitSVGQ5R3A1TTBZcTlCajBaQUpNZAo1M3h6RTIwcHVlK0srTTdvK1VGMm83YXRuVGQrRDBpOGEvK1I4eHVVVE95Y0NzN3B5a0Z6T2RoWU5hcXpEcXB1CkJ4WWFiSnRDMEpSN21OMHk2ZWltNitDeEtleUloc2FRS05Cd21jMklHclZMN0o3TFgwbVFINXF4MWJBYjY0T0gKU3gxb2VxOVdnL1dRN3ZVTG0vaTEwc1REMmxMWmNqVGdYK1JsVjkrWm1JTXErNElwSjZsUUlTaU1jeDIxZkVSawpzdzdCeC9WZ0pKbnlwUlB2S0wwWDhIMER0aG94WXRqSGZUQXZCYmZDc1FLQmdRRE44NXRlSU1QRm1VZ01Qd1M0Cm54dzcvMnA5cHF1Z09vczl6TlR4elhIV012MkVRMVRXRmExVHk5SDJuZnAydFNzaUNPSVNBcnU1Sm9Va3ZCNXEKbVFhVFIrWlpDSWdUNE5iVTZmZUNEZTRMUWZ5eUtxQm5KdU5BUmVlMExuSGx4UHEzTU5DMEU3ZE5BWU5xbE04agpDWXBCTy8zUHhVU014SlhMNWc3K1orMzRDUUtCZ1FEVnV2Sng1YWZZejNNZnh5S0RrVzJHazd3YXEyTDNmcmFtClU2TnZadjl3UjhSb3N0SFRwWmx4aFRKZXFoNU1lcFBrNDluQ09aYmRDaGtGcGN2ZStHbTEzOXUyOCtBcm0vZmEKUXJuZk5VaXg1eEtuRlhZaXR0MzNnemJOYWlCcWJXTm1SSlEzaExmcmNWbWQ3QjQ4M3BOeVIyQW5zd2dnUkVybAphdVFlYUhrczdRS0JnR296bThPL081VHl4UDlqbzhpY2E4L1lsdzV5V3dCR0VEVnZJY1FMQUEvSHZZbHR1eHFtCmxQbW9HZjZGV25uS1ZKSzVaL0tIckV2K3ZCdkVVaDhBQ0M3OG5hRDkwRVlINUdCb3dmUXp3TFBYZERwZjF0VTYKYldkZ1pPbzZKUXVxTnVzdVpnRG1SZGlVMWpLb3grTzJjSy9SQXNJWVpJLytjNHh3ZHZ6amxRZ1pBb0dCQUxDZwpubHVoL3VRZURIWG1pNDlQVDhRM3N1d1hWdUpSeFlBTy9ySEIzTGRkbCtNdVpGa1VNWXF2R01GQ3RXZGVwWG96CkVuS0FSVHpHYTRkUFRQd25MclV2R3RSSEZxcnphaERsczlYU294RGlkWGUvTkxIYmpmUk9hNnUyV0xPYlV0bmgKTXR2dXdrL0FqTjhGa3JlYStSOG4vVDdScFpXRTJxQmRoY2ZiYnNqQkFvR0FESys0NmJtdHVJd0FrRytqNWJsYQpxSXBPRFB2QldiQzk5VnJUVU5DRGNRbDZSRVQ3NjJzdlkya2cyNlFtNUZkdTFSMDA3SHE0aXdHSmNraHUvWDlaCm81NVk4STkwVE1PU2Nvb0FLaEIrc1ZxYmlXUGhwQTlaOXRSUlRXRzQ2WGg2RWtxaGRMSTB0dWJ6eS96aUFLT1QKK052UVdxNE83Q05aTDdBZ2xMR2ZHd0U9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=',
		vcs: {
			legalParticipant: {
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				type: ['VerifiableCredential'],
				id: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				issuanceDate: '2023-07-28T11:13:53.734Z',
				credentialSubject: {
					id: 'https://casio50.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#0',
					type: 'gx:LegalParticipant',
					'gx:legalName': 'Green World',
					'gx:legalRegistrationNumber': {
						id: 'https://casio50.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#1'
					},
					'gx:headquarterAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:legalAddress': {
						'gx:countrySubdivisionCode': 'BE-BRU'
					},
					'gx:parentOrganization': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/195f8f7a-e0b9-4105-a94f-911455ff88ac/participant.json#0'
						}
					],
					'gx:subOrganization': [
						{
							id: 'https://wizard-api.smart-x.smartsenselabs.com/12081064-8878-477e-8092-564a240c69e2/participant.json#0'
						}
					]
				}
			},
			legalRegistrationNumber: {
				'@context': ['https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/participant'],
				type: 'gx:legalRegistrationNumber',
				id: 'https://casio50.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#1',
				'gx:leiCode': '9695007586GCAKPYJ703'
			},
			gaiaXTermsAndConditions: {
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
					id: 'https://casio50.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#2'
				},
				issuer: 'did:web:casio50.smart-x.smartsenselabs.com',
				id: 'did:web:casio50.smart-x.smartsenselabs.com'
			}
		}
	},
	validComplianceResponse: {
		'@context': [
			'https://www.w3.org/2018/credentials/v1',
			'https://w3id.org/security/suites/jws-2020/v1',
			'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
		],
		type: ['VerifiableCredential'],
		id: 'https://compliance.lab.gaia-x.eu/development/credential-offers/20d616a0-c183-453f-9791-c1ef0a867ac2',
		issuer: 'did:web:compliance.lab.gaia-x.eu:development',
		issuanceDate: '2023-08-19T11:07:50.481Z',
		expirationDate: '2023-11-17T11:07:50.481Z',
		credentialSubject: [
			{
				type: 'gx:compliance',
				id: 'https://casio34.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#0',
				integrity: 'sha256-fe58e48d11e9b139279e4ec5dc857ad77a058d7ec6161cad778ee550d76a32e4',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://casio34.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#1',
				integrity: 'sha256-2d98944c67ca015ccde5b7a2e7d6b4455fda5861c825a15a4a6ed5751ed6eac8',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://casio34.smart-x.smartsenselabs.com/d3ef8323-5a75-4a88-a97b-730deb535405/participant.json#2',
				integrity: 'sha256-cebaffa21ad2f6be9678205f3bba48c04a9ac6f499abd8d465954a38e3504aae',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/195f8f7a-e0b9-4105-a94f-911455ff88ac/participant.json#0',
				integrity: 'sha256-be934a813e7c02883d5f7b33fccc9329c97a907bca2af6917d09623122f9736b',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/195f8f7a-e0b9-4105-a94f-911455ff88ac/participant.json#1',
				integrity: 'sha256-16542149ded3da8068ea927bf786fe88d9d0ed7521d90504410994b7495f6993',
				version: '22.10'
			},
			{
				type: 'gx:compliance',
				id: 'https://wizard-api.smart-x.smartsenselabs.com/195f8f7a-e0b9-4105-a94f-911455ff88ac/participant.json#2',
				integrity: 'sha256-7c5dff5936f583077f2a2aa2723103ad6cbbbd045adbf701da5c13828ce9de91',
				version: '22.10'
			},
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
			created: '2023-08-19T11:07:51.250Z',
			proofPurpose: 'assertionMethod',
			jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..MUYt66-dF-G-3cWvkdsCo052Pfsq16QTR0mDCVmuzixziA74iM80phUsUO5xU2uxStZMpk-2QeCFdFBK5VTqeM8Rw312C851BJMD0szq5iMm14CtoJqAX9f5jp5RR7SxKUbJn4Qa67VnSJ5_SeSNYJBkkSBKGOwmxeDTSbXd6kml4yS6jOhler8NGz3i154DtFhr8C25FeMdX7NgTfbyQfEw0gHieBt1M9dHGCCzHHKz16Sn_rUzPWdy_tPgG_VvycqrtA8mITq5lsjSPiU_E-6fezEmKoQW_uYy-6gZN_BCqJX-BGwhMwqMB-RwdRDlZmCBm_PfknhWtAc_vNH0lA',
			verificationMethod: 'did:web:compliance.lab.gaia-x.eu:development#X509-JWK2020'
		}
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
			}
		},
		message: 'VP created successfully.'
	}
}

export const labelLevelTestJSON = {
	invalidIssuerJSON: {
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidVerificationMethodJSON: {
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	invalidLabelLevel: {
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
		verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
		privateKey: 'Base64 -----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
	},
	holderDid: {
		assertionMethod: ['did:web:ferrari.smart-x.smartsenselabs.com#JWK2020-RSA'],
		id: 'did:web:ferrari.smart-x.smartsenselabs.com',
		verificationMethod: [
			{
				controller: 'did:web:ferrari.smart-x.smartsenselabs.com',
				publicKeyJwk: {
					kty: 'RSA',
					e: 'AQAB',
					x5u: 'https://ferrari.smart-x.smartsenselabs.com/.well-known/x509CertificateChain.pem',
					alg: 'PS256',
					n: 'n7HP5FAgJ1YP3ffiw8AU1a0c5qpy4UQD2EsSxDe8EVXmda3bnXUHbKqp7g0Fq_fI52sWdxH1h6THShZwVQkL8N-uuj8m2lB-DzTEXJ9Q2Z2GEUN-3un7O2Sj6ipCsorSGFAwX0rk8Q2eblf5b6Oz5Nc8HL9uxLWY-u5J6GwBZU1xUpnoBXd81WE6tRSmIHlhD3_2iSgfOByrJjAsWoMBLJyiqvVNo5kch10ZQ04FRxK7jY4BwgUjnIHTp_MOzy2DNN8ix9QAIgKTaDzXSJJZinEfNndoNmnjOmrEPJwnVYAyj4wgczdR3ktFfh3uLYr__sZv2z681AztZflWCeNafw'
				},
				id: 'did:web:ferrari.smart-x.smartsenselabs.com',
				type: 'JsonWebKey2020',
				'@context': 'https://w3c-ccg.github.io/lds-jws2020/contexts/v1/'
			}
		],
		'@context': ['https://www.w3.org/ns/did/v1']
	},
	validReqJSON: {
		privateKey:
			'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ2ZzYy9rVUNBblZnL2QKOStMRHdCVFZyUnptcW5MaFJBUFlTeExFTjd3UlZlWjFyZHVkZFFkc3FxbnVEUVdyOThqbmF4WjNFZldIcE1kSwpGbkJWQ1F2dzM2NjZQeWJhVUg0UE5NUmNuMURabllZUlEzN2U2ZnM3WktQcUtrS3lpdElZVURCZlN1VHhEWjV1ClYvbHZvN1BrMXp3Y3YyN0V0Wmo2N2tub2JBRmxUWEZTbWVnRmQzelZZVHExRktZZ2VXRVBmL2FKS0I4NEhLc20KTUN4YWd3RXNuS0txOVUyam1SeUhYUmxEVGdWSEVydU5qZ0hDQlNPY2dkT244dzdQTFlNMDN5TEgxQUFpQXBObwpQTmRJa2xtS2NSODJkMmcyYWVNNmFzUThuQ2RWZ0RLUGpDQnpOMUhlUzBWK0hlNHRpdi8reG0vYlByelVETzFsCitWWUo0MXAvQWdNQkFBRUNnZ0VBQVA3MDlLQ1ViWW10d1lYL1pESTRuN3owd1I3b0x2dXVxKzg5SkMzcHdxeEQKdGQ5QjVaQ3Yvc0RIaS9VT3MrNitoRCttaHVQaEVLcGpid0ZEcFZjL2VPR3VySS9hT0Q1Smh5V3BtU1RNeHdyVQpwZTZ5WHc0QU5GZm5BZzZRNzUyTkJPQnpVckQ5amlLd3JFWm8xVEtsQW9zeHN0ZndGOWd1V0xDMlp2c2d3bjNiClFoT3hhdldHcW9qa29xUnJJV1R2VVNNSzVpQkIyenNGWENHbmY0SmFPZjFjY3VJd0gwQ3lFREtDSHJKaUJjU08KeGxFUk5PQUFicWlGc1I0QU5ldjdZWjFqRk1JU2hJNXRyc0xnSC9LSkE4T21pSWVvWjVPcHV2L3kvaUtyRU9QQgpIdzA0bVNJQ1BXUW5SelRycDVneDRTdUJ5VGVsRTh0aFFNVXUwV0p5cVFLQmdRREtmOWVYYWtpeGJYdFdSQ0FHCmJzR1B1elNVK1FuMUp6WVpRdkE1NnEyWnhKT3lUTXI0aEpsN081UEZNdmtpT2tRWnpGdXZXL3VlaFNjbFRkUi8Kc0RnbTNoMDB0KzFPOHRYUU0xVHdibks1MWhRaEZ3RlVLb2xkc1lmNlJ6dk9MRy9DYmZiZld0Rkd4NFR0aFJLagp0T2ZUMTFKZ3phTS9VeGxUamszaE41NXlpUUtCZ1FESjR0ZmZiWFFlVGYxc2VSNXVtaWxzSFlJKzk2QmNXOUFMCjNNSnlOLzNSdWRyVTlHclExY2FBbmE4N1F6cEFrVk05MlZDVGpFT00rOW0vTkJCTlBVR3h4bWdQN2lWRFlqQWMKdVZRckVscWJMR0g3QUN4KytsMXZpYWlPZ3Q4VnpoL2l1WkpRaThWR0ZUd2tIVDk1UXRNaHRxRzI4QS8vVVpSOQpGZ3VacW1sQ3h3S0JnUURJK3F0cVAzV1lpNVhQSDl3OUppMzhUb3c0a3hlNzlrZnVPSTZlblBuaDFNWFdQL3R2ClBvUHFXRTRvZVpma3pibUxkVlZHTFdBRmpCZzNJUkVZRGprYzhuUkFQNUJMUEI3VC9pNStWdENNK3htTllmelMKb1VrbThhMkl6S3hoeTU2OGRWR0JpdXlNZURmSldic1BPZHloVjJNT2F1cHNUamlqd21ndmNIbFZLUUtCZ0NRYQpkUkIzdW5SUTdpa2YzOWxYcUdDMVJqMk1leGtKTWtOc3p6a3QyaTVQVmxzTytxc3VEN21nZVYzWHYrc2NFZzdWCmRodHMwZ2U4WWt4WE96TVU2VktwY0tLb3EvRkk5ZUd0SXVndytCTVg5TTIyVWo3QzkwS2pFNG1vemN4UWVGTkwKYkdjTEY5UllwOUN0aWxSZEp2UzRmR01DdTFtbGRUQ0phTG1xUi9peEFvR0FaeGhlcXR0UHVrWUU4ditJcjRCWQp4VjRIVFF1NnpHOEdoeFplVWJnOW00aWdBR09HbXBITE5uWml4aUZaZ0pDbFpzVmtnd3Avd3h5bWJlQStnNW9lCk5zWm02T2I1R2FaRmFPNlZuVHlSdlVrWS9xVmNjRlBzUSt0ZEVIUG5OVVhGNHF3cjJWVERCUGk0czRjTDJ1bUEKS1h2YnV3ZVVzRmE4YjlSTTVUVm16Rjg9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0K',
		vcs: {
			labelLevel: {
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				issuanceDate: '2023-08-25T09:12:08.974938894Z',
				credentialSubject: {
					'gx:criteria': {
						'P1.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.8': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.9': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.10': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.8': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.9': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.10': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.11': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.12': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.13': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.14': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.15': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.16': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.17': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.18': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.19': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.20': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P4.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P4.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						}
					},
					'gx:assignedTo': 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/service_FTh1.json',
					id: 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_185087b6-eb3c-4464-9cd0-c2fcef716c28.json',
					type: 'gx:ServiceOfferingLabel'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_185087b6-eb3c-4464-9cd0-c2fcef716c28.json',
				type: ['VerifiableCredential'],
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com'
			}
		},
		verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
		issuer: 'did:web:ferrari.smart-x.smartsenselabs.com'
	},
	successResponse: {
		data: {
			selfDescriptionCredential: {
				'@context': [
					'https://www.w3.org/2018/credentials/v1',
					'https://w3id.org/security/suites/jws-2020/v1',
					'https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#'
				],
				issuanceDate: '2023-08-25T09:12:08.974938894Z',
				credentialSubject: {
					'gx:criteria': {
						'P1.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.8': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.9': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.2.10': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P1.3.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.2.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P2.3.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.8': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.9': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.10': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.11': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.12': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.13': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.14': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.15': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.16': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.17': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.18': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.19': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P3.1.20': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P4.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P4.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.2': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.3': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.4': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.5': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.6': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.1.7': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						},
						'P5.2.1': {
							evidence: {
								website: '',
								pdf: {},
								vc: {}
							},
							response: 'Confirm',
							reason: ''
						}
					},
					'gx:assignedTo': 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/service_FTh1.json',
					id: 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_185087b6-eb3c-4464-9cd0-c2fcef716c28.json',
					type: 'gx:ServiceOfferingLabel',
					'gx:labelLevel': 'L1'
				},
				id: 'https://wizard-api.smart-x.smartsenselabs.com182af7e9-b10b-42da-95f4-7f8289ec330e/labelLevel_185087b6-eb3c-4464-9cd0-c2fcef716c28.json',
				type: ['VerifiableCredential'],
				issuer: 'did:web:ferrari.smart-x.smartsenselabs.com',
				proof: {
					type: 'JsonWebSignature2020',
					created: '2023-08-25T12:46:55.876Z',
					proofPurpose: 'assertionMethod',
					verificationMethod: 'did:web:ferrari.smart-x.smartsenselabs.com',
					jws: 'eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..R9KRgGUYzI6HGIwLeyshlD_Jc6n0NHvZZ7LT0fkjWVlITt-yQXmX_Uab6nAXgfXF-3VClmBqg2R9F6GRB9xSl_CutHv6H4RCG5t7mW_13QY3EQuqph7hPh_O8Cs2byuY5YtOpGZ2lLyU1svb-LdS4q3GO3rdUolDFf_s2Qds_iDKYJVR1ydEo8va-iQhKZXQF6CbSU0wZU0z0se4X1CFMtM6kmvdZjQgI--7UjjUDOyhiAbBXof2_MvCyxKULpe6d1qhmScueS_kXZvwrechl_oN54U-3bEAisc73br2LKcbtndT2qS9L23p1XuAc50BdlSLtQaH_qIw91D9oozX0w'
				}
			},
			complianceCredential: {}
		},
		message: 'Label Level SD signed successfully'
	}
}
