## Secure Software Development
<hr />


--

## Project Trilemma
<hr />

![](pics/project_triangle.png)<!-- .element style="box-shadow:none; position: middle; width: 500px;" -->

Pick any 2

-- Notes --

You can control any 2 elements, team / developers control the 3rd:
* functionality for cheap, takes time
* functionality quickly, expensive
* cheap and quickly, not fully functional

--

## Project Trilemma: Test
<hr />

Please:
* Stand if you struggle with Project Trilemma
* Have a seat if you DON'T have clear requirements<!-- .element class="fragment" data-fragment-index="0" -->
* Have a seat if you DO have clear security requirements<!-- .element class="fragment" data-fragment-index="1" -->
* Everyone still standing should have:<!-- .element class="fragment" data-fragment-index="2" -->
  * Clear requirements<!-- .element class="fragment" data-fragment-index="2" -->
  * But no security requirements<!-- .element class="fragment" data-fragment-index="2" -->
  * Struggles with Project Trilemma<!-- .element class="fragment" data-fragment-index="2" -->

Perfect solution for you<!-- .element class="fragment" data-fragment-index="3" -->

--

## Project Trilemma: Solution
<hr />

* Functional
* Fast
* Cheap
* Great UX (for dba-ers)<!-- .element class="fragment" data-fragment-index="0" -->
* Sacrifice some security<!-- .element class="fragment" data-fragment-index="0" -->
  * But that wasn't required<!-- .element class="fragment" data-fragment-index="0" -->

![](pics/cheap_fast_fully_functional.png)<!-- .element style="box-shadow:none; position: fixed; right: 15px; top: 50px;" class="fragment" data-fragment-index="0" -->

-- Notes --

Web-app that simply performs database-queries.
You can do everything, including:
* create account (insert into users)
* reset passwords (update user)
* add orders (insert into orders)
* etc.

--

## Development class 101
<hr />

```php
<?php
  echo 'Hello, World!';
?>
```

--

## Development class 102
<hr />

```php
<?php
  echo 'Hello ' . $_GET["name"] . '!'; 
?>
```

--

## Secure Software Development class 101
<hr />

### XSS 101

<pre><code>example.com/?name=Bram</code></pre>

<pre class="fragment"><code>example.com/?name=<script>alert('XSS triggered')</script></code></pre>

--

## Secure Software Development class 102
<hr />

### XSS Defense

```php
<?php
  echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
?>
```

--

## Secure Software Development
<hr />

### Fixing bugs

![](./pics/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; top: 160px; width: 650px;" -->

Cost increases 30-100x<!-- .element style="z-index: -100; box-shadow:none; position: fixed; bottom: 20px; " -->

-- Notes --

Early discovery leads to lower impact and cost to fix
Late discovery increases cost exponentially

--

## Conventional Security effort
<hr />

![](./pics/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; top: 130px; width: 750px;" class="fragment" data-fragment-index="0" -->
![](./pics/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->
![](./pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;" class="fragment" data-fragment-index="1" -->

-- Notes --

Conventional Security:
* Add pentesting
* Late discovery
* Increased impact & cost
* Lots of low-hanging fruit
* Less time to find hard-to-find security bugs

--

## Conventional Security effort
<hr />

![](./pics/truck_fixing.gif)<!-- .element style="box-shadow:none; position: fixed; left: 200px; top: 100px; width: 600px;" -->

-- Notes --
Feels a bit like this

--

## Secure Software Development
<hr />

![](./pics/bug_cost.jpg)<!-- .element style="z-index: -100; box-shadow:none; position: fixed; left: 40px; top: 130px; width: 750px;" -->

![](./pics/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 800px; " -->

![](./pics/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; left: 130px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; left: 240px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; left: 350px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; left: 460px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 570px; top: 320px;"  -->
![](./pics/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; left: 680px; top: 320px;" class="fragment" data-fragment-index="0" -->
![](pics/SSDLC_Cleanup.png)<!-- .element style="box-shadow:none; position: fixed; left: 780px; top: 320px;" class="fragment" data-fragment-index="0" -->

![](pics/SSDLC_Left.png)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 220px;" class="fragment" data-fragment-index="3" -->


--

## Secure Software Development
<hr />

![](pics/apple_tree_.png)<!-- .element style="box-shadow:none; position: fixed; left: 50px; top: 170px; width: 500px; " -->
<hr /><!-- .element style="border-top: 3px solid #888888; position: fixed; top: 290px; width: 1000px; " class="fragment" data-fragment-index="1" -->
<hr /><!-- .element style="border-top: 3px solid #888888; position: fixed; top: 390px; width: 1000px; " class="fragment" data-fragment-index="0" -->

Sweet fruit<!-- .element style="position: fixed; left: 600px; top: 210px; " class="fragment" data-fragment-index="2" -->

Bulk fruit<!-- .element style="position: fixed; left: 600px; top: 320px; " class="fragment" data-fragment-index="1" -->

Low hanging fruit<!-- .element style="position: fixed; left: 600px; top: 420px; " class="fragment" data-fragment-index="0" -->

![](pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 410px; " class="fragment fade-in-then-out" data-fragment-index="3" -->
![](pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 300px; " class="fragment fade-in-then-out" data-fragment-index="4" -->
![](pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 410px; " class="fragment " data-fragment-index="4" -->
![](pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: -20px; top: 410px; " class="fragment " data-fragment-index="4" -->
![](pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 200px; " class="fragment " data-fragment-index="5" -->
![](pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; right: 20px; top: 300px; " class="fragment " data-fragment-index="5" -->
![](pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: -20px; top: 300px; " class="fragment " data-fragment-index="5" -->

-- Notes --

* Low hanging fruit:
  * easy security issues
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
  * QA: SonarQube, FindSecurityBugs, Checkmarx, Fortify, PumaScan, MS SDL for Azure
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

## Secure Software Development: Unit tests
<hr />

![](./pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->


```groovy
class SimpleController {
    def hello() {
        render "Hello ${params.name} !"
    }
}
```

```groovy
@TestFor(SimpleController)
@Unroll
class SimpleControllerSpec extends Specification {

    void 'test param'() {
        given:
        params.name = name
        
        when:
        controller.hello()
        
        then:
        response.text.contains(result)
        
        where:
        name                        || result
        'Bram'                      || 'Hello Bram'
        '<script>alert(1)</script>' || '&lt;script&gt;alert(1)&lt;/script&gt;'
    }
}
```


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

![](./pics/siemonster.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 410px; width: 520px; z-index: -1;" -->

--

## Secure Software Development
<hr />

![](pics/SSDLC_Cleanup.png)<!-- .element style="box-shadow:none; position: fixed; right: 40px; top: 10px; width: 120px;" -->

* Phase-out procedures
* Safe removal of:
  * Application
  * Server
  * Connections (to and from)
  * Account
* Data Archiving
* Code Archiving
