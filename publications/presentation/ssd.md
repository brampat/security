## Secure Software Development
<hr />

### Conventional Security effort

![](./pics/truck_fixing.gif)<!-- .element style="width: 500px;" class="fragment" -->

--

## Secure Software Development
<hr />

![](./pics/bug_cost.jpg)<!-- .element style="width: 500px;" -->

Cost increases 30-100x

--

## Secure Software Development
<hr />

### Conventional Security effort

![](./pics/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->

![](./pics/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; left: 140px; top: 350px;" class="fragment" data-fragment-index="5" -->
![](./pics/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; left: 265px; top: 350px;" class="fragment" data-fragment-index="4" -->
![](./pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; left: 390px; top: 350px;" class="fragment" data-fragment-index="3" -->
![](./pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; left: 515px; top: 350px;" class="fragment" data-fragment-index="2" -->
![](./pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 640px; top: 350px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; left: 765px; top: 350px;" class="fragment" data-fragment-index="1" -->

![](./pics/SSDLC_Left.png)<!-- .element style="box-shadow:none; position: fixed; left: 265px; top: 250px;" class="fragment" data-fragment-index="6" -->

--

## Secure Software Development
<hr />

![](./pics/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->
![](./pics/risk_vs_impact.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 210px; width: 620px; z-index: -1;" -->

* CIA Ratings
* Quality Gates
* Security Specifications
* Security Requirements
* Risk Assessment



--

## Secure Software Development
<hr />

![](./pics/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Threat Modelling
* Attack Surface Analysis
* Security Architecture

![](./pics/threat_model.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 210px; width: 620px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](./pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Static Code analysis (SAST):
  * QA: Checkmarx, Fortify, FindSecurityBugs, PumaScan, MS SDL for Azure
  * Dependencies & Licensing: OWASP Dependency-check, White-source, Snyk
* Pair programming
* Code review / Pull-requests

![](./pics/checkmarx.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 310px; width: 520px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](./pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* DAST Tools: OWASP ZAP, Nessus, OpenVAS
* Basic Vulnerability scanning
* Internal Red-teaming
* Security Unit Testing
* Security Smoke tests

![](./pics/nessus.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 310px; width: 520px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](./pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Professional Pen-testing
* Risk Assessment review
* Advanced Code Reviews
* Fuzz Testing (Chaos Monkey testing)

![](./pics/kali.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 310px; width: 520px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](./pics/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Secure deployment
* Secrets Managements
* Security Configuration
* Server hardening
* Monitoring with SIEM / Log aggregation:
  * Splunk, ElasticStack, OSSIM, OSSEC, Apache Metron, SIEMonster
* Patching & Updating
* Phase-out procedures

![](./pics/siemonster.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 410px; width: 520px; z-index: -1;" -->

