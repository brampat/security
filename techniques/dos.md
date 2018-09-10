# DoS

A denial of service disrupts service to a resource, mostly an internet site or internet-enabled service. These attacks can be used 
as a threat to extort money from targets or disable their businesses so competitors may gain market-share.

Sometimes a DoS-attack is used to support other types of attacks that actually steal or compromise systems.

Defense: [here](../defense/dos.md)

## Types
Devices performing the attack
* DoS, performed by a single host
* DDoS, Distributed Denial of Service, performed by numbers of machines working in coordination. Sometimes compromised systems (computers or other devices such as IoT devices)

Weakness targetted
* Ping of Death: sends a data packet larger than the 64k limit of TCP/IP to the target. TCP/IP fragmentation breaks the packets into small chunks overloading the server.
* Smurf: This is done by sending large amounts of ICMP ping traffic to the IBA and spoofing the source-IP to the target's IP. Amplifies a DoS (ping) 255-fold via an Internet Broadcast Address.
* Buffer overflow: Load a buffer with more data than it can hold. This overflows the buffer and corrupts the data it holds. Example: sending emails with file-names of 256+ characters
* Teardrop: Sending large manipulated packets, which TCP/IP breaks into fragments. Manipulation of the packets causes the target to crash when re-assembling packets.
* SYN attack: Flood target with incomplete SYN messages. This allocates memory on the target that is never used.

--------
Tools:



---------------
Sources:
* [Guru99](https://www.guru99.com/ultimate-guide-to-dos-attacks.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Denial-of-service_attack)