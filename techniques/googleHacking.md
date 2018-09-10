# Google Hacking

Google operators to narrow results:
* allinurl: all search terms should be in url 
* inurl: search terms should be in url
* allintitle: all search terms should be in page-title
* intitle: search terms should be in page-title
* info: bring information about search term
* related: websites related to search term
* link: websites that link to search term
* site: estimated count and actual links to pages under the site.
  * site:amazon.com -> All pages listed under Amazon.com and its subdomains
  * site:www.amazon.com -> All pages listed under www.amazon.com exluding any subdomains other than www
  * site:amazon.com/subfolder -> All pages listed under amazon.com and its subdomains, located under /subfolder
  * site:amazon.com -inurl:www -> To find subdomains other than www. This may lead to dev, test or acc sub-domains or maybe some other domains unintentionally left open.


You can find sensitive files like server-configs, credentials and password-files, logs, databases, backups etc.

------------
Source [Virtual training company](https://www.youtube.com/watch?v=wWKbQIfEGrQ&index=2&list=PL_pOCSwlf9XkyacNSmF5ZtjeMeP4ap8KI)


Other resources:
* [Shodan](https://www.shodan.io/): IoT device search-engine, often used to find unsecured IoT devices like SCADA or other industrial systems, webcams etc.
* [Google Hacking Database](https://www.exploit-db.com/google-hacking-database/) (originally started as [Hackers for Charity](http://www.hackersforcharity.org/ghdb/) )
* [25 killer combo's with Google site: operator](https://moz.com/blog/25-killer-combos-for-googles-site-operator)