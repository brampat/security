# Tools

* [Security Tools list](https://sectools.org)
* [Kali Linux](https://www.kali.org/downloads/): Linux distro specifically for Penetration testing, strict Debian based
* [Back track Linux](https://www.backtrack-linux.org/): Precursor to Kali Linux (since 2013), Ubuntu based.
* [MacChanger](https://www.hackingtutorials.org/general-tutorials/mac-address-spoofing-with-macchanger/): Change mac-addresses of your network interfaces to allow for anonimization or spoofing [https://www.youtube.com/watch?v=7nF2BAfWUEg&t=12469s](Basic tutorial on 3:34:05)

## Information gathering
* [You Get Signal](https://www.yougetsignal.com/tools/web-sites-on-web-server/): Reverse IP domain check

## Network scanning
* [Nmap](https://nmap.org/): Network scanning tool and OS fingerprinting. Comes with most Linux distributions, but also available on Windows
  * Zenmap: GUI front-end to Nmap
* [Masscan](https://github.com/robertdavidgraham/masscan) TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 5 minutes.
* [Pbscan](https://github.com/gvb84/pbscan) Faster and more efficient stateless SYN scanner and banner grabber due to userland TCP/IP stack usage. 
* [p0f](http://lcamtuf.coredump.cx/p0f3/): Offline / passive OS fingerprinter
* [Wireshark](https://www.wireshark.org): DPI scanning / sniffing tool
* [Burp Suite / Portswigger](https://portswigger.net/burp/communitydownload) (Euro 350 / year, limited functionality community edition available): Penetration testing, detailed analysis and (manual / automated) modification of network traffic. Ideal for webapp hacking
  * [Lots of Burp-suite / PortSwigger tutorials](https://portswigger.net/web-security)
  * [Introduction to Burp-suite Pro](https://www.gracefulsecurity.com/introduction-to-burp-suite-pro/)
  * [Burp Macros](https://www.gracefulsecurity.com/burp-macros-re-authentication/)
* OWASP [ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)
* [Ettercap](http://www.ettercap-project.org/ettercap/downloads.html): Network sniffing (incl. SSH & HTTPS)
* [Wireshark](https://www.wireshark.org)
  * [Userguide](https://www.wireshark.org/docs/wsug_html_chunked/)
  * [Filter reference guide](https://www.wireshark.org/docs/dfref/)

## CMS
* [CMSMap](https://github.com/Dionach/CMSmap) CMS scanner, supports WordPress, Joomla, Drupal and Moodle
  * Wordpress:
    * [Wordpress Vulnerability scanner](https://github.com/RamadhanAmizudin/Wordpress-scanner)
    * Another [WP Vulnerability scanner](https://github.com/10up/wp-vulnerability-scanner)
    * [WPHunter](https://github.com/Jamalc0m/wphunter)
    * [WPSeku](https://github.com/m4ll0k/WPSeku)

## Cloud
* [Introduction to Azure pentesting](https://www.gracefulsecurity.com/an-introduction-to-pentesting-azure/)

## Calculating with IP-addresses:
* [Subnet calculator](http://www.subnet-calculator.com/)
* [CIDR calculator](http://www.subnet-calculator.com/cidr.php)

## Network hacking
* [Aircrack-NG](https://www.aircrack-ng.org/downloads.html): Wireless network cracking
* [Angry IP Scanner](https://angryip.org/download/#linux): IP & port scanner

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

## Password and crypto hacking
* [Hashcat](https://hashcat.net/hashcat/): Highspeed hashed password cracking tool
* [RainbowCrack](http://project-rainbowcrack.com/index.htm): Hash-cracker based on Rainbow-tables
* [CrypTool](https://www.cryptool.org/en/ct1-downloads): Cryptology tool (OpenSource, Win32 only)
* [MD5this](http://www.md5this.com/): Online MD5 cracker
* [John the Ripper](http://www.openwall.com/john/): Command prompt tool. Uses wordlists
* [Cain & Abel](http://www.softpedia.com/get/Security/Decrypting-Decoding/Cain-and-Abel.shtml): Windows tool with GUI to recover crack / recover passwords of various tools, network sniffing etc.
* [Ophcrack](http://ophcrack.sourceforge.net/): Cross platform tool uses Rainbow table attacks or brute force.
* [Hydra](https://sectools.org/tool/hydra/): Dictionary attacks against numerous network protocols

## Privilege escalation
* Sharecheck
* CPasswords
* Incognito
* Mimikatz

## Database
* [SQLMap](http://sqlmap.org/): Database penetration, mapping & data-extraction tool for various database-types including support for various blind extraction techniques.
* [SQLMap](tools/sqlmap.md): Database penetration, mapping & data-extraction tool for various database-types including support for various blind extraction techniques.

## Android
* [APK URL grep](https://github.com/ndelphit/apkurlgrep): Extract endpoints from APK files


## Vulnerability scanners
* [List](https://sectools.org/tag/vuln-scanners/) of vulnerability scanners with comparisons
* [Netsparker](https://www.netsparker.com) (5k+ / year): Web app security scanner
* [Acunetix](https://www.acunetix.com/web-vulnerability-scanner/) (4.5k+ / year): Web app security scanner
* [Metasploit](https://www.metasploit.com/) (15k+ / year (?), community and dev / research versions available): Penmetration testing framework by Rapid7
* [Nessus](https://www.tenable.com/downloads/nessus): Vulnerability scanner for VM, Server OS or host machines. Was OpenSource, now commercial (Euro 2470 / year), free for home & limited training use. Updates vuln. database using plugins.
* [DomListener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en) Chrome extension that listens to DOM-changes (eg. for DOM-bases XSS detection)
* [OpenVAS](http://www.openvas.org/): OpenSource Vulnerability scanner for VM, Server OS or host machines
* [Nexpose](https://www.rapid7.com/products/nexpose/): Vulnerability scanner for VM, Server OS or host machines
* [GFI LAN Guard](https://www.gfi.com/products-and-solutions/network-security-solutions/gfi-languard): Euro 21.60 per node per year (or less from 50+ nodes)  
* [Immuniweb](https://www.immuniweb.com/free/): ImmuniWeb Community edition security tests: Web & SSL, Mobile and Domain Security

## Payloads
* [GitHub repo](https://github.com/foospidy/payloads) with lots of payloads for diffirent tools, includes links to external lists and script to download those automatically.

## Practicing

### Super-basics
* [Hacksplaining](https://www.hacksplaining.com/lessons)
* [Secure Code Warrior](https://portal.securecodewarrior.com/#/website-trial/)
* [Security Ninja's](https://github.com/cniemira/security-ninjas) OpenSource AppSec training with examples for all OWASP Top 10 vulnerabilities

### Various levels
* [Root-me](https://www.root-me.org/?lang=en): Online challenges and VM to practice hacking
* [Hack.me](https://hack.me/): Online challenges on vulnerable web-applications
* [Hack the box](https://www.hackthebox.eu/): Online testing environment, accessible after completing an entry-level test
* [OWASP JuiceShop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) vulnerable webapplication
* [Metasploitable2](https://sourceforge.net/projects/metasploitable/files/Metasploitable2/): Vulnerable Linux VM for security & penetration practicing
* [Firing Range](https://public-firing-range.appspot.com/): Test bed for automated application security scanners
* [Forensics CTF images](https://dfir.training/resources/downloads/ctf-forensic-test-images)

### CTF's
* [PicoCTF](https://picoctf.com/)

### Lists of practice sites and VM's
* [OWASP maintained list](https://github.com/OWASP/OWASP-VWAD) contains both online, offline and VM vulnerable applications

### Cicada 3301
* 4-part documentary on Cicada 3301 puzzles:
  * [Part 1](https://www.youtube.com/watch?v=RatbYqc0-jE)
  * [Part 2](https://www.youtube.com/watch?v=Rx8pfheh6aI)
  * [Part 3](https://www.youtube.com/watch?v=HRYyhdTHraU)
  * [Part 4](https://www.youtube.com/watch?v=GanHp3XCYgg)

---------------
Sources:
* [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
* [Guru99](https://www.guru99.com/ethical-hacking-tutorials.html)
* [Hausec](https://hausec.com/): Pentesting resources