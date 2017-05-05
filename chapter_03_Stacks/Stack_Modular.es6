/**
 * Write by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//STACK com ES6
class Stack {
  constructor () {
    this.data = [];
    this.push = (element) => this.data.push(element);
    this.pop = () => this.data.pop() || -1;
    this.peek = () => this.data[this.data.length -1] || -1;
    this.isEmpty = () => this.data.length == 0;
    this.clear = () => this.data = [];
    this.size = () => this.data.length;
    this.print = () => console.log(this.data.toString());
  }
}

let stack = new Stack();
console.log(stack.push(1))
console.log(stack.push(3))
console.log(stack.push(5))
console.log(stack.print())
console.log(stack.pop())
console.log(stack.print())




// isEmpty.es6 export default () => this.data.length == 0;
// size.es6 export default () => this.data.length;
// push.es6 export default (element) => this.data.push(element)
// pop.es6 export default () => this.data.pop() || -1;
// peek.es6 export default () => this.data[this.data.length -1] || -1;
// clear.es6 export default() => this.data = [];
// print.es6 export default () => console.log(this.data.toString())