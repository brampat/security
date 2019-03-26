# SQL Injection

[Cheatsheet](sqlmap-cheatsheet-1.0-SDB.pdf)

## SQL injection basics
This attack is mostly employed on insecure websites or systems that use databases to store data like credentials, forum-posts, messages, online catalogue-data etc.

### How it works
An attacker may use malformed data in a request, using a query-field, a search-box or login-fields to abuse unsafe SQL-code and inject malicious SQL-code on the server. This can be abused to gain access to user accounts, retrieve data from or change data in the database of the application.

### Example
For example, consider a simple login-form:

![](login-form.png)

Now consider the following code to validate the credentials:

```SQL
SELECT U.USERNAME FROM USERS U WHERE U.USERNAME = '" + $_POST['username'] + "' AND U.PASSWORD = '" + $_POST['password'] + "' 
```

When used as intended, this statement will result in the following example query:

```SQL
SELECT U.USERNAME FROM USERS U WHERE U.USERNAME = 'foo' AND U.PASSWORD = 'bar' 
```

If there is a user with username 'foo' and password 'bar', this query returns a single result and the user is authenticated. But consider the following malicious input:

Username: ```admin'--```
Password: ```doesnt matter```

This will result in the following SQL statement
```SQL
SELECT U.USERNAME FROM USERS U WHERE U.USERNAME = 'admin'--' AND U.PASSWORD = 'doesnt matter' 
```

The password-check is now commented out, including the hardcoded end-of-string quote directly following the username param. This will result in the query just checking for the corresponding username and logging in as that user.
Since the query is constructed using String concatenation, with malicious input, the attacker can re-structure the SQL-statement to perform the unintended behavior.




## Blind SQL Injection techniques

Mostly, web-application will hide output of the actual SQL-query. 
This way, you have no direct feedback of the database-result of an SQL-Injection attack.
There are however, other ways to dissect and discover the structure and content of a database.
While these methods are complex and very time-consuming when executed manually, there are tools that fully automate these kinds of attacks.

### Basics
Blind SQL injection abuses different techniques to understand valid or invalid queries
the fact that a valid query will return a different result as an invalid query.
For instance, the following query may result in an actual result page:

```
http://newspaper.com/items.php?id=2
// results in:
SELECT title, description, body FROM items WHERE ID = 2
```

While this page may result in an error-page:
```
http://newspaper.com/items.php?id=2 and 1=2
// results in:
SELECT title, description, body FROM items WHERE ID = 2 and 1=2
```



Source:
* [SQL injection for dummies](https://www.youtube.com/watch?v=ciNHn38EyRc)
* [OWASP](https://www.owasp.org/index.php/Blind_SQL_Injection)
* [Acunetix](https://www.acunetix.com/websitesecurity/blind-sql-injection/)
* [SQL Injection out of band exploitation](https://www.gracefulsecurity.com/sql-injection-out-of-band-exploitation/)
* [SQL Injection filter evasion with sqlmap](https://www.gracefulsecurity.com/sql-injection-filter-evasion/)
* [Introduction to SQLMap](https://www.gracefulsecurity.com/introduction-to-sqlmap/)