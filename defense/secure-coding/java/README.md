# Java Secure coding


## Security best practices and tips: Java
* [Secure coding in Java](https://blog.acolyer.org/2018/06/27/secure-coding-practices-in-java-challenges-and-vulnerabilities/)
* [10 minute Java security](https://www.youtube.com/watch?v=_ANdXIuhbzQ) with Stephen Chan & Jim Manico
* [OWASP Java knowledge base](https://www.owasp.org/index.php/Category:Java)
* [Local Type Inference Cheat sheet](https://snyk.io/blog/local-type-inference-java-cheat-sheet/)
* Oracle Java SE [Secure Coding](https://www.oracle.com/java/technologies/javase/seccodeguide.html) Guidelines
* SEI CERT Oracle [Coding Standard](https://wiki.sei.cmu.edu/confluence/display/java/SEI+CERT+Oracle+Coding+Standard+for+Java) for Java
* [10 minutes on Java Security](http://www.youtube.com/watch?v=_ANdXIuhbzQ) with [Steven Chin](https://twitter.com/steveonjava)

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
* [Apache Shiro](https://shiro.apache.org/): Cryptography, authorization and session management
* [OACC](http://oaccframework.org/): Object Access control framework for authentication and authorization on application objects
* [Google Tink](https://github.com/google/tink) Cryptography API
* [HDIV](https://hdivsecurity.com/docs) (Enterprise, not free): Web Application framework that protects from OWASP Top 10 risks

## Books
* [Iron-Clad Java](https://www.amazon.de/Iron-Clad-Java-Building-Secure-Applications/dp/0071835881) by Jim Manico & August Detlefsen

## Video's
* [Security control enhancements Java 8 and 9](https://www.youtube.com/watch?v=IeDmyBXhcGo) video at SecAppDev by [Jim Manico](https://twitter.com/manicode)

## Spring
* [Spring Security](https://www.baeldung.com/security-spring) blogs by Eugen Paraschiv
* Get Started with [Spring Security 5.0 and OIDC](https://developer.okta.com/blog/2017/12/18/spring-security-5-oidc)
* [Spring Vault tutorial](https://www.baeldung.com/spring-vault)
  * [Spring Vault Introduction](https://www.baeldung.com/spring-cloud-vault) integrating Hashicorp’s Vault into a Spring-Boot project
  * [Spring Vault Docs](https://docs.spring.io/spring-vault/docs/current/reference/html/index.html)

### Spring Boot
* [Spring Boot Cheatsheet](https://snyk.io/blog/spring-boot-security-best-practices/) including 10 Spring Boot Security Best practices
* 10 Excellent Ways to [Secure Your Spring Boot Application](https://developer.okta.com/blog/2018/07/30/10-ways-to-secure-spring-boot)
  * [Screencast about this blog](https://www.youtube.com/watch?v=KsG7AZqXL9M)
  * Spring Boot Starter [ACME](https://github.com/creactiviti/spring-boot-starter-acme): Automatic Certificate Management Environment (ACME) protocol
* [10 excellent ways](https://www.youtube.com/watch?v=KsG7AZqXL9M) to secure your Spring Boot Application
* [Spring Actuators](https://www.veracode.com/blog/research/exploiting-spring-boot-actuators) exploit on Spring Boot < 1.5
* Spring Security with Spring Boot 2.0: [Password Encoder](https://dzone.com/articles/spring-security-with-spring-boot-20-password-encod)

### Spring Security for IAM
* [Spring Framework Security introduction](https://www.youtube.com/watch?v=Q3yStECBuAg)
* [Securing a web-app](https://spring.io/guides/gs/securing-web/) with Spring Security
* [Spring Security](https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/): Spring Authentication and Access control
* [Spring Security Account registration](https://www.baeldung.com/registration-with-spring-mvc-and-spring-security): Note: is vulnerable to account enumeration
* Get Started with [Spring Security 5.0 and OIDC](https://developer.okta.com/blog/2017/12/18/spring-security-5-oidc)
* [Spring Default Password Encoder](https://www.baeldung.com/spring-security-5-default-password-encoder) in Spring Security 5

### RMI
* [RMIScout](https://know.bishopfox.com/research/rmiscout): Brute-Force Java RMI Interfaces for Code Execution

### Fail on no HTTPS

```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.requiresChannel().anyRequest().requiresSecure();
    }
}
```

* [source](https://developer.okta.com/blog/2018/07/30/10-ways-to-secure-spring-boot)

### Enable CSRF


```java
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
}
```

If you use a Javascript Framework like Angular, add this method, so the JavaScript can read the cookie:

```java
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }

```

* [source](https://developer.okta.com/blog/2018/07/30/10-ways-to-secure-spring-boot)

### Other
* [Java dependency resolving over plain HTTP](https://medium.com/bugbountywriteup/want-to-take-over-the-java-ecosystem-all-you-need-is-a-mitm-1fc329d898fb)
  * [PoC of Dilettante: an exploit](https://max.computer/blog/how-to-take-over-the-computer-of-any-java-or-clojure-or-scala-developer/)
  * [Code for Dilettante](https://github.com/mveytsman/dilettante): Proxy for MITM exploit injection
  * [Status overview](https://docs.google.com/spreadsheets/d/1zemxj8QdIp0saqvwJx6Po1KnyEmJXl2KC_0j0SLd_2E/edit#gid=0) of MITM vulnerable Java libraries
* [Java Application Security Frameworks](https://dzone.com/articles/java-application-security-frameworks)

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
