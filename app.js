
//moment.js is the best website for check the time and date

const days=document.getElementById('Days');
const hours=document.getElementById('Hours');
const minutes=document.getElementById('Minutes');
const seconds=document.getElementById('Seconds');


var ramdan = new Date('Mar 10, 2024 18:39:00').getTime();
var x= setInterval(function() {
    

var now = new Date().getTime();
var diff=ramdan-now;

var d=Math.floor(diff/(1000*60*60*24));
console.log(d)

var h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
console.log(h)

var min= Math.floor((diff %(1000*60*60)) /(1000*60));
console.log(min)

var sec= Math.floor((diff%(1000*60) /(1000) ));
console.log(sec)

days.innerHTML=d;
hours.innerHTML=h<10? '0'+h:h;
minutes.innerHTML=min<10? '0'+min:min;
seconds.innerHTML=sec<10? '0'+sec:sec;


},1000);