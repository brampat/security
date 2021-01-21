# Secure Coding

Most coding will be in context of web-application development.

## Web-development:

### Securing web-servers
* [HTTPS in 6 steps](https://www.troyhunt.com/the-6-step-happy-path-to-https/) by Troy Hunt

### Securing Web applications
* [SANS SWAT checklist](https://www.sans.org/security-resources/posters/secure-devops-practices/175/download) Securing Web Application Technologies

### Cookies
* HTTP is stateless, a web-application by definition does not save state between requests. This means, each request is
independent from another request. So for example, there's no auto-save for the shopping-cart in a webshop.
* Cookies can be set to "save" some state, but this isn't practical in all situations
* Sessions can be set up server-side to save state. This needs a (secured!) session-id cookie. The downside is: for each 
  client / user at a time, you need server-side storage and memory. Also, how long do you save session-data on the server? 
  Also: make sure you securely handle session-cookies, as they are essentially the authentication to your user's actions.
  This means: send them over HTTPS only (secure-flag) and make sure they cannot be read by external factors (HTTP-only flag)
  * SESSION by default
  * PHPSESSID for PHP
  * JSESSIONID for Java, JSP
* Client-side storage doesn't have this downside. Each client can save it's own state. But, client-side data can be manipulated 
  and cannot be trusted
* SOP: Same Origin Policy prevents cookies from being read by scripts outside of the same origin. The reading code should match
  the cookie's protocol, host-name and port. It is not necessary to match the full path on the server.
  * [SOP Basics](https://www.gracefulsecurity.com/same-origin-policy-basics-and-cross-site-request-forgery/)
* Flag http-only: prevents a cookies from being read by non-html resources like JavaScript, Flash, Java
* Secure flag: prevents the cookie to be sent over non-secure (HTTPS) connection
* CSP, Content Security Policy: Blocks non-whitelisted url's for script or other resource loading. Report-uri attribute: url to send json report on blocking error
* x-xss-protection: 1; [mode=block;] (optional, kills whole page), "report"-attribute: endpoint for XSS warnings

## Security standards / models

* [ASVS](https://github.com/OWASP/ASVS/tree/master/4.0/en) Application Security Verification Standard: For verification of security maturity
* [Cybrary Secure coding](https://www.cybrary.it/course/secure-coding/): OWASP Top 10 and SANS Top 25 vulnerabilities and defenses

### OWASP SAMM
* [OWASP SAMM](https://owasp.org/www-project-samm/) or [OWASP SAMM.org](https://www.owaspsamm.org) OWASP Software Assurance Maturity Model: For measuring maturity of secure software deveopment.
  * SAMM defines four business functions each with three security practices. Each of the twelve practices are divided into three maturity levels.O
  ![](SAMM.png)
  * [OWASP SAMM 1.5](https://owaspsamm.org/v1-5/downloads/): SAMM 1.5 in a PDF 
  * [OWASP SAMM 2.0](https://owaspsamm.org/model/): SAMM 2.0  introduction 
* [SAMM Self Assessment](https://github.com/AsteriskLabs/ssa): (dormant since 2014) Tool to assist in Self-assessment on OpenSAMM (built in Rails).

#### User day June 2020
* [Full stream](https://youtu.be/BpNbWZg_pKY)
  * 3:45 [OWASP SAMM Update 2.0](https://youtu.be/5B-methdLO8) - Bart de Win
  * 33:33 [The Seven deadly sins of SAMM](https://youtu.be/yz-JbdI48NU)
  * 1:03:14 Agile Guidance for SAMM - Rob van der Veer (Agile add-on triggered by Dutch CIP's [Agile Security Management](https://www.cip-overheid.nl/media/1358/20191010_agile_security_management_v101.pdf))
  * 2:21:20 SAMM 2.0 Dashboard
  * 2:51:38 OWASP Top 10 Maturity Categories for Security Champions
  * 3:21:47  Using OWASP SAMM to kickstart SSDLC
  * OWASP SAMM: Tools of the trade

| Time      | Talk                                                              | Presenter             |
|----------:|-------------------------------------------------------------------|-----------------------|
| 3:45      | [OWASP SAMM Update 2.0](https://youtu.be/5B-methdLO8)             | Bart de Win & [Sebastien Deleersnyder](https://www.twitter.com/sebadele) |
| 33:33     | [The Seven deadly sins of SAMM](https://youtu.be/yz-JbdI48NU)     | John Wood             |
| 1:03:14   | Agile Guidance for SAMM                                           | Rob van der Veer      |
| 2:21:20   | SAMM 2.0 Dashboard                                                | Sathish Ashwin        |
| 2:51:38   | OWASP Top 10 Maturity Categories for Security Champions           | [Lucian Corlan](https://www.twitter.com/securitystack)    |
| 3:21:47   | Using OWASP SAMM to kickstart SSDLC                               | [Thomas Kerbl](https://www.twitter.com/dementophobia)     |
|           | OWASP SAMM: Tools of the trade                                    | John Ellingsworth     |


## Secure coding training  /teaching
* [Hacksplaining](https://www.hacksplaining.com/) all common vulnerabilities with step-by-step hack-examples and defense with code examples
* [Hack yourself first](https://www.pluralsight.com/courses/hack-yourself-first) by Troy Hunt on Pluralsight (free course)
* [OWASP Secure coding practices](https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices_-_Quick_Reference_Guide)  quick reference guide
* Video's from [SecAppDev](https://www.youtube.com/channel/UCSii2fuiLLlGqaR6sR_y0rA/videos)
  * [OWASP Top 10 Proactive controls](https://www.youtube.com/watch?v=-tF-ZkzdThI) by [Jim Manico](https://twitter.com/manicode)
  * [Secure Development Lifecycles](https://www.youtube.com/watch?v=L-gL1YQUrwg) by Bart de Win
* Video's from [The Secure Developer](https://www.youtube.com/channel/UCFf01c7VwZZWCRJwmcn5_DQ/videos) by [Snyk](https://snyk.io/)
  * [Top 10 Proactive Controls](https://www.youtube.com/watch?v=ldXe8f5yVq8) by [Jim Manico](https://twitter.com/manicode)
  * The [State of Open Source Security](https://www.youtube.com/watch?v=rGpmVVTrCLc)
  * [Why can't we build secure software](https://www.youtube.com/watch?v=Uep-z8vaXGk) by [Tanya Janca](https://twitter.com/shehackspurple)
  * [DevSecOps](https://www.youtube.com/watch?v=Wx7dsbEReiE): Faster Feedback with Security Unit Testing in CI/CD
  * [Insecure transit](https://www.youtube.com/watch?v=wtspLMAPCYQ): Microservice Security
  * The [Three faces of DevSecOps](https://www.youtube.com/watch?v=9VDvXjpZcVk)
  * [10 excellent ways](https://www.youtube.com/watch?v=KsG7AZqXL9M) to secure your Spring Boot Application
  * The new ways of [DevSecOps](https://www.youtube.com/watch?v=XByV6SBdpYA)
  * Making Security an [Integrated part](https://www.youtube.com/watch?v=GFd4RWVfhsM) of the Software Development Lifecycle by Siren Hofvander with [Siren Hofvander](https://twitter.com/securitypony)
* [OWASP Encoding project](https://www.owasp.org/index.php/Category:OWASP_Encoding_Project)
* [From OWASP Top 10 to Secure Applications](https://www.youtube.com/watch?v=nUUxLuio6rs) by Roberto Velasco @ Spring I/O 2019
* [SAFECode](https://safecode.org/training/) On-demand web-casts
* [Pragmatic Web Security](https://pragmaticwebsecurity.com/index.html#courses) by [Philippe De Ryck](https://twitter.com/philippederyck)
  * [From OWASP Top 10 to OWASP ASVS](https://pragmaticwebsecurity.com/talks/owaspasvs.html)
  * [Cookies vs tokens: a paradoxical choice](https://pragmaticwebsecurity.com/talks/cookiesvstokens.html)
  * [OAuth 2.0 security in Angular](https://pragmaticwebsecurity.com/talks/passwordspixiedust.html)
  * [HTTPS for developers](https://pragmaticwebsecurity.com/talks/httpsfordevelopers.html)
  * [Angular and the OWASP top 10](https://pragmaticwebsecurity.com/talks/angularowasptop10)
  * [The parts of JWT security nobody talks about](https://pragmaticwebsecurity.com/talks/jwtsecurity.html)
  * [The truth about cookies, tokens and APIs](https://pragmaticwebsecurity.com/talks/truthcookiestokensapis.html)
  * [Introduction to OAuth 2.0 and OpenID Connect](https://pragmaticwebsecurity.com/talks/introductionoauth.html)
  * [Security patterns for keeping secrets in the browser](https://pragmaticwebsecurity.com/talks/browsersecrets.html)
  * [Common API security pitfalls](https://pragmaticwebsecurity.com/talks/commonapisecuritypitfalls)
  * [Taking security seriously](https://pragmaticwebsecurity.com/talks/takingsecurityseriously.html)
* [Security Ninja's](https://github.com/cniemira/security-ninjas)


## Microsoft Security Webinars
* [List](https://aka.ms/SecurityWebinars) of MS Security Webinars (Mostly Azure related)
* Becoming an [Azure Sentinal Ninja](https://techcommunity.microsoft.com/t5/azure-sentinel/become-an-azure-sentinel-ninja-the-complete-level-400-training/ba-p/1246310)