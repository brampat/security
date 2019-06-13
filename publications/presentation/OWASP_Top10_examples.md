## OWASP Top 10 Examples
<hr />

### Disclaimer

![](pics/dont_try_this_at_home.jpg)<!-- .element style="width: 800px;" class="fragment" -->

--

## OWASP Top 10 Examples
<hr />

### Injection

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | A1        | Injection                 |
| 2013  | A1        | Injection                 |
| 2010  | A1        | Injection                 |
| 2007  | A2        | Injection Flaws           |
| 2004  | A6        | Injection Flaws           |
| 2003  | A6        | Command Injection Flaws   |

--

## OWASP Top 10 Examples
<hr />

### Injection: example

![](pics/bobby_tables.png)

Details: See password hacking section

--

## OWASP Top 10 Examples
<hr />

### Injection: example

![](./pics/login.png)<!-- .element style="position: fixed; width: 400px; top: 215px; right: 50px; background-color: #ffffff;" -->

<pre><code data-trim data-noescape>
var query = "SELECT U.USERNAME FROM USERS U 
WHERE U.USERNAME = '" + $_POST['username'] + "' 
  AND U.PASSWORD = '" + $_POST['password'] + "'" 
</code></pre><!-- .element style="position: fixed; width: 450px; left: 50px; top: 210px;" -->

<pre>
Username: user@email.com
Password: correct horse battery staple
</code></pre><!-- .element: style="position: fixed; width: 450px; left: 50px; top: 405px;" class="fragment" data-fragment-index="3" -->


```sql
SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = 'correct horse battery staple' LIMIT 1
```

--

## OWASP Top 10 Examples
<hr />

### Injection: example

<pre><code data-trim data-noescape>
var query = "SELECT U.USERNAME FROM USERS U 
WHERE U.USERNAME = '" + $_POST['username'] + "' 
  AND U.PASSWORD = '" + $_POST['password'] + "'" 
</code></pre><!-- .element style="position: fixed; width: 450px; left: 50px; top: 210px;" -->

<pre>
Username: user@email.com
Password: ' or 1=1 --
</code></pre><!-- .element: style="position: fixed; width: 450px; left: 50px; top: 405px;" class="fragment" data-fragment-index="3" -->


```sql
SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = '' or 1=1 --' LIMIT 1
```

--

## OWASP Top 10 Examples
<hr />

### Injection: defense

In prioritized order
* Safe API:
  * Parameterized queries
  * ORM
  * Prepared Statements
* Input validation (whitelist-based)
* Escape special characters
* LIMIT query-results

--

## OWASP Top 10 Examples
<hr />

### Injection: further reading

* OWASP on [2017-A1 Injection](https://www.owasp.org/index.php/Top_10-2017_A1-Injection)
* [Bobby-tables.com](https://bobby-tables.com/) <sup>Yep, seriously</sup>
* Types:
  * NoSQL
  * Commands
  * ORM
  * LDAP
  * Expression Language
  * etc.


--

## OWASP Top 10 Examples
<hr />

### Broken Authentication

| Year  | Position  | Name                                          |
|------:|----------:|-----------------------------------------------|
| 2017  | A2        | Broken Authentication                         |
| 2013  | A2        | Broken Authentication and Session Management  |
| 2010  | A3        | Broken Authentication and Session Management  |
| 2007  | A7        | Broken Authentication and Session Management  |
| 2004  | A3        | Broken Authentication and Session Management  |
| 2003  | A3        | Broken Account and Session Management         |

--

## OWASP Top 10 Examples
<hr />

### Broken Authentication

--

## OWASP Top 10 Examples
<hr />

### Indirect object reference

![](pics/miljoenennota.png)

--

## OWASP Top 10 Examples
<hr />

### Cross Site Scripting

![](pics/harlem_shake.png)<!-- .element style="width: 500px;" -->

[Harlem Shake](https://www.youtube.com/watch?v=K0noqLisW_c)

--

## OWASP Top 10 Examples
<hr />

### Security Misconfiguration

![](pics/handbalsters.png)<!-- .element style="width: 450px;" -->

--

## OWASP Top 10 Examples
<hr />

### Insufficient Logging

![](pics/facebook_passwords.png)
![](pics/facebook_thumbs_down.png)<!-- .element style="width: 400px;" -->

--

## OWASP Top 10 Examples
<hr />

### Sensitive Data Exposure

![](pics/gevers_chinese_mongodb.png)<!-- .element style="width: 400px;" -->

[Breed-ready status](https://www.bleepingcomputer.com/news/security/creepy-database-lists-breedready-status-for-18-million-women/)<!-- .element style="position: fixed; width: 400px; bottom: 100px; right: 100px;" -->

