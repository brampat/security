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

<span>
```
http://example.com/?name=Bram
```
</span>


<span class="fragment" data-fragment-index="0" -->
```
http://example.com/?name=<script>alert('XSS triggered')</script>
```
</span>

--

## Secure Software Development class 102
<hr />

```php
<?php
  echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
?>
```

--

## Conventional Security effort
<hr />

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

![](./pics/SSDLC_Risk.png)<!-- .element style="box-shadow:none; position: fixed; left: 140px; top: 350px;" class="fragment" data-fragment-index="1" -->
![](./pics/SSDLC_Threat.png)<!-- .element style="box-shadow:none; position: fixed; left: 265px; top: 350px;" class="fragment" data-fragment-index="1" -->
![](./pics/SSDLC_Static.png)<!-- .element style="box-shadow:none; position: fixed; left: 390px; top: 350px;" class="fragment" data-fragment-index="1" -->
![](./pics/SSDLC_Dynamic.png)<!-- .element style="box-shadow:none; position: fixed; left: 515px; top: 350px;" class="fragment" data-fragment-index="1" -->
![](./pics/SSDLC_Pentest.png)<!-- .element style="box-shadow:none; position: fixed; left: 640px; top: 350px;" class="fragment" data-fragment-index="0" -->
![](./pics/SSDLC_Config.png)<!-- .element style="box-shadow:none; position: fixed; left: 765px; top: 350px;" class="fragment" data-fragment-index="1" -->
![](./pics/SSDLC_cleanup.png)<!-- .element style="box-shadow:none; position: fixed; left: 890px; top: 350px;" class="fragment" data-fragment-index="1" -->

![](pics/SDLC.png)<!-- .element style="box-shadow:none; position: fixed; left: 265px; top: 250px;" class="fragment" data-fragment-index="6" -->

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
* Phase-out procedures

![](./pics/siemonster.jpg)<!-- .element style="box-shadow:none; position: fixed; right: 0px; top: 410px; width: 520px; z-index: -1;" -->

