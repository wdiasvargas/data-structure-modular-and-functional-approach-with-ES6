/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict';


let names = ['Ana','ana','john','Jhon'];
console.log(names.sort());

let namess = names.sort(function (a, b) {
  if(a.toLowerCase() < b.toLowerCase()){
    return -1
  }
  if(a.toLowerCase() > b.toLowerCase()){
    return 1
  }
  return 0;
});

console.log(namess)

let names2 = ['Maève', 'Maeve'];
console.log(names2.sort(function (a, b) {
  return a.localeCompare(b);
}));

