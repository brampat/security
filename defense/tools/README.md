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
  * git-hound
  * ThoughtWorks [Talisman](https://github.com/thoughtworks/talisman)
  * Auth0 [repo-supervisor](https://github.com/auth0/repo-supervisor)
  * Peer Code reviews
    * CERT Secure Coding Standards
    * OWASP Proactive controls
    * Ensure frameworks & libraries are used to do security things (authentication, crypto etc.)
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
      * Pull request comments (See BitBucket, GitHub, GitLab etc.)
      * Review Board or Gerrit
      * Atlassian Crucible
      * SmartBear Code Collaborator
      * Facebook's Phabricator

## Commit

* Static Code analysis
  * Checkmarx
  * Fortify
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
* Infrastructure as Code analysis
  * Ansible-lint
  * Foodcritic
  * puppet-lint
  * cfn_nag
* Container Security
  * Dangers:
    * Untrusted content & vulnerable images
    * Docker Daemon: extra attack surface
    * Container sprawl (scale is next-level vs. VM's in both number of machines, changes, but also security-events that can feed SIEM)
  * Guides / Resources:
    * Docker Security Guidelines
    * Docker Reference Architecture
    * [CIS Docker Benchmark](https://github.com/dev-sec/cis-docker-benchmark)
    * [Docker Bench](https://github.com/docker/docker-bench-security)
    * [BLOG Docker Security & best practices](https://blog.docker.com/2015/05/understanding-docker-security-and-best-practices/)
    * NCC Group: Understanding and hardening Linux Containers
    * NIST SP 800-190 Application Container Security Guide
    * CIS Kubernetes Benchmark
  * Tools:
    * [Actuary](https://github.com/diogomonica/actuary)
    * [Anchore](https://anchore.com/opensource/)
    * [Clair](https://github.com/coreos/clair)
    * Dagda
    * Docker Bench
    * [Falco](https://github.com/draios/falco)
  * Hardening:
    * Bane
    * CIS Benchmarks
    * grsecurity
* Dependency Management
  * Scan code to identify external dependencies (Bill of materials)
  * Identify out-of-date components
  * Check for CVE's
  * Commercial tools check for licensing risks and violations
  * Ensure also transitive dependencies are checked
  * Integrate into CI/CD
  * Tools:
    * [OWASP Dependency Check](https://www.owasp.org/index.php/OWASP_Dependency_Check): for Java, .NET, Ruby, Python
    * [PHP Sercurity Checker](https://security.sensiolabs.org/)
    * Ruby [Bundler-Audit](https://github.com/rubysec/bundler-audit)
    * Gemnasium
    * [NPM Audit](https://docs.npmjs.com/cli/audit)
    * [Retire.JS](https://retirejs.github.io/retire.js/)
    * Node Security Platform
  
## Acceptance

* Infrastructure as Code analysis
  * Ansible
  * Chef
  * Puppet
  * Saltstack
  * Terraform
  * Vagrant
* Immutable Infrastructure:
  * Docker
  * RKT
* Security Scanning:
  * Arachni
  * NMap
  * SQLMap
  * sslyze
  * OWASP ZAP
  * ssh_scan
* Cloud Configuration Management:
  * AWS CloudFormation
  * Azure Resource Manager
  * Google Cloud Deployment Manager
* Security Acceptance testing:
  * BDD-Security
  * Gauntlt
  * Mittn
* Infrastructure Tests:
  * Serverspec
  * Test Kitchen
* Infrastructure Compliance Checks
  * HubbleStack
  * InSpec  

## Production
* Security Smoke Tests:
  * ZAP Baseline Scna
  * NMap
  * SSLLabs-Scan
* Configuration Safety Checks
  * AWS Config
  * AWS Trusted Advisor
  * Microsoft Azure Advisor
  * Security Monkey
  * OSQuery
* Secrets Management
  * Ansible Vault
  * Blackbox
  * Chef Vault
  * Docker Secrets
  * Hashicorp Vault
  * Pinterest Knox
* Cloud Secrets Management:
  * AWS KMS
  * Azure Key Vault
  * Google Cloud KMS
* Cloud Security Testing:
  * CloudSploit
  * Nimbostratus
* Server Hardening:
  * dev-sec.io
  * SIMP
* Host Intrusion Detection System (HIDS):
  * fail2ban
  * [Snort](https://www.snort.org/)
  * [OSSEC](https://www.ossec.net/)
  * Samhain
  * [Netfilter](https://www.netfilter.org/): Linux kernel packet filtering framework

## Operation
* Fault Injection:
  * Chaos Kong
  * Chaos Monkey
* Cyber Simulations:
  * Game day exercises
  * Tabletop Scenarios
* Penetration Testing:
  * Attack-driven defense
  * Bug Bounties
  * Red Team exercises
* Threat Intelligence
  * Diamond Model
  * Kill Chain
  * STIX
  * TAXII
* Continuous Scanning:
  * OpenSCAP
  * OpenVAS
  * Prowler
  * Scout2
  * vuls
* Blameless Postmortems:
  * Etsy Morgue
* Continuous Monitoring:
  * Grafana
  * Graphite
  * Statsd
  * Seyren
  * Sof-elk
  * ElastAlert
  * 411
* Cloud Monitoring
  * CloudWatch
  * CloudTrail
  * Reddalert
* Cloud Compliance:
  * Cloud Custodian
  * Compliance Monkey
  * Forseti Security
* Tools:
  * [Secure Headers](https://securityheaders.com/)