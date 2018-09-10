# Defending against ARP poisoning

## Static ARP entries
Configure switch to ignore auto ARP-reply packets

## ARP Poisoning detection
Cross checks IP/MAC resolution and certify if authenticated.

## OS security
Depends on OS used

* Linux: ignores unsolicited ARP reply packets
* MS Windows: Configure ARP cache behavior via registry
  * AntiARP: protects against active and passive sniffing
  * Agnitum Outpost Firewall: Protects against passive sniffing
  * XArp: protects against active and passive sniffing
* Mac OSX: ArpGuard protects against active and passive sniffing


-----------
Source: [Guru99](https://www.guru99.com/ultimate-guide-to-network-sniffers.html)

