# Defending against password-cracking

Password cracking can very effectively be defended against using (a combination of) the following techniques

Users can adopt:
* Unique passwords
* Long passwords
* Complex passwords
* Password-managers (as explained by [Mary Poppins](https://www.youtube.com/watch?v=IgCHcuCw_RQ))

Developers can adopt:
* Proper hashing (bcrypt)
* Proper encryption (using hardened algorithms)
* Dynamic & static salting
* 2FA / Multi-FA
* Account lockout (temporary, after failed logins)

Rigorous defense:
* Disallow all cracked passwords (eg. using Troy Hunt's [Pwnd Passwords API](https://haveibeenpwned.com/API/v2) )
* Disallow common password patterns as discussed in [this](https://youtu.be/zUM7i8fsf0g?t=982) talk on password cracking


For more information, see [Password techniques](./techniques/passwords/README.md).

