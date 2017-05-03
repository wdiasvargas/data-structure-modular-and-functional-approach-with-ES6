/**
 * Write by wdiasvargas on 02/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

var params = [3, 4, 5];
//console.log(sum(...params));

//console.log(sum.apply(undefined, params));

function restParameterFunction (x, y,...a) {
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, "hello", true, 7));

function restParameterFunction (x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
