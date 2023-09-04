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
	static readonly DID_VERIFY = 'DID verified successfully.'
	static readonly RN_VERIFY = 'Registration number verified successfully.'
	static readonly DID_VERIFY_FAILED = 'DID verification failed.'
	static readonly RN_VERIFY_FAILED = 'Registration number verification failed.'
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
	static readonly LL_SIGN_SUCCESS = 'Label Level SD signed successfully'
	static readonly SD_SIGN_FAILED = 'Service offering SD signing failed'
	static readonly LL_SIGN_FAILED = 'Label Level SD signing failed'
	static readonly X5U_NOT_FOUND = 'X5U not found from the holder DID'
	static readonly CS_EMPTY = 'Credential subject not found'
	static readonly LABEL_LEVEL_CALC_FAILED = 'Failed to calculate label level'
	static readonly LABEL_LEVEL_CALC_FAILED_INVALID_KEY = 'Rule point key not found in criteria json - '
	static readonly PK_DECRYPT_FAIL = 'Fail to decrypt primary key'
	static readonly SD_SIGN_VALIDATION_FAILED = 'Service offering SD validation failed'
	static readonly COMPLIANCE_CRED_FOUND_FAILED = 'Compliance Credential not found'
	static readonly PARTICIPANT_VC_INVALID = 'Verifiable Credential not valid'
	static readonly VALIDATION_ERROR = 'Validation Error, please provide valid req.body'
}

export const ROUTES = {
	APP_NAME: '',
	API: '',
	V1: '/v1',
	V1_APIS: {
		LEGAL_PARTICIPANT: '/gaia-x/legal-participant',
		SERVICE_OFFERING: '/gaia-x/service-offering',
		RESOURCE: '/gaia-x/resource',
		LABEL_LEVEL: '/gaia-x/label-level',
		VERIFY: '/gaia-x/verify',
		CREATE_WEB_DID: '/create-web-did',
		VERIFY_WEB_DID: '/verify-web-did',
		GET_TRUST_INDEX: '/get/trust-index',
		REGISTRATION_NUMBER: '/gaia-x/validate-registration-number',
		UPDATE_LOG: '/update-log'
	},
	HEALTH: '/health'
}
export const LABEL_LEVEL_RULE: any = {
	BC: [
		'P1.1.1',
		'P1.1.3',
		'P1.1.4',
		'P1.2.1',
		'P1.2.2',
		'P1.2.3',
		'P1.2.4',
		'P1.2.5',
		'P1.2.6',
		'P1.2.7',
		'P1.2.8',
		'P1.2.9',
		'P1.2.10',
		'P1.3.1',
		'P1.3.2',
		'P1.3.3',
		'P1.3.4',
		'P1.3.5',
		'P2.1.2',
		'P2.1.3',
		'P2.2.1',
		'P2.2.2',
		'P2.2.3',
		'P2.2.5',
		'P2.2.6',
		'P2.2.7',
		'P2.3.2',
		'P2.3.3',
		'P3.1.1',
		'P3.1.2',
		'P3.1.3',
		'P3.1.4',
		'P3.1.5',
		'P3.1.6',
		'P3.1.7',
		'P3.1.8',
		'P3.1.9',
		'P3.1.10',
		'P3.1.11',
		'P3.1.12',
		'P3.1.13',
		'P3.1.14',
		'P3.1.15',
		'P3.1.16',
		'P3.1.17',
		'P3.1.18',
		'P3.1.19',
		'P3.1.20',
		'P4.1.1',
		'P4.1.2',
		'P5.2.1'
	],
	L1: ['P1.1.2', 'P2.1.1', 'P2.2.4', 'P2.3.1']
	// L2: ['P5.1.1'],
	// L3: ['P5.1.2', 'P5.1.3', 'P5.1.4', 'P5.1.5', 'P5.1.6', 'P5.1.7']
}
