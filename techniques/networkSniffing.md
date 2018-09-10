#  Network sniffing 

Intercepting low-level data packets sent over a network.

The following protocols are vulnerable to sniffing (if login details are sent in plain-text):
* Telnet
* Rlogin
* HTTP
* SMTP
* NNTP
* POP
* FTP
* IMAP

## Passive / Active

Also see [network Layers](../terminology/networkLayers.md)

Passive sniffing is intercepting traffic of a HUB. This is difficult to detect, since there is no modification of any kind involved.
You just use tools to listen to network traffic which is not intended for your device.

Active sniffing is intercepting traffic of a Switch. This requires some modification to systems. 
* ARP poisoning: 
* MAC Flooding: Flooding a switch's MAC table with fake MAC addresses so it's memory is overloaded. Then it starts to act like a HUB. Defense [here](../defense/macFlooding.md)

---------------
Sources:
* [Guru99](https://www.guru99.com/wireshark-passwords-sniffer.html)
