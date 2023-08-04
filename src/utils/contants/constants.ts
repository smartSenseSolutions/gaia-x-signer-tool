export class AppConst {
	static readonly RSA_ALGO = 'PS256'
	static readonly LEGAL_PARTICIPANT = 'LegalParticipant'
	static readonly SERVICE_OFFER = 'ServiceOffering'
	static readonly FLATTEN_ENCRYPT_ALGORITHM = 'RSA-OAEP-256'
	static readonly FLATTEN_ENCRYPT_ENCODING = 'A256GCM'
	static readonly VERIFY_POLICIES = ['checkSignature', 'gxCompliance']
	static readonly REQUEST_TYPES = ['API', 'email', 'webform', 'unregisteredLetter', 'registeredLetter', 'supportCenter']
	static readonly ACCESS_TYPES = ['digital', 'physical']
	static readonly VERIFY_LP_POLICIES = ['integrityCheck', 'holderSignature', 'complianceSignature', 'complianceCheck']
}

export class AppMessages {
	static readonly CLAIM_SIG_VERIFY_FAILED = 'Claim signature verification failed'
	static readonly DID_SUCCESS = 'DID created successfully.'
	static readonly DID_FAILED = 'DID creation failed.'
	static readonly DID_VALIDATION = 'DID validation failed.'
	static readonly KEYPAIR_VALIDATION = 'Key pair validation failed'
	static readonly VC_SUCCESS = 'VC created successfully.'
	static readonly VC_VALIDATION = 'VC validation failed.'
	static readonly VC_FAILED = 'VC creation failed.'
	static readonly VP_SUCCESS = 'VP created successfully.'
	static readonly VP_FAILED = 'VP creation failed.'
	static readonly VP_VALIDATION = 'VP validation failed.'
	static readonly SIG_VERIFY_VALIDATION = 'Signature verification api validation failed.'
	static readonly SIG_VERIFY_SUCCESS = 'Policy verification successful'
	static readonly SIG_VERIFY_FAILED = 'Policy verification failed'
	static readonly CERT_VALIDATION_FAILED = 'Certificates verification failed against the Gaia-x Registry'
	static readonly PUB_KEY_MISMATCH = 'Public Key from did and SSL certificates do not match'
	static readonly ONLY_JWS2020 = 'Only JsonWebSignature2020 is supported'
	static readonly PARTICIPANT_DID_FETCH_FAILED = 'Participant DID fetching failed'
	static readonly PARTICIPANT_VC_FOUND_FAILED = 'Participant VC not found'
	static readonly SO_SD_FETCH_FAILED = 'Service offering self description fetching failed'
	static readonly BAD_DATA = 'Bad data'
	static readonly TRUST_INDEX_CALC_FAILED = 'Trust index calculation failed'
	static readonly SD_SIGN_SUCCESS = 'Service offering SD signed successfully'
	static readonly SD_SIGN_FAILED = 'Service offering SD signing failed'
	static readonly SD_SIGN_VALIDATION_FAILED = 'Service offering SD validation failed'
	static readonly COMPLIANCE_CRED_FOUND_FAILED = 'Compliance Credential not found'
	static readonly PARTICIPANT_VC_INVALID = 'Verifiable Credential not valid'
}

export const ROUTES = {
	APP_NAME: '',
	API: '',
	V1: '/v1',
	V1_APIS: {
		LEGAL_PARTICIPANT: '/gaia-x/legal-participant',
		SERVICE_OFFERING: '/gaia-x/service-offering',
		VERIFY: '/verify'
	}
}
