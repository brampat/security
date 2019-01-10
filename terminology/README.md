# Terminology

| Term | Description |
| ---- | ----------- |
| Adware | See [Malware types](malwareTypes.md) |
| [APT](https://en.wikipedia.org/wiki/Advanced_persistent_threat)  | Advanced Persistent Threat, followed by a number of identification. A state, state-sponsored or other highly advanced hacker / organization. When more information is identified, these often get nick-names. See [Hacker groups](hackerGroups.md) |
| ARP | Address Reolution Protocol, used to convert IP address to MAC address on a switch |
| ARP poisoning | Sending fake MAC addresses with the target's IP address to a switch to hijack traffic |
| Attack surface | Number of attack vectors or potential access points a hacker may explore to try to hack. Compare this with a building with numerous doors and windows. Each door, window etc. gives an attacker another way to gain access to the building, thereby increasing the "attack-surface". |
| Attack vector | Potential access points to target in a hack |
| Blue Team | Defense side of an ethical hack operation. Also see Red team / Blue team testing |
| [C.I.A.](CIA.md) | Confidentiality, Integrity, Availability |
| Countermeasure | Control put in place to mitigate potential losses |
| [DMZ](https://en.wikipedia.org/wiki/DMZ_(computing)) | Demilitarized zone or perimeter network, subnetwork containing and only exposing external-facing services. |
| [DoS](../techniques/dos.md) | Denial of Service, flooding a system with more requests it can handle, thereby making the system unable to respond to valid requests. |
| [DDoS](../techniques/dos.md) | Distributed Denial of Service |
| [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) | Domain Name Server, maps domain names to internet resources |
| [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) | Deep Packet Inspection, monitoring of network traffic by thouroughly inspecting the network traffic, reading the packets etc. |
| Exploit | Method or technique to apply onto a vulnerability to execute a hack |
| Epxosure | Time in which a threat agent is exploiting a vulnerability |
| Firewall |  |
| Fishing |  |
| Footprinting | Information gathering. Also see [Stages of a hack](../techniques/stages.md) |
| [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty_and_doubt) | Fear uncertainty and doubt, used to scare people and organizations, sometimes to extort or sell a product |
| [FUD](https://en.wikipedia.org/wiki/Fully_undetectable) | Fully undetectable, either undetectable by tools like Antivirus or Firewalls or not labeled as malicious tools |
| Google Dorking | See Google Hacking |
| Google Hacking | Using Google search commands to control search results. [Google Hacking](../techniques/googleHacking.md) is not directly related to ethical hacking, but using this method a hacker hopes to gain specific knowledge about the target during [Footprinting phase](../techniques/stages.md) |
| Hacker | Also see [Types of hackers](hackerTypes.md) |
| Hacking | Having a system do something it was not designed to do. (note: the absense of the work computer. The system can be any system, even a non-fysical system like a business process, a legal system, tax-system etc. ) |
| HIDS | Host Intrusion Detection System |
| [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) | Internet Control Message Protocol, layer 3 protocol used by network devices (eg. routers) to send error messages and operational information. ICMP does not use ports, the port concept does not exist in ICMP. Ping and traceroute commands use ICMP. |
| [IDS](https://en.wikipedia.org/wiki/Intrusion_detection_system) | Intrusion Detection System, used to detect abnormal behavior or penetration of systems |
| IoT | Internet of Things, indicates large variety of devices and sensors connected to the internet. These include small devices like security-camera's, coolers, smart-lighting, smart garage-doors, but also modern cars etc. |
| [IP](https://en.wikipedia.org/wiki/Internet_Protocol) | Internet Protocol, communications protocol part of the internet protocol suite. It is tasked with delivering packets of information from source to destination host using the IP addresses in the packet headers. |
| IP Address | Internet Protocol Address, uniquely identifies a computer or device on a network |
| IPv4 | See IP and IP Address. IPv4 uses 32-bit numbers, displayed as 4 numbers, dot-delimited of 0 to 255. The local system is displayed as 127.0.0.1 |
| IPv6 | See IP and IP Address. IPv6 uses 128-bit numbers, displayed as 6 hexadecimal digits, colon-delimited of 0000 to ffff. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 or simplified with obsolete zero's filtered: 2001:db8:85a3:::8a2e:370:7334 |
| [IP Spoofing](https://en.wikipedia.org/wiki/IP_address_spoofing) | Changing source-IP address in an information packket to hide the identity of the sender. |
| IPS | Intrusion Prevention System |
| Key Logger | Software on a system that records all key-strokes. Mostly running without the knowledge of the current user of the system and used to gather login-credentials or other valuable information |
| LAN | Local Area Network, limited to a household, school or company network. This network may or may not be connected to the internet. Regardless, computers on the LAN can interface with each other |
| MAC address | Media Access Control address, uniquely identifies a network interface at physical layer. Usually embedded into the network card (ethernet), but also in Bluetooth, WiFi, Thunderbolt, USB network interface etc.. |
| MAC address spoofing | Changing the MAC address of a network interface |
| Malware | Malicious software |
| NIDS | Network Intrusion Detection System |
| [Password-manager](../techniques/passwords/password-managers.md) | Tool for storing account-credentials and generating unique, random and strong passwords |
| Proxy | System to use as an intermediate between you and the target / server. Sometimes used to mask your identity and / or location. Less reliable than VPN. Chaining proxies can make it much harder to detect. |
| Ransomware | Also see Malware |
| RAT | Remote Administration Tools |
| Red Team | Attack side of an ethical hack operation. Quote of @Viss "If the customer defines the scope, it cannot be called red teaming" [here](https://youtu.be/4LmSEthRZLU?t=10m5s) |
| Red team / Blue team testing | Testing security by pitting one group of hackers as the attackers (Red team) against the other team of defenders (Blue team) engaging in a real life security "war", often in a safe virtualized environment to simulate real-world attacks |
| Reverse-shell | Malicious software on a system to gain access to that system initiated from the system iteself to the hacker |
| Risk | Probability of a threat becoming real and corresponding potential damages |
| Root kit | See [Malware types](malwareTypes.md) |
| Shoulder surfing | Method of gaining access to a secret or password by observing a user entering the secret on a keyboard. In [Citizen Four](https://www.imdb.com/title/tt4044364/) Edward Snowden is using a blanket to shield his typing in the password when accessing his laptop. |
| Social Engineering | Ways of using weakness of people (helpfulness) by persuading them to give up information that can help you in gaining access gaining access to a system, organization or building ||
| SQL Injection |  |
| Target | System or organization which will be attacked by the hacker |
| Target value | Value in either money, criticality, aid to reputation etc. of a specific target |
| [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) | Transmissions Control Protocol, network protocol part of the internet protocol suite. Commonly used cmplemented by IP and referred to as TCP/IP |
| Terminal | Command interface of an OS to directly access certain tools using typed commands |
| Threat | Entity uncovering or exploiting a vulnerability |
| Tor | Client-software to anonimize internet traffic. Downsides: Good, but no 100% guarentee. Can often result in slow connection. |
| [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) | User Datagram Protocol, Message protocol devoid of error checking, delivery guarantee, ordening or duplicate protection. This avoids overhead of those protection and security mechanisms. Used when the application is time-sensitive and dropping packets is preferred to waiting. |
| Virus | See [Malware types](malwareTypes.md) |
| VPN | Virtual Private Network, used to anonymize traffic. Traffic via VPN's is encrypted. When using a "bullet-proof" VPN provider (one that prioritizes privacy and anonimity) requests from authorities mostly cannot and / or will not be effective to gain information about you or your activities. |
| VPS | Virtual Private Service. Way to encapsulate and / or isolate services that should only be accessed by certain systems. Example: a webserver may contain a VPS SQL-server that only the web-server should be able to access. By setting up a VPS for the SQL-server the actual webserver will not expose the SQL connection points to the outside world, thereby enlarging the attack-surface of the system. |
| Vulnerability | Weakness in a system, organization, software etc. that could be exploited, lack of countermeasure |
| Zero Day | Exploit for which no patch, mitigation is available |
| WEP | Wired Equivalent Privacy, encrypts the data transmitted over the network |
| WPA | WiFi protected Access, developed to solve WEP's weaknesses |
|  |  |
