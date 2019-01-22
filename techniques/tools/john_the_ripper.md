# John the Ripper

Brute-force or dictionary attack hashes

## Info

Help:
```bash
john
```

## Attack

### Unshadow

```bash
unshadow <passwd-file> <shadow-file> > hashes
```

### Hash-crack
```bash
john --wordlist=<common-passwords-file> hashes
```

Resulting hash and passwprd will be in /root/.john/john.pot

### Show user and passwords
```bash
john --show hashes
```



