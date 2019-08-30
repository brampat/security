# OWASP Top 10

Version 2017 found [here](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)

## Injection

[source](https://www.owasp.org/index.php/Top_10-2017_A1-Injection)

### Description

Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent
to an interpreter as part of a command or query. The attacker’s hostile data can trick the
interpreter into executing unintended commands or accessing data without proper authorization.

### Mitigation

Preventing injection requires keeping data separate from commands and queries.

* The preferred option is to use a safe API, which avoids the use of the interpreter entirely or provides a parameterized interface, or migrate to use Object Relational Mapping Tools (ORMs). Note: Even when parameterized, stored procedures can still introduce SQL injection if PL/SQL or T-SQL concatenates queries and data, or executes hostile data with EXECUTE IMMEDIATE or exec().
* Use positive or "whitelist" server-side input validation. This is not a complete defense as many applications require special characters, such as text areas or APIs for mobile applications. 
* For any residual dynamic queries, escape special characters using the specific escape syntax for that interpreter. Note: SQL structure such as table names, column names, and so on cannot be escaped, and thus user-supplied structure names are dangerous. This is a common issue in report-writing software.
* Use LIMIT and other SQL controls within queries to prevent mass disclosure of records in case of SQL injection.


### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | A1        | Injection                 |
| 2013  | A1        | Injection                 |
| 2010  | A1        | Injection                 |
| 2007  | A2        | Injection Flaws           |
| 2004  | A6        | Injection Flaws           |
| 2003  | A6        | Command Injection Flaws   |

### Resources
* [SQL Injection cheat sheet](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/?utm_source=hacksplaining&utm_medium=post&utm_campaign=articlelink) by Netspraker

## Broken Authentication

[source](https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication)

### Description

Application functions related to authentication and session management are often implemented
incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit
other implementation flaws to assume other users’ identities temporarily or permanently.


### Mitigation

* Where possible, implement multi-factor authentication to prevent automated, credential stuffing, brute force, and stolen credential re-use attacks.
* Do not ship or deploy with any default credentials, particularly for admin users.
* Implement weak-password checks, such as testing new or changed passwords against a list of the top 10000 worst passwords.
* Align password length, complexity and rotation policies with NIST 800-63 B's guidelines in section 5.1.1 for Memorized Secrets or other modern, evidence based password policies.
* Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.
* Limit or increasingly delay failed login attempts. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.
* Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login. Session IDs should not be in the URL, be securely stored and invalidated after logout, idle, and absolute timeouts.

### Position

| Year  | Position  | Name                                          |
|------:|----------:|-----------------------------------------------|
| 2017  | A2        | Broken Authentication                         |
| 2013  | A2        | Broken Authentication and Session Management  |
| 2010  | A3        | Broken Authentication and Session Management  |
| 2007  | A7        | Broken Authentication and Session Management  |
| 2004  | A3        | Broken Authentication and Session Management  |
| 2003  | A3        | Broken Account and Session Management         |

## Sensitive Data Exposure

* Merged from the following items in 2010:
  * A7 – Insecure Cryptographic Storage
  * A9 - Insufficient Transport Layer Protection

Data exposure is a breach of confidentiality. This can be prevented by securing data both at rest and in transit.
The former OWASP 2010 vulnerabilities A7 and A9 handle these separately. In OWASP 2013 these vulnerabilities were merged into A6 - Sensitive Dtaa Exposure  

[source](https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure)

### Description

Many web applications and APIs do not properly protect sensitive data, such as financial,
healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit
card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra
protection, such as encryption at rest or in transit, and requires special precautions when
exchanged with the browser.

### Mitigation

Do the following, at a minimum, and consult the references:
* Classify data processed, stored, or transmitted by an application. Identify which data is sensitive according to privacy laws, regulatory requirements, or business needs.
* Apply controls as per the classification.
* Don’t store sensitive data unnecessarily. Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.
* Make sure to encrypt all sensitive data at rest.
* Ensure up-to-date and strong standard algorithms, protocols, and keys are in place; use proper key management.
* Encrypt all data in transit with secure protocols such as TLS with perfect forward secrecy (PFS) ciphers, cipher prioritization by the server, and secure parameters. Enforce encryption using directives like HTTP Strict Transport Security (HSTS).
* Disable caching for responses that contain sensitive data.
* Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt, or PBKDF2.
* Verify independently the effectiveness of configuration and settings.

### Position

| Year  | Position  | Name                                                                      |
|------:|----------:|---------------------------------------------------------------------------|
| 2017  | A3        | Sensitive Data Exposure                                                   |
| 2013  | A6        | Sensitive Data Exposure                                                   |
| 2010  | A7 - A9   | Insecure Cryptographic Storage - Insufficient Transport Layer Protection  |
| 2007  | A8 - A9   | Insecure Cryptographic Storage - Insecure Communications                  |
| 2004  | A8        | Insecure Storage - (new in 2007)                                          |
| 2003  | A8        | Insecure Use of Cryptography                                              |

## Insecure Cryptographic Storage

* Formerly known as:
  * 2004 - Insecure Storage
  * 2003 - Insecure Use of Cryptography
* Merged in 2013 into ```Sensitive Data Exposure``` with ```Insufficient Transport Layer Protection```

### Description

Many web applications do not properly protect sensitive data, such as credit cards, SSNs, and authentication credentials, with appropriate encryption or hashing. Attackers may steal or modify such weakly protected data to conduct identity theft, credit card fraud, or other crimes.

[source](https://www.owasp.org/index.php/Top_10_2010-A7-Insecure_Cryptographic_Storage)

### Position

| Year  | Position  | Name                              |
|------:|----------:|-----------------------------------|
| 2017  | A3        | Sensitive Data Exposure           |
| 2013  | A6        | Sensitive Data Exposure           |
| 2010  | A7        | Insecure Cryptographic Storage    |
| 2007  | A8        | Insecure Cryptographic Storage    |
| 2004  | A8        | Insecure Storage                  |
| 2003  | A8        | Insecure Use of Cryptography      |

## Insufficient Transport Layer Protection

* Formerly known in 2007 as ```Insecure Communications``` when it was introduced
* Merged in 2013 into ```Sensitive Data Exposure``` with ```Insecure Cryptographic Storage```

### Description

Applications frequently fail to authenticate, encrypt, and protect the confidentiality and integrity of sensitive network traffic. When they do, they sometimes support weak algorithms, use expired or invalid certificates, or do not use them correctly.

[source](https://www.owasp.org/index.php/Top_10_2010-A9-Insufficient_Transport_Layer_Protection)

### Position

| Year  | Position  | Name                                      |
|------:|----------:|-------------------------------------------|
| 2017  | A3        | Sensitive Data Exposure                   |
| 2013  | A6        | Sensitive Data Exposure                   |
| 2010  | A9        | Insufficient Transport Layer Protection   |
| 2007  | A9 (new)  | Insecure Communications                   |
| 2004  |           |                                           |
| 2003  |           |                                           |

## XML External Entities (XXE)

### Description

Many older or poorly configured XML processors evaluate external entity references within XML
documents. External entities can be used to disclose internal files using the file URI handler,
internal file shares, internal port scanning, remote code execution, and denial of service attacks.

[source](https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_%28XXE%29)

### Mitigation

Developer training is essential to identify and mitigate XXE. Besides that, preventing XXE requires:
* Whenever possible, use less complex data formats such as JSON, and avoiding serialization of sensitive data.
* Patch or upgrade all XML processors and libraries in use by the application or on the underlying operating system. Use dependency checkers. Update SOAP to SOAP 1.2 or higher.
* Disable XML external entity and DTD processing in all XML parsers in the application, as per the OWASP Cheat Sheet 'XXE Prevention'.
* Implement positive ("whitelisting") server-side input validation, filtering, or sanitization to prevent hostile data within XML documents, headers, or nodes.
* Verify that XML or XSL file upload functionality validates incoming XML using XSD validation or similar.
* SAST tools can help detect XXE in source code, although manual code review is the best alternative in large, complex applications with many integrations.

If these controls are not possible, consider using virtual patching, API security gateways, or Web Application Firewalls (WAFs) to detect, monitor, and block XXE attacks.

### Position

| Year  | Position  | Name                          |
|------:|----------:|-------------------------------|
| 2017  | A4 (new)  | XML External Entities (XXE)   |
| 2013  |           |                               |
| 2010  |           |                               |
| 2007  |           |                               |
| 2004  |           |                               |
| 2003  |           |                               |

## Broken Access Control

### Description

Restrictions on what authenticated users are allowed to do are often not properly enforced.
Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access
other users' accounts, view sensitive files, modify other users’ data, change access rights, etc.

[source](https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control)

### Mitigation

Access control is only effective if enforced in trusted server-side code or server-less API, where the attacker cannot modify the access control check or metadata.
* With the exception of public resources, deny by default.
* Implement access control mechanisms once and re-use them throughout the application, including minimizing CORS usage.
* Model access controls should enforce record ownership, rather than accepting that the user can create, read, update, or delete any record.
* Unique application business limit requirements should be enforced by domain models.
* Disable web server directory listing and ensure file metadata (e.g. .git) and backup files are not present within web roots.
* Log access control failures, alert admins when appropriate (e.g. repeated failures).
* Rate limit API and controller access to minimize the harm from automated attack tooling.
* JWT tokens should be invalidated on the server after logout. 

Developers and QA staff should include functional access control unit and integration tests.

### Position

Merges the following items from OWASP Top 2013:
* A4 - Insecure Direct Object References
* A7 - Missing Function Level Access Control


| Year  | Position  | Name                                                                      |
|------:|----------:|---------------------------------------------------------------------------|
| 2017  | A5        | Broken Access Control                                                     |
| 2013  | A4 - A7   | Insecure Direct Object References - Missing Function Level Access Control |
| 2010  | A4 - A8   | Insecure Direct Object References – Failure to Restrict URL Access        |
| 2007  | A4 - A10  | Insecure Direct Object References – Failure to Restrict URL Access        |
| 2004  | A2        | Broken Access Control                                                     |
| 2003  | A2 - A9   | Broken Access Control - Remote Administration Flaws                       |


## Insecure Direct Object References

* Formerly split in 2007 through 2013 from ```Broken Access Control``` 
* Re-merged in 2017 with ```Missing Function Level Access Control```
* Merged with ```Remote Administration Flaws``` in 2004

### Description

A direct object reference occurs when a developer exposes a reference to an internal implementation object, such as a file, directory, or database key. Without an access control check or other protection, attackers can manipulate these references to access unauthorized data.

[source](https://www.owasp.org/index.php/Top_10_2013-A4-Insecure_Direct_Object_References)

### Position

| Year  | Position  | Name                                                  |
|------:|----------:|-------------------------------------------------------|
| 2017  | A5        | Broken Access Control                                 |
| 2013  | A4        | Insecure Direct Object References                     |
| 2010  | A4        | Insecure Direct Object References                     |
| 2007  | A4        | Insecure Direct Object References                     |
| 2004  | A2        | Broken Access Control                                 |
| 2003  | A2 - A9   | Broken Access Control - Remote Administration Flaws   |


## Missing Function Level Access Control

* Formerly split in 2007 through 2013 from ```Broken Access Control``` 
* Re-merged in 2017 with ```Insecure Direct Object References```
* Merged with ```Remote Administration Flaws``` in 2004

### Description

Most web applications verify function level access rights before making that functionality visible in the UI. However, applications need to perform the same access control checks on the server when each function is accessed. If requests are not verified, attackers will be able to forge requests in order to access functionality without proper authorization.

[source](https://www.owasp.org/index.php/Top_10_2013-A7-Missing_Function_Level_Access_Control)

### Position

| Year  | Position  | Name                                                  |
|------:|----------:|-------------------------------------------------------|
| 2017  | A5        | Broken Access Control                                 |
| 2013  | A7        | Missing Function Level Access Control                 |
| 2010  | A8        | Failure to Restrict URL Access                        |
| 2007  | A10       | Failure to Restrict URL Access                        |
| 2004  | A2        | Broken Access Control                                 |
| 2003  | A2 - A9   | Broken Access Control - Remote Administration Flaws   |


## Security Misconfiguration

### Description

Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure
default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured
HTTP headers, and verbose error messages containing sensitive information. Not only must all
operating systems, frameworks, libraries, and applications be securely configured, but they must
be patched and upgraded in a timely fashion.

[source](https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration)

### Mitigation

Secure installation processes should be implemented, including:

* A repeatable hardening process that makes it fast and easy to deploy another environment that is properly locked down. Development, QA, and production environments should all be configured identically, with different credentials used in each environment. This process should be automated to minimize the effort required to setup a new secure environment.
* A minimal platform without any unnecessary features, components, documentation, and samples. Remove or do not install unused features and frameworks.
* A task to review and update the configurations appropriate to all security notes, updates and patches as part of the patch management process (see A9:2017-Using Components with Known Vulnerabilities). In particular, review cloud storage permissions (e.g. S3 bucket permissions).
* A segmented application architecture that provides effective, secure separation between components or tenants, with segmentation, containerization, or cloud security groups.
* Sending security directives to clients, e.g. Security Headers.
* An automated process to verify the effectiveness of the configurations and settings in all environments.

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | A6        | Security Misconfiguration |
| 2013  | A5        | Security Misconfiguration |
| 2010  | A6 (new)  | Security Misconfiguration |
| 2007  |           |                           |
| 2004  |           |                           |
| 2003  |           |                           |


## Cross-Site Scripting (XSS)

### Description

XSS flaws occur whenever an application includes untrusted data in a new web page without
proper validation or escaping, or updates an existing web page with user-supplied data using a
browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the
victim’s browser which can hijack user sessions, deface web sites, or redirect the user to
malicious sites.

[source](https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS))

### Mitigation

Preventing XSS requires separation of untrusted data from active browser content. This can be achieved by:
* Using frameworks that automatically escape XSS by design, such as the latest Ruby on Rails, React JS. Learn the limitations of each framework's XSS protection and appropriately handle the use cases which are not covered.
* Escaping untrusted HTTP request data based on the context in the HTML output (body, attribute, JavaScript, CSS, or URL) will resolve Reflected and Stored XSS vulnerabilities. The OWASP Cheat Sheet 'XSS Prevention' has details on the required data escaping techniques.
* Applying context-sensitive encoding when modifying the browser document on the client side acts against DOM XSS. When this cannot be avoided, similar context sensitive escaping techniques can be applied to browser APIs as described in the OWASP Cheat Sheet 'DOM based XSS Prevention'.
* Enabling a Content Security Policy (CSP) is a defense-in-depth mitigating control against XSS. It is effective if no other vulnerabilities exist that would allow placing malicious code via local file includes (e.g. path traversal overwrites or vulnerable libraries from permitted content delivery networks).

### Position

| Year  | Position  | Name                          |
|------:|----------:|-------------------------------|
| 2017  | A7        | Cross-Site Scripting (XSS)    |
| 2013  | A3        | Cross-Site Scripting (XSS)    |
| 2010  | A2        | Cross-Site Scripting (XSS)    |
| 2007  | A1        | Cross-Site Scripting (XSS)    |
| 2004  | A4        | Cross-Site Scripting (XSS)    |
| 2003  | A4        | Cross-Site Scripting (XSS)    |

## Insecure Deserialization

### Description

Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not
result in remote code execution, they can be used to perform attacks, including replay attacks,
injection attacks, and privilege escalation attacks. 

[source](https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization)

### Mitigation

The only safe architectural pattern is not to accept serialized objects from untrusted sources or to use serialization mediums that only permit primitive data types. If that is not possible, consider one of more of the following:
* Implementing integrity checks such as digital signatures on any serialized objects to prevent hostile object creation or data tampering.
* Enforcing strict type constraints during deserialization before object creation as the code typically expects a definable set of classes. Bypasses to this technique have been demonstrated, so reliance solely on this is not advisable.
* Isolating and running code that deserializes in low privilege environments when possible.
* Logging deserialization exceptions and failures, such as where the incoming type is not the expected type, or the deserialization throws exceptions.
* Restricting or monitoring incoming and outgoing network connectivity from containers or servers that deserialize.
* Monitoring deserialization, alerting if a user deserializes constantly.

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | A8 (new)  | Insecure Deserialization  |
| 2013  |           |                           |
| 2010  |           |                           |
| 2007  |           |                           |
| 2004  |           |                           |
| 2003  |           |                           |


## Using Components with Known Vulnerabilities

### Description

Components, such as libraries, frameworks, and other software modules, run with the same
privileges as the application. If a vulnerable component is exploited, such an attack can facilitate
serious data loss or server takeover. Applications and APIs using components with known
vulnerabilities may undermine application defenses and enable various attacks and impacts. 

[source](https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities)

### Mitigation

There should be a patch management process in place to:
* Remove unused dependencies, unnecessary features, components, files, and documentation.
* Continuously inventory the versions of both client-side and server-side components (e.g. frameworks, libraries) and their dependencies using tools like versions, DependencyCheck, retire.js, etc. Continuously monitor sources like CVE and NVD for vulnerabilities in the components. Use software composition analysis tools to automate the process. Subscribe to email alerts for security vulnerabilities related to components you use.
* Only obtain components from official sources over secure links. Prefer signed packages to reduce the chance of including a modified, malicious component.
* Monitor for libraries and components that are unmaintained or do not create security patches for older versions. If patching is not possible, consider deploying a virtual patch to monitor, detect, or protect against the discovered issue.

Every organization must ensure that there is an ongoing plan for monitoring, triaging, and applying updates or configuration changes for the lifetime of the application or portfolio. 

### Position

| Year  | Position  | Name                                          |
|------:|----------:|-----------------------------------------------|
| 2017  | A9        | Using Components with Known Vulnerabilities   |
| 2013  | A9 (new)  | Using Components with Known Vulnerabilities   |
| 2010  |           |                                               |
| 2007  |           |                                               |
| 2004  |           |                                               |
| 2003  |           |                                               |

## Insufficient Logging & Monitoring

### Description

Insufficient logging and monitoring, coupled with missing or ineffective integration with incident
response, allows attackers to further attack systems, maintain persistence, pivot to more systems,
and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over
200 days, typically detected by external parties rather than internal processes or monitoring. 

[source](https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring)

### Mitigation

As per the risk of the data stored or processed by the application:
* Ensure all login, access control failures, and server-side input validation failures can be logged with sufficient user context to identify suspicious or malicious accounts, and held for sufficient time to allow delayed forensic analysis.
* Ensure that logs are generated in a format that can be easily consumed by a centralized log management solutions.
* Ensure high-value transactions have an audit trail with integrity controls to prevent tampering or deletion, such as append-only database tables or similar.
* Establish effective monitoring and alerting such that suspicious activities are detected and responded to in a timely fashion.
* Establish or adopt an incident response and recovery plan, such as NIST 800-61 rev 2 or later.

There are commercial and open source application protection frameworks such as OWASP AppSensor, web application firewalls such as ModSecurity with the OWASP ModSecurity Core Rule Set, and log correlation software with custom dashboards and alerting. 

### Position

| Year  | Position  | Name                              |
|------:|----------:|-----------------------------------|
| 2017  | A10 (new) | Insufficient Logging & Monitoring |
| 2013  |           |                                   |
| 2010  |           |                                   |
| 2007  |           |                                   |
| 2004  |           |                                   |
| 2003  |           |                                   |

## Cross-Site Request Forgery (CSRF)

### Description

A CSRF attack forces a logged-on victim’s browser to send a forged HTTP request, including the victim’s session cookie and any other automatically included authentication information, to a vulnerable web application. This allows the attacker to force the victim’s browser to generate requests the vulnerable application thinks are legitimate requests from the victim.

[source](https://www.owasp.org/index.php/Top_10_2013-A8-Cross-Site_Request_Forgery_(CSRF))

### Mitigation

Preventing CSRF usually requires the inclusion of an unpredictable token in each HTTP request. Such tokens should, at a minimum, be unique per user session.
1. The preferred option is to include the unique token in a hidden field. This causes the value to be sent in the body of the HTTP request, avoiding its inclusion in the URL, which is more prone to exposure.
2. The unique token can also be included in the URL itself, or a URL parameter. However, such placement runs a greater risk that the URL will be exposed to an attacker, thus compromising the secret token. \*
3. Requiring the user to reauthenticate, or prove they are a user (e.g., via a CAPTCHA) can also protect against CSRF.

\* OWASP’s CSRF Guard can automatically include such tokens in Java EE, .NET, or PHP apps. OWASP’s ESAPI includes methods developers can use to prevent CSRF vulnerabilities.

### Position

| Year  | Position  | Name                                  |
|------:|----------:|---------------------------------------|
| 2017  | -         |                                       |
| 2013  | A8        | Cross-Site Request Forgery (CSRF)     |
| 2010  | A5        | Cross-Site Request Forgery (CSRF)     |
| 2007  | A5 (new)  | Cross-Site Request Forgery (CSRF)     |
| 2004  |           |                                       |
| 2003  |           |                                       |


## Unvalidated Redirects and Forwards

### Description

Web applications frequently redirect and forward users to other pages and websites, and use untrusted data to determine the destination pages. Without proper validation, attackers can redirect victims to phishing or malware sites, or use forwards to access unauthorized pages.

[source](https://www.owasp.org/index.php/Top_10_2013-A10-Unvalidated_Redirects_and_Forwards)

### Mitigation

Safe use of redirects and forwards can be done in a number of ways:
1. Simply avoid using redirects and forwards.
2. If used, don’t involve user parameters in calculating the destination. This can usually be done.
3. If destination parameters can’t be avoided, ensure that the supplied value is valid, and authorized for the user. It is recommended that any such destination parameters be a mapping value, rather than the actual URL or portion of the URL, and that server side code translate this mapping to the target URL.
Applications can use ESAPI to override the sendRedirect() method to make sure all redirect destinations are safe.

Avoiding such flaws is extremely important as they are a favorite target of phishers trying to gain the user’s trust.

### Position

| Year  | Position  | Name                                  |
|------:|----------:|---------------------------------------|
| 2017  | -         |                                       |
| 2013  | A10       | Unvalidated Redirects and Forwards    |
| 2010  | A10 (new) | Unvalidated Redirects and Forwards    |
| 2007  |           |                                       |
| 2004  |           |                                       |
| 2003  |           |                                       |

## Malicious File Execution

### Description

Code vulnerable to remote file inclusion (RFI) allows attackers to include hostile code and data, resulting in devastating attacks, such as total server compromise. Malicious file execution attacks affect PHP, XML and any framework which accepts filenames or files from users.

[source](https://www.owasp.org/index.php/Top_10_2007-A3)

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | -         |                           |
| 2013  | -         |                           |
| 2010  | -         |                           |
| 2007  | A3 (new)  | Malicious File Execution  |
| 2004  |           |                           |
| 2003  |           |                           |

## Information Leakage and Improper Error Handling

Renamed each year and disappeared from the OWASP Top 10 since 2010

### Description

Applications can unintentionally leak information about their configuration, internal workings, or violate privacy through a variety of application problems. Attackers use this weakness to steal sensitive data, or conduct more serious attacks.

[source](https://www.owasp.org/index.php/Top_10_2007-A6)

### Position

| Year  | Position  | Name                                              |
|------:|----------:|---------------------------------------------------|
| 2017  | -         |                                                   |
| 2013  | -         |                                                   |
| 2010  | -         |                                                   |
| 2007  | A6        | Information Leakage and Improper Error Handling   |
| 2004  | A7        | Improper Error Handling                           |
| 2003  | A7        | Error Handling Problems                           |

## Unvalidated Input

Renamed each year and disappeared from the OWASP Top 10 since 2007

### Description

Information from web requests is not validated before being used by a web application. Attackers can use these flaws to attack backend components through a web application.

[source](https://www.owasp.org/index.php/A1_2004_Unvalidated_Input)

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | -         |                           |
| 2013  | -         |                           |
| 2010  | -         |                           |
| 2007  | -         |                           |
| 2004  | A1        | Unvalidated Input         |
| 2003  | A1        | Unvalidated Parameters    |

## Buffer Overflows

### Description

Web application components in some languages that do not properly validate input can be crashed and, in some cases, used to take control of a process. These components can include CGI, libraries, drivers, and web application server components.

[source](https://www.owasp.org/index.php/A5_2004_Buffer_Overflow)

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  |           |                           |
| 2013  |           |                           |
| 2010  |           |                           |
| 2007  |           |                           |
| 2004  | A5        | Buffer Overflows          |
| 2003  | A5        | Buffer Overflows          |

## Denial of Service

### Description

Attackers can consume web application resources to a point where other legitimate users can no longer access or use the application. Attackers can also lock users out of their accounts or even cause the entire application to fail.

[source](https://www.owasp.org/index.php/A9_2004_Application_Denial_of_Service)

### Position

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | -         |                           |
| 2013  | -         |                           |
| 2010  | -         |                           |
| 2007  | -         |                           |
| 2004  | A9 (new)  | Denial of Service         |
| 2003  |           |                           |

## Insecure Configuration Management

### Description

Having a strong server configuration standard is critical to a secure web application. These servers have many configuration options that affect security and are not secure out of the box.

[source](https://www.owasp.org/index.php/A10_2004_Insecure_Configuration_Management)

### Position

| Year  | Position  | Name                                          |
|------:|----------:|-----------------------------------------------|
| 2017  | -         |                                               |
| 2013  | -         |                                               |
| 2010  | -         |                                               |
| 2007  | -         |                                               |
| 2004  | A10       | Insecure Configuration Management             |
| 2003  | A10       | Web and Application Server Misconfiguration   |


Sources:
* [OWASP 2017](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_2017_Project)
* [OWASP 2013](https://www.owasp.org/index.php/Top_10_2013)
* [OWASP 2010](https://www.owasp.org/index.php/Top_10_2010)
* [OWASP 2007](https://www.owasp.org/index.php/Top_10_2007)
* [OWASP 2004](https://www.owasp.org/index.php/Top_10_2004)
* OWASP Top 10 examples by 
  * [QuanHeng Lim](https://blog.horangi.com/real-life-examples-of-web-vulnerabilities-2017)
  * George Mathias: 
    * [Part 1](https://medium.com/@cxosmo/owasp-top-10-real-world-examples-part-1-a540c4ea2df5)
    * [Part 2](https://medium.com/@cxosmo/owasp-top-10-real-world-examples-part-2-3cdb3bebc976)
* 