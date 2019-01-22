# Web-app attacks


* Injection ([types descibed](https://phpsecurity.readthedocs.io/en/latest/Injection-Attacks.html))
  * SQL injection ([types described](https://www.quora.com/How-many-types-of-SQL-injections-are-there))
    * In-band SQLi (Classic SQLi)
      * Error-based SQLi
      * Union-based SQLi
    * Inferential SQLi (Blind SQLi)
      * Boolean-based (content-based) Blind SQLi
      * Time-based Blind SQLi
    * Out-of-band SQLi
    * Example of [HTTP Header based](https://resources.infosecinstitute.com/sql-injection-http-headers/) SQL injection
    * More on [HTTP Header based](https://blog.cloudflare.com/the-sleepy-user-agent/) SQL Injection
  * Code injection
    * File inclusion
    * Evaluation ( eg. abusing function ```eval()```)
    * Regexp injection
    * Flawed file inclusion
    * Server midconfiguration
  * Command injection
  * Log (file) injection
  * NoSQL injection
  * XML injection
* Broken Authentication: Authentication can be bypassed
* Sensitive Data Exposure
* XXE - XML External Entities 
* XSS - Cross Site Scripting
  * Stored (Persistent, Type I): payload can be stored in the web-app by means of forum-comments, feedback etc. When these are displayed, a victims will be confronted with malicious content
  * Reflected (Type II): payload in a link causes injection of malicious content in the page. By persuading a user to click the link an attacker can trigger this weakness
  * DOM-based (Type 0): payload in a link causes the DOM to be changed by means of the application using this data in normal usage to add functionality. See [example](https://www.owasp.org/index.php/DOM_Based_XSS)
    * Tools: [DomListener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en)
* Broken Access Control: Access is not correctly enforced
  * Insecure Direct Object References
  * Missing Function Level Access Control
* Security Misconfiguration
* Insecure Deserialization
* Using Components with Known Vulnerabilities
* Insufficient Logging & Monitoring
* Path traversal
* CSRF - Cross Site Request Forgery
* Unvalidated Redirects & Forwards

Sources:
* [OWASP](https://www.owasp.org/index.php/Main_Page)
* [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)