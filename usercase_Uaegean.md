# For a Democratic and Privacy Protecting Health Status and Location Observation Facility
 Disposable Yet Official Identities for public health protection, monitoring and prevention of epidemics spread under the constraints of transparency, data privacy and GDPR rights
 
Short Description: A health observation policy case to serve the needs of efficiently managing people in conditions of health crises under the constraints of privacy and anonymity

By the University of the Aegean | i4m Lab (contact e-mail: pkavassalis@aegean.gr)


# Introduction 
This document describes the specific, eventually “restrictive”, government policy applied in conditions of a public health crisis (such as the current COVID-19 crisis) but designed to be structurally constrained by the principles, a) of respecting the European personal data privacy framework, and b) of making transparent the rules and functioning of the technology supporting the implementation of this policy. As a first approximation, the case will develop a technology facility to inform citizens about their health status, the potential health risk they might be facing, the necessary restriction measures they might be required to partake in, as well as help them to gain access to protected locations. This will be achieved by combining their anonymized health status and geolocation history with their PII data in a privacy preserving manner preventing possible correlations between the two datasets. The proposed facility will also provide policy-makers with tools to contain and mitigate health threats, as well as restrict the further diffusion of an epidemic, without compromising citizens’ privacy. Essentially, the specific health policy implementation described here uses a “dynamic color-coded scheme”(1) enabling: a) the differentiation of subjects in terms of their health status while applying cryptographic techniques to secure privacy and anonymity, a) the possible update of their health status based on their location history data, c) the detection of gatherings with a significant concentration of infected people (or people with a high probability of being infected), d) the safeguard of public spaces and critical infrastructures and facilities from a contamination risk through a reasonable and “non-discriminatory” access policy.

(1)  In general, a color-coded policy consists in the (dynamic) assignment of a color, from a specified color set, to individuals reflecting the status of one or more personal attributes. In China a color-coded policy called “Health Code” was used to mitigate the impact of the COVID-19 epidemic; it consisted in tracking the location and quarantine status of individuals on a city level. As soon as an individual leaves a city the color code turns red; after the user has stayed in one location for some time the color turns amber, and after being for 14 days in the same location the color turns green. from Summary of David Li interview by Christian Nold 15th Mar 2020 available at: http://tiny.cc/DavidLi_colorcoding.


# Method: Designing with Constraints
The case of the COVID-19 epidemic shows that applying a policy of real-time monitoring the health status and location of citizens can help in “flattening the diffusion curve”, by eventually restricting - for a limited period of time - the right to freedom of movement for people with high “contamination potential”. But a technical system implementing this policy may be authoritarian to the point of unreasonableness, and it could even undermine fundamental provisions of the European Convention on Human Rights. The challenge lies in operating efficiently in times of health crises, by leveraging the effectiveness of a sophisticated observation system, while respecting the rule of law and not compromising individual privacy rights.

# Innovation: Disposable Yet Official Identities
From an initial point of view, an application named “Privacy Protecting Health Status and Location Observation Facility” sounds like a challenge to the European values, the fundamental human rights and the democratic fight against “power politics”. It can be effective and adopted by the citizens only “under constraints'', mainly by incorporating the concept of “Disposable Identities” advocated in this site (2). Based on a Self-Sovereign Identity (SSI) architecture and an anonymized dynamic location registry, these disposable identities are cryptographically unrelated to a person’s real identity, respecting in this way the constitutional right of citizens to privacy. The implementation of the disposable identity concept proposed here, realizes apolicy of “dynamic color coding” marking the health status of each citizen using Verifiable Credentials. In brief, the health status credential is associated with the citizen’s location data, both of which can be considered as parts of a unique “Disposable Yet Official Identity (DYOI)”. DYOIs are issued by healthcare authorities, managed by the identity subject through a mobile wallet application, and stored in the citizens’ mobile phones in an encrypted form. Most importantly, although official, they are not explicitly connected to the subject’s personal identity information, or mobile ID; nevertheless, they can be anonymously verified (i.e cryptographically ensuring that a DYOI is effectively related to an existing identity of a real citizen, and eventually providing personal data such as age, country or city of residence etc. but not personal identification data). A subject can at any given time prove ownership over these DYOI if required to.

(2) See in particular: Disposable Identities (DISID), Rob van Kranenburg. Loretta Anania, Gaëlle Le Gars,
NGI FORWARD CSA 2020

# DYOIs: High-level technical description
A Disposable Yet Official Identity (DYOI) realizing the color coding monitoring system mentioned above consists of a small number of Verifiable Credentials anchored on two different DIDs (Decentralized Identifiers):

- A Health DID which is used by Verifiable Credentials pointing to the health status and location of the subject
- A Personal Identity DID which is used by Verifiable Credentials pointing to the subject's PII data (always encrypted with a private key managed by the subject),and is different from any previously issued DID for the purposes of other SSI applications (i.e. civil identity, passport, student identity etc.).


The Health DID can be stored in the databases of national Health Systems and be eventually deleted after the end of the crisis cycle (or revoked by the subject), while the Personal Identity DID can be stored only by the IdPs that provide identification services. These two DIDs are never presented simultaneously to any party, thus preventing possible correlations and ensuring the protection of the privacy of the subjects.

A subject registered with the Observation Facility will immediately become the owner of three Verifiable Credentials issued by different VC Issuers (and stored in the subject’s wallet):

- A Verifiable Credential (Identity VC) issued by an IdP - this is a type of VC containing the subject’s personal identity information (the main data set of their national digital identity, or the eIDAS eID minimum data set) - anchored in the subject’s Personal Identity DID
- A Verifiable Credential issued by a Health Provider (Health VC) containing the subject’s health status attribute represented - for the purposes of verification - by a colored barcode (for example: green for healthy, yellow for recovered, orange for potentially compromised, red for infected) - anchored in the subject’s Health DID (the subjects may also issue or update themselves such a verifiable credential under specific conditions).
- A GDPR Consent Verifiable Credential (Consent VC). This VC is generated by the user’s wallet app (signed using a Health DID associated key) and contains the DID of the Observation Facility as its subject. This DID expresses the consent given by the user to the Observation Facility to process the users location data and associate them with their health status for as long as the crisis lasts. If special circumstances arise (e.g. the user is marked as “immune” by the system) then the user will be able to revoke this consent.



Finally, the Facility registers in an anonymized Dynamic Location Registry the various geographical locations visited by the subjects (obtained through the connected network sources), as well as the duration (entry and exit time) of their stay at each location etc. Location data are linked to the subject through the Health DID. Here too, the existence of two separate DIDs ensures the anonymity of the location information, in the same way that the anonymity of health status data is preserved.

## DYOIs: Main features
A DYOI has the following main characteristics:

- It is an emergency identity, and thus **temporary**, in the sense that it is meant to be discarded after the passing of the health crisis for which it was created
- It is **anonymous**, in the sense that the DYOI data are anonymized by design as they are contained in a different VC from the one containing the subject’s personal data; the monitoring of the subjects’ health status and location is necessary for the effective dealing with an epidemic, but this does not mean that the subject’s personal data have to be exposed.
- It is an **official** identity, in the sense that it uniquely characterizes its possessor and is issued by an authoritative source.
- It is **dynamic**, in the sense that the subject’s health status and location are time stamped and, as a result, it reflects the evolution (in real-time) of a subject’s condition during the time of a particular health crisis.





