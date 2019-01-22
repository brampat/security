# Hydra

Used to brute-force web-login forms

## Info

Help:
```bash
man hydra
```
or
```bash
hydra -h
```

Available modules: See Supported Services in help

Info on a module:
```bash
hydra -U <module-name>
```


## Attack

Dictionary attack:
```bash
hydra -L users.txt -P pass.txt <service://server> <options>
```

Or with single user/pass combinations
```bash
hydra -l <username> -p <password> <service://server> <options>
```

Example on telnet-server:
```bash
hydra -L users.txt -P pass.txt telnet://target.server
```

### Password protected web-resource:
```bash
hydra -L users.txt -P pass.txt http-get://localhost/
```

### HTTP login-form:
```bash
hydra -L users.txt -P pass.txt <server-url> http-post-form "/login.php:<user-param-name>=^USER^&<password-param-name>=^PASS^:<string-invalid>"
```
* users.txt contains usernames to test
* pass.txt contains passwords to test
* <server-url> is the url to the server
* /login.php is the url to the login-form on the server
* <user-param-name> is the name of the user-field in the form
* <password-param-name> is the name of the password-field in the form
* <string-invalid> is the string in the response to detect for a failed login-attempt
* You can use S=<string-valid> to detect successful login-attempts instead


### SSH

hydra <ip-address> ssh -L users.txt -P pass.txt



