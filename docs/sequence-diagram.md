## Create Service offering

```
@startuml
User -> APIService: Service offering Data
APIService -> SignerTool: Prepare Service offering json and send
SignerTool -> Compliance: Self sign service offeringVC, prepares VP for service offering and request

Compliance --> SignerTool: Compliance Response
SignerTool --> SignerTool: Calculates Trust Index using Veracity & Transparency
SignerTool --> APIService: Responds with Service offering VP + compliance response + Trust Index data
APIService --> APIService: Creates resolvable link of service offering and store in DB
APIService --> User: Success
@enduml
```

## Create Label Level

```
@startuml
User -> APIService: Label Level Data (Service offering creation)
APIService -> SignerTool: Prepare label level json and send
SignerTool -> Compliance: Calculate Label Level, Self sign VC and request

Compliance --> SignerTool: Label level VC with compliance Response
SignerTool --> APIService: Label level VC with compliance
APIService --> APIService: Creates resolvable link of label level VC and set in service offering json
APIService --> User: Success
@enduml
```