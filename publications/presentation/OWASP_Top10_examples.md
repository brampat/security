## OWASP Top 10 Examples
<hr />

Work in progress

--

## OWASP Top 10 Examples
<hr />

### Disclaimer

![](pics/dont_try_this_at_home.jpg)<!-- .element style="width: 800px;" class="fragment" -->

--

## OWASP 2017-A1: Injection
<hr />

| Year  | Position  | Name                      |
|------:|----------:|---------------------------|
| 2017  | A1        | Injection                 |
| 2013  | A1        | Injection                 |
| 2010  | A1        | Injection                 |
| 2007  | A2        | Injection Flaws           |
| 2004  | A6        | Injection Flaws           |
| 2003  | A6        | Command Injection Flaws   |

--

## Injection: attack
<hr />

![](pics/bobby_tables.png)

Details: See password hacking section

--

## Injection: attack
<hr />

![](./pics/login.png)<!-- .element style="position: fixed; width: 400px; top: 215px; right: 50px; background-color: #ffffff;" -->

<pre><code data-trim data-noescape>
var query = "SELECT username FROM USERS U 
WHERE email = '" + $_POST['username'] + "' 
  AND pass = '" + $_POST['password'] + "'" 
</code></pre><!-- .element style="position: fixed; width: 470px; left: 30px; top: 210px;" -->

<pre>
Username: user@email.com
Password: correct horse battery staple
</code></pre><!-- .element: style="position: fixed; width: 470px; left: 30px; top: 300px;" class="fragment" data-fragment-index="0" -->


<pre><code data-trim data-noescape>
SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = 'correct horse battery staple' LIMIT 1
</code></pre><!-- .element style="position: fixed; width: 470px; left: 30px; top: 370px;" class="fragment" data-fragment-index="1" -->

-- Notes --

Normal use-case
Happy scenario

--

## Injection: attack
<hr />

![](./pics/login.png)<!-- .element style="position: fixed; width: 400px; top: 215px; right: 50px; background-color: #ffffff;" -->

<pre><code data-trim data-noescape>
var query = "SELECT username FROM USERS U 
WHERE email = '" + $_POST['username'] + "' 
  AND pass = '" + $_POST['password'] + "'" 
</code></pre><!-- .element style="position: fixed; width: 470px; left: 30px; top: 210px;" -->

<pre>
Username: user@email.com
Password: ' or 1=1 --
</code></pre><!-- .element: style="position: fixed; width: 470px; left: 30px; top: 300px;" class="fragment" data-fragment-index="0" -->

<pre><code data-trim data-noescape>
SELECT *
  FROM users
 WHERE email = 'user@email.com'
   AND pass  = '' or 1=1 --' LIMIT 1
</code></pre><!-- .element style="position: fixed; width: 470px; left: 30px; top: 370px;" class="fragment" data-fragment-index="1" -->

-- Notes --

ABuse-case
This is what a hacker will do

--

## Injection: attack
<hr />

![](pics/sqlmap.png)

--

## Injection: defense
<hr />

In prioritized order
* Safe API:
  * Parameterized queries
  * ORM
  * Prepared Statements
* Input validation (whitelist-based)
* Escape special characters
* LIMIT query-results

--

## Injection: further reading
<hr />


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

## OWASP 2017-A2: Broken Authentication
<hr />

| Year  | Position  | Name                                          |
|------:|----------:|-----------------------------------------------|
| 2017  | A2        | Broken Authentication                         |
| 2013  | A2        | Broken Auth. & Session Management             |
| 2010  | A3        | Broken Auth. & Session Management             |
| 2007  | A7        | Broken Auth. & Session Management             |
| 2004  | A3        | Broken Auth. & Session Management             |
| 2003  | A3        | Broken Account and Session Management         |

--

## Broken Authentication: attack
<hr />

![](pics/rockyou.jpeg)<!-- .element style="box-shadow:none; position: fixed; left: 500px; top: 135px; width: 200px;" -->
![](pics/myfitnesspal.png)<!-- .element style="box-shadow:none; position: fixed; left: 50px; top: 132px; width: 200px;" -->
![](pics/twitter.png)<!-- .element style="box-shadow:none; position: fixed; left: 100px; top: 400px; width: 200px;" -->
![](pics/facebook.png)<!-- .element style="box-shadow:none; position: fixed; left: 450px; top: 172px; width: 200px;" -->
![](pics/google-icon.png)<!-- .element style="box-shadow:none; position: fixed; left: 280px; top: 150px; width: 200px;" -->
![](pics/myspace.jpg)<!-- .element style="box-shadow:none; position: fixed; left: 720px; top: 162px; width: 200px;" -->
![](pics/linkedin.png)<!-- .element style="box-shadow:none; position: fixed; left: 520px; top: 380px; width: 200px;" -->
![](pics/psn.jpg)<!-- .element style="box-shadow:none; position: fixed; left: 750px; top: 320px; width: 200px;" -->
![](pics/dropbox.png)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 400px; width: 200px;" -->

[Information is beautiful](https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/)<!-- .element style="position: fixed; left: 50px; bottom: 50px;" -->

-- Notes --

Although the leaks themselves are not the actual attack, they enable credential stuffing, which is an excellent example of broken authentication

--

## Broken Authentication: attack
<hr />

![](pics/credential_stuffing.png)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 130px; " -->

* [Hashcat](https://hashcat.net/hashcat/)
* [RainbowCrack](http://project-rainbowcrack.com/index.htm)
* [John the Ripper](http://www.openwall.com/john/)
* [Cain & Abel](http://www.softpedia.com/get/Security/Decrypting-Decoding/Cain-and-Abel.shtml)
* [Hydra](https://sectools.org/tool/hydra/)

--

## Broken Authentication: defense
<hr />

* MFA
* Advise & support password-managers
* Block leaked password
* Remove default credentials
* Remove complex password requirements & periodic changes
* Harden vs. enumeration
* Throttle login-attempts
  * Log failures -> alert
* Use secure session management
  * High entropy
  * Not in URL
  * Securely stored
  * Invalidated (on logout, idle and absolute timeouts) 

--

## Broken Authentication: further reading
<hr />

* OWASP on [2017-A2 Broken Authentication](https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication)
* [Passwords, fun with numbers](https://github.com/brampat/security/tree/master/publications/2019-02-20_passwords_fun_with_numbers)
* [Password attacks & defenses](https://github.com/brampat/security/tree/master/defense/passwords)

--

## OWASP 2017-A3: Sensitive Data Exposure
<hr />

| Year  | Position  | Name                                                                      |
|------:|----------:|---------------------------------------------------------------------------|
| 2017  | A3        | Sensitive Data Exposure                                                   |
| 2013  | A6        | Sensitive Data Exposure                                                   |
| 2010  | A7 - A9   | Insecure Cryptographic Storage - Insufficient Transport Layer Protection  |
| 2007  | A8 - A9   | Insecure Cryptographic Storage - Insecure Communications                  |
| 2004  | A8        | Insecure Storage - (new in 2007)                                          |
| 2003  | A8        | Insecure Use of Cryptography                                              |

--

## Sensitive Data Exposure: attack
<hr />

![](pics/linkedin.png)<!-- .element style="box-shadow:none; position: fixed; left: 520px; top: 380px; width: 200px;" -->
![](pics/marriott.jpeg)<!-- .element style="box-shadow:none; position: fixed; left: 300px; top: 400px; width: 200px;" -->
![](pics/family_locator.png)<!-- .element style="box-shadow:none; position: fixed; left: 50px; top: 132px; width: 200px;" -->

-- Notes --

* [Marriott](https://www.nytimes.com/2018/11/30/business/marriott-data-breach.html) Data Breach with unencrypted passports and credit-card details
* [Family Locator](https://techcrunch.com/2019/03/23/family-tracking-location-leak/) leaked unencrypted GPS data
* [LinedIn](https://www.vice.com/en_us/article/4xaaxb/you-can-now-finally-check-if-you-were-a-victim-of-the-2012-linkedin-hack) had 164 Million accounts with unsalted SHA1 passwords

--

## Sensitive Data Exposure: defense
<hr />

* Classify data on confidentiality
* Apply controls per classification
* Don't store unnecessary data
* Encrypt at at rest & in transit
* Use strong encryption & proper key-management
* Enforce HTTPS using HTTP Strict Transport Security (HSTS)
* Use proper password storage
  * Salted
  * Peppered
  * Slow
  * Hashing (Argon2, scrypt, bcrypt, PBKDF2)

--

## Sensitive Data Exposure: further reading
<hr />

* OWASP on [2017-A3 Sensitive Data Exposure](https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure)
* [Password attacks & defenses](https://github.com/brampat/security/tree/master/defense/passwords)
* [Security Headers](https://securityheaders.com/)
* TLS
* HSTS
* GDPR

--

## OWASP 2017-A4: XML External Entities (XXE)
<hr />

TABLE

--

## XML External Entities (XXE): attack
<hr />


--

## XML External Entities (XXE): defense
<hr />


--

## XML External Entities (XXE): further reading
<hr />

* OWASP on [2017-A4 XML External Entities (XXE)](https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE))


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()


--

## OWASP 2017-AX: DESCRIPTION
<hr />

TABLE

--

## DESCRIPTION: attack
<hr />


--

## DESCRIPTION: defense
<hr />


--

## DESCRIPTION: further reading
<hr />

* OWASP on [2017-AX DESCRIPTION]()



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

