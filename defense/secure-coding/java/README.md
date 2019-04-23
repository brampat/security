# Java Secure coding


## Security best practices and tips: Java
* [Secure coding in Java](https://blog.acolyer.org/2018/06/27/secure-coding-practices-in-java-challenges-and-vulnerabilities/)
* [10 minute Java security](https://www.youtube.com/watch?v=_ANdXIuhbzQ) with Stephen Chan & Jim Manico
* [OWASP Java knowledge base](https://www.owasp.org/index.php/Category:Java)
* [Local Type Inference Cheat sheet](https://snyk.io/blog/local-type-inference-java-cheat-sheet/)

## Tools
* [OWASP Dependency check](https://www.owasp.org/index.php/OWASP_Dependency_Check) for Dependency checks of directly and indirectly used libraries
* [OWASP SonarQube project](https://www.owasp.org/index.php/OWASP_SonarQube_Project) for Static Code analysis

## Libraries
* [AppSensor](http://appsensor.org) Implements intrusion detection and automated response
* [OWASP CSRFGuard](https://www.owasp.org/index.php/Category:OWASP_CSRFGuard_Project) implements synchronizer token to mitigate CSRF attacks
* [OWASP Java Encoder Project](https://www.owasp.org/index.php/OWASP_Java_Encoder_Project) for protection against XSS
* [OWASP HTML Sanitizer Project](https://www.owasp.org/index.php/OWASP_Java_HTML_Sanitizer_Project) for protection against XSS
* [OWASP Security Logging project](https://www.owasp.org/index.php/OWASP_Security_Logging_Project) for logging security related events (in development)
* [JAAS](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jaas/JAASRefGuide.html): Java Authentication and Authorization Services
* [Bean Validation](https://beanvalidation.org/) constraints object models with custom constraints, like @Email, @ISBN, @Alphanumeric etc.
* [Apache Shiro](https://shiro.apache.org/): Cryptography, authoriization and session management
* [OACC](http://oaccframework.org/): Object Access control framework for authentication and authorization on application objects
* [Google Tink](https://github.com/google/tink) Cryptography API
* [HDIV](https://hdivsecurity.com/docs) (Enterprise, not free): Web Application framework that protects from OWASP Top 10 risks

## Books
* [Iron-Clad Java](https://www.amazon.de/Iron-Clad-Java-Building-Secure-Applications/dp/0071835881) by Jim Manico & August Detlefsen

## Video's
* [Security control enhancements Java 8 and 9](https://www.youtube.com/watch?v=IeDmyBXhcGo) video at SecAppDev by [Jim Manico](https://twitter.com/manicode)

## Spring

### Spring Security for IAM
* [Spring Security cheat-sheet](https://res.cloudinary.com/snyk/image/upload/v1534422834/blog/Spring_Boot_Security_Cheat_Sheet.pdf)
* [10 Spring Boot Security Best practices](https://snyk.io/blog/spring-boot-security-best-practices/) by Snyk
* [Spring Framework Security introduction](https://www.youtube.com/watch?v=Q3yStECBuAg)
* [Securing a web-app](https://spring.io/guides/gs/securing-web/) with Spring Security
* [Spring Security](https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/): Spring Authentication and Access control
* [Spring Security Account registration](https://www.baeldung.com/registration-with-spring-mvc-and-spring-security): Note: is vulnerable to account enumeration

### Other
* [Spring Actuators](https://www.veracode.com/blog/research/exploiting-spring-boot-actuators) exploit on Spring Boot < 1.5

## Examples / practice

* [OWASP WebGoat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project) Vulnerable web-application
  * [WebGoat on github](https://github.com/WebGoat/WebGoat) 
* [JuiceShop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project)
* [Security Shephard](https://www.owasp.org/index.php/OWASP_Security_Shepherd) mostly penetration testing teaching-tool
* [Java Web](https://github.com/CSPF-Founder/JavaVulnerableLab) vulnerable application
* [PuzzleMall](https://code.google.com/archive/p/puzzlemall/) for practicing session puzzling
* [SecuriBench](https://suif.stanford.edu/~livshits/securibench/intro.html) from Stanford: Collection of 8 vulnerable apps
* [SecuriBench micro](https://suif.stanford.edu/~livshits/work/securibench-micro/) from Stanford: Collection of small test-cases

------------
* [source](https://dzone.com/articles/java-application-security-frameworks)