# Webservers


Defense: [here](../defense/webserver.md)

## Vulnerabilities
* Default settings: default user-ids and passwords can be used to attack servers, enabling attackers to run commands on the server to exploit.
* Misconfiguration: allowing commands to be executed by webservers can be exploited if user-credentials are not secure enough
* Bugs in OS or Webserver: can be exploited to gain access to systems

## Webserver types
Common webservers include
* [Apache HTTP server](https://httpd.apache.org/): most PHP sites are hosted on Apache servers
* [Apache Tomcat](https://tomcat.apache.org/): serves Java web-applications
* [GlassFish](https://javaee.github.io/glassfish/): serves Java web-applications
* IIS: Internet Information Services, developed by Microsoft. Runs on Windows and serves most ASP(X) websites
* [JBoss](https://developers.redhat.com/products/eap/download/): RedHat JBoss Enterprise Application Platform, serves Java web-applications
* [Jetty](https://www.eclipse.org/jetty/): serves Java web-applications
* [OWS](https://www.oracle.com/middleware/weblogic/index.html): Oracle Weblogic Server
* [WAS](https://www.ibm.com/cloud/websphere-application-platform): IBM WebSphere Application Server
* [WildFly](http://wildfly.org/downloads/): serves Java web-applications

## Attacks
* Directory traversal: Bugs in the webserver may enable an attacker to browse to files and folders outside the web-application content folder. This way, an attacker can read configuration files and other non-public files on the system
* DoS attacks: See [here](dos.md)
* DNS Hijacking: Change DNS settings so the Domain Name resolves to the attacker's webserver, thereby capturing traffic and information entered by users including possibly account credentials 
* Sniffing: Intercepting (unencrypted) data sent over the network
* Phishing: Impersonate legitimate website and divert targets to the fake website to trick them into entering sensitive data, such as account credentials.
* Pharming: Compromise the DNS servers to redirect traffic to a malicious website (like with phishing)
* Defacement: Replace the target's website with different content for mischief, damage to reputation or spread activist, political, religious or other propaganda 


## Impact
* Reputation damage to the target company
* Webservers misused to spread malicious software, like malware (eg. download-page of legitimate company could serve malicious software uploaded by the attacker to unsuspecting users)
* Compromize user data to misuse in fraudulent activities, eg. credit-card data, account credentials etc.

--------
Tools:
See [tools](../techniques/tools.md) page
---------------
Sources:
* [Guru99](https://www.guru99.com/how-to-hack-web-server.html)