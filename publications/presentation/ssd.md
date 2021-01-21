## Secure Software Development
<hr />

![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->

--

## Secure Software Development 101
<hr />

![](pics/ssdlc/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; top: 130px; width: 750px;" -->
![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;" class="fragment" data-fragment-index="1" -->

-- Notes --

* Early discovery leads to lower impact and cost to fix
* Late discovery increases cost exponentially
* Cost increases 30-100x

So what do we do?
* Add pentesting

--

## Secure Software Development 101
<hr />

![](pics/ssdlc/security_afterthought.gif)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 200px; width: 800px;" -->

-- Notes --

Feels a bit like this:
* Late discovery
* Increased impact & cost
* Lots of low-hanging fruit
* Less time to find hard-to-find security bugs

--

## Secure Software Development 102
<hr />

![](pics/ssdlc/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; top: 130px; width: 750px;" -->

![](pics/ssdlc/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->

![](pics/ssdlc/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; left: 130px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; left: 240px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; left: 350px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; left: 460px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;"  -->
![](pics/ssdlc/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; left: 680px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Cleanup.png)<!-- .element style="box-shadow:none; position: fixed; left: 780px; top: 320px;" class="fragment" data-fragment-index="0" -->

![](pics/ssdlc/SSDLC_Left.png)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 220px;" class="fragment" data-fragment-index="3" -->


--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](https://imgs.xkcd.com/comics/security.png)

Theoretical risks<!-- .element style="box-shadow:none; position: fixed; left: 30px; top: 430px; width: 160px; font-size: 20px;" -->

Actual risks<!-- .element style="box-shadow:none; position: fixed; left: 270px; top: 430px; width: 160px; font-size: 20px;" -->

<span style="box-shadow:none; position: fixed; right: 0px; bottom: 0px; font-size: 20px;" >Source: [XKCD 538](https://xkcd.com/538/)</span>

-- Notes --

Supports the requirements process by adding effective security requirements
* Risk assessment looks at actual threats
* Attackers don't build supercomputers to crack 4096-bit encryption
* They try the easy ways first, like forcing the user with a wrench

Source: [Security reality](https://xkcd.com/538/)

--

## Secure Software Development
<hr />

### Impact vs Probability (*)

![](pics/ssdlc/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->
![](pics/ssdlc/risk_vs_impact.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 210px; width: 820px; z-index: -1;" -->

(*) Or D.R.E.A.D.<!-- .element style="box-shadow:none; position: fixed; left: 0px; bottom: 0px; font-size: 18px;" class="fragment" data-fragment-index="0" -->

-- Notes --

See [DREAD](https://en.wikipedia.org/wiki/DREAD_(risk_assessment_model)) for full risk model 

* Risk Assessment
* CIA Ratings
* Quality Gates
* Security Specifications
* Security Requirements

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

### Tools

![](pics/frontpage/owasp.jpeg)<!-- .element style="box-shadow:none; position: fixed; right: 540px; top: 280px; width: 220px;" -->
<span style="box-shadow:none; position: fixed; right: 620px; top: 520px; ">ASVS<span>
![](pics/ssdlc/MS_elevation_of_privilege.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 250px; width: 220px;" -->
![](pics/ssdlc/OWASP_Cornucopia.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 280px; top: 360px; width: 220px;" -->


-- Notes --

* OWASP [ASVS](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project)
* OWASP [Cornucopia](https://www.owasp.org/index.php/OWASP_Cornucopia)
* Microsoft [Elevation of Privilege](https://www.microsoft.com/en-us/download/details.aspx?id=20303) cardgame

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/threat_model.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 160px; width: 820px; z-index: -1;" -->

-- Notes --

* Architecture Analysis
* Threat Modelling
* Attack Surface Analysis
* Security Architecture

--

## Secure Software Development
<hr />

### Secure design

![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/login_design.jpeg)<!-- .element style="box-shadow:none; position: fixed; left: 10px; top: 220px; width: 370px;" -->
![](pics/ssdlc/login_design_2.png)<!-- .element style="box-shadow:none; position: fixed; right: 10px; top: 220px; width: 370px;" -->
![](pics/ssdlc/login_design_3.png)<!-- .element style="box-shadow:none; position: fixed; right: 10px; top: 360px; width: 370px;" -->
![](pics/ssdlc/login_design_4.png)<!-- .element style="box-shadow:none; position: fixed; right: 10px; top: 510px; width: 370px;" -->

<span style="box-shadow:none; position: fixed; right: 0px; bottom: 0px; font-size: 20px;" >Source: Helping customers secure their accounts - [Leif Dreizler](https://segment.com/blog/helping-customers-secure-their-accounts/)</span>

-- Notes --

How can I help my users make secure choices?

--

## Secure Software Development
<hr />

### Secure by default

![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/crossing.gif)<!-- .element style="box-shadow:none; position: fixed; right: 10px; top: 220px; width: 520px;" -->

-- Notes --

* No default login credentials
* Block on mechanism fail


--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

### Tool

![](pics/ssdlc/threat_dragon.svg)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 160px;" -->

OWASP [Threat Dragon](https://www.owasp.org/index.php/OWASP_Threat_Dragon)

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/checkmarx.jpg)<!-- .element style="box-shadow:none; position: fixed; left: 250px; top: 360px; width: 520px; z-index: -1;" -->
![](pics/ssdlc/fortify.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 160px; width: 420px; z-index: -2;" -->
![](pics/ssdlc/sonarqube_owasp_top10.png)<!-- .element style="box-shadow:none; position: fixed; left: 0px; top: 160px; width: 520px; z-index: -3;" -->

-- Notes --

* Use SAST tools with caution: It's no turn-key fix
* Also: Cover OWASP Top 10 is nice, but no secure app
* Static Code analysis (SAST):
  * QA: SonarQube, FindSecurityBugs, Checkmarx, Fortify, PumaScan, MS SDL for Azure
  * Dependencies & Licensing: OWASP Dependency-check, White-source, Snyk
* Pair programming
* Code review / Pull-requests

--

## Secure Software Development
<hr />

### Allow vs Deny lists

![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/blacklist.png)<!-- .element style="box-shadow:none;" -->

--

## Secure Software Development
<hr />

### Secure Coding Tools

![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* OWASP [Code Review](https://www.owasp.org/index.php/Category:OWASP_Code_Review_Project) Project (Guide 2.0)
* OWASP [Cheat Sheet](https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series) series
* OWASP [Secure Coding](https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices_-_Quick_Reference_Guide) Practices
* OWASP [Top 10 Proactive Controls](https://www.owasp.org/index.php/OWASP_Proactive_Controls)

![](pics/ssdlc/owasp_code_review_guide.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 150px; width: 280px;" -->


--

## Secure Software Development
<hr />

### Static Testing Tools

![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* OWASP [Dependency Check](https://www.owasp.org/index.php/OWASP_Dependency_Check)
* OWASP [Top 10 Web Application Risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
* OWASP [Top 10 Mobile Risks](https://www.owasp.org/index.php/OWASP_Mobile_Security_Project#Top_Ten_Mobile_Risks)
* SonarQube:
  * FindBugs
  * FindSecBugs
* Dedicated SAST:
  * Fortify
  * CheckMarx

Picture found [here](https://raw.githubusercontent.com/brampat/security/master/defense/owasp/OWASP_vul_control_graph.png)

![](pics/ssdlc/OWASP_vul_control_graph.png)<!-- .element style="box-shadow:none; position: fixed; right: -50px; top: 350px; width: 730px;" -->


--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Basic Vulnerability scanning
* Internal Red-teaming
* Security Unit Testing
* Security Smoke tests

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/pentesting_vs_ciso.png)<!-- .element style="box-shadow:none; position: fixed; left: 50px; top: 220px; width: 500px; " -->

How Pentesters [think](https://www.youtube.com/watch?v=XKr3Vb9ABHs)

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

![](pics/ssdlc/apple_tree_.png)<!-- .element style="box-shadow:none; position: fixed; left: 50px; top: 170px; width: 500px; " -->
<hr /><!-- .element style="border-top: 3px solid #888888; position: fixed; top: 290px; width: 1000px; " class="fragment" data-fragment-index="1" -->
<hr /><!-- .element style="border-top: 3px solid #888888; position: fixed; top: 390px; width: 1000px; " class="fragment" data-fragment-index="0" -->

Sweet fruit<!-- .element style="position: fixed; left: 600px; top: 210px; " class="fragment" data-fragment-index="2" -->

Bulk fruit<!-- .element style="position: fixed; left: 600px; top: 320px; " class="fragment" data-fragment-index="1" -->

Low hanging fruit<!-- .element style="position: fixed; left: 600px; top: 420px; " class="fragment" data-fragment-index="0" -->

![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 410px; " class="fragment fade-in-then-out" data-fragment-index="0" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 300px; " class="fragment fade-in-then-out" data-fragment-index="1" -->
![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 410px; " class="fragment " data-fragment-index="1" -->
![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: -20px; top: 410px; " class="fragment " data-fragment-index="1" -->
![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 200px; " class="fragment " data-fragment-index="2" -->
![](pics/ssdlc/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 300px; " class="fragment " data-fragment-index="2" -->
![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: -20px; top: 300px; " class="fragment " data-fragment-index="2" -->

Go hack yourself<!-- .element style="box-shadow:none; position: fixed; right: -20px; bottom: 100px; " -->

-- Notes --

* Low hanging fruit:
  * Say OWASP Top 10-level
  * script kiddies
* Bulk fruit:
  * intermediate issues
  * blackhat hackers
* Sweet fruit
  * Advanced security issues
  * APT-level hackers
* (Timeboxed) Pentesting catches low hanging fruit
* Enabling devs to do basic or even intermediate Security testing will push Pentesting effort up
* Catches advanced security bugs
  * More value for money
  * More satisfaction for pentesters and client

--

## Secure Software Development
<hr />

### Dynamic Testing Tools

![](pics/ssdlc/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* OWASP [ZAP](https://owasp.org/www-project-zap/) (with [HUD](https://www.youtube.com/watch?v=1hbKGDgx_p0))
* Nessus, OpenVAS

![](pics/ssdlc/OWASP_ZAP.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 310px; width: 320px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Professional Pen-testing
* Risk Assessment Review
* Secure Code Review
* Functional logic
* Automated and manual:
  * SAST & DAST

![](pics/ssdlc/kali.png)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 310px; width: 520px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Secure Deployment
* Secrets Vault
* Server Hardening
* Monitoring / Log aggregation:
  * Splunk, ElasticStack
* Patching & Updating

![](pics/ssdlc/siemonster.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 210px; width: 500px; z-index: -1;" -->

I'll skip password policies & 2FA, that would take another hour<!-- .element style="box-shadow:none; position: fixed; left: 20px; bottom: 30px; font-size: 15px;" -->
<span>Read [this](https://brampat.github.io/2019-02-20_passwords_fun_with_numbers/README) instead</span><!-- .element style="box-shadow:none; position: fixed; left: 20px; bottom: 30px; font-size: 15px;" -->

-- Notes --

* Secure Deployment
* Secrets Managements
* Security Configuration
* Server Hardening
* Monitoring with SIEM / Log aggregation:
  * Splunk, ElasticStack, OSSIM, OSSEC, Apache Metron, SIEMonster
* Patching & Updating

--

## Secure Software Development
<hr />

![](pics/ssdlc/SSDLC_Cleanup.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Phase-out Procedures
* Secure removal
* Data & Code Archiving

-- Notes --

* Phase-out Procedures
* Secure removal of:
  * Application
  * Server
  * Connections (to and from)
  * Account
* Data Archiving
* Code Archiving
