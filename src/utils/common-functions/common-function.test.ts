import { Resolver } from 'did-resolver'
import Utils from './common-functions'
import web from 'web-did-resolver'
import axios from 'axios'
import dotenv from 'dotenv'
import { participantJson, holderDdoJson2 as holderDdoJson } from '../../assets'
dotenv.config()
const webResolver = web.getResolver()
const resolver = new Resolver(webResolver)

const exampleCertificate = process.env.SSL_CERTIFICATE as string

describe('commonFunction Testing', () => {
	describe('verification', () => {
		it('proof is not JSONWebSignature2020', async () => {
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			mockParticipantJson.selfDescriptionCredential.verifiableCredential[0].proof.type = 'JsonWebSignature2021'
			const complianceCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
			delete complianceCred.proof
			let isError = false
			try {
				await Utils.verification(complianceCred, complianceProof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toEqual(`signature type: 'JsonWebSignature2021' not supported`)
			}
			expect(isError).toBe(true)
		})
		it('empty ddo', async () => {
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({})
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const complianceCred = JSON.parse(JSON.stringify(mockParticipantJson.complianceCredential))
			const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
			delete complianceCred.proof
			let isError = false
			try {
				await Utils.verification(complianceCred, complianceProof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`publicKeyJwk not found in ddo`)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('undefined ddo', async () => {
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue(undefined)
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const complianceCred = JSON.parse(JSON.stringify(mockParticipantJson.complianceCredential))
			const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
			delete complianceCred.proof
			let isError = false
			try {
				await Utils.verification(complianceCred, complianceProof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`DDO not found for given did: 'did:web:compliance.lab.gaia-x.eu:development' in proof`)
			}
			expect(isError).toBe(true)

			jest.resetAllMocks()
		})
		it('verification method not matched with DDO', async () => {
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...holderDdoJson })
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const complianceCred = JSON.parse(JSON.stringify(mockParticipantJson.complianceCredential))
			const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
			delete complianceCred.proof
			let isError = false

			try {
				await Utils.verification(complianceCred, complianceProof, false, resolver)
			} catch (error) {
				isError = true

				expect((error as Error).message).toBe(`publicKeyJwk not found in ddo`)
			}
			expect(isError).toBe(true)

			jest.resetAllMocks()
		})
		it('publicKeyJwk not found', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			delete mockHolderDDO.didDocument.verificationMethod[0].publicKeyJwk
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const complianceCred = JSON.parse(JSON.stringify(mockParticipantJson.complianceCredential))
			const complianceProof = JSON.parse(JSON.stringify(complianceCred.proof))
			delete complianceCred.proof
			let isError = false

			try {
				await Utils.verification(complianceCred, complianceProof, false, resolver)
			} catch (error) {
				isError = true

				expect((error as Error).message).toBe(`publicKeyJwk not found in ddo`)
			}
			expect(isError).toBe(true)

			jest.resetAllMocks()
		})
		it('x5u not found', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			delete mockHolderDDO.didDocument.verificationMethod[0].publicKeyJwk.x5u
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			delete holderCred.proof
			let isError = false

			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true

				expect((error as Error).message).toBe(`x5u not found in ddo`)
			}
			expect(isError).toBe(true)

			jest.resetAllMocks()
		})
		it('certificate not found', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))

			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue(undefined)
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false

			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true

				expect((error as Error).message).toBe(`ssl certificate not found`)
			}
			expect(isError).toBe(true)

			jest.resetAllMocks()
		})
		it('sslRegistry responds false', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))

			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(Utils, 'validateSslFromRegistryWithUri').mockResolvedValue(false)
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				await Utils.verification(holderCred, proof, true, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`Certificate validation failed`)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('comparePub key fails', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'comparePubKeys').mockResolvedValue(false)
			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`Public Key Mismatched`)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('normalize fails', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'comparePubKeys').mockResolvedValue(true)
			jest.spyOn(Utils, 'normalize').mockResolvedValue(undefined)

			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`Normalizing Credential Failed`)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('normalize fails', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'comparePubKeys').mockResolvedValue(true)
			jest.spyOn(Utils, 'normalize').mockResolvedValue(undefined)

			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true
				expect((error as Error).message).toBe(`Normalizing Credential Failed`)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('hash verification fails', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'comparePubKeys').mockResolvedValue(true)
			jest.spyOn(Utils, 'normalize').mockResolvedValue('abc')

			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				await Utils.verification(holderCred, proof, false, resolver)
			} catch (error) {
				isError = true
				expect(error).toBeInstanceOf(Error)
			}
			expect(isError).toBe(true)
			jest.resetAllMocks()
		})
		it('hash verification successful', async () => {
			const mockHolderDDO = JSON.parse(JSON.stringify(holderDdoJson))
			jest.spyOn(Utils, 'getDDOfromDID').mockResolvedValue({ ...mockHolderDDO })
			jest.spyOn(axios, 'get').mockResolvedValue({ data: exampleCertificate })
			jest.spyOn(Utils, 'comparePubKeys').mockResolvedValue(true)
			jest.spyOn(Utils, 'normalize').mockResolvedValue('abc')
			jest.spyOn(Utils, 'verify').mockResolvedValue(true)

			const mockParticipantJson = JSON.parse(JSON.stringify(participantJson))
			const holderCred = JSON.parse(JSON.stringify(mockParticipantJson.selfDescriptionCredential.verifiableCredential[0]))
			const proof = JSON.parse(JSON.stringify(holderCred.proof))
			let isError = false
			try {
				const response = await Utils.verification(holderCred, proof, false, resolver)
				expect(response).toBe(true)
			} catch (error) {
				isError = true
			}
			expect(isError).toBe(false)
			jest.resetAllMocks()
		})
	})
})
