/**
 * Writen by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
import Stack from './Stack'


function divideBy2(decNumber){

  var remStack = new Stack(),
    rem,
    binaryString = '';

  while(decNumber > 0){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
