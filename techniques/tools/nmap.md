# NMAP

Map a network, services and devices

## Default call
```bash
nmap -sS <ip>
```

## Scan types

### TCP connect scan
```bash
nmap -sT <ip>
```

### SYN-scan

SYN scans reset the three-way handshake before acknowledging.
This helps the scan remain stealthy if there is no monitoring on SYN-activity / nmap-ing

```bash
nmap -sS <ip>
```

### Version detection scan

```bash
nmap -sV <ip>
```

### IP options

IP can be a single IP, range or CIDR notation. Examples:

Scan 200.200.*.* range:
```bash
nmap -sS 200.200.0.0/16
```

Scan 200.200.123.1 through 200.200.123.12:
```bash
nmap -sS 200.200.123.1-12
```

Scan 172.16.12.* range:
```bash
nmap -sS 172.16.12.*
```

Scan 200.200.12.* and 
     200.200.12.13:
```bash
nmap -sS 200.200.12-13.*
```

Scan 200.200.12.1
     200.200.12.3
     200.200.12.5
     200.200.12.10

```bash
nmap -sS 200.200.12.1,3,5,10
```


Scan multiple IP's or ranges (can be combined with all previous options):
```bash
nmap -sS 200.200.12-13.* 200.200.15.* 200.200.17.2
```


### List of IP's:

Create a file with IP's, ranges CIDR notations etc. to target:

```bash
200.200.0.0/16
200.200.123.1-12
172.16.12.*
200.200.12-13.*
```
Then call nmap using ```-iL```:

```bash
nmap –sn –iL hostslist.txt
```

### DNS names

Instead of IP's, you can also call nmap using DNS names:

```bash
nmap –sn target1.domain.com target2.otherdomain.com
```

### Scan only specific ports

Scan ports 21, 22 and 139
```bash
nmap –p 21,22,139 <IP>
```

Scan ports 100 through 1000
```bash
nmap –p 100-1000 <IP>
```


### SMB Scripts

#### Enumerate shares
```bash
nmap -script=smb-enum-shares <IP>
```

#### Enumerate users
```bash
nmap -script=smb-enum-users <IP>
```

#### Brute force some accounts
```bash
nmap -script=smb-brute <IP>
```

#### Scan vulnerabilities
```bash
nmap -script=smb-check-vulns.nse -script-args=unsafe=1 <IP>

nmap -script=smb-vuln-ms08-067 -script-args=unsafe=1 <IP>

smb-vuln-conficker
    smb-vuln-cve2009-3103
    smb-vuln-ms06-025
    smb-vuln-ms07-029
    smb-vuln-regsvc-dos
    smb-vuln-ms08-067

```
