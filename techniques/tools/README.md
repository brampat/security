# Tools

* [Security Tools list](https://sectools.org)

* [Kali Linux](https://www.kali.org/downloads/): Linux distro specifically for Penetration testing, strict Debian based
* [Back track Linux](https://www.backtrack-linux.org/): Precursor to Kali Linux (since 2013), Ubuntu based.
* [MacChanger](https://www.hackingtutorials.org/general-tutorials/mac-address-spoofing-with-macchanger/): Change mac-addresses of your network interfaces to allow for anonymization or spoofing [https://www.youtube.com/watch?v=7nF2BAfWUEg&t=12469s](Basic tutorial on 3:34:05)

## Information gathering
* [You Get Signal](https://www.yougetsignal.com/tools/web-sites-on-web-server/): Reverse IP domain check
* [Initial Scan](https://github.com/SolomonSklash/initial-scan): A tool for performing an initial, information-gathering scan of websites for penetration tests.
* [Osmedeus](https://github.com/j3ssie/Osmedeus): Automatic Reconnaissance and Scanning in Penetration Testing
* [Foca](https://www.elevenpaths.com/labstools/foca/index.html): Fingerprinting Organizations with Collected Archives is a tool used mainly to find metadata and hidden information in the documents its scans. 
* [GitGot](https://github.com/BishopFox/GitGot): Scans GitHub for secrets

## Search engines for Hackers:
* [Censys.io](https://censys.io/): Exposed devices & services lookup, based on IP or CIDR blocks
* [Shodan](https://www.shodan.io/): IoT search engine
* [Greynoise](https://viz.greynoise.io/table): Overview of baseline untargeted "internet background noise" of scans and attacks
* [Wigle.net](https://wigle.net/): Wifi, Bluetooth and Cell-tower indexer
* [Publicwww](https://publicwww.com/): HTML source-code scanner, Find any alphanumeric snippet, signature or keyword in the web pages HTML, JS and CSS code.
* [Hunter.io](https://hunter.io/): E-mail address search engine
* [HIBP](https://haveibeenpwned.com/): Have I Been Pwned, see if an account (based on mail-address) has been breached and in what leak
* [Pipl](https://pipl.com/): People Search engine
* [OSInt](https://osintframework.com/): Information gathering from free and semi-free resources. Links to many other search engines.
* [Intel Techniques](https://inteltechniques.com/tools/)

## Network scanning
* Nmap: Network scanning tool, comes with most Linux distributions, but also available on Windows
* Zenmap: GUI front-end to Nmap
* [GoScan](https://github.com/marco-lancini/goscan): Similar to NMap, developed in Go
* [Wireshark](https://www.wireshark.org): DPI scanning / sniffing tool
  * [Userguide](https://www.wireshark.org/docs/wsug_html_chunked/)
  * [Filter reference guide](https://www.wireshark.org/docs/dfref/)
* [Burp Suite / Portswigger](https://portswigger.net/burp/communitydownload) (Euro 350 / year, limited functionality community edition available): Penetration testing, detailed analysis and (manual / automated) modification of network traffic. Ideal for webapp hacking
* OWASP [ZAP](https://owasp.org/www-project-zap/)
  * [OWASP ZAP HUD](https://www.youtube.com/watch?v=1hbKGDgx_p0): Presentation by Simon Bennetts for OWASP London
* [Ettercap](http://www.ettercap-project.org/ettercap/downloads.html): Network sniffing (incl. SSH & HTTPS)

## Calculating with IP-addresses:
* [Subnet calculator](http://www.subnet-calculator.com/)
* [CIDR calculator](http://www.subnet-calculator.com/cidr.php)

## Network hacking
* [Aircrack-NG](https://www.aircrack-ng.org/downloads.html): Wireless network cracking
* [Angry IP Scanner](https://angryip.org/download/#linux): IP & port scanner
* enum: Enumerate Windows shares using null-sessions
* enum4linux: Enumerate Windows shares using null-sessions

## IDS
* [Snort](https://www.snort.org/): Opensource IDS
* [OSSEC](https://www.ossec.net/): Opensource IDS
* [IDS FAQ](http://www.linuxsecurity.com/resource_files/intrusion_detection/network-intrusion-detection.html)

### DoS tools
* [Nemesy](http://packetstormsecurity.com/files/25599/nemesy13.zip.html): Windows tool to generate random packets.
* Land and LaTierra: IP spoofing and opening TCP connections
* [Blast](http://www.opencomm.co.uk/products/blast/features.php)
* Panther: Flood target with UDP packets
* Botnets: Multitudes of compromised computers to perform DDoS attacks

## Encoding & Decoding
* [Base64](https://www.base64encode.org/)
* [Hex to ASCII](https://www.rapidtables.com/convert/number/hex-to-ascii.html)
* [UUEncode](http://uuencode.online-domain-tools.com/)

## Password and crypto hacking
* [Hashcat](https://hashcat.net/hashcat/): Highspeed hashed password cracking tool
* [RainbowCrack](http://project-rainbowcrack.com/index.htm): Hash-cracker based on Rainbow-tables
* [CrypTool](https://www.cryptool.org/en/ct1-downloads): Cryptology tool (OpenSource, Win32 only)
* [MD5this](http://www.md5this.com/): Online MD5 cracker
* [John the Ripper](http://www.openwall.com/john/): Command prompt tool. Uses wordlists
* [Cain & Abel](http://www.softpedia.com/get/Security/Decrypting-Decoding/Cain-and-Abel.shtml): Windows tool with GUI to recover crack / recover passwords of various tools, network sniffing etc.
* [Ophcrack](http://ophcrack.sourceforge.net/): Cross platform tool uses Rainbow table attacks or brute force.
* [Hydra](https://sectools.org/tool/hydra/): Dictionary attacks against numerous network protocols
* [Pipal](https://digi.ninja/projects/pipal.php): Password Analyser [Usage tips](./pipal.md)
* [NebulousAD](https://blog.nuid.io/nebulousad/): Credential Auditor for Active Directory (K-anonymity is planned, but not available yet)

## Database
* [SleuthQL](https://github.com/RhinoSecurityLabs/SleuthQL) identifies parameters and values for potential SQL-injection attacks
* [SQLMap](tools/sqlmap.md): Database penetration, mapping & data-extraction tool for various database-types including support for various blind extraction techniques.
* [AutoSQLi](https://github.com/jesuiscamille/AutoSQLi): An automatic SQL Injection tool which takes advantage of ~DorkNet~ Googler, Ddgr, WhatWaf and sqlmap.

## Web app
* [Netsparker](https://www.netsparker.com) (5k+ / year): Web app security scanner
* [Acunetix](https://www.acunetix.com/web-vulnerability-scanner/) (4.5k+ / year): Web app security scanner
* [Metasploit](https://www.metasploit.com/) (15k+ / year (?), community and dev / research versions available): Penetration testing framework by Rapid7
  * [Meterpreter Basics](https://www.offensive-security.com/metasploit-unleashed/meterpreter-basics/)
* [Nessus](https://www.tenable.com/downloads/nessus): Was OpenSource, now commercial (Euro 2470 / year), free for home & limited training use. Updates vuln. database using plugins.
* [DomListener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en) Chrome extension that listens to DOM-changes (eg. for DOM-bases XSS detection)
* [Requestbin.com](https://requestbin.com) for dumping requests of XSS
* [Beecepter](https://beeceptor.com/) for intercepting requests of XSS
* [Uguu](https://uguu.se) for temporary file hosting (Javascript, image etc.)
* [XSS Hunter](https://xsshunter.com/): Service to assist in XSS attacks with exploit-hosting, Payload probes etc.
* [myBFF](https://github.com/MooseDojo/myBFF) a Bruteforce Framework, Bruteforces:
  * HP SiteScope (will attempt to give you a Meterpreter Shell!)
  * Citrix Gateway (also enumerates authorized applications)
  * Juniper Portal (Will look for 2FA bypass and list what is accessible)
  * MobileIron (Unknown. Have to find out what is accessible first!)
  * Outlook/Office365 (will parse email, contacts, and other data from email)
  * Wordpress (Will be adding "SomethingCool" soon)
  * CiscoVPN (Enumerate User accounts (May not work on all configurations))
  * Okta (Enumerate Applications and check if 2FA is setup for account)
  * Jenkins (Will be adding "Something Cool" soon)
  * SMB (Check if user is an administrator) (must use --domain with this module. for host, use smb://)
  * FTP (List root dir contents)
* [JavaScript deobfuscator](https://lelinhtinh.github.io/de4js/) and unpacker

## API's
* [Swagger-EZ](https://github.com/RhinoSecurityLabs/Swagger-EZ) pentesting API's using OpenAPI definitions

## Cloud
* Lots of [resources](https://github.com/toniblyx/SANSCloudSecuritySummit2018) including tools and blogs
* [CloudCopy](https://github.com/Static-Flow/CloudCopy): Cloud version of the Shadow Copy attack against domain controllers running in AWS using only the EC2:CreateSnapshot permission
* [Cloud-Custodian](https://github.com/cloud-custodian/cloud-custodian): Rules engine for cloud security, cost optimization, and governance, DSL in yaml for policies to query, filter, and take actions on resources
* [Cloudfrunt](https://github.com/MindPointGroup/cloudfrunt)
* [Cloudjack](https://github.com/prevade/cloudjack)
* [Cloud-Nuke](https://github.com/gruntwork-io/cloud-nuke): A tool for cleaning up your cloud accounts by nuking (deleting) all resources within it
* [CloudSploit](https://github.com/cloudsploit): Cloud security configuration monitoring
* [Cred Scanner](https://github.com/disruptops/cred_scanner)
* [DumpsterDiver](https://github.com/securing/DumpsterDiver): Tool to search secrets in various filetypes, like keys (e.g. AWS Access Key, Azure Share Key or SSH keys) or passwords.
* [edda](https://github.com/Netflix/edda) by Netflix: Service to track changes in your cloud
* [enumerate-iam](https://github.com/andresriancho/enumerate-iam): Enumerate the permissions associated with AWS credential set
* [GCP Google Storage Brute-forcing](https://github.com/RhinoSecurityLabs/GCPBucketBrute): Enumerates Google Storage buckets
* [GitLeaks](https://github.com/zricethezav/gitleaks): Audit git repos for secrets
* [Mad-King](https://github.com/ThreatResponse/mad-king): Proof of Concept Zappa Based AWS Persistence and Attack Platform
* [MozDef: The Mozilla Defense Platform](https://github.com/mozilla/MozDef): The Mozilla Defense Platform (MozDef) seeks to automate the security incident handling process and facilitate the real-time activities of incident handlers.
* [Nimbostratus](https://github.com/andresriancho/nimbostratus)
* [Security Monkey](https://github.com/Netflix/security_monkey) by Netflix: Monitors AWS, GCP, OpenStack, and GitHub orgs for assets and their changes over time
* [TruffleHog](https://github.com/dxa4481/truffleHog): Searches through git repositories for high entropy strings and secrets, digging deep into commit history

### Azure
* [AzureStack Tools](https://github.com/Azure/AzureStack-Tools): Scripts and tools that help customers use Azure and Azure Stack
* [Azurite](https://github.com/mwrlabs/Azurite): Enumeration and reconnaissance activities in the Microsoft Azure Cloud
* [Secure DevOps kit for Azure](https://github.com/azsk/DevOpsKit): Secure DevOps Kit for Azure. Docs found [here](https://github.com/azsk/DevOpsKit-docs)

### GCP
* [GCP Audit](https://github.com/spotify/gcp-audit): A tool for auditing security properties of GCP projects.

### AWS
* [AWS Limit Checker](https://github.com/jantman/awslimitchecker): A script and python module to check your AWS service limits and usage via boto
* [AWS PWN](https://github.com/dagrz/aws_pwn)
* [AWS Security Benchmark](https://github.com/awslabs/aws-security-benchmark): Open source demos, concept and guidance related to the AWS CIS Foundation framework
* [AWS Security Research](https://github.com/RhinoSecurityLabs/Cloud-Security-Research) by [Rhino Security Labs](http://www.rhinosecuritylabs.com/)
* [Lambdashell](http://www.lambdashell.com/): This is a simple AWS lambda function that does a straight exec. Essentially giving you a shell directly in my AWS infrastructure to just run your commands.
* [Lambda-Proxy](https://github.com/puresec/lambda-proxy/): A bridge between SQLMap and AWS Lambda, which lets you use SQLMap to natively test AWS Lambda functions for SQL Injection vulnerabilities.
* [Nimbostratus](http://andresriancho.github.io/nimbostratus/): Tools for fingerprinting and exploiting Amazon cloud infrastructures
* [Pacu](https://github.com/RhinoSecurityLabs/pacu): AWS exploitation framework
* [Prowler](https://github.com/toniblyx/prowler): AWS CIS Benchmark Tool
* [Scout2](https://github.com/nccgroup/Scout2): Security auditing tool for AWS environments
* [weirdALL](https://github.com/carnal0wnage/weirdAAL): AWS Attack Library

### Cloud Practicing
* [AWS Lambhack](https://github.com/devsecops/lambhack): A vulnerable serverless lambda application

## Practicing
* [List](https://www.blackroomsec.com/updated-hacking-challenge-site-links/) of hacking challenge sites
* [List 2](https://www.peerlyst.com/posts/resource-a-compendium-of-sites-that-you-can-practice-on-you-can-legally-hack-these-sites-karl-m-1)
* [Metasploitable2](https://sourceforge.net/projects/metasploitable/files/Metasploitable2/): Vulnerable Linux VM for security & penetration practicing
* [Firing Range](https://public-firing-range.appspot.com/): Test bed for automated application security scanners
* [Hack the box](https://www.hackthebox.eu/): Online testing environment, accessible after completing an entry-level test
* [Root-me](https://www.root-me.org/?lang=en): Online challenges and VM to practice hacking
* [Try Hack Me](https://tryhackme.com/): Hack Challenges
* [Hack.me](https://hack.me/): Online challenges on vulnerable web-applications
* [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) Vulnerable by Design AWS deployment tool for CTF-style challenges on AWS
* [Pentester Labs](https://www.pentesterlab.com/): Includes some free exercises and Pro (paid) package
* [PicoCTF](https://picoctf.com/) aimed at middle and high school students
* [Hacker 101](https://www.hacker101.com/): Training for bounty-hunter by [HackerOne](https://www.hackerone.com/)
* [Tracelabs](https://www.tracelabs.org/getinvolved/ctf/) OSINT CTF on finding missing persons
* [CTFTime](https://ctftime.org/): Overview of scheduled CTF's
* [Awesome-CTF](https://github.com/apsdehal/awesome-ctf): A curated list of CTF frameworks, libraries, resources, softwares and tutorials.
* [AnarchoTechNYC](https://github.com/AnarchoTechNYC/meta/wiki/InfoSec#hacking-challenges): List of CTF's, with short description on the focus of each CTF
 
### Docker vulnerable containers
* BSides San Francisco:
  * CTF [2017](https://github.com/BSidesSF/ctf-2017-release)
  * CTF [2018](https://github.com/BSidesSF/ctf-2018-release)
  * CTF [2019](https://github.com/BSidesSF/ctf-2019-release)
  * CTF [2020](https://github.com/BSidesSF/ctf-2020-release)
* Collection of vulnerable [Docker Containers](https://hub.docker.com/u/vulnerables)
* Collection of vulnerable [Docker Environments](https://github.com/vulhub/vulhub)
* Damn Vulnerable Web Application Docker container [Web-DVWA](https://hub.docker.com/r/vulnerables/web-dvwa/)
* DerpCon [CTF 2020](https://github.com/runcode-ninja/DerpCon-CTF-2020)
* [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat)
* Metasploit [Vulnerability Emulator](https://hub.docker.com/r/vulnerables/metasploit-vulnerability-emulator)
* OWASP [Juice Shop](https://github.com/bkimminich/juice-shop#docker-container)
* OWASP [WebGoat](https://github.com/WebGoat/WebGoat#1-run-using-docker)
* [SecGen](https://github.com/cliffe/SecGen/): Security Scenario Generator generates randomised vulnerable systems
* Tufts University [CTF](https://github.com/mchow01/tufts-ctf-fall2014-docker#pulling-the-image-from-docker-hub) for Introduction to Computer Security
* Web Application Pentest [Lab setup](https://www.hackingarticles.in/web-application-pentest-lab-setup-using-docker/) Using Docker
* [WebSploit](https://websploit.h4cker.org/download.html)

## Docker automation for Hack-tasks
* [Docker for hackers](https://www.pentestpartners.com/security-blog/docker-for-hackers-a-pen-testers-guide/) A pentester's guide
* [Using Docker for disposable attack images](https://blog.zsec.uk/ltr101-dac/)
* [DockerAttack](https://github.com/ZephrFish/DockerAttack): Various tools and Docker images

# Firwmare scanning
* [Firmware Slap](https://github.com/ChrisTheCoolHut/Firmware_Slap): Vulnerability discovery and function similarity in firmware


## Other
* [https://Crawler.ninja](Crawler.ninja): Security Statistics on top 1 million Alexa sites


## Reporting
* Screenshots and editing:
  * Greenshot
  * Flameshot
* Notes
  * Keepnote (Discontinued)
  * Cherrytree
---------------
Sources:
* [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
* [Guru99](https://www.guru99.com/ethical-hacking-tutorials.html)
