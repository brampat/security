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
    * [Command injection basics](https://www.gracefulsecurity.com/command-injection-the-good-the-bad-and-the-blind/)
  * Log (file) injection
  * NoSQL injection
  * XML injection
* Broken Authentication: Authentication can be bypassed
* Sensitive Data Exposure
* XXE - XML External Entities
  * [XXS basics](https://www.gracefulsecurity.com/xml-external-entity-injection-xxe-vulnerabilities/) XML External Entity injection 
* XSS - Cross Site Scripting
  * Having fun with XSS: Do the [Harlem Shake](https://gist.github.com/marcaube/692b5bdb99ba69b9b60f471d2721aa95) in [action](https://www.youtube.com/watch?v=K0noqLisW_c) at Dutch banks (2015)
  * [Samy is my Hero](https://en.wikipedia.org/wiki/Samy_(computer_worm)): MySpace worm gets 1M infected "friends" within 20 hours
  * [XSS basics](https://www.gracefulsecurity.com/what-is-cross-site-scripting-xss/) and [context](https://www.gracefulsecurity.com/cross-site-scripting-lesson-2-contexts/)
  * [XSS: Life after the alert box](https://www.gracefulsecurity.com/cross-site-scripting-xss-life-after-the-alert-box/)
  * Stored (Persistent, Type I): payload can be stored in the web-app by means of forum-comments, feedback etc. When these are displayed, a victims will be confronted with malicious content
  * Reflected (Type II): payload in a link causes injection of malicious content in the page. By persuading a user to click the link an attacker can trigger this weakness
  * DOM-based (Type 0): payload in a link causes the DOM to be changed by means of the application using this data in normal usage to add functionality. See [example](https://www.owasp.org/index.php/DOM_Based_XSS)
    * [Introduction to DOM XSS](https://www.gracefulsecurity.com/an-introduction-to-dom-xss/)
    * Tools: [DomListener](https://chrome.google.com/webstore/detail/domlistener/jlfdgnlpibogjanomigieemaembjeolj?hl=en)
* Broken Access Control: Access is not correctly enforced
  * Insecure Direct Object References
  * Missing Function Level Access Control
* Security Misconfiguration
* Insecure Deserialization
* Using Components with Known Vulnerabilities
* Insufficient Logging & Monitoring
* Path traversal
  * [Introduction to direcotry traversal](https://www.gracefulsecurity.com/introduction-to-directory-traversal/)
* CSRF - Cross Site Request Forgery
  * [CSRF basics](https://www.gracefulsecurity.com/what-is-cross-site-request-forgery/)
  * [CSRF vs. JSON](https://www.gracefulsecurity.com/csrf-vs-json/)
  * [Burp-suite vs CSRF tokens](https://www.gracefulsecurity.com/burp-suite-vs-csrf-tokens/), [part 2](https://www.gracefulsecurity.com/burp-vs-csrf-tokens-part-2-code/)
  * [Burp-suite vs CSRF tokens - Round 2](https://www.gracefulsecurity.com/burp-suite-vs-csrf-tokens-round-two/)
  * [Burp-suite vs CSRF tokens - CSRFTEI](https://www.gracefulsecurity.com/burp-suite-vs-csrf-tokens-csrftei/)
* Cross Domain Messaging
  * [Cross Domain Messaging](https://www.gracefulsecurity.com/html5-cross-domain-messaging-postmessage-vulnerabilities/) vulnerabilities: HTML5 PostMessage / Web Messaging
* CORS
  * [CORS basics](https://www.gracefulsecurity.com/html5-cross-origin-resource-sharing-cors-vulnerabilities/) Cross Origin Resource Sharing vulnerabilities
* JSONP
  [JSONP Vulnerabilities](https://www.gracefulsecurity.com/jsonp-vulnerabilities/)
* Unvalidated Redirects & Forwards


## Web Application Firewall
* [WAF-specific repo](https://github.com/0xInfection/Awesome-WAF) with lots of information specific to WAFs, enumeration and evasion
* [Open AppSec](https://www.openappsec.io/) Open-source WAF solution with paid upgrade options.

Sources:
* [OWASP](https://www.owasp.org/index.php/Main_Page)
* [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
* [Hacking web-applications](https://www.gracefulsecurity.com/hacking-web-applications/) to gain root on the server