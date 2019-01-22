# SSH / SCP

Connect to SSH services

## Connect

```bash
ssh <user>@<IP>
```

## Example

Connect to 192.168.99.22 with user sysadmin. The notifications about key fingerprint are for first-time login on this server.

```bash
ssh sysadmin@192.168.99.22
The authenticity of host '192.168.99.22 (192.168.99.22)' can't be established.
ECDSA key fingerprint is SHA256:zdhbneGhXzH8Diw9W1MmzQiCBNduN/Z/RocXo0fXmI8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.99.22' (ECDSA) to the list of known hosts.
sysadmin@192.168.99.22's password:
Linux telnetserver 3.2.0-4-amd64 #1 SMP Debian 3.2.60-1+deb7u3 x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu Feb 12 03:24:25 2015
Could not chdir to home directory /home/sysadmin: No such file or directory

```


## SCP download

Download the file ```/etc/passwd``` from server on IP 192.168.99.22 to the current dir using user ```sysadmin```:

```bash
scp sysadmin@192.168.99.22:/etc/passwd .
```
