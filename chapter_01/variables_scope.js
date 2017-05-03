/**
 * Created by williamdias on 02/05/17.
 */
//'use strict'


var myVariable = 'global';
myOtherVariable = 'global';

function myFunction () {
  var myVariable = 'local';
  return myVariable;
}


function myOtherFunction () {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherFunction());
console.log(myOtherVariable);



