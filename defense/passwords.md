# Defending against password-cracking

Password cracking can very effectively be defended against using (a combination of) the following techniques

Users can adopt:
* Unique passwords
* Long passwords
* Complex passwords
* Password-managers (as explained by [Mary Poppins](https://www.youtube.com/watch?v=IgCHcuCw_RQ))

See my article for users (Dutch) [here](https://technology.first8.nl/wachtwoorden-3-mythes-4-fouten-en-5-tips-voor-gebruikers/)

Developers can adopt:
* Proper hashing (bcrypt)
* Proper encryption (using hardened algorithms)
* Dynamic & static salting
* 2FA / Multi-FA
* Account lockout (temporary, after failed logins)

Rigorous defense:
* Disallow all cracked passwords (eg. using Troy Hunt's [Pwnd Passwords API](https://haveibeenpwned.com/API/v2) )
* Disallow common password patterns as discussed in [this](https://youtu.be/zUM7i8fsf0g?t=982) talk on password cracking

See my article for developers (Dutch) [part 1](https://technology.first8.nl/wachtwoorden-3-mythes-4-fouten-en-5-tips-voor-ontwikkelaars-deel-1/)
and [part 2](https://technology.first8.nl/wachtwoorden-3-mythes-4-fouten-en-5-tips-voor-ontwikkelaars-deel-2/)

For more information, see [Password techniques](./techniques/passwords/README.md).

