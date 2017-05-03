/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

var averangeTempJan = 31.9;
var averangeTempFeb = 35.3;
var averangeTempMar = 42.4;
var averangeTempApr = 52;
var averangeTempMay = 60.8;

var averangeTemp = [];
averangeTemp[0] = 31.9;
averangeTemp[1] = 35.3;
averangeTemp[2] = 42.4;
averangeTemp[3] = 52;
averangeTemp[4] = 60.8;

var daysoFWeek = new Array ();
var daysoFWeek = new Array(7);
var daysoFWeek = new Array('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

console.log(daysoFWeek.length);
for(var i = 0; i < daysoFWeek.length; i++){
  console.log(daysoFWeek[i]);
}

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3;i < 20; i++ ){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}


for (var i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}


