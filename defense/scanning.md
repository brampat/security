# Defending against scanning

Scanning cannot be eliminated, but can be minimized.

## Minimize
* Minimize the amount of information given
* Harden the TCP/IP stack at host, network devices and security device levels (Firewalls and IDS's)
* Use IDS's that are properly configured to reject or block certain traffic. This can be based on characteristics like:
  * speed
  * frequency
  * source address
  * types of traffic
* Block ports and protocols
* Change ways the hosts respond to scans

## Mitigating scans
* Use network traffic filtering
  * Filter by source and destination IP
    * block inbound traffic from internal IP-addresses (not needed), also called [ingress filtering](https://en.wikipedia.org/wiki/Ingress_filtering)
  * Filter by DNS domain
  * Allow only necessary ports and protocols 
    * UDP and ARP are mostly unneeded, so disable
    * inbound ICMP and UDP can be blocked
  * Filter by time of day if possible (may require scheduling / analyzing normal traffic on devices)
* Use secure configuration for network and security devices and internet facing hosts
* Change system and application banners
  * return no information
  * return false information
* Use network and host-based firewalls (defense-in-depth)
* filter inbound traffic (ports, protocols) using whitelisting on border routers
* set up DMZ architecture
* Close all unneeded ports
* Uninstall unnecessary services

-----------
Source: [Virtual Training Company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)

