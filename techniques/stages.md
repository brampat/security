# Stages of (ethical) hacking

There are different stages in the operation of a hack. These are in practice not always followed in linear fashion ie. as a waterfall.
Sometimes, after gaining access (hack) of a specific system, another scanning phase could be performed, before another hack could be done.

## Reconnaissance
Passive<br>
Preparation phase, gathering information, footprinting.

### Pre-engagement interaction
Passive<br>

### Intelligence gathering
Active or Passive<br>

#### Footprinting 
Find out everything about target. See [Footprinting](footprinting.md)

### Thread modeling
Passive<br>
Modelling the systems and physical infrastructure, to enable planning of the hack-strategy.

## Scanning
Active, no modification<br>
Defending against scanning: see [here](../defense/scanning.md)

Active information gathering, network and infrastructure scanning, scanning for vulnerabilities. By sending network traffic to hosts or on networks and 
analyzing responses, we will get information about the hosts and network. Goals are, to find out information about :
* live hosts
* ports
  * open ports
  * closed ports
* protocols
* services
  * network services
* OS information and versions (via fingerprinting)
* applications and versions (via fingerprinting)
* configuration details
* banners

This information is then used to determine vulnerabilities and possible ways to attack.<br>
Challenges in this stage is to avoid detection by IDS. Using IP spoofing, proxies etc. can be used to assist.

### Techniques:
* Full open scans
* Half-open and stealth scans
* TCP flag scans
* ICMP and UDP scans
  
### Vulnerability analysis
Passive, no modification<br>
* Analyse information from scanning
* Gather information on systems, services, software and applications specifically on known vulnerabilities in those versions

## Gaining access
Active, possibly modification<br>
Actual hacks, penetration of systems.
* Using exploits
* Physical access, eg. to install hardware or software tools / malware

### Exploitation
Active, possibly modification<br>

## Post exploitation

### Maintaining access
Active, possibly modification<br>
Keep, extend and / or escalate access to systems eg. by installing tools & configuration (keys, user-accounts) to regain access.
 

### Clearing tracks
Active, modification<br>
The goal is to avoid detection, in practice done throughout the entire hack
* Clearing logs
* Penetrate firewall
* Circumvent IDS
* Removing installed tools

## Reporting
Most importantly, report back to the organization or client what your findings are in a professional, clear and transparant report.
This report should be readible and understandable by the target audience for which you have executed the security test.
This eventually pays the bills.


---------------
Sources:
* [PTES](http://www.pentest-standard.org/index.php)
* [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
