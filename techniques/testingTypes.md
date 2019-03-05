# Types of tests


## Types of Ethical hacking setups

### Black box testing
The hacker knows nothing or very little of the system being tested. The hacker might know an IP-address 
or maybe just the organization that requires testing, but not much more. This requires the hacker to execute full information gathering and thread modelling stages

### White box testing
The hacker knows just about everything of the system being tested. This includes full system overview / architecture,
software and services including versions running on the system, full sourcecode etc. Sometimes even admin account credentials

### Grey box testing
Some or limited knowledge about the target or system

### Vulnerability testing
Scan & testing for vulnerabilities, no exploits

### Full penetration testing
Testing for all targets & attack vectors

### Targeted testing
Targeting only specific pieces of infrastructure. Part of grey or white-box testing as the hacker should know which systems to target.<br>

- Databases
- Web application testing
- Client-server application testing
- Code review (secure code review)
- Physical security tests
- Social engineering
- Network scanning
- Malware detection
- Information leakage
- Defensive testing only (reactive defensive team testing)
- Red team testing
- Contingency / incident response testing (how well defense responds to incidents)

------------
* Source [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
* [Vulnerability testing vs. penetration tests](https://www.gracefulsecurity.com/vulnerability-assessments-vs-penetration-tests/)


## Configuration and deployment management testing

## Identity management testing

## Authentication testing
Failure to implement this correctly can lead to account hijacking. Even correctly implementing a simple username / password system
can often be "hacked" by brute-forcing with weak or commonly used passwords.

## Authorization testing
Failure to implement this correctly can lead to users having access to unauthorized functionality. Example: incorrect configuration of 
the authorization can give a regular user access to administrative functionality, which it should not have. 

## Session management testing
Failure to implement this correctly can lead to session hijacking

## Input validation testing
Failure to do so, can result in things like SQL-injection

## Error handling
Failure to do so, can result in data leakage

## Cryptography
Failure to implement this correctly can result in weak encryption which can be broken by hackers to sniff or read data which 
should not have been accessible.

## Business logic testing
Examples are: a webshop where customers can order negative amount of articles. Also see input validation.

## Client side testing


-------------------
Source: [OWASP](https://www.owasp.org/index.php/Testing:_Introduction_and_objectives)<br>


