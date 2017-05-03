/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

var [x, y] = ['a', 'b'];

var x = 'a';
var y = 'b';


[x, y] = [y, x];

var temp = x;
x = y;
y = temp;


var [x, y] = ['a', 'b'];
var obj = { x, y };
console.log(obj);

var x = 'a';
var y = 'b';
var obj2 = {x: x, y: y};
console.log(obj2);


var hello = {
  name: 'abcdef',
  printHello(){
    console.log('Hello');
  }
}
console.log(hello.printHello());


