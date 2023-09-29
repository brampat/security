# Cloud Security

Overview by CNCF: [Cloud Native Interactive Landscape](https://landscape.cncf.io/)
* [Guide](https://landscape.cncf.io/guide) to current Cloud ecosystem

## Tools:

### Hardening, assessment and inventory
* [Antiope](https://github.com/turnerlabs/antiope/): AWS Inventory and Compliance Framework
* [AWS-Inventory](https://github.com/nccgroup/aws-inventory): Make a inventory of all your resources across regions (Python)
* [AWS key disabler](https://github.com/te-papa/aws-key-disabler): A small lambda script that will disable access keys older than a given amount of days
* [AWS Public IPs](https://github.com/arkadiyt/aws_public_ips): Fetch all public IP addresses tied to your AWS account. Works with IPv4/IPv6, Classic/VPC networking, and across all AWS services (Ruby)
* [AWS Security Benchmarks](https://github.com/awslabs/aws-security-benchmark): scrips and templates guidance related to the AWS CIS Foundation framework (Python)
* [Cartography](https://github.com/lyft/cartography): Cartography is a Python tool that consolidates infrastructure assets and the relationships between them in an intuitive graph view powered by a Neo4j database. 
* CloudGuard [Dome9](https://www.checkpoint.com/products/cloud-security-orchestration): Public cloud security and compliance orchestration for AWS, Azure and Google Cloud Platform
* [CloudMapper](https://github.com/duo-labs/cloudmapper): Analyze AWS environments
* [Cloud-reports](https://github.com/tensult/cloud-reports): Scans your AWS cloud resources and generates reports
* [CloudSploit](https://cloudsploit.com): Commercial Cloud Security and configuration scanner for Amazon AWS, Microsoft Azure and (coming soon) GitHub
* [CloudSploit](https://github.com/cloudsploit/scans): AWS security scanning checks
* [CloudTracker](https://github.com/duo-labs/cloudtracker): Find over-privileged IAM users and roles by comparing CloudTrail logs with current IAM policies
* [cs-suite](https://github.com/SecurityFTW/cs-suite): Integrates tools like Scout2 and Prowler among others
* [FunctionShield](https://www.puresec.io/function-shield) A free AWS Lambda security library for developers, providing runtime protection such as: outbound network blocking, disable shell processes, /tmp/ disk I/O operations and prevents leakage of the handler's source code.
* [ICE](https://github.com/Teevity/ice): Ice provides insights from a usage and cost perspective, with high detail dashboards.
* [Komiser](https://github.com/mlabouardy/komiser): Cloud Environment Inspector, nalyze and manage cloud cost, usage, security, and governance in one place.
* [LambdaGuard](https://github.com/Skyscanner/LambdaGuard): An AWS Lambda auditing tool designed to create asset visibility and provide actionable results.
* [Lunar](https://github.com/lateralblast/lunar): Security auditing tool based on several security frameworks (it does some AWS checks)
* [Pacbot](https://github.com/tmobile/pacbot): Platform for continuous compliance monitoring, compliance reporting and security automation for the cloud
* [Perimeterator](https://github.com/darkarnium/perimeterator): AWS perimeter monitoring: Periodically scan internet facing AWS resources to detect misconfigured services
* [PMapper](https://github.com/nccgroup/PMapper): Advanced and Automated AWS IAM Evaluation (Python)
* [Prowler](https://github.com/toniblyx/prowler): CIS benchmarks and additional checks for security best practices in AWS
* [Resource Counter](https://github.com/disruptops/resource-counter): Counts number of resources in categories across regions
* [ScoutSuite](https://github.com/nccgroup/ScoutSuite): Cloud Security auditing AWS, Google Cloud and Azure
* [SkyArk](https://github.com/cyberark/SkyArk): SkyArk provides advanced discovery and security assessment for the most privileged entities in the tested AWS. 
* [Terraform AWS Secure Baseline](https://github.com/nozaq/terraform-aws-secure-baseline) Terraform module to set up your AWS account with the secure baseline configuration based on CIS Amazon Web Services Foundations. 
* [Trailblazer AWS](https://github.com/willbengtson/trailblazer-aws): Trailblazer AWS, determine what AWS API calls are logged by CloudTrail and what they are logged as. You can also use TrailBlazer as an attack simulation framework.
* [TrailScraper](https://github.com/flosell/trailscraper): A command-line tool to get valuable information out of AWS CloudTrail

### Monitoring and auditing
* [Billing Alerts CFN templates](https://github.com/btkrausen/AWS/tree/master/CloudFormation/Billing%20Alerts)
* [CloudCustodian](https://github.com/capitalone/cloud-custodian)
* [Cloud Inquisitor](https://github.com/RiotGames/cloud-inquisitor)
* [Hammer](https://github.com/dowjones/hammer)
* [Krampus](https://github.com/sendgrid/krampus) (as Security Monkey complement)
* [Repokid](https://github.com/Netflix/repokid): Least Privilege
* [Security Monkey](https://github.com/Netflix/security_monkey)
* [Streamalert](https://github.com/airbnb/streamalert)
* [Watchmen](https://github.com/iagcl/watchmen): AWS account compliance using centrally managed Config Rules
* [Wazuh CloudTrail module](https://documentation.wazuh.com/current/amazon/index.html)

#### Network / Endpoints
* FireEye
* AlertLogic
* Chyphort
* Zscaler
* Skybox Security
* Norse
* Seculert
* Total Defense
* Cyber Flow Analytics
* Quarri
* Aralabs
* Bit9
* ForeScout
* Cylance
* 21ICT
* Redjack
* LightCyber

#### Virtualization
* Illumio
* HighCloud Security
* HYTrust
* Click Security
* Bromium

#### Cloud Application
* Netskope
* Adallom
* Skyhigh
* VeraCode
* Ionic
* Apprity
* Elastica

#### Cloud Data Protection
* Encrypted Cloud
* PerspecSys
* CloudLock
* CipherCloud
* Vaultive
* Gazzang

#### Cloud Infrastructure
* CirScope
* Dome9
* Voltage Security
* CloudPassage
* Threat Stack

#### Website
* Distil.it
* Fireblade
* Tinfoil Security
* WhiteHat
* Wallarm
* Shapesecurity

#### Big data
* Sqrrl
* Vectra
* Solera
* Bitsight
* M.dot
* PacketSled
* Dataguise

#### Email
* Bounce
*ReturnPath
* Agari
* AppRiver

### Mobile Security
* Lookout
* Mocana
* [Zimperium](https://www.zimperium.com/)
* Bitglass
* Mojave Networks
* Appthority
* Lacoon Mobile Security

#### MDM / MAM
* Bluebox
* Divide
* NativeFlow
* Workspot
* Averail
* MobileIron
* Airwatch

### Identity Access Management

#### Access Management
* Conjur
* Simplified
* Bettercloud
* Onelogin
* Centrify
* SecureAuth
* Okta
* Stormpath
* PingIdentity
* Bitium
* Viewfinity

#### Authentication
* Sedicii
* Virtrue
* Insights
* ThreatMetrix
* PluriLock
* Duo
* Authy
* PayFone
* Toopher

#### Shared Passwords
* CommonKey
* Password Box

### eCommerce Fraud
* Sift Science
* FraudMetrix
* Trustev

### Incident Response Collaboration
* AlienVault
* CyberSponse
* Threat Stream
* IDD
* Vorstack
* CounterTack

### Phone Fraud
* PinDrop Security
* TrustId

### Various
* BlackLotus
* SmartVue
* Prolexic
* Defense.net
* Arxan

### Incident response
* [AWS IR](https://github.com/ThreatResponse/aws_ir) - AWS specific Incident Response and Forensics Tool
* [AWSlog](https://github.com/jaksi/awslog) - Show the history and changes between configuration versions of AWS resources using AWS Config 
* [AWS_Responder](https://github.com/prolsen/aws_responder) - AWS Digital Forensic and Incident Response (DFIR) Response Python Scripts
* [AWS Security Automation](https://github.com/awslabs/aws-security-automation) - AWS scripts and resources for DevSecOps and automated incident response
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - Triage tool used during cloud-centric security incidents
* [GDPatrol](https://github.com/ansorren/GDPatrol) - Automated Incident Response based off AWS GuardDuty findings
* [Margaritashotgun](https://github.com/ThreatResponse/margaritashotgun) - Linux memory remote acquisition tool
* [LiMEaide](https://kd8bny.github.io/LiMEaide/) - Linux memory remote acquisition tool
* [SSM-Acquire](https://github.com/mozilla/ssm-acquire) - A python module for orchestrating content acquisitions and analysis via Amazon SSM

### AppSec
* [asecure.cloud](https://asecure.cloud) - A repository of customizable AWS security configurations (Cloudformation and CLI templates)
* [Assume](https://github.com/SanderKnape/assume) - A simple CLI utility that makes it easier to switch between different AWS roles
* [AWS Service Control Policies](https://github.com/jchrisfarris/aws-service-control-policies) - Collection of semi-useful Service Control Policies and scripts to manage them 
* [AWS Vault](https://github.com/99designs/aws-vault) - A vault for securely storing and accessing AWS credentials in development environments 
* [CFN NAG](https://github.com/stelligent/cfn_nag) -  CloudFormation security test (Ruby)
* [CFripper](https://github.com/Skyscanner/cfripper/) - Lambda function to "rip apart" a CloudFormation template and check it for security compliance.
* [Git-secrets](https://github.com/awslabs/git-secrets)
* [Half-Life](https://github.com/Skyscanner/halflife) - AWS Lambda auditing tool that provides a meaningful overview in terms of statistical analysis, AWS service dependencies and configuration checks from the security perspective
* [IAM Least-Privileged Role Generator](https://github.com/puresec/serverless-puresec-cli) - A Serverless framework plugin that statically analyzes AWS Lambda function code and automagically generates least-privileged IAM roles.
* [pytest-services](https://github.com/mozilla-services/pytest-services) - Unit testing framework for test driven security of AWS configurations and more
* [Repository of sample Custom Rules for AWS Config](https://github.com/awslabs/aws-config-rules)
* [Terrascan](https://github.com/cesar-rodriguez/terrascan) - A collection of security and best practice tests for static code analysis of terraform templates using terraform_validate
* [tfsec](https://github.com/liamg/tfsec) - Provides static analysis of your terraform templates to spot potential security issues

### S3 Buckets auditing
* [AWS Bucket Dump](https://github.com/jordanpotti/AWSBucketDump)
* [AWS extender CLI](https://github.com/VirtueSecurity/aws-extender-cli)
* [AWS S3 Bruteforce](https://github.com/Ucnt/aws-s3-bruteforce)
* [BuQuikker](https://github.com/Quikko/BuQuikker) (multi threading for teh_s3_bucketeers)
* [Bucket cat](https://github.com/Atticuss/bucketcat)
* [Bucket_finder](https://github.com/FishermansEnemy/bucket_finder)
* [Bucket_finder.php](https://digi.ninja/projects/bucket_finder.php)
* [BucketScanner](https://github.com/securing/BucketScanner)
* [Bucket-stream](https://github.com/eth0izzle/bucket-stream)
* [Gray hat Warfare](https://buckets.grayhatwarfare.com/)
* [Honey-buckets](https://breachinsider.com/honey-buckets/)
* [inSp3ctor](https://github.com/brianwarehime/inSp3ctor)
* [Lazy S3](https://github.com/nahamsec/lazys3)
* [Mmass3](https://github.com/smiegles/mass3)
* [S3-buckets-finder](https://github.com/gwen001/s3-buckets-finder)
* [S3enum](https://github.com/koenrh/s3enum)
* [S3find](https://github.com/aaparmeggiani/s3find)
* [S3finder](https://github.com/magisterquis/s3finder)
* [S3-fuzzer](https://github.com/petermbenjamin/s3-fuzzer)
* [S3-inspector](https://github.com/kromtech/s3-inspector)
* [S3-meta](https://github.com/whitfin/s3-meta) 
* [S3 Public Bucket Check](https://github.com/vr00n/Amazon-Web-Shenanigans/tree/master/S3PublicBucketCheck)
* [S3scan](https://github.com/bear/s3scan)
* [S3Scan](https://github.com/abhn/S3Scan)
* [S3Scanner](https://github.com/sa7mon/S3Scanner)
* [Sand castle](https://github.com/Parasimpaticki/sandcastle)
* [Slurp](https://github.com/bbb31/slurp)
* [Slurp](https://github.com/random-robbie/slurp)
* [Teh_S3_bucketeers](https://github.com/tomdev/teh_s3_bucketeers/)

### Training
* [http://flaws.cloud/](http://flaws.cloud/) - flAWS challenge to learn through a series of levels about common mistakes and gotchas when using AWS
* [flaws2.cloud](flaws2.cloud) - flAWS 2 has two paths this time: Attacker and Defender! In the Attacker path, you'll exploit your way through misconfigurations in serverless (Lambda) and containers (ECS Fargate). In the Defender path, that target is now viewed as the victim and you'll work as an incident responder for that same app, understanding how an attack happened. 
* [https://github.com/RhinoSecurityLabs/cloudgoat](https://github.com/RhinoSecurityLabs/cloudgoat) - Vulnerable by Design AWS infrastructure setup tool
* [https://github.com/m6a-UdS/dvca](https://github.com/m6a-UdS/dvca) - Damn Vulnerable Cloud Application [more info](https://medium.com/poka-techblog/privilege-escalation-in-the-cloud-from-ssrf-to-global-account-administrator-fd943cf5a2f6)
* [https://github.com/sonofagl1tch/AWSDetonationLab](https://github.com/sonofagl1tch/AWSDetonationLab) - Scripts and templates to generate some basic detections of the AWS security services
* [OWASP ServerlessGoat](https://www.owasp.org/index.php/OWASP_Serverless_Goat) - OWASP ServerlessGoat is a deliberately insecure realistic AWS Lambda serverless application, maintained by OWASP for educational purposes. Single click installation through the AWS Serverless Application Repository.


### Azure
* [How to secure Azure Applications](https://docs.microsoft.com/en-us/azure/architecture/security/overview)
* [Azure Security Principles](https://docs.microsoft.com/en-us/azure/architecture/security/security-principles)

## Sources
* [Cloud Security Alliance](https://cloudsecurityalliance.org/)
* Toni de la Fuente's [Github](https://github.com/toniblyx/my-arsenal-of-aws-security-tools)
* [Joseph Floyd](http://www.josephfloyd.com/blog/cloud-security-landscape)

## Video's
* [Gone in 60 milliseconds](https://media.ccc.de/v/33c3-7865-gone_in_60_milliseconds) on hacking serverless AWS