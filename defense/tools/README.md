# SecDevOps

This documentation is provided by [Sans.org](https://software-security.sans.org/blog/2018/10/14/exploring-the-devsecops-toolchain)
to provide DevOps teams with Security tools and help them deliver secure software, while staying productive and agile
in a DevOps way-of-working.
The tools described can be integrated in CI/CD toolchains.

* [Secure DevOps poster](https://www.sans.org/security-resources/posters/appsec/secure-devops-toolchain-swat-checklist-60): Toolchain and SWAT checklist
* [Exploring DevOps toolchain](https://blogs.sans.org/appsecstreetfighter/files/2018/10/DevSecOps_Exploring_Phase1-2.pdf): Presentation detailing DevOps toolchain and challenges in adding Sec to DevOps

![Security controls](security-controls.png)

## Pre-commit

* Threat modeling
  * OWASP User Security Stories [source](https://github.com/OWASP/user-security-stories)
  * OWASP Application Security Verification Standards [source](https://www.owasp.org/index.php/Category:OWASP_Application_Secuity_verification_standard_Project)
  * Mozilla's Rapid Risk Assessment (RRA) [source](https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html)
  * OWASP Threat Dragon [source](https://www.owasp.org/index.php/OWASP_Threat_Dragon)

* IDE Security plugins
  * [FindSecurityBugs](http://find-sec-bugs.github.io/) for Eclipse and IntelliJ
  * [Puma Scan](https://github.com/pumasecurity/puma-scan) for Visual Studio
  * Microsoft's [DevSkim](https://github.com/Microsoft/DevSkim) for VSCode, Sublime, Visual Studio
  * [SonarLint](https://www.sonarlint.org/) for VisualStudio, IntelliJ and Eclipse

* Pre-commit hooks
  * For hooks:
    * Yelp pre-commit framework
    * Overcommit
  * AWS Labs [git-secrets](https://github.com/awslabs/git-secrets)
  * [Talisman](https://github.com/thoughtworks/talisman)
  * Auth0 [repo-supervisor](https://github.com/auth0/repo-supervisor)
  * Peer Code reviews
    * Ensure frameworks & libraries are used to do security things (atuhentication, crypto etc.)
    * Check for hard-coded secrets, backdoors, re-invented wheels
    * Get all developers trained in secure coding
    * Focus on high-risk code that does:
      * Infrastructure (code)
      * Pipelines (definitions)
      * Authentication & access control
      * Output encoding
      * Input Validation
      * High risk business logic
      * Handling of confidential data
      * Cryptography
    * Use workflow tools to support & enforce code review
      * Pull reuqets comments (See BitBucket, GitHub, GitLab etc.)
      * Review Board or Gerrit
      * Atlassian Crucible
      * SmartBear Code Collaborator
      * Facebook's Phabricator

## Commit

* Static Code analysis
  * Java: [FindSecurityBugs](http://h3xstream.github.io/find-sec-bugs/)
  * PHP: [Phan](https://github.com/etsy/phan)
  * JavaScript: [NodeJsScan](https://github.com/ajinabraham/NodeJsScan)
  * Ruby: [Brakeman](http://brakemanscanner.org/)
  * Python: [Bandit](https://github.com/openstack/bandit)
  * C: [Flawfinder](http://www.dwheeler.com/flawfinder/)
  * C#: [PumaScan](https://github.com/pumasecurity/puma-scan)
  * Go: [Gosec](https://github.com/GoASTScanner/gas)
* Security Unit tests
  * Leverage "test-obsessed" teams
  * Think evil to come up with test-cases: evil user stories, abuse cases, OWASP ASVS
  * Increase test-coverage for high-risk code
  * FIX broken tests ASAP
  * TDD: Write tests first when fixing code, issues, vulnerabilities
  * Java: [JUnit](https://junit.org/)
  * C#, F#, VB: [XUnit](https://xunit.github.io/)
  * NodeJS: [Mocha](https://mochajs.org/)
  * Ruby: [RSpec](http://rspec.info/)
  * Python: [PyUnit](https://wiki.python.org/moin/PyUnit)
* Container Security
* Dependency Management

## 

## Acceptance


## Production


## Operation
