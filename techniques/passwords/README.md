# Password handling

### Hashing

There are many hashing algorithms, some are more suited for passwords than others.
On top of that, some have been broken. Here's an overview

| Algorithm                                      | Safe?   |
| ---------------------------------------------- | ------- |
| [MD5](https://en.wikipedia.org/wiki/MD5)       | No, first collisions since 1996, controlled collision in 2 docs since 2005 |
| [SHA1](https://en.wikipedia.org/wiki/SHA-1)    | No, first [collisions](https://www.theverge.com/2017/2/23/14712118/google-sha1-collision-broken-web-encryption-shattered) since Feb. 2005, controlled [collision](https://en.wikipedia.org/wiki/SHA-1#SHAttered_%E2%80%93_first_public_collision) in 2 docs since 2017 |
| [SHA2](https://en.wikipedia.org/wiki/SHA-2) (256, 512 etc)   |           |
| [SHA3](https://en.wikipedia.org/wiki/SHA-3)    |           |
| 


Use bcrypt, because [this](https://codahale.com/how-to-safely-store-a-password/)


### Encryption

TODO

### Hardening
* Memory
* CPU

## Salting

### Dynamic Salting
Concatenate part of the account's data (eg. the first 5 characters of the last-name) to the password before hashing. 
This will defend against rainbow-table attacks. The same password for two different accounts will net a differrent hash, because the addition of 
the account's extra data (the salt) will make the input for the hash different.

### Static Salting (Peppering)
Concatenate an external secret to the password before hashing. This will defend against database leaks, where the attacker managed 
to find out, which logic was used to generate the dynamic hash. The attacker still needs the external secret to calculate the full input 
for the hash.

# Password cracking

## Password strength
Password strength depends on a number of factors. These include:
* Length: the longer a password, the harder to crack
* Complexity: the more complex a password, the harder to crack
* Unpredictability: the more unpredictable, the harder to crack

As an example, we will use a number-slot commonly used on suitcases and bicyle chains.
The password-space is calculated using formula A^B where A is the number of possible values per position and B is the number of positions.

### Length
Most number-slots have three or four positions. A three-position slot has a password-space of 1000 (10^3) possible combinations, 
while a four-position slot has 10,000 combinations (10^4). The four-position slot is harder to crack. 

With passwords, the longer a password is the harder to crack. Whenever possible, use long passwords with 20+ characters (10^20).

### Complexity
Number-slots have 10 possible values per position. This severely limits the password-space. Adding upper and lowercase characters
to a slot for each position would make for 62 possible values per position. In a three-position slot, that would mean the password-space
would be increased from 1000 to 238,328; a 238-fold increase (62^3). This increase is exponential, so adding more complexity and length 
would dramatically increase with each extra position or possible value. 

With passwords using UTF-8, there are about 137k named characters ([june 2018](http://www.babelstone.co.uk/Unicode/HowMany.html))
to be used as possible values. This includes non-Latin / Cyrilic characters like Greek, Russian, Hebrew, Chinese etc. but also Emoji characters.
A 4 position slot of UTF-8 symbols would net a password-space of more than 3.5 x 10^20. For comparison, the estimated number of stars in the universe is 10^22.

### Predictability
A key of "1234" on a number-slot is easily guessable. So is the key "0000". A birthdate might also be guessable, depending on the information 
an attacker has about its victim. Compare this to passwords that include partner-names, pet-names etc. Rainbow-table attacks make use of lists of leaked and derived passwords
and calculate hashes for different hashing methods. This effectively creates a look-up table for hashes with corresponding unhashed passwords.
This method would fail when proper salting is applied which is the site's or application's responsibility. As a user however, one can also beat rainbow-table attacks by 
using unique, random and long passwords. These can easily be created within password-managers. 

Studies on the most commonly used passwords indicate that the 25 most commonly used passwords where used in about 10% of all passwords
in that study. So trying only those 25 passwords could access 10% of all accounts. The most common password "123456" accounted for 4%.

## Impact
What has more impact on the strength of passwords? Length or complexity? If I had to choose between a long password of words 
(only characters, easier to remember) and a complex but short string of characters and symbols, what would be better? 
Let's analyse:

* To compare the impact of length versus complexity, we will look at a number-slot of <b>3 decimal positions</b>. This slot has only 3 dials, each with 10 possible values.
It illustrates a short, but complex password. It makes for a password-space of <b>1000</b> (10^3).

![Short decimal slot](keypad.png)
* Now we will compare this with a theoretical number-slot of <b>10 "trinary" positions</b>. So this slot has 8 dials, each of which can be either 0, 1 or 2. It illustrates a long password
of low complexity. This makes for a password-space of <b>59049</b> (3^10).
 
![Long binary slot](keylock_long.png)

In this simple example, we can state that length has more impact then complexity. An extended research can be found [here](crackingSpeeds.md).
This research analyses different password-patterns ranging from very simple to complex and / or long passwords. It also 
lists the total password space for each pattern and speeds at which they could be cracked in a number of encryption algorithms.

## Cracking techniques / attacks
* Dictionary attacks: Use a wordlist to compare against user passwords
* Brute force attacks: Variations of words replacing certain characters by symbols (l33tsp34k). Eg. variantions on "password" include p@$$w0rd etc.
* Rainbow table attacks: Using common passwords and storing MD5 hashes and various encrypted variants of these passwords, query this lookup-database for hashed / encrypted passwords in the target database
* Guess: Using common or default passwords
* Spidering: Using company information or social media, construct a targeted word-list to use in brute-force attack. Information includes founder's birth year, name, hobbies, company vision, initials etc. 

------------
Source [Guru99](https://www.guru99.com/how-to-crack-password-of-an-application.html)

* More on [Password cracking](https://www.youtube.com/watch?v=zUM7i8fsf0g)
* [Hashkiller](https://hashkiller.co.uk/db-info.aspx) lists cracked / calculated hashes
* Plain-text password mailers [shame-site](http://plaintextoffenders.com/) and a complete [list](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv) of offenders
* Password cracking  rules for Hashcat [here](https://github.com/praetorian-inc/Hob0Rules)
* Statistics will crack your password mask [here](https://p16.praetorian.com/blog/statistics-will-crack-your-password-mask-structure)
* Statistics based password cracking rules [here](https://p16.praetorian.com/blog/hob064-statistics-based-password-cracking-rules-hashcat-d3adhob0)
* Password cracking rig [here](https://www.netmux.com/blog/how-to-build-a-password-cracking-rig)
* Online rainbow-tables at [hashes.org](https://hashes.org/)
* Password [dictionaries](https://wiki.skullsecurity.org/Passwords)
* More leaked [Passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords)