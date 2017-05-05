/**
 * Writen by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
export default class Stack {
    constructor (){

        this.stack = [];
    }

  push(element){
      return this.stack.push(element)
    };

  pop(){
    this.stack.pop() || -1;
  };

  peek(){
    return this.stack[this.stack.length -1] || -1;
  };

  isEmpty(){
    return this.stack.length == 0;
  };

  size(){
    return this.stack.length;
  };

  clear(){
    return this.stack = [];
  };

  print(){
    return console.log(toString())
  };

  toString(){
    return this.stack.toString()
  };

}