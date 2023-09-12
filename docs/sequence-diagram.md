## Create Service offering

```
@startuml
APIService -> SignerTool: Request with Private Key, Legal Participant Link & Service offering data 
SignerTool --> SignerTool: Create service offering JSON, Self sign it and, prepares VP for service offering
SignerTool -> Compliance: Request for service offering compliance

Compliance --> SignerTool: Compliance Response
SignerTool --> SignerTool: Calculates Trust Index using Veracity & Transparency
SignerTool --> APIService: Responds with Service offering VP + compliance response + Trust Index data
@enduml
```

## Create Label Level

```
@startuml
APIService -> SignerTool: Prepares label level json and send
SignerTool --> SignerTool: Calculate Label Level, prepares Label level JSON and Self Sign it
SignerTool -> Compliance: Request for compliance

Compliance --> SignerTool: Compliance Response
SignerTool --> APIService: Label level VC with compliance
@enduml
```