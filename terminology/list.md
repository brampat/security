# [Terminology](terminology/list.md)

| Term | Description |
| ---- | ----------- |
| Attack surface | Meaurement of potential access points a hacker may explore to try to hack. Compare this with a building with numerous doors and windows. Each door, window etc. gives an attacker another way to gain access to the building, thereby increasing the "attack-surface". |
| DoS | Denial of Service, flooding a system with more requests it can handle, thereby making the system unable to respond to valid requests. |
| DDoS | Distributed Denial of Service |
| Firewall |  |
| Root kit | Low level malicious software that interferes with the regular functionality of the operating system. Can be used to hide software and tools running, so these cannot be detected. Guarding against rootkits is very complex, but possible with things like timing detection. In such methods, a system would indirectly detect inconsistencies using comparisons of internal and external timings. |
| Fishing |  |
| Footprinting | Information gathering. Also see [Stages of a hack](./techniques/stages) |
| FUD | Fear uncertainty and doubt |
| FUD | Fully undetectable, either undetectable by tools like Antivirus or Firewalls or not labeled as malicious tools |
| Hacker | Also see [Types of hackers](./teminology/hackerTypes) |
| Hacking | Having a system do something it was not designed to do. (note: the absense of the work computer. The system can be any system, even a non-fysical system like a business process, a legal system, tax-system etc. ) |
| Key Logger | Software on a system that records all key-strokes. Mostly running without the knowledge of the current user of the system and used to gather login-credentials or other valuable information |
| Proxy | Less reliable than VPN. Chaining proxies can make it much harder to detect. |
| RAT | Remote Administration Tools |
| Reverse-shell | Malicious software on a system to gain access to that system initiated from the system iteself to the hacker |
| SQL Injection |  |
| Terminal | Command interface of an OS to directly access certain tools using typed commands |
| Tor | Client-software to anonimize internet traffic. Downsides: Good, but no 100% guarentee. Can often result in slow connection. |
| VPN | Virtual Private Network, used to anonymize traffic. Traffic via VPN's is encrypted. When using a "bullet-proof" VPN provider (one that prioritizes privacy and anonimity) requests from authorities mostly cannot and / or will not be effective to gain information about you or your activities. |
| VPS | Virtual Private Service. Way to encapsulate and / or isolate services that should only be accessed by certain systems. Example: a webserver may contain a VPS SQL-server that only the web-server should be able to access. By setting up a VPS for the SQL-server the actual webserver will not expose the SQL connection points to the outside world, thereby enlarging the attack-surface of the system. |
