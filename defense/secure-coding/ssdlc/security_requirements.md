# Security requirements
During requirements, the team can coordinate with their organisation's Chief Information Security Officer (CISO) to discuss CIA classifications and Business Impact Analysis. Questions to answer include:
* What data is handled in the application?
  * Does this concern sensitive / confidential data, like:
    * Information that is already publicly available?
    * Personally Identifiable data (PII) -> This will require you to adhere to privacy laww like GDPR and equivalent
    * Intellectual Property
    * Competitive Client or contract information
    * Etc.
  * Where and how will data be stored?
    * Will data be stored on cloud-services or internally?
    * Will data be encrypted?
    * Will data storage be separated from the application's logic?
    * How will data storage be secured?
* How will the application be accessed?
  * Is it:
    * Publicly accessible
    * Client / partner accessible?
    * Internally accessible?
  * Is VPN mandatory?
* Does the application expose sensitive or important functionality?
  * Financial transactions
  * Control industrial machinery, utilities like water purification, water, gas or electricity networks, traffic systems like traffic-lights, level crossings etc.
  * Handle or support in health-care, like insulin monitors or pumps, pacemakers, MRI scanners etc.
* Does it support risky software operations, like managing content, uploading data or files, etc.
* What are availability requirements?
  * Should it be available 24/7 99.999999% of the time?
  * Should it be available only during working hours? If so: what are working hours? Are users located in different timezones?

## Example requirements:
* Encrypt all data at rest
* Encrypt all data in transit
* Validate and sanitize all data coming into the system
  * Ensure this is done server-side
  * Use whitelist based approach. Never use blacklist based
  * When possible, use a mapping on allowed values for input sanitization 
* Encode all data flowing out of the system using the proper encoding for the context
  * OWASP [Java Encoder](https://www.owasp.org/index.php/OWASP_Java_Encoder_Project)
* Scan 3rd party components for vulnerabilities and keep versions up-to-date
  * OWASP [Dependency check](https://www.owasp.org/index.php/OWASP_Dependency_Check)
* Use the latest (supported, production-ready, non-Beta) version of your tech / framework
* Use security headers
  * [Scan Security Headers](https://securityheaders.com/)
* Store passwords using proper hashing (bcrypt), salting and peppering
* Only allow HTTPS and redirect from HTTP to HTTPS
  * Update SSL-certs on time
  * [Let's Encrypt](https://letsencrypt.org/)
  * Ensure the latest version of TLS is used for encryption
* Never hardcode secrets, data or references like connection-strings into the system. Instead make these configurable.
  * Host-names or IP-addresses
  * Websites or web-service URLs
  * Email addresses
  * Database keys / foreign keys
  * User names or user ids
  * Passwords
* Don't put sensitive information in code-comments
* Don't write your own security features, but use those available in your tech / framework
  * Cryptography, hashing, encryption
  * Session management
  * Sanitization, validation, encoding
* Use proper rigorous input validation when allowing file-upload
  * Scan uploaded files with eg. [Assembly Line](https://cyber.gc.ca/en/assemblyline)
* Perform proper logging of errors and security events
  * Do not log sensitive information, like passwords, PII or other secrets or sensitive information
  * Trigger alerts when security incidents or errors happen.
  * Ensure proper actions are taken when these alerts happen
* Perform the following before releasing the application:
  * Threat modelling
  * Code review on both quality, technical aspects, security aspects
  * Security testing
* Fail safe or close the application when an unexpected error is raised, examples: 
  * If the authentication raises an unexpected error, make sure the authentication is unsuccessful
  * Don't keep repeating an unsuccessful action until it succeeds, but limit the number of retries and fail that process in an acceptable way
* Use ABAC and RBAC properly
  * A health professional should only be allowed to access the health-information of its patients, not the health information of all patients in the system

Source:
* [Security Requirements](https://code.likeagirl.io/pushing-left-like-a-boss-part-2-security-requirements-a71b86f6dd3f) by [Tanya Janca](https://twitter.com/shehackspurple)
* [From the OWASP Top Ten(s) to the OWASP ASVS](https://www.youtube.com/watch?v=Gnxk_uf6qTQ) by [Philippe De Ryck](https://twitter.com/philippederyck) at GOTO 2018 Berlin
  * [Slides](https://pragmaticwebsecurity.com/talks/owaspasvs.html) of "From the OWASP Top Ten(s) to the OWASP ASVS"

## Risk assessment
Using this table the application and it's data can be classified on the CIA aspects.

| Quality aspect    | Priority      |           |           |           |
|-------------------|---------------|-----------|-----------|-----------|
| Confidentiality   | Very strict   | Strict    | Internal  | Public    |
| Integrity         | Critical      | High      | Medium    | Low       |
| Availability      | Critical      | High      | Medium    | Low       |

Additionally the team could also add the extended CIA aspects of:
* Non-repudiation
* Code validation
* Authentication

## Tools:
* OWASP Threat Dragon
* OWASP [Cornucopia](https://www.owasp.org/index.php/OWASP_Cornucopia) Cardgame
* Microsoft [Elevation of Privilege](https://www.microsoft.com/en-us/download/confirmation.aspx?id=20303) Threat Modeling Card Game

Practice:
* Bruce Wayne / Batman threat model