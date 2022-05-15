console.log("Working...");

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
 
  let domain = (url.indexOf("//") != -1) ? url.slice(url.indexOf("//")+2) :  url;
  domain = (url.indexOf("www") != -1) ? domain.slice(domain.indexOf("www")+4) : domain;
  domain = domain.slice(0,domain.indexOf("."));
  return domain;
 }
 


console.log(domainName("https://zombie-bites.com"));