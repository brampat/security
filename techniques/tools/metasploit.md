# Metasploit

## Start PostgreSQL database

```bash
service postgresql start
```

## Metaslpoit update

```bash
msfupdate
```

## Start Metaslpoit console

```bash
msfconsole
```

From within msfconsole, you can run any normal Linux console commands, like nmap etc.

## Help
```bash
help
```

## Search for module

```bash
search <query>
```

Example
```bash
search arp
```

## Use a module

```bash
use <module-name>
```

Example
```bash
use auxiliary/scanner/discovery/arp_sweep
```

## Module options

Within context of (using) a module:
```bash
show options
```

## Set option

```bash
set <option-name> <value>
```

Example
```bash
set RHOST 192.168.102.0/24
```

## Run module

```bash
run
```

## Payloads

Show all available payloads for this module:
```bash
show payloads
```

Select a payload:
```bash
set payload <payload-name>
```

Show the payload options:
```bash
show options
```

Set payload option:
```bash
set <option-name> <value>
```

Start the exploit:
```bash
exploit
```