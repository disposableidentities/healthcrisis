# 5 use-cases of Health Status Sharing for Social Recovery with HygienGap

## Use-Case 1: Public Self Declaration

“I have been quarantined/recovered, here is my evidence” 

Public Self Declaration provides a means of formally sharing one’s health status with various actors to make public interactions easier. This system relies on two stage authentication:  

Self-declaration of one’s health status based on medical testing or other kinds of knowledge.
Certification by a reviewer who examines the evidence that has been submitted and gives official assurance. They don’t necessarily have to be medical specialists but some kind of authority figure such as priests or police.  
Sara is in Italy but usually lives in London. She has a letter from an Italian doctor saying that she has been self-isolating for the last six weeks. The letter also mentions that her young son has been with her this time. She enters the metadata of the letter into the application. This creates a certificate for her and her son on Sara’s mobile device. At the airport she holds up her phone with the QR, a doctor reviews the letter from her doctor, takes her temperature and certifies her health status. He replies by displaying a QR code on his device which she scans with her phone and uses to update her individual certificate of health status. This interaction is then stored on a blockchain. It is then easy for Sara and her son to travel back to London. 

## Use-Case 2: Human Firewall

“Public Services want to know who has recovered and can be widely deployed” 

The human firewall provides a way of identifying and maintaining a group of people who are safe from infection. It relies on establishing a tightly controlled group of individuals that have been quarantined or have recovered. This ‘cured’ health status is certified by an authority figure in the service. The concept is currently in practice of the Charite Hospital in Berlin - which is one of the leading Corona Research facilities in Europe and thus based on a solid scientific context. - A user to create a self-declaration of health status via Smartphone.  - The public service manager has a record/proof of this.  - The certified individuals have a record/proof to demonstrate to their coworkers. - The certificates can be shared with other public services.  - Users can revoke the certificate.  - Certificates will revoke automatically with the end of time limit.  

Knut is a clinical director at a hospital. He needs to take care of regular patients, staff and COVID-19 infected people. Due to the epidemic situation his resources are stretched to the limit. He also fears that his staff with unknown health status might expose patients during their daily work. He would like to only use doctors that are immune to COVID-19 as a “human firewall” to limit the spread risk in his medical facility. For this strategy to work, it is important to create transparent methods of tracking the health status and separate potential high-risk staff from low risk immune staff in serving patients. Once one of his staff members has been immunised, they show their QR code to Knut. He signs their public declaration on his phone and replies by showing his own QR code certification. Both the doctor and Knut keep a copy of this certificate on their mobile devices. The certificate is also stored in the blockchain. With the signed certificate the medical staff are allowed to enter sensitive medical treatment areas and to get into physical contact with critical patients. 

## Use-Case 3: Local Community Support

“Let third parties feel safe in interacting with citizens of “unknown” health status” 

This approach allows volunteer groups to coordinate their efforts in supporting citizens with an “unknown” health status. Knowing people’s status and history allows everyone to feel more comfortable and provides security to people who are not specialists. This scenario addresses the complicated space of third parties in between individual and medical authorities. The system allows two-way traceability of the volunteer and the helped entity.  

Allow people to maintain contact history such as: “This person needs help” 
Third party adds assumed status such as isolated/tested/recovered. 
Traceability also allows the team to track interaction for volunteer safety as well as vulnerable people. Useful for contact tracing if there is infection. 
Hans has been engaged in the local community for a long time. When Covid-19 hit, he started a local aid network along with 200 local people. He uses the app to manage the health status of the vulnerable people in the area that he is supporting. When visiting people, he can demonstrate his own health status by showing them the QR code on his app. This means they feel safer when he hands over their shopping. He can also record the health status for other people who do not have their own smartphone or technical ability to use the app. For example, he can certify that Vera has been quarantined for two months and add this to his certificate stack. Walking in the street he also takes a picture of a house where he has not heard from anyone for a week and assigns the people living there a status of “they might need help here”. In this way the system provides evidence of where he has visited which makes him feel safe as well as reassuring the vulnerable people he is working with. 

## Use-Case 4: Civil Health Dashboard **

“I need an overview of what is going on in civil society” 

Health authorities are in need of an efficient system of managing resources in the case of a health crisis. Tools and methods for privacy preserving data processing and analytics are needed to manage public health status on a short term but also on a long-term perspective. For that, the data storage, processing and accessing must be in line with the general European data policies.  

Our solution will provide a framework for transparently and anonymously observing the health status and the geographical location of citizens and combining them in a privacy-preserving manner. The proposed framework will provide policymakers with tools to contain and mitigate health threats, as well as restrict the further diffusion of an epidemic, without compromising citizens’ privacy. Essentially, the case will implement a “dynamic color-coded policy” which enables: a) the differentiation of users in terms of their health status and b) the detection of gatherings with a significant concentration of infected people (or people with a high probability of being infected). 

Antonio is the director of the public health crisis team of his city. He needs to decide and delegate resources for health aid on a daily basis. Every morning he and his team gather for a daily briefing to analyse the situation of COVID-19 impacts and define action points. By using the Civil Health Dashboard, they have access to an additional data layer for their local area which shows the percentage of people quarantined vs. recovered in different areas of the city. This allows them to better utilise resources and create more targeted actions. In addition, the dashboard allows them to adjust actions in progress by informing stakeholders. 

## Use-Case 5: Personal e-wallet for Health Crises

“Assist citizens to navigate anonymously in health crises” 

In times of health crisis, citizens benefit from a mobile app (in the form of a personal e-wallet) that can keep them informed of the latest health strategies, helping them recognise a infection risks based on past encounters and location history, assisting officials in issuing health status credentials as well as storing these credentials and prove ownership over them. 

To achieve that, the assistant collects information about the health status and location of users anonymously and uses this data to send alerts and warnings regarding the necessary restriction measures they might be required to partake in, as well as gain access to protected locations. This will be achieved by combining the anonymized health status and geolocation history of the users with their PII data in a privacy preserving manner (by using decentralised PKI and Zero_knowledge Proof techniques), preventing possible correlations between the multiple datasets. Ensuring privacy and anonymity becomes feasible with the use of Disposable Identities. Based on a Self-Sovereign model of Identity2 and a dynamic location registry, these disposable identities are cryptographically unrelated to a person’s real identity, respecting in this way the constitutional right of citizens to privacy. This concept of disposable identity realizes a dynamic colour coding system marking the health status of each citizen using Verifiable Credentials. The health status claim is associated with the citizen’s location data, both of which can be considered as parts of a unique “Disposable Yet Official3 Identity (DYOI)”. 

A DYOI has the following main characteristics: 

It is an emergency identity, and thus temporary, since it will be discarded after the passing of the health crisis for which it was created. 
It is anonymous, the DYOI data are anonymized by design as they are contained in a different VC from the one containing the user’s personal data  
It is an official identity, since it uniquely characterises its possessor and is issued by an authoritative source 
It is dynamic, since the user’s health status and location are time-stamped and, as a result, reflects the evolution (in real-time) of a subject’s condition during a time of health crisis. 
Angela needs to go to the supermarket for shopping. Because of epidemic prevention measures movement restrictions are in place allowing only citizens that can prove that it is not likely that they are infected based on her location history, to go to public areas. Upon reaching the supermarket, Angela is asked to present proof of her health status to the authorised personnel. Angela is in possession of a Verifiable Credential stored in her mobile phone containing her health status. This credential was automatically generated by the system analysing her recent location history. She transmits a proof of her health status together with a proof of ownership to the security officer using her mobile. She does that without revealing any more information about herself. The security officer verifies the received information and grants her access. 

Alice is at home and does not present any symptoms. Her phone buzzes and she is informed that based on an analysis of her location history she might be already infected, and her health status has been altered to “orange”. The analysis took place completely anonymously without any information other than Alice's location history being leaked to the system. Alice is advised to stay home for a predefined time period and to seek medical assistance if she develops any symptoms. 

Authors of these Use-Cases:
Jari Isohanni, Rob van Kranenburg, Jef Vanbockryck, Christian Nold, Mirko Ross
