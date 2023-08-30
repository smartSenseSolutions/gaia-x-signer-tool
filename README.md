# Gaia-X-Signer-Tool by smartSense

This tool is useful to onboard into the Gaia-X ecosystem.

This App covers below use cases:

1. Create Web Decentralized Identifiers(DID)
2. Verify Web Decentralized Identifiers(DID)
3. Create a legal participant
4. Create a service offer
5. Create a resource
6. Create a label-level
7. Verify a Self-Description

## Run application

change node version 18.17.0

```bash
mv env-example .env
npm ci
npm run dev
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
- User will share vcs with issuer, verification method and private key
- System will fetch all depended vcs 
- System will sign vcs
- System will also verify signature with verification method
- System will req for compliance credentials with all vcs
- Compliance service will response with compliance credential
- System will return self-description vcs and compliance credential to user
-  User will have to host this self-description vcs and compliance credential at credential subject id url which is mentioned in requested vc.


![onBoardToGaiax](docs/issue-creds.png?raw=true)

### Verify a Self Description with Compliance Credential

- A verifiable credential or a verifiable presentation is passed as a request parameter for verification.

- The passed object is verified by initially checking the proof type is valid. The DDO is resolved from the verification method and the public key is retreived from the DDO.

- The certificate chain which is retreived from x5u in the public key is checked to ensure that the issuer is GaiaX Trust anchor. Also, the public key of the certificate and DDO are ensured to be the same.

- Afterward the verification of credential is performed by canonizing the credential followed by hashing using the public key of the issuer. The hash is added in place of `..` in the proof, verified and decoded using the public key of the issuer. If the decoded result is the same as the proof, the passed credential/ presentation is valid.

- If a verifiable presentation is passed, the claims in the presentation are also verified similarly.

![verify-signature](docs/verify-sig.png?raw=true)

## Known issue or improvement

1. Resource Compliance support pending
2. Label-level Compliance support pending 
