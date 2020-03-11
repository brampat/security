## Security Principles
<hr />

### CIA - Pillars of Security

![](pics/cia/cia.png)<!-- .element style="box-shadow:none; position: fixed; top: 160px; right: 200px; width: 575px;"  -->

-- Notes --


--

## Security Principles
<hr />

### CIA - Example format
* Internet banking
* ```SQL```

![](pics/cia/example.jpeg)<!-- .element style="position: fixed; top: 160px; right: 140px; width: 275px; " -->
![](pics/cia/example.png)<!-- .element style="position: fixed; bottom: 100px; right: 20px; width: 225px;" -->
![](pics/cia/example.svg)<!-- .element style="position: fixed; top: 350px; right: 280px; width: 250px;" -->

--

## Security Principles
<hr />

### CIA - Confidentiality
*Attackers read my bank-transactions*<!-- .element: class="fragment" data-fragment-index="0" -->

```mysqldump -all-databases > dump.sql```<!-- .element: class="fragment" data-fragment-index="0" -->

![](pics/cia/confidential.jpeg)<!-- .element style="position: fixed; top: 160px; right: 40px; width: 275px; " class="fragment" data-fragment-index="0" -->

![](pics/cia/gevers_chinese_mongodb.png)<!-- .element style="position: fixed; bottom: 30px; right: 20px; width: 250px;" class="fragment" data-fragment-index="1" -->
![](./pics/webcam_1.png)<!-- .element style="position: fixed; top: 320px; left: 40px; width: 275px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/OnlyFans.jpg)<!-- .element style="position: fixed; top: 320px; right: 320px; width: 300px;" class="fragment" data-fragment-index="1"  -->
![](pics/cia/beautiful_info_data_breaches.png)<!-- .element style="position: fixed; top: 480px; left: 90px; width: 225px;" class="fragment" data-fragment-index="1"  -->
![](pics/cia/baby_phone_2.png)<!-- .element style="position: fixed; bottom: 10px; right: 280px; width: 325px;" class="fragment" data-fragment-index="1" -->

-- Notes --

Sources:
* OnlyFans [dataleak](https://thenextweb.com/media/2020/02/28/massive-cache-stolen-onlyfans-videos-have-been-dumped-online/) 2020-02-28
* Webcam Sauna [hack](https://publicnieuws.com/2018/03/beelden-naakte-oranje-handbalsters-op-pornosite/) 2018-03-07
* China [unsecured MongoDB databases](https://twitter.com/0xdude/status/1102985184134287360?lang=en) 2019-03-05
* Baby Monitor [hacking](https://www.google.com/search?q=baby+monitor+hacking&tbm=vid) 2013 through 2018
  * [2013](https://www.youtube.com/watch?v=MXIWfuakeW4) news
  * [2018](https://www.youtube.com/watch?v=IZJOHUfRo_o) Pedophiles hacking baby monitors
  * [2015](https://www.youtube.com/watch?v=QZQqvYdQ9u4) True horror stories: I used to hack baby monitors

--

## Security Principles
<hr />

### CIA - Integrity
*Attackers empty my bank-account*<!-- .element: class="fragment" data-fragment-index="0" -->

```update accounts set balance = 0;```<!-- .element: class="fragment" data-fragment-index="0" -->

![](./pics/cia/2fa.jpg)<!-- .element style="position: fixed; top: 160px; right: 120px; width: 275px;" class="fragment" data-fragment-index="0" -->

![](pics/cia/sluizen.png)<!-- .element style="position: fixed; bottom: 100px; right: 0px; width: 375px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/stuxnet.png)<!-- .element style="position: fixed; bottom: 170px; left: 150px; width: 375px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/jeep_cherokee.png)<!-- .element style="position: fixed; top: 390px; left: -20px; width: 275px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/citrix.png)<!-- .element style="position: fixed; bottom: 30px; left: 320px; width: 225px;" class="fragment" data-fragment-index="1" -->

-- Notes --

Sources:
* Gas-pipe [hack](https://arstechnica.com/information-technology/2020/02/a-us-gas-pipeline-operator-was-infected-by-malware-your-questions-answered/) 2020-02-20
* Nederlandse sluizen kwetsbaar voor [hack](https://www.agconnect.nl/artikel/nederlandse-sluizen-kwetsbaar-voor-hack) 2017-12-08
* [Stuxnet](https://en.wikipedia.org/wiki/Stuxnet) 2007-11-XX and 2010-04-XX
* [Jeep Hacking](https://www.wired.com/video/watch/hackers-wireless-jeep-attack-stranded-me-on-a-highway) 2015-07-21
* [Citrix VPN](https://www.cyberscoop.com/citrix-vulnerability-backdoor-fireeye/) hack - 2020-01-17

--

## Security Principles
<hr />

### CIA - Availability
*Internet-banking is down*<!-- .element: class="fragment" data-fragment-index="0" -->

```SQL drop database the_bank```<!-- .element: class="fragment" data-fragment-index="0" -->

![](pics/cia/norsk_hydro.png)<!-- .element style="position: fixed; bottom: 50px; right: 20px; width: 275px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/notpetya.png)<!-- .element style="position: fixed; top: 140px; right: 110px; width: 275px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/DDoS.png)<!-- .element style="position: fixed; bottom: 170px; left: 10px; width: 375px;" class="fragment" data-fragment-index="1" -->
![](pics/cia/maastricht_ransomware.png)<!-- .element style="position: fixed; bottom: 20px; left: 310px; width: 375px;" class="fragment" data-fragment-index="1" -->

-- Notes --

Sources:
* [NotPetya](https://www.cyberscoop.com/telebots-eset-notpetya-ukraine-link/) Ukraine hack - 2018-10-XX
* [Norsk Hydro](https://techcrunch.com/2019/03/19/norsk-hydro-ransomware) Ransomware attack - 2019-03-19
* [Maastricht University](https://www.bleepingcomputer.com/news/security/ransomware-hits-maastricht-university-all-systems-taken-down/) ransomware - 2019-12-23
* [Catching a DDoS-er](https://tweakers.net/reviews/6031/een-ddoser-betrapt-hoe-de-aanvaller-tegen-de-lamp-liep.html) (Dutch) - 2018-02-18

--

## Security Principles
<hr />

### Extended CIA

![](./pics/new-cia-triad.png)<!-- .element style="box-shadow:none; position: fixed; top: 160px; right: 200px; width: 575px; z-index: -100;"  -->


-- Notes --

There is debate on extending CIA, with multiple options, including this diagram.


--

## Security Principles
<hr />

* **S** poofing
* **T**ampering
* **R** epudiation
* **I** nformation disclosure
* **D** enial of Service
* **E** levation of privilege

-- Notes --

* **S** poofing (I): IP / [Caller-ID](https://youtu.be/FO0iG_P0P6M?t=345) / Mail-address / [GPS](https://www.scmagazine.com/home/pokemon-go-cheaters-may-inadvertently-learn-gps-spoofing/)
* **T**ampering (I): Data / Log-file / Cookie / [URL Query string](https://nos.nl/artikel/273011-alle-begrotingsstukken-openbaar.html)
* **R** epudiation (I)
* **I** nformation disclosure (C): Data-breaches: [Information is awesome](https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/) / [HIBP](https://haveibeenpwned.com)
* **D** enial of Service (A): Ransomware, [DDoS-er caught](https://tweakers.net/reviews/6031/een-ddoser-betrapt-hoe-de-aanvaller-tegen-de-lamp-liep.html) (Dutch)
* **E** levation of privilege (C / I): iPhone Jailbreaking / Account takeover / iCloud-hacking

--

## Security Principles
<hr />

* **D** amage
* **R** eproducibility
* **E** xploitability
* **A** ffected users
* **D** iscoverability

-- Notes --

* **D** amage – how much damage could an attack cause?
* **R** eproducibility – how easy is it to (re)produce the attack?
* **E** xploitability – how much work is it to launch the attack?
* **A** ffected users – how many people will be impacted?
* **D** iscoverability – how easy is it to discover the threat?

--

## Security Principles
<hr />

### Pyramid of Pain

![](./pics/Pyramid_of_Pain_v2.png)<!-- .element style="box-shadow:none; position: fixed; top: 260px; right: 200px; width: 575px; z-index: -100;"  -->


<span>Detection</span><!-- .element style="font-size: 16px; box-shadow:none; position: fixed; top: 230px; left: 340px; z-index: -100;"  -->
<span>Workaround</span><!-- .element style="font-size: 16px; box-shadow:none; position: fixed; top: 230px; right: 240px; z-index: -100;"  -->
<span>Sophistication</span><!-- .element style="font-size: 16px; box-shadow:none; position: fixed; top: 230px; left: 50px; z-index: -100;"  -->
![](./pics/hacker-3.png)<!-- .element style="box-shadow:none; position: fixed; bottom: 300px; left: 130px; width: 100px; background-color: #ffffff;" class="fragment" data-fragment-index="3" -->
![](pics/cia/spider_2.png)<!-- .element style="box-shadow:none; position: fixed; bottom: 180px; left: 70px; width: 100px; background-color: #ffffff;" class="fragment" data-fragment-index="2" -->
![](./pics/script.png)<!-- .element style="box-shadow:none; position: fixed; bottom: 70px; left: 0px; width: 100px; background-color: #ffffff;" class="fragment" data-fragment-index="1" -->


-- Notes --

Sources:
* [Initial article](https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html) by David J Bianco
* [Attackiq.com](https://attackiq.com/blog/2019/06/26/emulating-attacker-activities-and-the-pyramid-of-pain/)

* Pyramid of Pain contains indicators to detect attacks / attackers on different levels.
* Mitigations can be put in place to block the attacks
* Workarounds for these mitigations become harder higher up in the pyramid, indicated by the pain-level. Eg:
  * Hash values of malicious files are trivial to change, so not effective / no pain
  * Changing tools or techniques / procedures are very hard, so detecting and blocking those is very effective

In the pyramid:
* Low level attackers are script kiddies: these poke for fun at what is poke-able
* Mid-level are criminal hackers, financial gain: if there is a more attractive target (in difficulty or potential gains), they will switch targets
* High-level are APT's, with emphasis on P for Persistent. These choose very specific target with clear goals. They don't give up.
