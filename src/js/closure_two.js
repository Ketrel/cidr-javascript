/*Copyright 2014 Eric Lagergren

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

if("standalone"in window.navigator&&window.navigator.c){var h;document.addEventListener("click",function(k){for(h=k.target;"A"!==h.nodeName&&"HTML"!==h.nodeName;)h=h.parentNode;"href"in h&&-1!==h.href.indexOf("http")&&-1!==h.href.indexOf(document.location.host)&&(k.preventDefault(),document.location.href=h.href)},!1)}window.applicationCache.addEventListener("updateready",function(){window.applicationCache.swapCache()},!1); function v(){function k(a,c){var d=a.filter(function(a){return(new RegExp("\\b"+c+"\\b")).test(a)})[0];return d?d.split(":"):-1}function w(a){0!==a&&(a=32-Math.ceil(Math.log(a)/Math.log(2)));return a}function x(){var a=s[0].split("."),c=s[1].split(".");return a.slice(0,-1).join(".")+"."+(parseInt(a[3],10)+1)+" - "+c.slice(0,-1).join(".")+"."+(parseInt(c[3],10)-1)}var l="0.0.0.0:0 128.0.0.0:1 192.0.0.0:2 224.0.0.0:3 240.0.0.0:4 248.0.0.0:5 252.0.0.0:6 254.0.0.0:7 255.0.0.0:8 255.128.0.0:9 255.192.0.0:10 255.224.0.0:11 255.240.0.0:12 255.248.0.0:13 255.252.0.0:14 255.254.0.0:15 255.255.0.0:16 255.255.128.0:17 255.255.192.0:18 255.255.224.0:19 255.255.240.0:20 255.255.248.0:21 255.255.252.0:22 255.255.254.0:23 255.255.255.0:24 255.255.255.128:25 255.255.255.192:26 255.255.255.224:27 255.255.255.240:28 255.255.255.248:29 255.255.255.252:30 255.255.255.254:31 255.255.255.255:32".split(" "), b=document.form.submask.value,e=document.form.ip.value.split("."),t=document.form.numhost.value,f,m,g,s,u,n,p,q,r;f=k(l,b);""===b?(f=w(t),l=k(l,f)[0]):(l=f[0],f=f[1]);m=l.split(".");submaskSplitLength=m.length;for(b=0;b<submaskSplitLength;b++)if("255"!==m[b]){g=b;break}b=function(a){a=a||0;2<=a&&(a=Math.pow(2,32-a));return a}(f);t=~~Math.pow(2,f-(g?3>g?Math.pow(2,g+2):24:0))+" subnets";u=function(a){if(3===e.length-1){if(!a||0>a||"undefined"===typeof a)return"No Valid IP Entered";if(128>a)return"Class A";if(192> a)return"Class B";if(224>a)return"Class C";if(240>a)return"Class D";if(256>a)return"Class E"}else return"No Valid IP Entered"}(e[0]);n=function(a){var c;(c=a%8)?(c=Math.pow(2,8-c),a=Math.floor(e[g]/c)*c,c=a+(c-1)):32===a||31===a?c=a="N/A":(c=128,a=Math.floor(e[g]/c)*c,c="255");return[a,c]}(parseInt(f,10));p=function(a,c){var d,b;b=d="";for(var f=0;f<g;f++)d+=e[f]+".",b+=e[f]+".";d+=a;b+=c;0===g&&(d+=".0.0.0",b+=".255.255.255");1===g&&(d+=".0.0",b+=".255.255");2===g&&(d+=".0",b+=".255");return s=[d, b]}(n[0],n[1]);n=p[0];p=p[1];m=m.map(function(a){return 255-a}).join(".");q=document.getElementById("tablecidr");q.innerHTML=f;r=document.getElementById("tablenumhosts");r.innerHTML=2<=b?b+" hosts ("+(b-2)+" usable)":b+" hosts (0 usable)";tablebinary=document.getElementById("tablebinary");tablebinary.innerHTML=function(a){for(var b="";b.length<a;)b+="1";for(var d="";d.length<32-a;)d+="0";return b+d}(f);document.getElementById("tablesubmask").innerHTML=l;document.getElementById("tableipclass").innerHTML= u;document.getElementById("tablenumsubnets").innerHTML=t;document.getElementById("tablewildcardmask").innerHTML=m;"undefined"===typeof e[g]||255<e[0]||255<e[1]||255<e[2]||255<e[3]||3<e[0].length||3<e[1].length||3<e[2].length||3<e[3].length?(invalidIp="No Valid IP Entered",document.getElementById("tablenetworkrange").innerHTML=invalidIp,document.getElementById("tablenetworkid").innerHTML=invalidIp,document.getElementById("tablebroadcastaddress").innerHTML=invalidIp,document.getElementById("tableiptohex").innerHTML= invalidIp,document.getElementById("tableipclass").innerHTML=invalidIp):(document.getElementById("tablenetworkrange").innerHTML=x(),document.getElementById("tablenetworkid").innerHTML=n,document.getElementById("tablebroadcastaddress").innerHTML=p,ipint=e.map(function(a){return parseInt(a,10)}),iptohex=ipint.map(function(a){return("00"+a.toString(16)).substr(-2)}).join("."),document.getElementById("tableiptohex").innerHTML=iptohex.toUpperCase());q.innerHTML="/"+q.innerHTML;r.innerHTML=r.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",");tablebinary.innerHTML=tablebinary.innerHTML.replace(/\B(?=(\d{8})+(?!\d))/g,".")}window.onload=function(){document.getElementsByTagName("form")[0].onsubmit=function(k){k.preventDefault();v();window.scrollTo(0,document.body.scrollHeight)}};