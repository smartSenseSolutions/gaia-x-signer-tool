# Gaia-X-Signer-Tool by smartSense

This tool is useful to onboard into the Gaia-X ecosystem.

This App covers below use cases:

1. Create Web Decentralized Identifiers(DID)
2. Verify Web Decentralized Identifiers(DID)
3. Create a legal participant on Gaia-X
4. Create a service offer on Gaia-X
5. Create a resource on Gaia-X
6. Create a label-level on Gaia-X
7. Verify a Self-Description and Gaia-X Compliance Credential

## Run application

change node version to 18.17.0

```bash
cp env-example .env
npm ci
npm run dev
```

## Open Swagger Doc
```bash
http://localhost:8000/docs/
```
## Tools and Technologies

1. NodeJS
2. ExpressJS
3. Swagger API Doc

## Flow

### Create a Web DID

- First User will need a domain setup for which you want to create a did.
- User will also need a ssl certificate setup for the same domain.
- User certificate chain should be accessible at your provided url else system will fetch from "https://your-domain/.well-known/x509CertificateChain.pem" or "https://domain/tenant/x509CertificateChain.pem"
- The create did api will make a did.json for the provided domain name.
- User will have to host this did.json on "https://your-domain/.well-known/did.json" or "https://domain/tenant/did.json"

![Create Web DID Flow](docs/create-did.png?raw=true)

### Verify a Web DID
- User need to provide web did, verification method and private key for verify
- System will resolve did.json from provided did
- System will find provided verification method in did.json
- System will sign sample text with private key
- After that system will verify sample text hash with verification method
- System will share result of verification

![Verify Web DID Flow](docs/verify-web-did.png?raw=true)
### Sign VC and Compliance to Gaia-X
- User will request vcs with issuer, verification method and private key
- System will fetch all depended vcs 
- System will sign vcs
- System will also verify signature with verification method
- System will req for compliance credentials with all vcs
- Compliance service will response with compliance credential
- System will return self-description vcs and compliance credential to user
-  User will have to host this self-description vcs and compliance credential at credential subject id url which is mentioned in requested vc.


![onBoardToGaiax](docs/issue-creds.png?raw=true)

### Verify a Self Description and Compliance Credential
- User will request with vc url and policies
- System will validate vc type with allowed types (gx:LegalParticipant,gx:ServiceOffering,gx:VirtualDataResource,gx:PhysicalResource,gx:VirtualSoftwareResource) 
- System will validate policy with allowed policies (integrityCheck,issuerSignature,complianceSignature,complianceCheck,complianceExpired)
- After that system will check each policy individually
- System will share result of verification
![verify-signature](docs/verify-vc.png?raw=true)

## Known issue or improvement

1. Resource Compliance support pending
2. Label-level Compliance support pending 
