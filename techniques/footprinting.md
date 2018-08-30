#  Footprinting 
Find out everything about target. This is a mostly passive activity of the reconnaissance phase in a hack. In this stage,
the hacker tries to gather information on the target that may help him/her in the actual hack. This may also include information 
to be used in social engineering, physical access to the target company etc. Commonly, the most usefull information however is
on software, systems and infrastructure to be used in digital hacks. 

Defending against footprinting: see [here](../defense/footprinting.md)

* Systems and software
  * IP address range
  * Operating systems
  * Applications and versions
  * Network infrastructure
  * Security tools
* Organization
  * Key personnel (managers, head of security, it-admins)
  * Phone numbers
  * Business relationships
  * Products
  * Contracts
  * New business ventures
  * Financial data
* Physical security 
  * Types of systems and equipment
  * Security methods and procedures

Passive information gathering means you don't have any direct contact with the organization. Sources are:
* Internet
  * Search engines: [Google hacking](googleHacking.md) but Yahoo and Bing work as well. Use mutliple engines, to combine results
    * Google Earth, Streetview and Bing Maps for info on physical access
    * People search engines
  * Whois database (domain info, registrar, contact info, IP addresses) Eg. [Domain tools](http://whois.domaintools.com)
  * DNS Footprinting (Name server info, domain info, IP addresses) Eg. [DNSStuff](http://www.dnsstuff.com)
  * Organization's website, use tools to download the entire site. Also look at site's source-code (beware: active / passive line is blurry and you are possibly leaving traces already in form of IP-address, OS-footprint. Scanning on Linux or specifically Kali would be useful for defense team)
  * Partner websites
  * Internal / intranet
  * Email headers, Email search tools, server information
    * IP addresses
    * server names
    * banners
    * username format
  * Social media (create fake accounts to investigate)
    * LinkedIn (turn on privacy settings to prevent detection, even from fake accounts. LinkedIn shows which profiles have viewed target's profile)
    * Facebook
    * Instagram
    * Twitter (great to see partners and contacts apart from LinkedIn)
    * Blogs
    Employee's personal websites
    * etc.
  * Job sites (great for scanning tools, software used by orgnization)
* Business databases
* Market partners / competition
* Suppliers
* Public resources
* Products and product reviews
* Marketing material
* Compliance or legal reports

Active means there is direct contact or interaction with the organization. Examples:
* Social Engineering (casual meetings, targeted contacts)
* Entering premise
* Taking photos or video / surveillance of facilities

---------------
Sources:
* [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)
