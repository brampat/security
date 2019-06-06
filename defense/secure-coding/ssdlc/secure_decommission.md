# Decommission

## Initiation

* Owner of a Service or System decides to decommission the specific service or system
* Owner submits decommission request to director including reasoning
* Director approves decommissioning
* Owner verifies approval

### MILESTONE: Decommission Approved

## Decommission plan

* Owner assigns Decommission Project Manager: DPM (could be the owner itself)
* DPM identifies and documents responsibilities for each portion of the decommissioning process
* DPM identifies and correlates types of services and types of users that use the service
* DPM identifies if and what alternatives are available and develops migration path
* DPM develops communication plan for each type of user and sub-service
* DPM sets target dates for the following 7 milestones and communicates them to the service owner:
  1. Plan Complete
  2. Decommission of Service Approved
  3. Service Offline – When setting this date consider the impact to your users.  Users will not be able to access the service after this milestone.
  4. Point of No Return
  5. Service End – When setting this date consider SLAs, licenses, and warranties.  The service is committed to these agreements until this milestone. 
  6. Decommission Complete
  7. Data Removed

### MILESTONE: Plan Complete
The plan to decommission the service is finished.

## Approval

Decommission Approval
* Owner submits decommission plan to all directors for review and approval
* Owner verifies that directors' team approves decommissioning the service

### MILESTONE: Decommission of Service Approved
Service decommission execution may proceed.

## Offline

Taking the Service Offline

Offline and End dates are most important and these dates must be communicated effectively to consumers as well as throughout your company.

* Notify Offline and Service End dates internally
* If the service is public facing, make public announcement of the Service Offline date
* Establish communication plans to direct users to alternatives
* Remove access to the service
* Modify monitoring to place the service into maintenance mode
* Notify Security Team that service is being decommissioned and when to stop scanning
* Turn off the service:
  * Disable the service on all application servers

### MILESTONE: Service Offline
The service is no longer available to users.

## Prepare Decommission

End of Service Preparation. During this phase the service remains ready to redeploy if needed. Resources are still allocated until the End Date, including personnel and hardware

* Archive the decommissioning service as it was on the Offline Date:
  * Include data archives that existed under normal operations 
  * Comply with all data archival regulations
  * Continue to honor existing archival plan after decommission
  * Store the archive in a usable format
  * Remove the service from all application servers / remove the service-containers 
  * Get rid of data unless it will be needed
  * Verify the Data Removal date will be honored
* Document the service:
  * How to access the archive of the decommissioned service
  * What this service relies on with regards to vendors and hardware
  * Who worked on the service
* Stop billing users
* Remove the service from service catalogs
* Verify migration of any functions identified as still needed
* Leave Source code available in code repository for reference and reuse
* Notify decommissioning, this may include:
  * Revoke Certificates (e.g. Code Signing, SSL Cert)
  * Firewall Rules
  * Service Accounts (e.g. LDAP Service Account, AD Service Account)
  * Backup Services
  * Automated Monitoring (e.g. SIEM, IDS, aggregated log-systems)
  * Security Scans and Web Application Firewall
  * Asset Management
  * Personally Identifiable Information Listing
  * Job Descriptions
  * Removal from other systems’ whitelists

### MILESTONE: Point of No Return
Preparations to decommission the service are complete.

## End Service

Service Ending
* Deallocate resources:
  * Personnel
  * (Virtual) Hardware
* Stop paying vendor bills
* Finalize all accounts:
  * Final bill to customers
  * Refund for unused service

### MILESTONE: Service End
The service has ended although some cleanup tasks remain


## Wrapup

Decommission Completion

* Removal / reallocation of hardware often includes but is not limited to the following:
  * Unregister MAC
  * Remove DNS records
  * Return leased hardware
  * Send hard drives to the Systems team for disposal
  * Notify network team that network ports are available
* DPM signs off as DECOMMISSION COMPLETE

### MILESTONE: Decommission Complete
The decommission process is complete.

## Post-Decommission

Data Removal
* Delete archive

### MILESTONE: Archived Data Removed
The final archive of the service is deleted


Sources:
* [Decommission guide](https://its.unl.edu/bestpractices/decommissioning-process-guide)
* [6 steps to managing application risks](https://www.everteam.com/en/6-steps-to-managing-application-risk/)