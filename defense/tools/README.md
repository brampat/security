# SecDevOps

This documentation is provided by [Sans.org](https://software-security.sans.org/blog/2018/10/14/exploring-the-devsecops-toolchain)
to provide DevOps teams with Security tools and help them deliver secure software, while staying productive and agile
in a DevOps way-of-working.
The tools described can be integrated in CI/CD toolchains.

* [Secure DevOps poster](https://www.sans.org/security-resources/posters/appsec/secure-devops-toolchain-swat-checklist-60): Toolchain and SWAT checklist
* [Exploring DevOps toolchain](https://blogs.sans.org/appsecstreetfighter/files/2018/10/DevSecOps_Exploring_Phase1-2.pdf): Presentation detailing DevOps toolchain and challenges in adding Sec to DevOps
* [AppSec Pipeline](https://www.appsecpipeline.org/): Overview of AppSec Pipeline tools

![Security controls](security-controls.png)

## Pre-commit

### Threat modeling
* OWASP [User Security Stories](https://github.com/OWASP/user-security-stories)
* OWASP Application Security Verification Standards - [ASVS](https://www.owasp.org/index.php/Category:OWASP_Application_Secuity_verification_standard_Project)
* Mozilla's [Rapid Risk Assessment](https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html) (RRA)
* OWASP [Threat Dragon](https://www.owasp.org/index.php/OWASP_Threat_Dragon)
* [Irius Risk](https://www.iriusrisk.com/)
* [Security Compass](https://www.securitycompass.com/)
* [Threat Modeler](https://threatmodeler.com/)

### IDE Security plugins
* [FindSecurityBugs](http://find-sec-bugs.github.io/) for Eclipse and IntelliJ
* [Puma Scan](https://github.com/pumasecurity/puma-scan) for Visual Studio
* Microsoft's [DevSkim](https://github.com/Microsoft/DevSkim) for VSCode, Sublime, Visual Studio
* [SonarLint](https://www.sonarlint.org/) for VisualStudio, IntelliJ and Eclipse

### Pre-commit hooks

#### For hooks
* Yelp pre-commit framework
* Overcommit

#### Secrets scanning
* git-hound
* gitrob
* truffleHog
* AWS Labs [git-secrets](https://github.com/awslabs/git-secrets)
* [GitGot](https://github.com/BishopFox/GitGot) for scanning secrets on GitHub
* OWASP Sedated
* [BFG](https://rtyley.github.io/bfg-repo-cleaner/) deletes secrets from GIT repo history
  * [BFG Blog](https://anchor.host/removing-sensitive-data-from-git-repos/) 
* ThoughtWorks [Talisman](https://github.com/thoughtworks/talisman)
* Auth0 [repo-supervisor](https://github.com/auth0/repo-supervisor)
* Aqua [Trivy](https://aquasecurity.github.io/trivy/)

#### Peer Code reviews
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

### Quality Assurance
* [SonarQube](https://www.sonarqube.org/)
* [SpotBugs](https://spotbugs.github.io/) (formerly FindBugs)

### Static Code analysis (SAST)
* OWASP [Glue](https://www.owasp.org/index.php/OWASP_Glue_Tool_Project): Integrates and coordinates different analysis and tools
* Wikipedia [List](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) of Static Code Analysis Tools
* [Awesome Static Analysis](https://github.com/mre/awesome-static-analysis) list of tools
* [Checkmarx](https://www.checkmarx.com/) for [these](https://checkmarx.atlassian.net/wiki/spaces/KC/pages/22806548/7.1.8+Supported+Environments) languages: Java, .NET / C# and VB.NET, ASP, VB6, C / C++, PHP, Apex, Ruby, JavaScript, Perl 5, Objective C, HTML5, PL/SQL, Python, Groovy
* [Fortify](https://www.microfocus.com/en-us/products/static-code-analysis-sast/overview) supports 25+ languages including Java, C#, C++, Swift & PHP
* [VeraCode](https://www.microfocus.com/en-us/products/static-code-analysis-sast/overview) supports Java, C#, [integration](https://www.veracode.com/integrations) with many tools
* [Kiuwan](https://www.kiuwan.com/code-analysis-qa/)
* [CodeSonar](https://www.grammatech.com/products/codesonar): SAST for C, C++, Java and binaries
* [Coverity](https://scan.coverity.com/): SAST for C, C++, C#, Java, JavaScript, Ruby and Python
* [Klocwork](https://www.roguewave.com/products-services/klocwork): SAST for C, C++, C# and Java
* [GuardRails](https://www.guardrails.io/): SAST for PHP, Python, Ruby, Java (using Maven), JavaScript, Go, and Solidity. Coming soon (planned aug 2019): Elixir, C/C++, .NET
* [Secure Headers](https://securityheaders.com/)
* [ImmuniWeb](https://www.immuniweb.com/free/) free tests for Website, Mobile app, SSL and Phishing sites.
* SemGrep
* [Nexus Lifecycle](https://www.sonatype.com/products/open-source-security-dependency-management)
* Gitlab-CI [SAST](https://docs.gitlab.com/ee/user/application_security/sast/index.html)
* Snyk [Code](https://snyk.io/product/snyk-code/)
* Contrast [Scan](https://www.contrastsecurity.com/contrast-scan)

#### Java
* [FindSecurityBugs](http://h3xstream.github.io/find-sec-bugs/)
  * See [JavaVulnerableLab](https://github.com/brampat/JavaVulnerableLab) demo for an example-project and instructions to run Sonar with FindSecurityBugs and import them into Sonarcloud
* [OWASP Lapse+](https://www.owasp.org/index.php/OWASP_LAPSE_Project)
* [OWASP Orizon](https://www.owasp.org/index.php/Category:OWASP_Orizon_Project) (Also for Android APK files)
* The [Checker Framework](https://checkerframework.org/)
* Parasoft [Jtest](https://www.parasoft.com/products/jtest)

#### Groovy
* [CodeNarc](http://codenarc.sourceforge.net/)

#### PHP
* [OWASP WAP](https://www.owasp.org/index.php/OWASP_WAP-Web_Application_Protection)
* [Phan](https://github.com/etsy/phan)

#### JavaScript
* [NodeJsScan](https://github.com/ajinabraham/NodeJsScan)

#### Ruby
* [Brakeman](http://brakemanscanner.org/)

#### Python
* [Bandit](https://github.com/openstack/bandit) on GitHub
* [Bandit](https://bandit.readthedocs.io/en/latest/)

#### C
* [Flawfinder](http://www.dwheeler.com/flawfinder/)
* Parasoft [C/C++test](https://www.parasoft.com/products/ctest)

#### C#
* [PumaScan](https://github.com/pumasecurity/puma-scan)

#### Go
[Gosec](https://github.com/GoASTScanner/gas)

#### Golang
* GASP: Golang AppSec Pipeline
  * [GASP-Docker](https://github.com/appsecpipeline/gasp-docker)

#### .NET
* [OWASP O2](https://www.owasp.org/index.php/OWASP_O2_Platform)
* [Microsoft SDL](https://docs.microsoft.com/en-us/azure/security/azure-security-threat-modeling-tool) for Azure
* [WhiteSource](https://marketplace.visualstudio.com/items?itemName=whitesource.whitesource) for dependency management, checks licenses and vulnerabilities.
* [Fortify](https://marketplace.visualstudio.com/items?itemName=fortifyvsts.hpe-security-fortify-vsts) for VisualStudio
* [Checkmarx](https://marketplace.visualstudio.com/items?itemName=checkmarx.cxsast) for VisualStudio
* [Reshift](https://www.softwaresecured.com/reshift)
* [OWASP ZAP VSTS extension](https://github.com/deliveron/owasp-zap-vsts-extension) for active scan of vulnerabilities on running code in Visual Studio TReam Services (current Azure DevOps)
* Parsoft [dottest](https://www.parasoft.com/products/dottest)

### Security Unit tests
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

### Interactive Application Security Testing (IAST)
* Contrast [Assess](https://www.contrastsecurity.com/contrast-assess)

### CI/CD
* [Jenkins](https://www.jenkins.io/)
* [GitHub Actions](https://github.com/features/actions)
* [Azure DevOps Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/)
* [AWS CodePipeline](https://aws.amazon.com/codepipeline/)
* [GitLab-CI](https://docs.gitlab.com/ee/ci/)
* [TeamCity](https://www.jetbrains.com/teamcity/)
* [CircleCI](https://circleci.com/)
* [TravisCI](https://www.travis-ci.com/)
* [CloudBees](https://www.cloudbees.com/)
* [GoCD](https://www.gocd.org/)
* [Spinnaker](https://spinnaker.io/)

### Container Management

#### Risks
* Untrusted content & vulnerable images
* Docker Daemon: extra attack surface
* Container sprawl (scale is next-level vs. VM's in both number of machines, changes, but also security-events that can feed SIEM)

#### Orchestration
* [Kubernetes](https://kubernetes.io/)
  * On Cloud:
    * Amazon EKS
    * Azure AKS
    * Google GKE
* Docker Swarm
* Docker Compose
* Apache Mesos
* RedHat OpenShift
* Rancher
* HashiCorp Nomad

#### Containerization
* [Docker](https://www.docker.com/)
  * Managed Docker Container Registries
    * Amazon Elastic Container Registry (ECR)
    * Azure Container Registry (ACR)
    * Google Container Registry (GCR)
    * Docker Hub
* Containerd
* CRI-O
* rkt
* LXD
* Podman

#### Guides / Resources
  * Docker Security Guidelines
    * [Research on top 1000 Docker containers](https://www.kennasecurity.com/one-fifth-of-the-most-used-docker-containers-have-at-least-one-critical-vulnerability/) reveals 20% with high risk and 60% with medium risk CVE's
      * [VulnerableContainer.org](https://vulnerablecontainers.org/)
    * [10 Docker Security Best practices](https://snyk.io/blog/10-docker-image-security-best-practices/)
    * [Shifting Docker Security Left](https://snyk.io/blog/shifting-docker-security-left/)
    * [Top 2 Docker Base images have over 500 vulnerabilities](https://snyk.io/blog/the-top-two-most-popular-docker-base-images-each-have-over-500-vulnerabilities/)
    * [Top 10 Docker Base images have over 8000 vulnerabilities](https://snyk.io/blog/top-ten-docker-images-contain-over-8000-vulnerable-paths/)
    * [80% devs not addressing Docker Security](https://snyk.io/blog/80-of-developers-are-not-addressing-docker-security/)
    * [Improve security in your Docker images](https://snyk.io/blog/take-actions-to-improve-security-in-your-docker-images/)
  * Docker Reference Architecture
  * [CIS Docker Benchmark](https://github.com/dev-sec/cis-docker-benchmark)
  * [Docker Bench](https://github.com/docker/docker-bench-security)
  * [BLOG Docker Security & best practices](https://blog.docker.com/2015/05/understanding-docker-security-and-best-practices/)
  * NCC Group: Understanding and hardening Linux Containers
  * NIST SP 800-190 Application Container Security Guide
  * CIS Kubernetes Benchmark
  * Securing Kubernetes [course-material](https://github.com/manicodesecurity/defending-devops)

#### Container Security Scanning
* [Actuary](https://github.com/diogomonica/actuary)
* [Anchore](https://anchore.com/opensource/)
* [Clair](https://github.com/coreos/clair)
* Dagda
* Docker Bench
* [Falco](https://github.com/draios/falco)
* [Nexus Container](https://www.sonatype.com/products/container)
* Snyk [Container](https://snyk.io/product/container-vulnerability-management/)
* [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) (formerly Twistlock)
* Aqua [Trivy](https://aquasecurity.github.io/trivy/)

#### Hardening
* Bane
* CIS Benchmarks
* grsecurity


### Dependency Management

#### Software Composition Analysis (SCA)
* Scan code to identify external dependencies (Bill of materials)
* Identify out-of-date components
* Check for CVE's
* Check for licensing risks and violations
* Ensure also transitive dependencies are checked
* Integrate into CI/CD

#### Tools
* OWASP [Dependency Check](https://www.owasp.org/index.php/OWASP_Dependency_Check): for Java, .NET, Ruby, Python
* OWASP [Dependency Track](https://owasp.org/www-project-dependency-track/)
* [Nexus](https://www.sonatype.com/products-overview) platform
  * Nexus [Repository](https://www.sonatype.com/products/nexus-repository)
  * Nexus [Lifecycle Foundation](https://www.sonatype.com/products/lifecycle-foundation)
  * Nexus [Firewall](https://www.sonatype.com/products/firewall)
* [OSSIndex](https://ossindex.sonatype.org/) supports numerous ecosystems and integrates with several toolchains
  * Maven [ossindex-maven-plugin](https://sonatype.github.io/ossindex-maven/maven-plugin/)
* [Snyk](https://snyk.io/) scans [support](https://snyk.io/docs/) Ruby, Java, Python, .NET, PHP, NodeJS and others
  * Snyk [SCA](https://snyk.io/product/open-source-security-management/)
* [SourceClear](https://www.sourceclear.com/) supports [10+ languages](https://www.sourceclear.com/vulnerability-database/search#_) and integrates with several toolchains
  * SourceClear [Dashboard](https://status.srcclr.net/): 
  * [Security Graph Language](https://www.sourceclear.com/sgl/): Domain specific language designed to identify security issues in open-source code
* [BlackDuck](https://www.blackducksoftware.com/)
* [13 tools](https://techbeacon.com/app-dev-testing/13-tools-checking-security-risk-open-source-dependencies) for checking open source dependencies
* [Gemnasium](https://docs.gitlab.com/ee/user/project/import/gemnasium.html) (Integrated into GitLab and integrates with GitHub)
* JavaScript:
  * [Retire.JS](https://retirejs.github.io/retire.js/)
  * [NPM Audit](https://docs.npmjs.com/cli/audit)
  * NPM [AuditJS](https://www.npmjs.com/package/auditjs) package
  * Node Security Platform (Included in NPM as of April 2018)
* .NET: Visual Studio [Audit.Net](https://marketplace.visualstudio.com/items?itemName=VorSecurity.AuditNet) extension
* Golang / Go: [Nancy](https://github.com/sonatype-nexus-community/nancy)
* Python / Conda: [Jake](https://github.com/sonatype-nexus-community/jake)
* Ruby / RubyGems: [Chelsea](https://github.com/sonatype-nexus-community/chelsea)
* Cheque: C / C++
* Pants: Carbo
* AHAB: Bse OS (Debian, Fedora, Alpine)
* GitHub [DepShield](https://www.sonatype.com/depshield)
* GitHub [Automated Security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes) for vulnerable dependencies
* [JForg X-Ray](https://jfrog.com/xray/): in combination with JFrog Artifactory
* [PHP Sercurity Checker](https://security.sensiolabs.org/)
* Ruby:
  * [Bundler-Audit](https://github.com/rubysec/bundler-audit)
  * Ruby & Rails [Hakiri](https://hakiri.io/)
* Contrast [SCA](https://www.contrastsecurity.com/contrast-sca)
  
## Acceptance

### Infrastructure as Code
* Hashicorp [Terraform](https://www.terraform.io/)
* Hashicorp [Vagrant](https://www.vagrantup.com/)
* Snyk [Infrastructure as Code](https://snyk.io/product/infrastructure-as-code-security/)
* Aqua [Trivy](https://aquasecurity.github.io/trivy/)
* Pulumi

#### Guides
* Comparison [Terraform vs Vagrant](https://www.trustradius.com/compare-products/terraform-vs-vagrant)
* Analysis: Pulumi
  * [Blog](https://blog.pulumi.com/testing-your-infrastructure-as-code-with-pulumi) on testing ingrastructure as code with Pulumi
* Also See Cloud Configuration Management

#### Configuration Management
* Red Hat [Ansible](https://www.ansible.com/) automation
* [Chef](https://www.chef.io/) enterprise automation
* [Puppet](https://puppet.com/) infrastructure automation and delivery
* [Saltstack Enterprise](https://www.saltstack.com/products/saltstack-enterprise/) 
* [Saltstack Security](https://www.saltstack.com/products/secops/)

##### Guides
* Comparison [Puppet vs Chef](https://logz.io/blog/chef-vs-puppet/) and [Revisited](https://www.upguard.com/articles/puppet-vs.-chef-revisited)
* Comparison [Ansible vs Saltstack](https://www.upguard.com/articles/ansible-vs-salt)
* Comparison [Ansible vs Terraform](https://linuxacademy.com/blog/devops/ansible-vs-terraform-fight/)
 
#### Immutable Infrastructure
* Docker
* RKT

#### Infrastructure as Code Security Scanning
* Ansible-lint
* Foodcritic
* puppet-lint
* cfn_nag
* Arachni
* NMap
* SQLMap
* sslyze
* OWASP ZAP
* ssh_scan
* [NIKTO](https://github.com/sullo/nikto): free command-line vulnerability scanner, scans webservers for weaknesses
* Nessus
* OpenVAS
* Qualys

#### Cloud Configuration Management
* AWS CloudFormation
* Azure Resource Manager (ARM) Templates / Azure Bicep
* Google Cloud Deployment Manager
* Security Acceptance testing:
  * [BDD-Security](https://github.com/continuumsecurity/bdd-security)
  * [Gauntlt](http://gauntlt.org/)
    * Gauntlt [Starter Kit](https://www.youtube.com/watch?v=hMpVQKcyGSE) video
  * Mittn
* Infrastructure Tests:
  * Serverspec
  * Test Kitchen
* Infrastructure Compliance Checks
  * HubbleStack
  * InSpec
* Snyk [Cloud](https://snyk.io/product/snyk-cloud/)
* Contrast [Serverless Application Security](https://www.contrastsecurity.com/contrast-serverless)
* Coalfire [Cloud Security](https://www.coalfire.com/solutions/cloud-security)

### Dynamic Application Security Testing (DAST)
* OWASP [ZAP](https://www.zaproxy.org/)
* [Nessus](https://www.tenable.com/downloads/nessus): Vulnerability scanner for VM, Server OS or host machines. Was OpenSource, now commercial (Euro 2470 / year), free for home & limited training use. Updates vuln. database using plugins.
* [OpenVAS](http://www.openvas.org/): OpenSource Vulnerability scanner for VM, Server OS or host machines
* [Netsparker](https://www.netsparker.com) (5k+ / year): Web app security scanner
* [Acunetix](https://www.acunetix.com/web-vulnerability-scanner/) (4.5k+ / year): Web app security scanner

## Production

### Security Smoke Tests
* ZAP Baseline Scan
* NMap
* SSLLabs-Scan

### Configuration Safety Checks
* AWS Config
* AWS Trusted Advisor
* Microsoft Azure Advisor
* Security Monkey
* OSQuery

### Secrets Management
* Comparison on [GeekFlare](https://geekflare.com/secret-management-software/)
* Ansible Vault
* [HashiCorp Vault](https://www.vaultproject.io/)
* Blackbox
* Chef Vault
* [Docker Secrets](https://docs.docker.com/engine/swarm/secrets/)
* [Pinterest Knox](https://github.com/pinterest/knox)
* [Akeyless Vault](https://www.akeyless.io/product-secrets-management/)
* Square [Keywhiz](https://square.github.io/keywhiz/)
* Lyft [Confidant](https://lyft.github.io/confidant/)
* [Strongbox](https://strongboxsafe.com/)

### Cloud Secrets Management
* AWS KMS
* [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
* [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)
* Google Cloud KMS

### Cloud Security Testing
* CloudSploit
* Nimbostratus

### Server Hardening
* dev-sec.io
* SIMP

### Runtime Application Security Protection (RASP)
* Contrast [Protect](https://www.contrastsecurity.com/contrast-protect)

Intrusion Detection System (IDS):
* [Comparison](https://www.alienvault.com/blogs/security-essentials/open-source-intrusion-detection-tools-a-quick-overview) of Open-source IDS
* [Fail2Ban](https://www.fail2ban.org/wiki/index.php/Main_Page): scans logfiles and bans IPs based on malicious signs
* [Snort](https://www.snort.org/): Network-based IDS
* [Suricata](https://suricata-ids.org/features/): Network-based IDS and extra non-IDS functions
* [Zeek](https://www.zeek.org/documentation/index.html) (formerly known as Bro): Signature and Anomaly-based IDS
* [OSSEC](https://www.ossec.net/): Host-based IDS
* [Samhain](https://la-samhna.de/samhain/s_documentation.html): Host-based IDS
* [Netfilter](https://www.netfilter.org/): Linux kernel packet filtering framework

File Integrity Monitors (FIM):
* [AFICK](http://afick.sourceforge.net/)
* [TripWire](https://github.com/Tripwire/tripwire-open-source)
* [ChkRootkit](https://github.com/Magentron/chkrootkit): Rootkit-finding file integrity checkers for Unix-based systems
* [rkhunter](http://rkhunter.sourceforge.net/): Rootkit-finding file integrity checkers for Unix-based systems
* [Unhide](http://www.unhide-forensics.info/): Rootkit-finding file integrity checkers for Unix-based systems

Multi-tools
* [Wazuh](https://wazuh.com/): OpenSource tool for threat detection, integrity monitoring, incident response and compliance
* [Dispatch](https://github.com/Netflix/dispatch) by Netflix, [Introduction Blog](https://medium.com/@NetflixTechBlog/introducing-dispatch-da4b8a2a8072), [Docs](https://hawkins.gitbook.io/dispatch/)

## Operation

### Tools Integration
* [Nucleus](https://www.nucleussec.com/)

### Fault Injection
* Chaos Kong
* Chaos Monkey

### Cyber Simulations
* Game day exercises
* Tabletop Scenarios

### Penetration Testing
* Attack-driven defense
* Bug Bounties
* Red Team exercises

### Threat Intelligence
* Diamond Model
* Kill Chain
* STIX
* TAXII

### Continuous Scanning
* OpenSCAP
* OpenVAS
* Prowler
* Scout2
* vuls

### Issue Tracking
* Atlassian JIRA
* [OWASP Defect Dojo](https://owasp.org/www-project-defectdojo/): open source vulnerability management tool
  * [Getting Started](https://defectdojo.readthedocs.io/en/latest/getting-started.html)
* [Brinqa](https://www.brinqa.com/)
* [Kenna Security](https://www.kennasecurity.com/)
* [Azure Boards](https://azure.microsoft.com/en-us/services/devops/boards/)
* [PivotalTracker](https://www.pivotaltracker.com/)
* [Asana](https://asana.com/)
* [ShortCut](https://shortcut.com/)
* [Trello](https://trello.com/en)

### Blameless Postmortems
* Etsy [Morgue](https://github.com/etsy/morgue)
  * [Etsy Morgue](http://vimeo.com/77206751) demo talk at DevOpsDays NYC 2013
  * Blog: [Etsy Blameless Post-Mortem](https://www.etsy.com/codeascraft/blameless-postmortems/)
* Blog: [Blameless Culture](https://zendesk.engineering/blameless-culture-21662ab9118c)
* Blog: [Blameless Post-Mortem](https://www.blameless.com/sre/what-are-blameless-postmortems-do-they-work-how)

### Application Discovery
* SolarWinds Server & Application Monitor
* [Datadog APM Service Map](https://www.datadoghq.com/dg/apm/service-map/)
* [Dynatrace](https://www.dynatrace.com/platform/)
* [ManageEngine](https://www.manageengine.com/products/applications_manager/) Applications Manager
* [Device42](https://www.device42.com/download/)
* [ExtraHop](https://www.extrahop.com/demo/)
* [ScienceLogic](https://sciencelogic.com/product/demo)
* [Appmigrate](https://www.migrateapplication.com/) (Free)
* [Savision](https://martellotech.com/try-free/)
* [AppDynamics](https://www.appdynamics.com/free-trial/)
* [Open-AudIT](https://opmantek.com/open-source-discovery-tools-open-audit/) (Open source)
* [ImmuniWeb® Discovery](https://www.immuniweb.com/products/discovery/)
* [SolarWinds Network Performance Monitor](https://www.solarwinds.com/network-performance-monitor/use-cases/network-discovery-tool)
* [PRTG Network Monitor](https://www.paessler.com/prtg)
* [Virima](https://www.virima.com/)
* [Qualys](https://www.qualys.com/apps/asset-inventory/) Asset Discovery (Free)
* [Lansweeper](https://www.lansweeper.com/) (Free plan up to 100 assets, Enterprise plan for Euro 1,- per asset, per year)
* [AT&T Cybersecurity](https://www.alienvault.com/solutions/asset-discovery-inventory)
* [Asset panda](https://www.assetpanda.com/)
* [InvGate Assets](https://www.invgate.com/assets/)
* [MMSoft Pulseway](https://www.pulseway.com/)

### Continuous Monitoring / SIEM
* [SIEM](https://en.wikipedia.org/wiki/Security_information_and_event_management) - Security Information and Event Management
* [Comparison](https://logz.io/blog/open-source-siem-tools/)
* [LME](https://www.ncsc.gov.uk/blog-post/logging-made-easy) Logging Made Easy blog by NCSC UK
* [Splunk](https://www.splunk.com/page/sign_up/es_sandbox)
* [ThreatHunting](https://github.com/olafhartong/ThreatHunting) for Splunk: A Splunk app mapped to MITRE ATT&CK to guide your threat hunts
  * [BLOG](https://securityaffairs.co/wordpress/81288/security/hunting-mitres-attck-splunk.html) on using ThreatHunting
* [ElasticStack](https://www.elastic.co/solutions/security-analytics) with [additions](https://logz.io/blog/elk-siem/):
  * [X-Pack](https://www.elastic.co/products/stack)
  * [ElastAlert](https://github.com/Yelp/elastalert)
  * Blog on [Security plugins](https://www.theserverside.com/feature/Detect-attacker-intent-with-Elasticsearch-security-plugins) for Elasticsearch
  * ElasticStack [scaling](https://www.elastic.co/blog/small-medium-or-large-scaling-elasticsearch-and-evolving-the-elastic-stack-to-fit)
  * [RedELK](https://outflank.nl/blog/2019/02/14/introducing-redelk-part-1-why-we-need-it/): Red Team’s SIEM ([GitHub](https://github.com/outflanknl/RedELK/) )
* [Backstory](https://chronicle.security/products/backstory/) from Google / Alphabet's [Chronicle](https://chronicle.security/)
* [OSSIM](https://www.alienvault.com/products/ossim)
* [OSSEC](http://www.ossec.net/)
* [Apache Metron](http://metron.apache.org/)
* [SIEMonster](https://siemonster.com/)
* [Prelude](https://www.prelude-siem.org/)
* [Elastic Intel](https://github.com/securityclippy/elasticintel/)
* [Azure Sentinel](https://azure.microsoft.com/en-in/services/azure-sentinel/)
* Grafana
* Graphite
* Statsd
* Seyren
* Sof-elk
* ElastAlert
* 411

### Cloud Monitoring
* CloudWatch
* CloudTrail
* Reddalert

### Cloud Compliance
* Cloud Custodian
* Compliance Monkey
* Forseti Security

## Sources
* [The New Ways of DevSecOps](https://www.youtube.com/watch?v=XByV6SBdpYA) by [James Wickett](https://twitter.com/wickett)
* [Building AppSec Pipeline](https://medium.com/chargebee-engineering/building-appsec-pipeline-for-continuous-visibility-d430beb0a78f) for Continuous Visibility - Nikhil Mittal
* [https://appsecmap.com/](https://appsecmap.com/) by Enso Security
* [DevSecOps Reference Architecture](https://www.sonatype.com/resources/white-paper-test-drive-a-devsecops-reference-architecture) by SonaType (register for free)
* OWASP [Application Security Wayfinder](https://owasp.org/www-project-integration-standards/)
* [Top DevOps Tools](https://medium.com/devops-mojo/top-useful-and-most-popular-devops-tools-best-widely-used-common-open-source-devops-gitops-tools-b4a674e00f15)