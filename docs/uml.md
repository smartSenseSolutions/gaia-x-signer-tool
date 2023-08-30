# Create Web DID FLow

```
@startuml
"User" -> "Signer tool": create web DID request
"Signer tool" -> "DID Domain": Get x509CertificateChain
"Signer tool" <-- "DID Domain": x509CertificateChain.pem
"User" <-- "Signer tool": generated web did
@enduml
```
# Verify Web DID FLow

```
@startuml
"User" -> "Signer tool": verify web DID request
"Signer tool" -> "DID Domain": Get did.json
"Signer tool" <-- "DID Domain": did.json
"Signer tool" -> "Signer tool": Sign sample text with private key
"Signer tool" -> "Signer tool": Verify sample text hash with verification method
"User" <-- "Signer tool": result verify web DID
@enduml
```

# Sign VC and Compliance to Gaia-X

```
@startuml
"User" -> "Signer tool": request creds with issuer, verification method and private key
"Signer tool" -> "Signer tool": Fetch depended credentials and combined all vcs
group "Self-sign the credential and attach a proof"
"Signer tool" -> "Signer tool": Normalize the credential
"Signer tool" -> "Signer tool": Hash the credential
"Signer tool" -> "Signer tool": Sign the credential with Private Key
end
group "Verify the proof"
"Signer tool" -> "Signer tool": Fetch certificate chain from x5u URL
"Signer tool" -> "Signer tool": Generate Public Key from certificate
"Signer tool" -> "Signer tool": Verify the attached proof
end
"Signer tool" -> "Gaia-x Compliance": req for compliance credential
"Signer tool" <-- "Gaia-x Compliance": complianceCredential issued
"User" <-- "Signer tool": Send Self-description with proof and Compliance Credential
@enduml
```

# verify-Signatuer FLow

```
@startuml
"User" -> "Signer tool": request to verify a credential
group "Verify the proof of VP"
"Signer tool" -> "Signer tool": determine the checkSignature policy
"Signer tool" -> "Signer tool": Verify the VP proof
"Signer tool" -> "Signer tool": Fetch the DDO from did in proof
"Signer tool" -> "Signer tool": Fetch the certificates from x5u from DDO(Public key)
"Signer tool" -> "Gaia-x Registry": Validate the certificates against registry
"Signer tool" <-- "Gaia-x Registry": Validation status
"Signer tool" -> "Signer tool": match public key from DDO and certificates of x5u
"Signer tool" -> "Signer tool": Normalize,Hash & verify signature
end
group "Verify all the claims inside of VP"
loop
"Signer tool" -> "Signer tool": Fetch the DDO from did in proof
"Signer tool" -> "Signer tool": Fetch the certificates from x5u from DDO(Public key)
"Signer tool" -> "Gaia-x Registry": Validate the certificates against registry
"Signer tool" <-- "Gaia-x Registry": Validation status
"Signer tool" -> "Signer tool": match public key from DDO and certificates of x5u
"Signer tool" -> "Signer tool": Normalize,Hash & verify signature
end
end
"User" <-- "Signer tool": Validation result
@enduml
```
