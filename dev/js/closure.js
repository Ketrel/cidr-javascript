/* COPYRIGHT 2014 ERIC LAGERGREN  LICENSED UNDER THE MIT LICENSE */
/* LICENSE CAN BE FOUND http://opensource.org/licenses/MIT OR subnetting.ericlagergren.com/license.txt */
function v(){function n(a,c){var d=a.filter(function(a){return(new RegExp("\\b"+c+"\\b")).test(a)})[0];return d?d.split(":"):-1}function w(a){0!==a&&(a=32-Math.ceil(Math.log(a)/Math.log(2)));return a}function u(){var a=s[0].split("."),c=s[1].split(".");return a.slice(0,-1).join(".")+"."+(parseInt(a[3],10)+1)+" - "+c.slice(0,-1).join(".")+"."+(parseInt(c[3],10)-1)}var h="0.0.0.0:0 128.0.0.0:1 192.0.0.0:2 224.0.0.0:3 240.0.0.0:4 248.0.0.0:5 252.0.0.0:6 254.0.0.0:7 255.0.0.0:8 255.128.0.0:9 255.192.0.0:10 255.224.0.0:11 255.240.0.0:12 255.248.0.0:13 255.252.0.0:14 255.254.0.0:15 255.255.0.0:16 255.255.128.0:17 255.255.192.0:18 255.255.224.0:19 255.255.240.0:20 255.255.248.0:21 255.255.252.0:22 255.255.254.0:23 255.255.255.0:24 255.255.255.128:25 255.255.255.192:26 255.255.255.224:27 255.255.255.240:28 255.255.255.248:29 255.255.255.252:30 255.255.255.254:31 255.255.255.255:32".split(" "), b=document.form.submask.value,g=document.form.ip.value.split("."),p=document.form.numhost.value,e,k,f,s,t,l,m,q,r;e=n(h,b);""===b?(e=w(p),h=n(h,e)[0]):(h=e[0],e=e[1]);k=h.split(".");submaskSplitLength=k.length;for(b=0;b<submaskSplitLength;b++)if("255"!==k[b]){f=b;break}b=function(a){a=a||0;2<=a&&(a=Math.pow(2,32-a));return a}(e);p=~~Math.pow(2,e-(f?3>f?Math.pow(2,f+2):24:0))+" subnets";t=function(a){if(3===g.length-1){if(!a||0>a)return"No Valid IP Entered";if(128>a)return"Class A";if(192>a)return"Class B"; if(224>a)return"Class C";if(240>a)return"Class D";if(256>a)return"Class E"}else return"No Valid IP Entered"}(g[0]);l=function(a){var c;(c=a%8)?(c=Math.pow(2,8-c),a=Math.floor(g[f]/c)*c,c=a+(c-1)):32===a||31===a?c=a="N/A":(c=128,a=Math.floor(g[f]/c)*c,c="255");return[a,c]}(parseInt(e,10));m=function(a,c){var d,b;b=d="";for(var e=0;e<f;e++)d+=g[e]+".",b+=g[e]+".";d+=a;b+=c;0===f&&(d+=".0.0.0",b+=".255.255.255");1===f&&(d+=".0.0",b+=".255.255");2===f&&(d+=".0",b+=".255");return s=[d,b]}(l[0],l[1]);l= m[0];m=m[1];k=k.map(function(a){return 255-a}).join(".");q=document.getElementById("tablecidr");q.innerHTML=e;r=document.getElementById("tablenumhosts");r.innerHTML=2<=b?b+" hosts ("+(b-2)+" usable)":b+" hosts (0 usable)";tablebinary=document.getElementById("tablebinary");tablebinary.innerHTML=function(a){for(var b="";b.length<a;)b+="1";for(var d="";d.length<32-a;)d+="0";return b+d}(e);document.getElementById("tablesubmask").innerHTML=h;document.getElementById("tableipclass").innerHTML=t;document.getElementById("tablenumsubnets").innerHTML= p;document.getElementById("tablewildcardmask").innerHTML=k;"undefined"===typeof g[f]?(invalidIp="No Valid IP Entered",document.getElementById("tablenetworkrange").innerHTML=invalidIp,document.getElementById("tablenetworkid").innerHTML=invalidIp,document.getElementById("tablebroadcastaddress").innerHTML=invalidIp,document.getElementById("tableiptohex").innerHTML=invalidIp):(document.getElementById("tablenetworkrange").innerHTML=u(),document.getElementById("tablenetworkid").innerHTML=l,document.getElementById("tablebroadcastaddress").innerHTML= m,ipint=g.map(function(a){return parseInt(a,10)}),iptohex=ipint.map(function(a){return("00"+a.toString(16)).substr(-2)}).join("."),document.getElementById("tableiptohex").innerHTML=iptohex.toUpperCase());document.getElementById("hidden").innerHTML="cidr number: "+e+" submask: "+h+" class: "+t+" hosts: "+b+" usable hosts: "+(b-2)+" network id "+l+" broadcast address: "+m+" subnets: "+p+" wildcard: "+k+" network range: "+u();q.innerHTML="/"+q.innerHTML;r.innerHTML=r.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",");tablebinary.innerHTML=tablebinary.innerHTML.replace(/\B(?=(\d{8})+(?!\d))/g,".")}window.onload=function(){document.getElementsByTagName("form")[0].onsubmit=function(n){n.preventDefault();v()}};