# Password cracking speeds

Optimization could include:
- checking for common / leaked passwords first
- checking for common patterns first (like London18 and London18!)
- using wordlists / dictionary attacks
- etc.


Here are the numbers of each of the password-patterns:

| Description                  | Length | Possible Characters | Password space                                   |
| ---------------------------- | -----: | ------------------: | -----------------------------------------------: |
| 3x numberslot                |       3|                   10|                                              1000|
| Reverse numberslot (\*)      |      10|                    3|                                             59049|
| 10x Lowercase                |      10|                   26|                                   141167095653376|
| Pattern like 'London18'      |       8|                     |                                       30891577600|
| 4x English words             |       4|                35000|                               1500625000000000000|
| 4x English Dictionary        |       4|               171476|                             864596308417753067776|
| 10x alphanumeric             |      10|                   62|                                839299365868340224|
| 26x numerical (\**)          |      26|                   10|                       100000000000000000000000000|
| 10x ASCII                    |      10|                  128|                            1180591620717411303424|
| 8x UTF8 (smilies ;-)         |       8|               137000|        124097929967680321000000000000000000000000|
| 42x numerical                |      42|                   10|       1000000000000000000000000000000000000000000|
| 30x alphanumeric or symbol   |      30|                   95|    3592677187515959257578986279730209409225510849|
| 30x UTF8                     |      30|               137000|126362152343468988838606857850031463631524840205 >|
|                              |        |                     |557423138853920490000000000000000000000000000000 >|
|                              |        |                     |000000000000000000000000000000000000000000000000 >|
|                              |        |                     |00000000000                                       |

(\*) Reverse number-slot: 10 dials, but only 3 options

(\**) The reverse of 10x lowercase


## 4x GTX 1070
On a $5000,- PC these are the speeds at which a random password can be cracked with NO optimization, so pure brute-force.
See system-specs [here](https://www.netmux.com/blog/how-to-build-a-password-cracking-rig)

| Encryption    | 3x numberslot  | Rev numberslot   | 10x Lowercase | Pattern like 'London18'   | 4x English words  | 4x English Dictionary | 10x alphanumeric  | 26x numerical         | 10x ASCII        | 8x UTF8 (smilies ;-)                | 42x numerical                        | 30x alphanumeric or symbol               | 30x UTF8                                                                                                                                             |
| ------------- | -------------: | ---------------: | ------------: | -------------------------:| ----------------: | ---------------------:| ----------------: | --------------------: | ---------------: | ----------------------------------: | -----------------------------------: | ---------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------: |
| MD5           |           0 sec|             0 sec|     30 minutes|                      0 sec|           226 days|              358 years|           126 days|        41436 millennia|         489 years|       51421389666782902409 millennia|       414361381210588518603 millennia|       1488666681662885404249472 millennia|       5235959597778261501539031063423676185261821165413036824455971255837835566976203833828094413552079731849234334321635613864542157766366 millennia|
| SHA1          |           0 sec|             0 sec|        1 hours|                      1 sec|            1 years|            1 millennia|            1 years|       122133 millennia|       1 millennia|      151564691117497717717 millennia|      1221331340151852287818 millennia|       4387849244161854041761215 millennia|      15433005686612150231369944355591058342426150071194606531583414538921341225900838998547149182748674106575557459151894268396175804045363 millennia|
| SHA256        |           0 sec|             0 sec|        4 hours|                      3 sec|            5 years|            2 millennia|            2 years|       337621 millennia|       3 millennia|      418981861872310611515 millennia|      3376219587074731583385 millennia|      12129667090527939975347257 millennia|      42662637380694119536858346513294931385090966039910874858813222463386937814805129116063414824848399232466985123582412501852666736211388 millennia|
| SHA512        |           0 sec|             0 sec|       12 hours|                      9 sec|           14 years|            8 millennia|            8 years|       980209 millennia|      11 millennia|     1216420261171848066281 millennia|      9802099531302808811224 millennia|      35215779375872477601996592 millennia|     123861439426033149954289729918861615165969972841869220328117362194243109320071484751461885124098500906106080673631646509629190495570627 millennia|
| SCRYPT        |           0 sec|             0 sec|        2 years|                    4 hours|       25 millennia|        14642 millennia|       14 millennia|   1693537277 millennia|   19993 millennia|  2101644704598872299946099 millennia|  16935372774922338444943672 millennia|   60843327430542333391614492843 millennia|  213999015457817368138286304362057960404781490142836427986252759398833827521059203787107027545641236077362300245245875058027361275993900447 millennia|
| BCRYPT        |           0 sec|             1 sec|      102 years|                     8 days|     1092 millennia|       629518 millennia|      611 millennia|  72810709246 millennia|  859597 millennia| 90356582969183910689055971 millennia| 728107092460898406565004976 millennia| 2615853741152842989654863869930 millennia| 9200517933990430532068776291876588943122152468219947366569301891997346987449915114945218212588887750711881954012499746473110405115174834065 millennia|


## 8x GTX 1080
See system-specs [here](https://gist.github.com/epixoip/ace60d09981be09544fdd35005051505)

| Encryption    | 3x numberslot  | Rev numberslot   | 10x Lowercase | Pattern like 'London18'   | 4x English words  | 4x English Dictionary | 10x alphanumeric  | 26x numerical         | 10x ASCII        | 8x UTF8 (smilies ;-)                | 42x numerical                        | 30x alphanumeric or symbol                           | 30x UTF8                                                                                                                                             |
| ------------- | -------------: | ---------------: | ------------: | -------------------------:| ----------------: | ---------------------:| ----------------: | --------------------: | ---------------: | ----------------------------------: | -----------------------------------: | ---------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------: |
| MD5           |           0 sec|             0 sec|      4 minutes|                      0 sec|            31 days|               49 years|            17 days|         5768 millennia|          68 years|        7158667536639855365 millennia|        57685632133462955256 millennia|      12381572778393489233896687903384065972 millennia|728928063567795597784477490062793023579976099951695338842022315259917152356614977571364741452535292761966838237581183297526707755450 millennia
| SHA1          |           0 sec|             0 sec|     23 minutes|                      0 sec|           171 days|              270 years|            95 days|        31302 millennia|         369 years|       38846194915014101623 millennia|       313028548704487527189 millennia|      67188060772782833483445304447090040129 millennia|3955496115925145509399084662265718904856000613459495831801181309954357933370496082635530092561289737722143839873626618545413931423208 millennia
| SHA256        |           0 sec|             0 sec|     59 minutes|                      0 sec|            1 years|              698 years|           247 days|        80749 millennia|         953 years|      100208293095665543512 millennia|       807493671504137738399 millennia|     173319443543392591480211292774787011389 millennia|10203663833499295637369740212163092001963688320764944912870063375003856912772572363493692248327161872380356485691107489766852339306711 millennia
| SHA512        |           0 sec|             0 sec|        3 hours|                      2 sec|            3 years|            2 millennia|            2 years|       243111 millennia|       2 millennia|      301696621628800111506 millennia|      2431117277358075525696 millennia|     521812007412457049356605256376087421517 millennia|30720121176636069100774135095222629630684938791827752774333157000021195452870918645663229272995227467838136896276124635533218683398448 millennia
| SCRYPT        |           0 sec|             0 sec|       257 days|                    1 hours|        7 millennia|         4315 millennia|        4 millennia|    499091712 millennia|    5892 millennia|   619362484440218540083273 millennia|   4990917129733939797641068 millennia| 1071244283667726612398364577081958143555144 millennia|63066303068106908019536834231135173536147456070425266036272867978024153403703667769100369619337160688007109621342311554049017274442587423 millennia
| BCRYPT        |           0 sec|             0 sec|       24 years|                     1 days|      257 millennia|       148355 millennia|      144 millennia|  17158978346 millennia|  202577 millennia| 21293936931227968043393271 millennia| 171589783461929580651041838 millennia|36829819027504875713598535392263101001502215 millennia|2168245435839920130422766646577474702715978691252418440267638889060478672350818469539930727145339017485136206597393812005684151802873264060 millennia


# Required password length

Another (more practical) way to look at these numbers is to switch the formula to calculate the required length of a specific password-pattern
with a given required minimal cracking-time. This should result in a minimum length using random characters (or words) 
of a specific set. This gives a much more conceivable set of numbers.

The table below lists minimum lengths for different hashing algorithms and "character-sets". 

|        |DECIMAL     |LOWERCASE   |UPPERCASE   |ALPHANUMERIC|ASCII       |SYMBOL      |ALPHA_SYMBOL|UTF8        |ENGLISH_WORDS |DICTIONARY_WORDS   |USA_CITIES  |CITIES      |
| ------ | ---------: | ---------: | ---------: | ---------: | ---------: | ---------: | ---------: | ---------: | ---------:   | ---------:        | ---------: | ---------: |     
| MD5    |         23 |         16 |         16 |         13 |         11 |         15 |         12 |           4|           5  |                 4 |           5|           4|
| SHA1   |         22 |         16 |         16 |         12 |         10 |         15 |         11 |           4|           5  |                 4 |           5|           4|
| SHA256 |         22 |         15 |         15 |         12 |         10 |         14 |         11 |           4|           5  |                 4 |           5|           3|
| SHA512 |         21 |         15 |         15 |         12 |         10 |         14 |         11 |           4|           5  |                 4 |           5|           3|
| SCRYPT |         18 |         13 |         13 |         10 |          8 |         12 |          9 |           3|           4  |                 3 |           4|           3|
| BCRYPT |         16 |         12 |         12 |          9 |          8 |         11 |          8 |           3|           4  |                 3 |           4|           3|




The tables above are generated using the password complexity calculator in [this](https://github.com/brampat/security-examples) 
toolset of Groovy scripts.

More info on speeds and cracking:
* [Hashcat]()
* [25 GPU cluster](https://arstechnica.com/information-technology/2012/12/25-gpu-cluster-cracks-every-standard-windows-password-in-6-hours/)
  * [Presentation](http://passwords12.at.ifi.uio.no/Jeremi_Gosney_Password_Cracking_HPC_Passwords12.pdf) of this cluster
* [Brutalis](https://gist.github.com/epixoip/ace60d09981be09544fdd35005051505) $22k Password cracking rig (product [here](https://sagitta.pw/hardware/gpu-compute-nodes/brutalis/))
* [Conversation](https://twitter.com/brampatelski/status/1073339746263408640) on password-cracking speeds
* [Conversation](https://twitter.com/jmgosney/status/714599256410054657) on safe password-lengths
* [Conversation](https://twitter.com/brampatelski/status/1075692359076188160) on cracking speeds within 100 years vs. password-lengths in various setups
