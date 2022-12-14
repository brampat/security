# Security Controls / Countermeasures

This section describes means to manage, monitor and defend against attacks. The first place to start for developers would be the [OWASP section](owasp/README.md) and the following online courses:
* [Hacksplaining](https://www.hacksplaining.com/) which describes different web-attacks in detailed, easy-to-understand steps and explains how to protect against these attacks.
* [Hack yourself first](https://www.pluralsight.com/courses/hack-yourself-first) by Troy Hunt, free Pluralsight training which describes web-attacks in details and how to perform them yourself.
* [SAFECode](https://safecode.org) Non profit organization with free on-demand webcasts on Secure Software Development.

## Use of defense-in-depth strategy
Secure systems and organizations on several levels, both vertically as horizontally. 
Use a combination of security measures, so if one countermeasure fails, breaks down or is compromised, another is still in place to prevent damage.

## Administrative / Management controls
The rules (often defined by management) by which security should be enforced.: "Paperwork controls": Policies, procedures, security clearances etc. 

## Operational / Physical controls
The physical means to enforce security and access to the organization: Gates, guards, guns, security camera's and monitors.

## Logical / Technical controls
Technical measures to enforce security: Firewalls, encryption, network securities, accounts


# Frameworks and Assessments
* [OWASP SAMM](https://owaspsamm.org/) Software Assurance Maturity model
  * Maturity in the secure software development process
  * Mostly organizational scope
  * Assessment found [here](https://owaspsamm.org/assessment/) including an MS Excel and Google Docs Spreadsheet
* [OWASP DSOMM](https://owasp.org/www-project-devsecops-maturity-model/) DevSecOps Maturity Model
  * DevSecOps, maturity in DevOps, CI/CD and automation
  * Partly maps to OWASP SAMM, but more focussed on tech and automation
  * Heatmap "assessment" found [here](https://dsomm.timo-pagel.de/circular-heatmap)
* [CD3M](https://nisi.nl/continuousdelivery/articles/maturity-model) by NISI
  * Continuous Delivery, DevOps and some Scrum / Agile practices
* [SLSA](https://slsa.dev/) Supply chain Levels for Software Artifacts
* [BSIMM](https://www.bsimm.com/) Building Security In Maturity Model
* Scrum Agile:
  * [Sprint Agile](https://sprintagile.com.au/maturity-assessment/)
  * [InfoQ](https://www.infoq.com/articles/agile-team-maturity-assessment/)

# Resources
* [SAFECode](https://safecode.org) Non profit organization with free on-demand webcasts on Secure Software Development

-----------

Sub-pages:
* [Defense Types](defenseTypes.md)
* [OWASP](owasp/README.md)
* [Encryption](encryption/README.md)

## Networking:
* [ARP Poisoning](arpPoisoning.md)
* [DoS](dos.md)
* [MAC Flooding](macFlooding.md)
* [WiFi Sniffing](wifiSniffing.md)

## Malware
* [Malware](malware.md)

## Account-management
* [Passwords](passwords.md)

## Information gathering
* [Footprinting](footprinting.md)
* [Scanning](scanning.md)

## Secure Coding
* [Java](secure-coding/java/README.md)
* [GO](secure-coding/GO/README.md)
* [Grails](secure-coding/Grails/README.md)
* [JavaScript](secure-coding/javascript/README.md)
* [ASP.NET](secure-coding/NET/README.md)
* [PHP](secure-coding/PHP/README.md)
* [Python](secure-coding/python/README.md)
* [Ruby on Rails](secure-coding/rubyOnRails/README.md)
* [SSDLC](secure-coding/ssdlc/README.md)

## Application
* [Webserver attacks](webserver.md)

## Incident response
* [Responsible disclosure](responsibleDisclosure.md)
* [What to do when hacked](stagesOfGrief.md)

-----------
Sources:
* [Virtual Training Company](https://www.youtube.com/watch?v=wWKbQIfEGrQ)
* [NCSC](https://www.ncsc.gov.uk/section/advice-guidance/all-topics): List of subjects by UK's National Cyber Security Centre
* PagerDuty Security Training:
  * [For Engineers](https://sudo.pagerduty.com/for_engineers/)
  * [For Everyone](https://sudo.pagerduty.com/for_everyone/)