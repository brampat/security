# Password cracking speeds

On a $5000,- PC these are the speeds at which a random password can be cracked with NO optimization, so pure brute-force.
See system-specs [here](https://www.netmux.com/blog/how-to-build-a-password-cracking-rig)

Optimization could include:
- checking for common / leaked passwords first
- checking for common patterns first (like London18 and London18!)
- using wordlists / dictionary attacks
- etc.

| Encryption | 3x numberslot  | Reverse numberslot | 10x lowercase       | 26x decimal       | 10x all alphanumeric | 10x ASCII    | 8x UTF8 | 42x decimal |
| ---------- | -------------: | -----------------: | ------------------: | -----------------:| -------------------: | ------------:| ------: | ----------: |
| MD5        | 0 sec          | 0 sec              | 30 minutes          | 22 years, 88 days | 126 days, 22 hours   | 10 millennia | 1102224754876261928961 millennia | 8881894767812177985313 millennia |
| SHA1       | 0 sec          | 0 sec              | 1 hour, 30 minutes  | 2617940 millennia | 1 year, 9 days       | 30 millennia | 3248810574693517735089 millennia | 26179409886527743525063 millennia |
| SHA256     | 0 sec          | 0 sec              | 4 hours, 10 minutes | 7236974 millennia | 2 years, 304 days    | 85 millennia | 8980935423807264510752 millennia | 72369744008995407146886 millennia |
| SHA512     | 0 sec          | 0 sec              | 12 hours, 7 minutes | 21010938 millennia | 8 years, 82 days    | 248 millennia | 26074140214510110977261 millennia | 210109388781108427655106 millennia |
| SCRYPT     | 0 sec          | 0 sec              | 2 years, 142 days   | 36301210890 millennia | 304 millennia    | 428569 millennia | 45049051267859543372912928 millennia | 363012108901348944383823075 millennia |
| BCRYPT     | 0 sec          | 1 sec              | 2 millennia         | 1560707843004 millennia | 13099 millennia | 18425586 millennia | 1936806126011807054061724589 millennia | 15607078430044907429548582749 millennia |


Here are the numbers of each of the password-patterns:

| Description           | Length | Possible Characters | Password space                             |
| --------------------- | -----: | ------------------: | -----------------------------------------: |
| 3x Number-slot        |       3|                   10|                                        1000|
| Reverse Number-slot * |      10|                    3|                                       59049|
| 10x Lowercase         |      10|                   26|                             141167095653376|
| 26x numerical **      |      26|                   10|                 100000000000000000000000000|
| 10x All alphanumeric  |      10|                   62|                          839299365868340224|
| 10x ASCII             |      10|                  128|                      1180591620717411303424|
| 8x UTF8               |       8|               137000|  124097929967680321000000000000000000000000|
| 42x numerical         |      42|                   10| 1000000000000000000000000000000000000000000|

(*) Reverse number-slot: 10 dials, but only 3 options

(**) The reverse of 10x lowercase

