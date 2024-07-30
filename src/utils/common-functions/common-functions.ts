import axios from 'axios'
import crypto, { X509Certificate } from 'crypto'
import * as jose from 'jose'
import jsonld from 'jsonld'

import { DidDocument, LegalRegistrationNumberDto, Service, SignatureDto, VerifiableCredentialDto, VerificationMethod, X509CertificateDetail } from '../../interface'
import { AppConst, AppMessages, LABEL_LEVEL_RULE, W3C_CONTEXT } from '../constants'
import { logger } from '../logger'

class Utils {
	generateDID(didId: string, publicKeyJwk: any, services: Service[]): any {
		const did: DidDocument = {
			'@context': ['https://www.w3.org/ns/did/v1'],
			id: didId,
			verificationMethod: [
				{
					'@context': 'https://w3c-ccg.github.io/lds-jws2020/contexts/v1/',
					id: didId,
					type: 'JsonWebKey2020',
					controller: didId,
					publicKeyJwk: publicKeyJwk
				}
			],
			assertionMethod: [`${didId}#JWK2020-RSA`]
		}
		if (services) {
			for (let index = 0; index < services.length; index++) {
				// eslint-disable-next-line no-prototype-builtins
				if (!did.hasOwnProperty('service')) {
					did['service'] = []
				}
				const service = services[index]
				service['id'] = `${didId}#${services[index].type.toLocaleLowerCase()}`
				did.service?.push(service)
			}
		}
		// const data = JSON.stringify(did, null, 2);
		return did
	}

	async generatePublicJWK(jose: any, algorithm: string, certificate: string, x5uURL: string): Promise<any> {
		const x509 = await jose.importX509(certificate, algorithm)
		const publicKeyJwk = await jose.exportJWK(x509)
		publicKeyJwk.alg = algorithm
		// publicKeyJwk.x5u = x5uURL
		console.log(x5uURL)
		return publicKeyJwk
	}

	async normalize(jsonld: any, payload: object) {
		try {
			const nodeDocumentLoader = jsonld.documentLoaders.node()
			const customLoader = async (url: string) => {
				if (url in W3C_CONTEXT) {
					return {
						contextUrl: null, // this is for a context via a link header
						document: W3C_CONTEXT[url], // this is the actual document that was loaded
						documentUrl: url // this is the actual context URL after redirects
					}
				}
				// call the default documentLoader
				return nodeDocumentLoader(url)
			}
			jsonld.documentLoader = customLoader

			const canonized = await jsonld.canonize(
				payload,
				{
					algorithm: 'URDNA2015',
					format: 'application/n-quads'
				},
				{ nodeDocumentLoader: customLoader }
			)

			if (canonized === '') throw new Error('Canonized SD is empty')
			return canonized
		} catch (error) {
			logger.error(__filename, 'normalize', `❌ Canonizing failed | Error: ${error}`, '', error)
			return undefined
		}
	}

	sha256(crypto: any, input: object) {
		return crypto.createHash('sha256').update(input).digest('hex')
	}

	async createProof(jose: any, verificationMethod: string, algorithm: string, hash: string, privateKey: string) {
		const proof = {
			type: 'JsonWebSignature2020',
			created: new Date().toISOString(),
			proofPurpose: 'assertionMethod',
			verificationMethod: verificationMethod,
			jws: await this.sign(jose, algorithm, hash, privateKey)
		}

		return proof
	}

	async sign(jose: any, algorithm: string, hash: string, privateKey: string) {
		// const rsaPrivateKey = await jose.importPKCS8(privateKey, algorithm)
		// const txtEncoder = new TextEncoder().encode(hash)
		// const jws = await new jose.CompactSign(txtEncoder).setProtectedHeader({ alg: algorithm, b64: false, crit: ['b64'] }).sign(rsaPrivateKey)
		// return jws
		// const header = {
		// 	alg: 'RS256',
		// 	typ: 'JWT'
		// };
		// const payload = {
		// 	data: hash
		// };
		console.log(hash)
		console.log(privateKey)
		// const base64String = btoa(hash);
		// console.log('input hash : ', base64String)
		const jsonBody = {
			request: {
				certID: 'AS0',
				identity: {},
				binaryinput: hash,
				transport: 'BYNARYNET'
			},
			parameter: {
				jwtId: 'prova',
				audience: 'prova',
				jwsSerializationType: 'JSON'
			}
		}
		const data = JSON.stringify(jsonBody)

		// const response  =  await axios.post('https://arss.demo.firma-automatica.it/ArubaSignService/rest/ArubaSignService/jwsSignature?=null',data)
		//   console.log(response);

		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://arss.demo.firma-automatica.it/ArubaSignService/rest/ArubaSignService/jwsSignature?=null',
			headers: {
				'Content-Type': 'application/json',
				Cookie: 'cookiesession1=678B29974AEB816D7758822168500B9E'
			},
			data: data
		}

		const response = await axios
			.request(config)
			.then((response) => {
				// const jws = `${encodedHeader}.${encodedPayload}.${base64url(response.data.binaryoutput)}`;
				// console.log("error in sig")

				const decodeString = JSON.parse(atob(response.data.binaryoutput))
				// console.log("decoded string -> \n", JSON.stringify(decodeString))

				// decode base 64
				// protected header , sign
				return `${decodeString.signatures[0].protected}..${decodeString.signatures[0].signature}`
			})
			.catch((error) => {
				console.log(error)
			})
		return response
	}

	async verify(jose: any, jws: string, algorithm: string, publicKeyJwk: string, hash: string) {
		try {
			const pubkey = await jose.importJWK(publicKeyJwk, algorithm)
			const result = await jose.compactVerify(jws, pubkey)
			// const protectedHeader = result.protectedHeader
			const content = new TextDecoder().decode(result.payload)
			return content === hash
		} catch (error) {
			logger.error(__filename, 'verify', `❌ Signature Verification Failed | error: ${error}`, '')
			throw error
		}
	}

	async getDDOfromDID(did: string, resolver: any) {
		try {
			const ddo = await resolver.resolve(did)
			if (!ddo.didDocument.verificationMethod || ddo.didDocument === null || ddo.didResolutionMetadata.error) {
				return undefined
			}
			return ddo
		} catch (error) {
			logger.error(__filename, 'getDDOfromDID', `❌ Fetching DDO failed for did: ${did}`, '')
			return undefined
		}
	}

	async validateSslFromRegistryWithUri(uri: string, axios: any) {
		try {
			const registryRes = await axios.post(`${process.env.REGISTRY_TRUST_ANCHOR_URL as string}/trustAnchor/chain/file`, { uri: uri })
			const result = registryRes?.data?.result
			return result
		} catch (error) {
			logger.error(__filename, 'validateSslFromRegistryWithUri', `❌ Validation from registry failed for certificates | error: ${error}`, '')
			return false
		}
	}

	async comparePubKeys(certificates: string, publicKeyJwk: any, jose: any) {
		try {
			const pk = await jose.importJWK(publicKeyJwk)
			const spki = await jose.exportSPKI(pk)

			const x509 = await jose.importX509(certificates, 'RS256')
			const spkiX509 = await jose.exportSPKI(x509)

			return spki === spkiX509
		} catch (error) {
			logger.error(__filename, 'comparePubKeys', `❌ Comparing publicKeyJwk and pub key from certificates failed | error: ${error}`, '')
			return false
		}
	}

	IsValidURL = (str: string) => {
		const urlRegex =
			'^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$'
		const url = new RegExp(urlRegex, 'i')
		const result = str.length < 2083 && url.test(str)
		return result
	}

	async issueRegistrationNumberVC(axios: any, request: LegalRegistrationNumberDto) {
		try {
			const id = request.id.replace('#', '%23')
			// request.id = request.id.replace('#', '%23')
			const url = `${process.env.REGISTRATION_SERVICE as string}?vcid=${id}`
			const regVC = await axios.post(url, request)
			return regVC.data
		} catch (error) {
			logger.error(__filename, 'issueRegistrationNumberVC', `❌ RegistrationNumber failed | Error: ${error}`, '')
			throw new Error(`❌ RegistrationNumber failed | Error: ${error}`)
		}
	}

	async addProof(
		jsonld: any,
		axios: any,
		jose: any,
		crypto: any,
		verifiableCredential: VerifiableCredentialDto,
		privateKey: string,
		verificationMethod: string,
		rsaAlso: string,
		x5uURL: string
	) {
		//why - ?
		const canonizedSD = await this.normalize(
			jsonld,
			// eslint-disable-next-line
			verifiableCredential
		)
		const hash = this.sha256(crypto, canonizedSD)
		logger.info(__filename, 'addProof', `📈 Hashed canonized SD ${hash}`, '')
		//todo : siging process
		const proof = await this.createProof(jose, verificationMethod, rsaAlso, hash, privateKey)
		logger.info(__filename, 'addProof', proof ? '🔒 SD signed successfully' : '❌ SD signing failed', x5uURL)
		//todo : replace actual cert
		const certificate1 = (await axios.get(x5uURL)).data as string
		const publicKeyJwk1 = await this.generatePublicJWK(jose, rsaAlso, certificate1, x5uURL)
		console.log(publicKeyJwk1)
		const certificate = `-----BEGIN CERTIFICATE-----
MIIHHDCCBQSgAwIBAgIQA7/kwiW8SwSnqfSdI2aEaDANBgkqhkiG9w0BAQsFADCB
sjELMAkGA1UEBhMCSVQxDzANBgNVBAcMBkFyZXp6bzEYMBYGA1UECgwPQXJ1YmFQ
RUMgUy5wLkEuMRowGAYDVQRhDBFWQVRJVC0wMTg3OTAyMDUxNzEpMCcGA1UECwwg
UXVhbGlmaWVkIFRydXN0IFNlcnZpY2UgUHJvdmlkZXIxMTAvBgNVBAMMKEFydWJh
UEVDIEVVIFF1YWxpZmllZCBDZXJ0aWZpY2F0ZXMgQ0EgRzEwHhcNMjQwNDA4MTU1
OTI1WhcNMjcwNDA4MTU1OTI1WjCBgTELMAkGA1UEBhMCSVQxDTALBgNVBAQMBENh
aW8xDjAMBgNVBCoMBVRpemlvMR8wHQYDVQQFExZUSU5JVC1BQUFBQkIwMEEwMEEw
MDBGMRMwEQYDVQQDDApUaXppbyBDYWlvMR0wGwYDVQQuExRXU1JFRi03NjIyMTA3
MjczMjgzMzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJhnd4SHOc92
Qj1QVzMqsRIz02Yz7eR0UGzsofV6M6CItrYnyMIMGjqa09Xw63m96O6H7cCc4N1O
a+tJc0qBfM6lrJ3akLDAKbwSgP0LOHms9M/lvrRpbpC5ax2EA6C8YHB6tLaH9KQ1
PG0h1+uFn+nI0yBfTcFnDyIcKDXJznbWgIzuGql7bbcqgjeL6aBdvmDUH8UEhYh8
Ngt96qlu7mZheVnB0onjnDU05P6rf3PEYFleSexKrk9YGM3foipJv79IMObAhetg
ElQCsz29dbkR/ywlkUa7AI6Tox6XGgh0/ntHIJEHl6LBcCmLZuYO7gTiW79NPf4W
8gv7hF8HVncCAwEAAaOCAlswggJXMB8GA1UdIwQYMBaAFMZvO4V70SaxeJpCpCVp
DPb/eqBnMH8GCCsGAQUFBwEBBHMwcTA4BggrBgEFBQcwAoYsaHR0cDovL2NhY2Vy
dC5wZWMuaXQvY2VydHMvYXJ1YmFwZWMtZWlkYXMtZzEwNQYIKwYBBQUHMAGGKWh0
dHA6Ly9vY3NwMDEucGVjLml0L3ZhL2FydWJhcGVjLWVpZGFzLWcxMBsGA1UdEgQU
MBKBEGluZm9AYXJ1YmFwZWMuaXQwcAYDVR0gBGkwZzAJBgcEAIvsQAECMFIGCysG
AQQBgegtAQcCMEMwQQYIKwYBBQUHAgEWNWh0dHBzOi8vd3d3LnBlYy5pdC9yZXBv
c2l0b3J5L2FydWJhcGVjLXF1YWxpZi1jcHMucGRmMAYGBCtMEAYwgbUGCCsGAQUF
BwEDBIGoMIGlMAgGBgQAjkYBATALBgYEAI5GAQMCARQwgYsGBgQAjkYBBTCBgDA+
FjhodHRwczovL3d3dy5wZWMuaXQvcmVwb3NpdG9yeS9hcnViYXBlYy1xdWFsaWYt
cGRzLWl0LnBkZhMCaXQwPhY4aHR0cHM6Ly93d3cucGVjLml0L3JlcG9zaXRvcnkv
YXJ1YmFwZWMtcXVhbGlmLXBkcy1lbi5wZGYTAmVuMD0GA1UdHwQ2MDQwMqAwoC6G
LGh0dHA6Ly9jcmwwMS5wZWMuaXQvdmEvYXJ1YmFwZWMtZWlkYXMtZzEvY3JsMB0G
A1UdDgQWBBSuL3BFqxahOg6t9rroVFDZKa89AzAOBgNVHQ8BAf8EBAMCBkAwDQYJ
KoZIhvcNAQELBQADggIBALQNr+65cy9SM4a+v/XuofwSB8tZ4E+/ZgWKYmsNUQ2s
qqRIFMCCszB1jjXyGa1Y65i2mFSMs6fhZ75CQdqHu3vT5fqGumtz0UoZVYkfCfze
hZigAoguUImpn8ABfMLVUOqINbftLMOj7wMk9pWM5md9XPoVMCXlCKKmVxD9aY1p
/NGcC/TsZFdQ6t7OZrvRkNPBxBOthtTcm8ra2F/LLXXNdzcpDBDZhLtb7VlcJ968
Kdy5+YPEpPmCRgEdCMci2iBD/7vk3F2s/VUwXatF6Y+hgomxneCJVdfIJQ4rt5fl
r+0Xu9slESL7m4nlMvtqDQ4LOfG1O6P7+UsI7mQaxWs5XCH4HQT3SIGjN6O7tvsg
wk+PCwxXKE9palgvyFV6V3QCZbcejnMdfTsz+HNfbbmTiZXMjqUYTzzX8t5FAvZz
dJc8lta3TTbtDJhwoO8GBVBKXHj/aRnQlC3d4Hl45FhvovCslbs3PL2M0p51tAmf
qplLcPZXyxPDD/TCzfPslhb16ukzv/coJmqTbEgaeAT8tPFJ6lKdCovzjBaHTIiG
ibscbGCQNfBh0ZzJp2wm8VeLoTbILW0Cqy1YDbs6wdXZHXbyk1jZAoCPdJrbUmkU
H3ChxYC7PuNLoS/oU5GvIBsTpwhcNi0H9mYXZ/dY48TP894hjcAs80OeksZ0Rx1v
-----END CERTIFICATE-----
`
		const publicKeyJwk = await this.generatePublicJWK(jose, rsaAlso, certificate, x5uURL)
		console.log(proof)
		const verificationResult = await this.verify(jose, proof.jws.replace('..', `.${hash}.`), rsaAlso, publicKeyJwk, hash)
		logger.info(__filename, 'addProof', verificationResult ? '✅ Verification successful' : '❌ Verification failed', '')
		return proof
	}

	async getPublicKeys(ddo: any) {
		const { verificationMethod, id } = ddo
		const jwk = verificationMethod.find((method: any) => method.id.startsWith(id))
		if (!jwk) throw new Error(`verificationMethod ${verificationMethod} not found in did document`)

		const { publicKeyJwk } = jwk
		if (!publicKeyJwk) throw new Error(`Could not load JWK for ${verificationMethod}`)

		const { x5u } = publicKeyJwk
		if (!publicKeyJwk.x5u) throw new Error(`The x5u parameter is expected to be set in the JWK for ${verificationMethod}`)

		return { x5u, publicKeyJwk }
	}

	createVP(vcs: any) {
		return {
			'@context': 'https://www.w3.org/2018/credentials/v1',
			type: ['VerifiablePresentation'],
			verifiableCredential: vcs
		}
	}

	/**
	 * @RefLinks
	 * DID web with multiple keys https://www.w3.org/TR/did-core/#example-did-document-with-many-different-key-types
	 * VC which has verification method pointing to a particular key https://www.w3.org/TR/vc-data-model/#example-a-simple-example-of-a-verifiable-credential
	 * @dev Takes holder vc of self description as input and calculate veracity
	 * @param verifiableCredential Holder self description url
	 * @returns Object | undefined - undefined if bad data else return the veracity value and its certificate details
	 */
	async calcVeracity(verifiableCredential: any, resolver: any) {
		if (verifiableCredential.length) {
			const participantSD = verifiableCredential.find((credential: any) => credential.credentialSubject.type === 'gx:LegalParticipant')
			const {
				issuer: issuerDID,
				proof: { verificationMethod: participantVM }
			} = participantSD

			const ddo = await this.getDDOfromDID(issuerDID, resolver)
			if (!ddo) {
				// Bad Data
				logger.error(__filename, 'calcVeracity', `❌ DDO not found for given did: '${issuerDID}' in proof`, '')
				throw new Error(`DDO not found for given did: '${issuerDID}' in proof`)
			}
			const {
				didDocument: { verificationMethod: verificationMethodArray }
			} = ddo

			// There can be multiple verification methods in the did document but we have to find the one which has signed the holder vc
			// So verificationMethod mentioned in the proof of holder SD should have to be equal to the id filed in the verification method
			// participantSD.json >> proof >> verificationMethod === did.json >> verificationMethodArray >> verificationMethodObject >> id
			let certificateDetails = null
			let keypairDepth = 1
			for (const verificationMethod of verificationMethodArray) {
				if (verificationMethod.id === participantVM && verificationMethod.publicKeyJwk) {
					const { x5u } = verificationMethod.publicKeyJwk

					// get the SSL certificates from x5u url
					const certificates = (await axios.get(x5u)).data as string

					const certArray = certificates.match(/-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g)
					if (certArray?.length) {
						keypairDepth += certArray?.length // sum(len(keychain)
					}

					// getting object of a PEM encoded X509 Certificate.
					const certificate = new X509Certificate(certificates)
					certificateDetails = this.parseCertificate(certificate)

					break
				}
			}
			let veracity = 1
			if (certificateDetails) {
				// As per formula(1 / len(keychain)), veracity will be 1 divided by number of signing
				// keypairs found in the certificate
				veracity = +(1 / keypairDepth).toFixed(2) //1 / len(keychain)
				return { veracity, certificateDetails }
			}
			logger.error(__filename, 'calcVeracity', `❌ Participant proof verification method and did verification method id not matched`, '')
			throw new Error('Participant proof verification method and did verification method id not matched')
		}
		logger.error(__filename, 'calcVeracity', `❌ Verifiable credential array not found in participant self description`, '')
		throw new Error('Verifiable credential array not found in participant self description')
	}

	/**
	 * @dev Helps to parse and format x509Certificate data to return in response
	 * @param certificate X509Certificate object
	 * @returns X509CertificateDetail - Formatted X509Certificate object
	 */
	parseCertificate = (certificate: X509Certificate): X509CertificateDetail => {
		const issuerFieldsString: string = certificate.issuer
		const issuerFieldsArray: string[] = issuerFieldsString.split('\n')

		const extractFieldValue = (fieldArray: string[], fieldName: string) => {
			const field: string | undefined = fieldArray.find((line: any) => line.startsWith(`${fieldName}=`))
			if (field) {
				return field.slice(fieldName.length + 1)
			}
			return null
		}
		// Extract individual fields from the subject string
		const subjectFieldsString: string = certificate.subject
		const subjectFieldsArray: string[] = subjectFieldsString.split('\n')

		const certificateDetails: X509CertificateDetail = {
			validFrom: certificate.validFrom,
			validTo: certificate.validTo,
			subject: {
				jurisdictionCountry: extractFieldValue(subjectFieldsArray, 'jurisdictionC'),
				jurisdictionSate: extractFieldValue(subjectFieldsArray, 'jurisdictionST'),
				jurisdictionLocality: extractFieldValue(subjectFieldsArray, 'jurisdictionL'),
				businessCategory: extractFieldValue(subjectFieldsArray, 'businessCategory'),
				serialNumber: extractFieldValue(subjectFieldsArray, 'serialNumber'),
				country: extractFieldValue(subjectFieldsArray, 'C'),
				state: extractFieldValue(subjectFieldsArray, 'ST'),
				locality: extractFieldValue(subjectFieldsArray, 'L'),
				organization: extractFieldValue(subjectFieldsArray, 'O'),
				commonName: extractFieldValue(subjectFieldsArray, 'CN')
			},
			issuer: {
				commonName: extractFieldValue(issuerFieldsArray, 'CN'),
				organization: extractFieldValue(issuerFieldsArray, 'O'),
				country: extractFieldValue(issuerFieldsArray, 'C')
			}
		}
		return certificateDetails
	}

	/**
	 *	@Formula count(properties) / count(mandatoryproperties)
	 *	Provided By 			Mandatory	(gx:providedBy)
	 *	Aggregation Of	 		Mandatory	(gx:aggregationOf)
	 *	Terms and Conditions 	Mandatory	(gx:termsAndConditions)
	 *	Policy	 				Mandatory	(gx:policy)
	 *	Data Account Export 	Mandatory	(gx:dataAccountExport)
	 *	Name 					Optional	(gx:name)
	 *	Depends On	 			Optional  	(gx:dependsOn)
	 *	Data Protection Regime	Optional	(gx:dataProtectionRegime)
	 * @dev Takes service offering self description as input and calculates transparency
	 * @param credentialSubject service offering self description credentialSubject
	 * @returns Number | undefined - undefined if bad data else returns the transparency value
	 */
	calcTransparency = async (credentialSubject: any): Promise<number> => {
		const optionalProps: string[] = ['gx:name', 'gx:dependsOn', 'gx:dataProtectionRegime']
		const totalMandatoryProps = 5
		let availOptProps = 0
		for (const optionalProp of optionalProps) {
			// eslint-disable-next-line no-prototype-builtins
			if (optionalProp in credentialSubject && credentialSubject[optionalProp]) {
				availOptProps++
			}
		}
		const transparency: number = (totalMandatoryProps + availOptProps) / totalMandatoryProps
		return transparency
	}

	/**
	 * @formula trust_index = mean(veracity, transparency)
	 * @dev takes the veracity and transparency as input and calculates trust index
	 * @param veracity Veracity value
	 * @param transparency Transparency value
	 * @returns number - Trust index value
	 */
	calcTrustIndex = (veracity: number, transparency: number): number => {
		const trustIndex: number = (veracity + transparency) / 2
		return trustIndex
	}

	/**
	 * @dev - common function to fetch ParticipantJson from url
	 *
	 */
	fetchParticipantJson = async (url: string) => {
		// eslint-disable-next-line no-useless-catch
		try {
			const participantJson = (await axios.get(url)).data
			return participantJson
		} catch (error) {
			throw error
		}
	}

	/**
	 * @dev - common function to fetch Service Offering JSON from url
	 *
	 */
	fetchServiceOfferingJson = async (url: string) => {
		// eslint-disable-next-line no-useless-catch
		try {
			const serviceOfferingJson = (await axios.get(url)).data
			return serviceOfferingJson
		} catch (error) {
			throw error
		}
	}

	/**
	 * @dev takes the credential and proof, and verifies the signature is valid or not
	 * @param credentialContent the credential part which will be hashed for proof
	 * @param proof the proof obj
	 * @returns boolean - true if the signature is verified
	 */

	async verification(credentialContent: VerifiableCredentialDto, proof: SignatureDto, checkSSLwithRegistry: boolean, resolver: any) {
		// eslint-disable-next-line no-useless-catch
		try {
			// check if proof is of type JsonWebSignature2020
			if (proof.type !== 'JsonWebSignature2020') {
				logger.error(__filename, 'verification', `❌ signature type: '${proof.type}' not supported`, '')
				throw new Error(`signature type: '${proof.type}' not supported`)
			}

			// get the DID Document
			const ddo = await this.getDDOfromDID(credentialContent.issuer, resolver)
			if (!ddo) {
				logger.error(__filename, 'verification', `❌ DDO not found for given did: '${proof.verificationMethod}' in proof`, '')
				throw new Error(`DDO not found for given did: '${proof.verificationMethod}' in proof`)
			}

			// get the public keys from the DID Document
			// eslint-disable-next-line no-unsafe-optional-chaining
			const verMethod = ddo?.didDocument?.verificationMethod?.find((veriMethod: VerificationMethod) => veriMethod.id == proof.verificationMethod)
			const publicKeyJwk = verMethod?.publicKeyJwk
			if (!publicKeyJwk) {
				throw new Error('publicKeyJwk not found in ddo')
			}
			const x5u = publicKeyJwk?.x5u
			if (!x5u) {
				throw new Error('x5u not found in ddo')
			}
			// get the SSL certificates from x5u url
			let certificates
			try {
				certificates = (await axios.get(x5u))?.data as string
			} catch (error) {
				logger.error(__filename, 'verification', 'error in fetching certificate', '', { error: error })
				throw new Error('fail to fetch x5u certificate')
			}

			if (!certificates) {
				throw new Error('ssl certificate not found')
			}

			if (checkSSLwithRegistry) {
				// signature check against Gaia-x registry
				const registryRes = await this.validateSslFromRegistryWithUri(x5u, axios)
				if (!registryRes) {
					throw new Error('Certificate validation failed')
				}
			}

			//check weather the public key from DDO(which is fetched from did) matches with the certificates of x5u(fetched from ddo)
			const comparePubKey = await this.comparePubKeys(certificates, publicKeyJwk, jose)
			if (!comparePubKey) {
				logger.error(__filename, 'verification', `❌ Public Keys Mismatched`, '')
				throw new Error('Public Key Mismatched')
			}

			// // normalize/canonize the credentialContent
			const canonizedCredential = await this.normalize(
				jsonld,
				// eslint-disable-next-line
				credentialContent
			)

			if (typeof canonizedCredential === 'undefined') {
				logger.error(__filename, 'verification', `❌ Normalizing Credential Failed`, '')
				throw new Error('Normalizing Credential Failed')
			}

			// TODO: explore the isValidityCheck here, to include the jws in the hash - GX Compliance check signature

			// hash the normalized credential
			const hash = await this.sha256(crypto, canonizedCredential)

			// verify Signature by retrieving the hash and then comparing it
			const verificationResult = await this.verify(jose, proof.jws.replace('..', `.${hash}.`), AppConst.RSA_ALGO, publicKeyJwk, hash)
			logger.info(__filename, 'verification', verificationResult ? `✅ ${AppMessages.SIG_VERIFY_SUCCESS}` : `❌ ${AppMessages.SIG_VERIFY_FAILED}`, '')
			return verificationResult
		} catch (error) {
			throw error
		}
	}

	/**
	 *
	 * @param array Array containing duplicate objects
	 * @param key Identifier for comparing duplicate objects
	 * @returns Array with unique objects
	 */
	removeDuplicates = (array: [], key: string) => {
		const uniqueArray = array.filter((parentObj, index) => {
			const { credentialSubject: parentCredentialSubject } = parentObj
			return (
				index ===
				array.findIndex((childObj: any) => {
					const { credentialSubject: childCredentialSubject } = childObj
					return parentCredentialSubject[key] === childCredentialSubject[key]
				})
			)
		})
		return uniqueArray
	}

	/**
	 * @dev - common function to fetch ParticipantJson from url
	 */
	callServiceOfferingCompliance = async (reqData: any) => {
		logger.debug(__filename, 'callServiceOfferingCompliance', `📈 Calling ServiceOffering Compliance with request data : `, JSON.stringify(reqData))
		// eslint-disable-next-line no-useless-catch
		try {
			const endpoint = process.env.COMPLIANCE_SERVICE as string
			const { data } = await axios.post(endpoint, reqData)
			return data
		} catch (error: any) {
			const { data } = error['response']
			logger.error(__filename, 'callServiceOfferingCompliance', 'error while calling service compliance', '')
			throw data
		}
	}

	getInnerVCs = async (vc: any, key: string, types: string[], vcsMap: any) => {
		for (let i = 0; i < vc.credentialSubject[key].length; i++) {
			const response = (await axios.get(vc.credentialSubject[key][i].id)).data
			const verifiableCredential = response?.selfDescriptionCredential?.verifiableCredential
			const type = verifiableCredential && (await this.getVcType(verifiableCredential, vc.credentialSubject[key][i].id))
			if (!types.includes(type)) {
				throw new Error(`${key} VC ID not found or required vc type not found`)
			}
			for (const vc of verifiableCredential) {
				const lpId = vc.credentialSubject.id
				if (!vcsMap.has(lpId)) {
					vcsMap.set(lpId, vc)
				}
			}
		}
	}

	getVcType = async (verifiableCredential: any, vcId: string): Promise<string> => {
		let credentialType = ''

		const vc = verifiableCredential.find((e: any) => {
			if (Array.isArray(e.credentialSubject)) {
				return e.credentialSubject.some((subject: any) => {
					if (subject.id === vcId) {
						credentialType = subject.type ? subject.type : ''
					}
					return subject.id === vcId
				})
			} else {
				if (e.credentialSubject.id === vcId) {
					credentialType = e.credentialSubject.type ? e.credentialSubject.type : ''
				}
				return e.credentialSubject.id === vcId
			}
		})
		console.log(vc)
		return credentialType
	}

	/**
	 * @dev This function will calculate label level using credencial
	 * @param veracity Veracity value
	 * @param transparency Transparency value
	 * @returns number - Trust index value
	 */
	calcLabelLevel = (credentialSubject: any) => {
		let resultLabelLevel = ''

		// Label level response by user
		const criteria = credentialSubject['gx:criteria']

		// Constant Rules
		for (const labelLevel in LABEL_LEVEL_RULE) {
			// Rule of Specific label level
			const levelRules = LABEL_LEVEL_RULE[labelLevel]
			// Iterate level rules
			for (const rulePoint of levelRules) {
				// eslint-disable-next-line no-prototype-builtins
				if (criteria.hasOwnProperty(rulePoint)) {
					const gxResponseObj = criteria[rulePoint]
					const response = gxResponseObj['gx:response']
					// Loop will break if any single response found not confirmed and will return last label level
					if (response !== 'Confirm') {
						return resultLabelLevel
					}
				} else {
					logger.error(__filename, 'LabelLevel', AppMessages.LABEL_LEVEL_CALC_FAILED_INVALID_KEY + rulePoint, '')
					throw new Error(AppMessages.LABEL_LEVEL_CALC_FAILED_INVALID_KEY + rulePoint)
				}
			}
			resultLabelLevel = labelLevel
		}

		return resultLabelLevel
	}
}

export default new Utils()
