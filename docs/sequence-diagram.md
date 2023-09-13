## Create Service offering

```
@startuml
User -> SignerTool: Request with Private Key, Legal Participant Link & Service offering data 
SignerTool --> SignerTool: Validate the request
SignerTool --> SignerTool: Resolve LP link and fetch data
SignerTool --> SignerTool: Fetch Did document and Extract X5U URL
SignerTool --> SignerTool: Decode PrivateKey and Self sign service offering unsigned json
SignerTool --> SignerTool: Validates dependsOn & aggregationOf vc types
SignerTool --> SignerTool: prepares Service offering VP
SignerTool -> Compliance: Request for service offering compliance with VP

Compliance --> SignerTool: Compliance Response
SignerTool --> SignerTool: Calculates Trust Index using Veracity & Transparency
SignerTool --> User: Responds with Service offering VP + compliance response + Trust Index data
@enduml
```

## Create Label Level

```
@startuml
User -> SignerTool: Request with Private Key, & Label level data
SignerTool --> SignerTool: Validate the request
SignerTool --> SignerTool: Fetch Did document and Extract X5U URL
SignerTool --> SignerTool: Calculate Label Level and prepares Label level unsigned JSON
SignerTool --> SignerTool: Decode PrivateKey and Self sign Label level unsigned JSON
SignerTool -> Compliance: Request for compliance

Compliance --> SignerTool: Compliance Response
SignerTool --> User: Label level VC with compliance
@enduml
```