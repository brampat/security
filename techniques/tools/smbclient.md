# Samba Client

Scan and connect to SMB shares

## Scan for shares

```bash
smbclient -L //<IP> -N
```

* -L look for services on target
* -N force to not ask for passwords



## Connect to share

Connect to C-share:

```bash
smbclient //<IP>/C$ -N
```
