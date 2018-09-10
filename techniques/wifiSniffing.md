#  WiFi Network sniffing 

WiFi networks do not require physical connection to a network. Attackers can target a network as soon as they are within range of the router's transmission radius.
For example, a home WiFi network can often be reached from a neighbour's house or from a car closeby.

Defense: [here](../defense/wifiSniffing.md)

## WEP
Wired Equivalent Privacy, encrypts the data transmitted over the network

### Weaknesses
* CRC32: Integrity check using CRC32 can be compromised with at least two packets.
* RC4 encyption: Encryption with RC4 is done with a 64bit or 128bit secret. A 64bit secret is easy to crack
* Initial secret: The initial valie (IV) of RC4 do not encrypt sufficiently, also IV's can be reused
* Dictionary attacks: WEP is based on passwords, which could enable dictionary attacks
* Key management: this is poorly implemented and does not provide a centralized key management system

### Cracking
* Passive: No effect on network traffic until security is cracked. Difficult to detect
* Active: Increases network traffic load, more effective but easier to detect

### Tools
* Aircrack
* WEPCrack
* Kismet
* WebDecrypt

## WPA
WiFi protected Access, developed to solve WEP's weaknesses. It uses higher IVs of 48 bits (double the length of WEP). Uses temporal keys for encryption.

### Weaknesses
* Collision avoidance can be broken
* Vulnerable to DOS attacks
* Pre-shared keys use passphrases, which can be vulnerable to dictionary attacks

### Cracking
WPA uses 256 bit passphrases. Short passphrases are vulnerable to dictionary and brute-force attacks. 

### Tools
* CowPatty
* Cain & Abel

## Generic attacks
Any WiFi network is vulnerable to the following attack types:
* Sniffing: intercepting packets and decoding this data using tools like Cain & Abel
* MITM: Man in the middle attacks, capturing sensitive information. This can be done by seting up clone-networks using portable WiFi routers on a laptop
* DOS attacks: deny other users to network resources

## Cracking WEP or WPA keys
Cracking keys to WiFi networks requires some hardware, tools and a bit of patience. 

---------------
Sources:
* [Guru99](https://www.guru99.com/how-to-hack-wireless-networks.html)
