# Types of tests

Source: [OWASP](https://www.owasp.org/index.php/Testing:_Introduction_and_objectives)

## Configuration and deployment management testing

## Identity management testing

## Authentication testing
Failure to implement this correctly can lead to account hijacking. Even correctly implementing a simple username / password system
can often be "hacked" by brute-forcing with weak or commonly used passwords.

## Authorization testing
Failure to implement this correctly can lead to users having access to unauthorized functionality. Example: incorrect configuration of 
the authorization can give a regular user access to administrative functionality, which it should not have. 

## Session management testing
Failure to implement this correctly can lead to session hijacking

## Input validation testing
Failure to do so, can result in things like SQL-injection

## Error handling
Failure to do so, can result in data leakage

## Cryptography
Failure to implement this correctly can result in weak encryption which can be broken by hackers to sniff or read data which 
should not have been accessible.

## Business logic testing
Examples are: a webshop where customers can order negative amount of articles. Also see input validation.

## Client side testing
