/**
 * Write by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
import Stack from './Stack'

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek())
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
console.log(stack.print());
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();