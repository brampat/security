# CIA
This abbreviation is used to explain the goals of software security.

## Confidentiality
Sometimes information is confidential and should only be accessible to a single or limited group of people. To enforce this, encryption is used. With properly implemented encryption, data is encoded in a non-readable format. Only entities with the decryption keys can make the data readable again. So the data may still be accessible to anyone, but can only be made readable using the decryption keys. 

Also think about:
* Shoulder surfing
* Social engineering
   
## Integrity
At times, information and data must be transported from one entity to another. For example, software-updates must be downloaded from the manufacturer to the user. To prove that this software-update originates from the actual manufacturer and not from a malicious source like a hacker, an integrity check is used. A common way to check integrity is using hash-functions. By publishing a hash on a (secured) site, the user can verify this hash against the hash calculated from the software-update itself using algortihms like SHA-256. 

When sending messages, often confidentiality and integrity is combined when encrypting and signing a message.

Other examples where integrity matters:
* Configuration files
* Security log information

## Availability
Making sure someone can access data, information or services is available to its users 

Causes for unavailability
* Overloaded (too popular website)
* Denial of service
* Technical error, device failure
* Power-outage
* Natural disaster
