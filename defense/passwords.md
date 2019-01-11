# Defending against password-cracking

Password cracking can very effectively be defended against using (a combination of) the following techniques

## Users can adopt:
* Unique passwords
* Long passwords
* Complex passwords
* Password-managers (as explained by [Mary Poppins](https://www.youtube.com/watch?v=IgCHcuCw_RQ))

See my article for users (Dutch) [here](../techniques/passwords/blog/part1.md)

## Developers can adopt:
* Proper hashing (bcrypt)
* Proper encryption (using hardened algorithms)
* Dynamic & static salting
* 2FA / Multi-FA
* Account lockout (temporary, after failed logins)

See my article for developers (Dutch) [part 1](../techniques/passwords/blog/part2.md) and [part 2](../techniques/passwords/blog/part1.md)

## Rigorous defense:
* Disallow all cracked passwords (eg. using Troy Hunt's [Pwnd Passwords API](https://haveibeenpwned.com/API/v2) )
* Disallow common password patterns as discussed in [this](https://youtu.be/zUM7i8fsf0g?t=982) talk on password cracking

## Cheat sheets:
* [Authentication](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)
* [Password Storage](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet)
* [Forgot Password](https://www.owasp.org/index.php/Forgot_Password_Cheat_Sheet)
* [Session Management](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet)



For more information on cracking, see [Password techniques](./techniques/passwords/README.md).
