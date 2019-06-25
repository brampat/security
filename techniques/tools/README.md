# Tools

* [Security Tools list](https://sectools.org)

* [Kali Linux](https://www.kali.org/downloads/): Linux distro specifically for Penetration testing, strict Debian based
* [Back track Linux](https://www.backtrack-linux.org/): Precursor to Kali Linux (since 2013), Ubuntu based.
* [MacChanger](https://www.hackingtutorials.org/general-tutorials/mac-address-spoofing-with-macchanger/): Change mac-addresses of your network interfaces to allow for anonimization or spoofing [https://www.youtube.com/watch?v=7nF2BAfWUEg&t=12469s](Basic tutorial on 3:34:05)

## Information gathering
* [You Get Signal](https://www.yougetsignal.com/tools/web-sites-on-web-server/): Reverse IP domain check
* [Initial Scan](https://github.com/SolomonSklash/initial-scan): A tool for performing an initial, information-gathering scan of websites for penetration tests.
* [Osmedeus](https://github.com/j3ssie/Osmedeus): Automatic Reconnaissance and Scanning in Penetration Testing
* [Foca](https://www.elevenpaths.com/labstools/foca/index.html): Fingerprinting Organizations with Collected Archives is a tool used mainly to find metadata and hidden information in the documents its scans. 

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


## Network scanning
* Nmap: Network scanning tool, comes with most Linux distributions, but also available on Windows
* Zenmap: GUI front-end to Nmap
* [GoScan](https://github.com/marco-lancini/goscan): Similar to NMap, developed in Go
* [Wireshark](https://www.wireshark.org): DPI scanning / sniffing tool
* [Burp Suite / Portswigger](https://portswigger.net/burp/communitydownload) (Euro 350 / year, limited functionality community edition available): Penetration testing, detailed analysis and (manual / automated) modification of network traffic. Ideal for webapp hacking
* OWASP [ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)
* [Ettercap](http://www.ettercap-project.org/ettercap/downloads.html): Network sniffing (incl. SSH & HTTPS)
* [Wireshark](https://www.wireshark.org)
  * [Userguide](https://www.wireshark.org/docs/wsug_html_chunked/)
  * [Filter reference guide](https://www.wireshark.org/docs/dfref/)


## Calculating with IP-addresses:
* [Subnet calculator](http://www.subnet-calculator.com/)
* [CIDR calculator](http://www.subnet-calculator.com/cidr.php)

## Network hacking
* [Aircrack-NG](https://www.aircrack-ng.org/downloads.html): Wireless network cracking
* [Angry IP Scanner](https://angryip.org/download/#linux): IP & port scanner
* enum: Enumerate Wdinwos shares using null-sessions
* enum4linux: Enumerate Wdinwos shares using null-sessions

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
* [Pipal](https://digi.ninja/projects/pipal.php) Password Analyser [Usage tips](./pipal.md)


## Database
* [SQLMap](tools/sqlmap.md): Database penetration, mapping & data-extraction tool for various database-types including support for various blind extraction techniques.
* [AutoSQLi](https://github.com/jesuiscamille/AutoSQLi): An automatic SQL Injection tool which takes advantage of ~DorkNet~ Googler, Ddgr, WhatWaf and sqlmap.

## Web app
* [Netsparker](https://www.netsparker.com) (5k+ / year): Web app security scanner
* [Acunetix](https://www.acunetix.com/web-vulnerability-scanner/) (4.5k+ / year): Web app security scanner
* [Metasploit](https://www.metasploit.com/) (15k+ / year (?), community and dev / research versions available): Penmetration testing framework by Rapid7
  * [Meterpreter Basics](https://www.offensive-security.com/metasploit-unleashed/meterpreter-basics/)
* [Nessus](https://www.tenable.com/downloads/nessus): Was OpenSource, now commercial (Euro 2470 / year), free for home & limited training use. Updates vuln. database using plugins.
* [DomListener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en) Chrome extension that listens to DOM-changes (eg. for DOM-bases XSS detection)
* [Requestbin.com](https://requestbin.com) for dumping requests of XSS
* [Beecepter](https://beeceptor.com/) for intercepting requests of XSS
* [Uguu](https://uguu.se) for temporary file hosting (Javascrip, image etc.)
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

## Practicing
* [Metasploitable2](https://sourceforge.net/projects/metasploitable/files/Metasploitable2/): Vulnerable Linux VM for security & penetration practicing
* [Firing Range](https://public-firing-range.appspot.com/): Test bed for automated application security scanners
* [Hack the box](https://www.hackthebox.eu/): Online testing environment, accessible after completing an entry-level test
* [Root-me](https://www.root-me.org/?lang=en): Online challenges and VM to practice hacking
* [Hack.me](https://hack.me/): Online challenges on vulnerable web-applications


## Defensive
* [Fail2Ban](https://www.fail2ban.org/wiki/index.php/Main_Page): scans logfiles and bans IPs based on malicious signs


## Other
* [https://Crawler.ninja](Crawler.ninja): Security Statistics on top 1 million Alexa sites

---------------
Sources:
* [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
* [Guru99](https://www.guru99.com/ethical-hacking-tutorials.html)
