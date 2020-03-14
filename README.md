# Disposable Identities for Health Crisis
**A citizen’s initiative in times of virus crisis (aka corona/SARS-CoV-2)**

This is a flat (zero-hierarchy) project with self organizing trajectories.  If  particular fundraising  support  is  needed temporary leaders can stand up. We started Thursday March 12 2020. The community  can deliver on passion and good will in three months. With funding to pay salaries this can be brought down to 1 or 2.

Contact: Rob van Kranenburg (rvk@theinternetofthings.eu) or Jef Vanbockryck (jef@rezonanz.com).

It  will also be the focus for #iotday, April 9  (we are revamping iotday.org)

Join our 
Telegram Group Disposable Health ID (DHID)
https://t.me/joinchat/PVV8JxfWegIq3SlFMuS1Gg

Current team volunteers/members:
* Lead Architect Disposable Identity Team: Jef Vanbockryck
* Lead Architect NextGenIdentity WG: Petros Kavassalis
* Ecosystem Disposable Identity Team: Rob van Kranenburg and Gaëlle Le Gars 
* Lead Architect Visual Interface: Jari Isohanni
* Lead Healthcare specialist:  Christoph Thuemmler 
* Lead AI specialist? 
* Lead Legal: Mantalena Kaili

*This project is related to the ongoing work on identity in NGI Forward @NGI4EU.*

**Please look at the various text with “call out to the community” on topics where help is needed.**

## Preliminary use case description

In times of virus crisis (eg. corona) citizen’s will be “color coded” for their health condition regarding the infection status, but in a digital way, using smartphones.

Practitioners and citizens will issue different types of health status situation reports. The messages of practitioners will be  considered as more authoritative (eg. based on lab tests). Citizens’ messages are of a different (non-professional nature), but they can help in improving communication and that should get some weight as well.

Essential is that these health condition events/messages are temporary and should be destroyed when a new (updated) message that provides a more recent view on the situation. (TBD on what happens after x-time after a crisis. Automatic delete? User delete?) 
The health condition events/messages are tied to a digital identity of the issuing party. In case of practitioners this should be tied to their professional credentials. All data exchanges are accompanied by a GDPR consent encoded as Verifiable Claim so that *legitimate use of the data can be proved.* **Anyone not being able to provide this proof will be in breach of GDPR law.**

Health condition changes, so these health condition events/messages will be regularly updated and timestamping will determine which is most recent. For each latest health condition event, a barcode can be generated using a smartphone and this code can be read by a smartphone (app). No physical contacts are needed. These barcodes are destroyed (as they are only digital, this means that they will not resolve any information) when a new health condition event/message is created.

Who gets what **benefit**? Color coding people on health conditions is just a prerequisite to generate data to solve a problem. The problem solved in this case looks like:
* Transparency of who is free of the virus for social situation (consumer view) or 
* Show a path of spreading the virus and predict who is going to be impacted next based on who was at which location or was in contact with whom? (B2C view for Govt to check scale of virus spread and plan mitigation) 
* There is a 3rd view for the healthcare provider to understand when a patient shows up with a symptom, to be able to make a decision (via an AI) whether this person should be given the expensive test kit over other patients who might be at higher risk from the virus. This is futuristic thinking - There may be value from the data trail that can be shared transparently across regions/countries to develop learning patterns for disease control/virus spreading contamination strategies.

## Disposable Identity Definition

This definition is taking from the forthcoming publication: "DISPOSABLE IDENTITIES?  Why digital identity matters to blockchain disintermediation and for society. Authors: Loretta Anania, EC Gaelle Le Gars, Rob van Kranenburg." The authors are linked to H2020 ICT Grant Agreement 825652 NGI FORWARD.

Disposable identities are temporary attribute-based identities integrated in any smart contract between a receiver and a supplier. A digital context-based sharing of data that is generalizable: to apply a digital id internet layer to any existing communication service.

The complete ecosystem in which Disposable Identities would operate, requires a similar trust infrastructure where the the combination of seamless connectivity and personalized support is not build on continuous and real-time tracking and tracing of identified users. Instead it operates with attribute-based relational identities, generated for each single interaction between user and service (or object and service) and disposed of, immediately afterwards.

With disposable identities, new applications can be added to this ecosystem using a strict attribute-based solution, needs no full disclosure (of identity) just beyond age, ability to pay for the service, legal compliance in terms of insurance and accountability. Digital services can be delivered to authenticated users without requiring the need for a single full set of identifying data to be shared.

This schema minimizes risks of data leaks and unauthorized reuse of personal data by third party service providers. The proposed technical framework of provable computing developed by zenroom.org, runs on Virtual Machines embedded in the chip used with any personal communication device and any connected object . These chips representing the key material component of the approach, they could be regarded as the digital era equivalent of the secure ID of Passport and require comparable level of confidence in the fabrication process. This argues in favour of relying on chips manufactured under EU jurisdiction. While this represents a major change from the current supply chain for commercial chips which are almost entirely sourced from China for the EU market, it is also a move that may serve other geopolitical and environmental Commission priorities. Zenroom, which can also runs on existing integrated chips, was developed as European alternative for achieving a level of accessibility, provability and certification of computing.

## Technical context

### Standards

* W3C DID for key identity identifier for a persona ID and disposable ID: https://www.w3.org/TR/did-core/
* W3C Verifiable Credential for health messages and usage consent (purpose limitation-GDPR): https://www.w3.org/TR/vc-data-model/
* Kantare Consent Receipt for the consent “content” (JSON Verifiable Claim translation, see examples): https://kantarainitiative.org/download/7902/

### Apps

**Citizen’s app:** 
To provide a warning about another citizen’s health condition (from a list of possible values to choose). Location coordinates are stored but only to be released under strict conditions to government/authorities (TBD use of Zero-Knowledge-Proofs for that).

A citizen can use digital identification tools (such as Itsme) for self-identification.

Crypto-keys are stored on the citizen’s app, all DIDs are derived from that. A persona DID is created from those crypto-keys. A disposable DID is derived from a persona DID. All these DIDs are stored on the citizens device.
The citizens main identity Verifiable Credential is generated from e.g. the Itsme identity. This “main” identity is the citizens public persona.

The citizens app messages are self-issued Verifiable Credentials. With each message a GDPR consent is generated as a self-issued Verifiable Credential and this has a reference to the app health messages.

**Practitioners app:**
To provide a health message (including colored codes) with high value/importance.

Practitioners login (e.g. using Itsme) for their main identity from which a public persona DID and a Verifiable Credential is generated that includes a link to their professional credentials (created by an authority/government, see next).

Practitioners create the public health messages (as Verifiable Claims, see example).

**Government app:**
To issue authoritative credentials for practitioners. These credentials are publicly available (registry/server) and directly linked to the practitioners’ main/public persona DID.

### Government backends

**Endpoint to deliver public health messages to government:**
A high-throughput message receiving endpoint, secure (hack-proof), …
Ideally, an AI is running in a protected processor (secure enclave) that can decrypt and run algorithms on citizens’ health data and only is able to do that based on the consent of the citizen (see example consent messages). 
_(TBD with authorities/government on details of this process, incl. handling of the output of the analysis, etc.)_

**Lookup service for Government/authoritative Verified Credentials (for practitioner credentials):**
A high-availability read-only lookup service that allows verification of Verified Credentials for the practitioners, issued by government/authority.

### App interactions
Some essential criteria/principles:
* Communication is P2P (app-2-app), except the practitioner credentials (they are public).
* Data is stored in-app, except practitioner credentials (they are stored in a public registry). Stale/old data is deleted.
* Data is encrypted.
* Health messages and GDPR consents are always transmitted together (in one package).
* Citizen data is only read by practitioners, not stored (equivalent of showing a piece of paper, but not copying it). _The important exception being the case for government data analysis, for crisis management purposes._

**Practitioners -> Government:**
Practitioner app generates a main persona DID and transfers this to the government.

**Government -> Practitioners:**
Government app creates a professional Verifiable Credential (VC) including the main persona DID of the practitioner and registers the VC on a government server. The government app transfers a link to this registered VC onto the practitioners app.

**Citizens -> Practitioners:** 
Citizens app generates a disposable DID and transfers this to the practitioners app.

**Practitioners -> Citizens:**
Practitioners app generates a health condition report (a VC) including the citizens disposable DID and transfers this to the citizens app.

**Citizens -> Practitioners/Government:**
Citizens app generates barcodes with information embedded about the latest health condition report. Practitioners/government apps can read the barcode. Practitioners cannot decrypt location data, the government can.

(From Andrea: If you want to make location data (or any other data) readable only by some people, then you should use asymmetric encryption. You can use ZKP for example to sign/read a certificate issued by a hospital that states that "on day xyz, this person is YELLOW" where you verify the signature of the hospital and the signature of the person carrying the QR on their phone's app.)

**Citizens -> Citizens:**
Citizens apps can share **voluntarily** the latest status information using the barcode mechanism (eg. with close friends, family members, others who they trust).
(Other barcode sharing use cases TBD with larger community.)

**Citizens -> Government:**
A citizen app sends a health condition message/report to the government. The collected data is used by the government for risk management purposes, impact prediction (based on location data), etc.  
(From Andrea: Regular asymmetric encryption can be used.)

### Interaction diagrams
(TODO)

### Technology (preliminary list)
* Zenroom SDK for creation of DIDs, Verifiable Claims*, zero knowledge proofs. (*Requires an action from Zenroom to be compliant with the JSON format of W3C VC. Andrea offered help via Dyne.org) 
* Android SDK (initially) for apps.
* iOS SDK for apps; (From Andrea) React Native code (Android and iOS) from Decode: https://github.com/DECODEproject/decode-app
* (TBD OpenIntents Friedger Mufkes library for between apps communication?)
* (TBD Chirp library for between apps communication using audio?)
* Itsme SDK for apps
* **(TBD - Call out to the community for a solution)** Registry/server for the authoritative credentials. (concern: performance/non-hackability)
* **(TBD - Call out to the community for a solution)** Server/blockchain for timestamps.
* **(TBD - Call out to the community for a solution)** Event/server for the reception of citizen health messages and for AI/analysis to government (for crisis mgt purpose only). (concern: security/performance/non-hackability) (e.g. IBM Z , https://www.ibm.com/it-infrastructure/z/hardware)
* **(TBD - Call out to the community for a solution)** Secure mechanism/software (library) for exchange of decryption keys (between citizens and government/authorities)
* **(TBD - Call out to the community for a solution)** OpenId SDK/eIDAS eID identification request API
* **(TBD - Call out to the community for a solution)** AI SDK/API
* Markers: To be able to work with markers project will create it’s own open-source library which is able to a) create markers and b) decode data in markers. This library will be based on work on done in Horizon2020 funded TagItSmart project and use following opensource libraries:
  * LibDtmx
  * OpenCV

## Information/data

**Public health risk message/report attributes:**
* Generic elements (part of standard VC):
  * DID of issuer (practitioner)
  * Disposable DID of citizen
  * Date of issuance
* Public health risk type: (type of virus from a taxonomy)
* Risk severity level: (type of risk severity from a taxonomy, the so called “color codes”)
* Illegibility for testing: (yes/no/…)
* Location of issuance

**(Call out to the community of practitioners/health experts to provide the correct codes/taxonomies.** https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30557-2/fulltext, referencing ICTV as an authoritative source)

**Example health risk message/report VC:**

This message is created/issued by a practitioner:

```json
{
	"@context": [
		"https://www.w3.org/2018/credentials/v1",
		"https://disposables.id/context.jsonld"
	],
	"id": "uri:disposables-id:datalink:00001",
	"type": [
		"VerifiableCredential",
		"HealthRiskCredential"
	],
	"issuer": "did:BE:some-registered-practitioner-DID-0001",
	"issuanceDate": "2020-01-23T05:28:04Z",
	"credentialSubject": {
		"id": "did:disposable:some-citizen-disposable-DID-001",
		"publicHealthRiskType": "uri:ictv:SARS-CoV-2",
		"riskSeverityLevel": "uri:TODO:green",
		"illegibilityForTesting": "YES",
		"locationOfIssuance": {
        		      "type": "Point",
        		      "coordinates": [102.0, 0.5]
                                      }
	},
	"proof": {
		"type": "Ed25519Signature2018",
		"created": "2020-01-23T05:30:04Z",
		"creator": "did:BE:some-registered-practitioner-DID-0001#keys-1",
		"signatureValue": "I9+XPel4g4NnYlY+1/7mRh7BLhlKV8L+iIgb9UCuGFf61i5Yc4l8/LqgNFsMb1KWU2wjtYVw/QAFnGv4gZC6B+Rem9RRNVOWiXmd1X7Z874dZBtUqUTfCXb9U3+ZzZ402xg4Uermq4yFLD9sezji8IYMZN/TRQbMZ5KxTGvgCGXNMZGcZkmqj3CIsL3/aWERMsYCZKe0tUODpQ6rRA8HxztUwQ0p3lXrX/1m8tE3VVh7W1kbkaEF9mfqJi2af/ItfK6dLPnR66XCQ2qWffL/TSVmRHLRi5w3d6AUhegDFPZS2UN0EcJY6VQi4LcrxYrQ0d8XmkLSRAYyOv5qfhDOeg=="
	}
}
```

**Example Consent Verifiable Credential (issued by a practitioner) for the health risk data**

See attribute “dataSubjectData” which contains a link to such public health risk message.

This consent is created/issued by the citizen itself:

```json
{
	"@context": [
		"https://www.w3.org/2018/credentials/v1",
		"https://disposables.id/context.jsonld"
	],
	"id": "http://disposables.id/vc/02",
	"type": [
		"VerifiableCredential",
		"UsageConsentCredential"
	],
	"issuer": "did:disposable:some-citizen-disposable-DID-001",
	"issuanceDate": "2020-01-23T05:28:04Z",
	"credentialSubject": {
		"id": "did:disposable:some-citizen-disposable-DID-001",
		"consent": {
			"controllerDID": "did:BE:some-registered-practitioner-DID-0001",
			"jurisdiction": "urn:gdpr:jurisdiction:BE",
			"collectionMethod": "urn:gdpr:collectionmethod:mobileApp",
			"language": "urn:gdpr:language:EN-UK",
			"purposes": [
				{
					"purposeCategory": "urn:gdpr:purposecategory:health-registrationOfRisks",
					"consentType": "urn:gdpr:consenttype:dataSubjectDigitalSignature",
					"personalDataCategories": [
						"urn:gdpr:personaldatacategorie:concerningHealth-disease"
					],
					"primaryPurpose": true
				}
			],
			"consentDateStart": "2020-03-12T05:30:04Z",
			"consentDateEnd": "2020-04-12T05:30:04Z",
			"dataSubjectData": "uri:disposables-id:datalink:00001"
		}
	},
	"proof": {
		"type": "Ed25519Signature2018",
		"created": "2020-01-23T05:30:04Z",
		"creator": "did:disposable:some-citizen-disposable-DID-001#keys-1",
		"signatureValue": "I9+XPel4g4NnYlY+1/7mRh7BLhlKV8L+iIgb9UCuGFf61i5Yc4l8/LqgNFsMb1KWU2wjtYVw/QAFnGv4gZC6B+Rem9RRNVOWiXmd1X7Z874dZBtUqUTfCXb9U3+ZzZ402xg4Uermq4yFLD9sezji8IYMZN/TRQbMZ5KxTGvgCGXNMZGcZkmqj3CIsL3/aWERMsYCZKe0tUODpQ6rRA8HxztUwQ0p3lXrX/1m8tE3VVh7W1kbkaEF9mfqJi2af/ItfK6dLPnR66XCQ2qWffL/TSVmRHLRi5w3d6AUhegDFPZS2UN0EcJY6VQi4LcrxYrQ0d8XmkLSRAYyOv5qfhDOeg=="
	}
}
```

**Citizens’ message**
* Generic elements (part of standard VC):
  * Disposable DID of issuer (citizen)
  * Disposable DID of citizen (as subject)
  * Date of issuance
* Observed health status: (think of a list of values that could be useful)
* Observed severity: (think of a list of values that could be useful)
* Free text
* Location of issuance

**Example citizens’ message VC:**

This message is created/issued by the citizen:

```json
{
	"@context": [
		"https://www.w3.org/2018/credentials/v1",
		"https://disposables.id/context.jsonld"
	],
	"id": "uri:disposables-id:datalink:000011",
	"type": [
		"VerifiableCredential",
		"CitizenHealthMessageCredential"
	],
	"issuer": "did:disposable:some-citizen-disposable-DID-001",
	"issuanceDate": "2020-01-23T05:28:04Z",
	"credentialSubject": {
		"id": "did:disposable:some-citizen-disposable-DID-001",
		"observedHealthStatus": "uri:TODO:couching",
		"riskSeverityLevel": "uri:TODO:veryFrequent",
		"locationOfIssuance": {
        			"type": "Point",
        			"coordinates": [102.0, 0.5]
        		},
        		"freeText": "I'm worried"
	},
	"proof": {
		"type": "Ed25519Signature2018",
		"created": "2020-01-23T05:30:04Z",
		"creator": "did:disposable:some-citizen-disposable-DID-001#keys-1",
		"signatureValue": "I9+XPel4g4NnYlY+1/7mRh7BLhlKV8L+iIgb9UCuGFf61i5Yc4l8/LqgNFsMb1KWU2wjtYVw/QAFnGv4gZC6B+Rem9RRNVOWiXmd1X7Z874dZBtUqUTfCXb9U3+ZzZ402xg4Uermq4yFLD9sezji8IYMZN/TRQbMZ5KxTGvgCGXNMZGcZkmqj3CIsL3/aWERMsYCZKe0tUODpQ6rRA8HxztUwQ0p3lXrX/1m8tE3VVh7W1kbkaEF9mfqJi2af/ItfK6dLPnR66XCQ2qWffL/TSVmRHLRi5w3d6AUhegDFPZS2UN0EcJY6VQi4LcrxYrQ0d8XmkLSRAYyOv5qfhDOeg=="
	}
}
```

**Example Consent Verifiable Credential (self-issued by a citizen) for the health risk data to be used by government for crisis management purpose**

This consent is created/issued by the citizen itself:

```json
{
	"@context": [
		"https://www.w3.org/2018/credentials/v1",
		"https://disposables.id/context.jsonld"
	],
	"id": "http://disposables.id/vc/100",
	"type": [
		"VerifiableCredential",
		"UsageConsentCredential"
	],
	"issuer": "did:disposable:some-citizen-disposable-DID-001",
	"issuanceDate": "2020-01-23T05:28:04Z",
	"credentialSubject": {
		"id": "did:disposable:some-citizen-disposable-DID-001",
		"consent": {
			"controllerDID": "did:EU:some-government-DID-0001",
			"jurisdiction": "urn:gdpr:jurisdiction:BE",
			"collectionMethod": "urn:gdpr:collectionmethod:WebAPI",
			"language": "urn:gdpr:language:EN-UK",
			"purposes": [
				{
					"purposeCategory": [
						"urn:gdpr:purposecategory:health-registrationOfRisks", 
						"urn:gdpr:purposecategory:research-epidemiologicResearch",
						"urn:gdpr:purposecategory:justiceAndPolicy-publicSecurity"
					],
					"consentType": "urn:gdpr:consenttype:dataSubjectDigitalSignature",
					"personalDataCategories": [
					    "urn:gdpr:personaldatacategorie:concerningHealth-disease",
					    "urn:gdpr:personaldatacategorie:locationData-GPS"
					],
					"primaryPurpose": true
				}
			],
			"consentDateStart": "2020-01-23T05:30:04Z",
			"consentDateEnd": "2021-01-23T05:30:04Z",
			"dataSubjectData": "uri:disposables-id:datalink:00001"
		}
	},
	"proof": {
		"type": "Ed25519Signature2018",
		"created": "2020-01-23T05:30:04Z",
		"creator": "did:disposable:some-citizen-disposable-DID-001#keys-1",
		"signatureValue": "I9+XPel4g4NnYlY+1/7mRh7BLhlKV8L+iIgb9UCuGFf61i5Yc4l8/LqgNFsMb1KWU2wjtYVw/QAFnGv4gZC6B+Rem9RRNVOWiXmd1X7Z874dZBtUqUTfCXb9U3+ZzZ402xg4Uermq4yFLD9sezji8IYMZN/TRQbMZ5KxTGvgCGXNMZGcZkmqj3CIsL3/aWERMsYCZKe0tUODpQ6rRA8HxztUwQ0p3lXrX/1m8tE3VVh7W1kbkaEF9mfqJi2af/ItfK6dLPnR66XCQ2qWffL/TSVmRHLRi5w3d6AUhegDFPZS2UN0EcJY6VQi4LcrxYrQ0d8XmkLSRAYyOv5qfhDOeg=="
	}
}
```

### Visual interface on identity

Disposable identity related information would need to have a visual interface for both human vision and machine vision. It should be clear to humans by just looking at the visual interface what is the status of identity-information by using color coding or other visual representation. This visual representation would have elements that would make it also straightforward for machine vision to read out contents.

Our proposed representation of the visual interface would be a 2-dimensional marker like Datamatrix. In the proposed approach a standard Datamatrix would be extended to have more meta-information. This meta-information would contain data about the last update date of disposable identity-information as well as estimated health status of person. Estimated health status would be something that gives clear information if person is a) healthy, b) compromised or c) infected.

For example, if a person has been verified as healthy by authorities, the backend data backs this up and the visual interface would display healthy status (most right marker in following figure). 

If disposable identity-information is lacking data or a person has travelled a lot in certain areas, markers would be displayed as compromised (center marker on following figure).

If a person has been ordered in guarantee or the backend data estimates that person might be infected, the marker would display the health status as infected (most left marker on following figure):

![Colored barcodes](/color-barcodes.png)

Future work with visual interface……. To react to bacteria in human tissues?

## Practicalities

**(TBD - Call out to the community for a solution)** Who can be the issuer - eIDAS-compliant - of the professional/practitioner Verifiable Credentials (on behalf of government)? (input from Petros)

**(TBD - Call out to the community for a solution)**
(From Rob) The latest research on coronavirus-themed hacking to watch out for:
-In Iran, the health ministry urged victims to download an app it says will help track whether they have COVID-19 symptoms. In reality, it delivers spyware that can track location, @RecordedFuture says https://twitter.com/shanvav/status/1238181673029828609

## Political background - important considerations to take into account

A DANGEROUS GAME

We are playing a dangerous game. In the current crisis a state of emergency can be called that.will make solutions like a health id mandatory and a platform - for distributing goods, for prioritizing medicine, for rationing access to food, for creating dynamic pricing schemes, for adding current non virus related disease and status....

In doing this we assume that this can happen and we will be part  of it with our mitigating solution saying if this is a reality let it be partly our reality, let’s have strong and even leading  agency as citizens, after all  we have the numbers.
