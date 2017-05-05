/**
 * Writen by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
import Stack from './Stack'

function baseConverter (decNumber, base) {
  let remStack = new Stack(),
      rem,
      baseString = '',
      digits  = '0123456789BCDEF';

  while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
