/**
 * Writen by wdiasvargas on 05/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//ES5


export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  };


  dequeue() {
    return this.items.shift();
  };


  front() {
    return this.items[0];
  };

  isEmpty() {
    return this.items.length == 0;
  };


  size() {
    return this.items.length;
  };

  print() {
    return console.log(this.items.toString());
  }

}