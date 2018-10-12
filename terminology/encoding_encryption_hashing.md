# CIA
This abbreviation is used to explain the goals of software security.

## Encoding

UTF-8
TODO:
   

## Encryption
TODO:

### Symetric key encryption


### Asymetric key encryption



#### Confidentiality
When Anna and Bob exchange messages, they each use a symetric key pair. Both Anna and Bob have generated a key-pair,
each with a public and a private key. 

| Owner | Public | Private |
|-------|--------|---------|
| Anna  | A1     | A2      |
| Bob   | B1     | B2      |

Both Anna, Bob and everybody else can see and use public keys A1 and B1. These can be used to encrypt a message 
using asymetric key encryption for Anna (using A1) or Bob (using B1). These messages can only be decrypted using 
the private counterpart of the key used. So Anna's message for Bob using key B1 to encrypt, can only be decrypted
using B2, which only Bob has access to.

#### Integrity
Again, Anna and Bob exchange messages. But since anyone can encrypt messages using the public keys, Anna cannot 
be sure that a specific message originates from Bob and vice-versa. Signing a message using a private key, can be used
to ensure a message has been sent by a specific person. By using the public key of the (alleged) sender, one can verify
the integrity of the message. So if Bob sends Anna a message, he signs the message with his private key B2. Once received, 
Anna verifies the message with Bob's public key B1. This can only be successful if the message was signed with B2.

#### Combined
When combining both encryption and signing in message exchanges, we get the following scenario's:

| Sender | Receiver | Encrypt | Sign | Verify | Decrypt |
|--------|----------|---------|------|--------|---------|
| Anna   | Bob      | B1      | A2   | A1     | B2      |
| Bob    | Anna     | A1      | B2   | B1     | A2      |

When Anna sends a message, she has access to her own public and private keys A1 and A2, as well as Bob's public key B1.
She encrypts the message using Bob's public key B1, so only Bob can decrypt it. She also signs it using her own private key A2,
which only Anna can do. This proves to Bob that it's really Anna that sent the message.

Upon receiving, Bob can verify the integrity using Anna's public key A1. Note: anyone can verify the message, since the key 
to be used for this is public. Then Bob can decrypt the message using his private key B2.

## Key exchange

### Diffy-Helman
TODO:


## Hashing
TODO:


SHA-1
SHA-2 etc

