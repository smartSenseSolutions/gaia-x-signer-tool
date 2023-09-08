# Gaia-X-Signer-Tool by smartSense

The Gaia-X-Signer-Tool by smartSense is a powerful application designed to facilitate seamless onboarding into the Gaia-X ecosystem. This tool empowers users to interact with the Gaia-X framework through a variety of essential use cases.

## Use Cases

The Gaia-X-Signer-Tool covers the following vital use cases:

1. **Create Web Decentralized Identifiers (DID):** Generate decentralized identifiers for web domains, enabling easy integration with the Gaia-X ecosystem.

2. **Verify Web Decentralized Identifiers (DID):** Verify the authenticity of web-based decentralized identifiers, ensuring robust data security.

3. **Create Legal Participants on Gaia-X:** Streamline the process of registering legal participants within the Gaia-X network.

4. **Create Service Offers on Gaia-X:** Effortlessly create and manage service offerings as integral components of the Gaia-X ecosystem.

5. **Create Resources on Gaia-X:** Simplify the creation and management of resources within the dynamic Gaia-X environment.

6. **Create Label Levels on Gaia-X:** Generate label levels to enhance categorization and organization within the Gaia-X ecosystem.

7. **Verify Self-Description and Gaia-X Compliance:** Verify the credibility of self-descriptions within Gaia-X and assess Gaia-X Compliance Credentials.

## Getting Started

To run the Gaia-X-Signer-Tool application, follow these steps:

1. Make sure you have Node.js version 18.17.0 installed.

2. Copy the example environment file and configure your environment settings:
   
```bash
cp env-example .env
```

3. Install the required dependencies:
```bash
npm ci
```
4. Launch the development server:
```bash
npm run dev
```
5. Access Swagger Documentation
```bash
http://localhost:8000/docs/
```
## Tools and Technologies

1. NodeJS
2. ExpressJS
3. Swagger Doc

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


### Label Level VC and Compliance
- Users will request the API service for creating service offering in wizard along with label level data.
- API service will create unsigned VC JSON for label level by adding required data and requests Signer Tool Service for,
        <ol>
            <li> Label level calculation</li> 
            <li> Self Sign VC (unsigned → signed)</li> 
        </ol>
- Once the VC is signed, Signer Tool Service  will request Compliance service for compliance.
- Once the compliance is done, Signer tool service will respond to API Service with Signed VC & Compliance Data.
- API Service will create a resolvable link using this label level data and store it in the DB.

![create-label-level](docs/create-label-level.png?raw=true)
## Known issue or improvement

1. Resource Compliance support pending
2. Label-level Compliance support pending 
