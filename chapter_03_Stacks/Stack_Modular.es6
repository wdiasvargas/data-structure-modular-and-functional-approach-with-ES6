/**
 * Write by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
import push from './stack_methods/push'
import pop from './stack_methods/pop'
import peek from './stack_methods/peek'
import isEmpty from './stack_methods/isEmpty'
import clear from './stack_methods/clear'
import print from './stack_methods/print'

export default class Stack {
  constructor() {
    this.stack = [];
  }
  push= push();
  pop = pop();
  peek = peek();
  isEmpty = isEmpty();
  clear = clear();
  print = print();
}