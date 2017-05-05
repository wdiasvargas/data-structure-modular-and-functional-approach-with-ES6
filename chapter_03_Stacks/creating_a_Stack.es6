/**
 * Write by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

//ES5
function Stack () {
  let items = [];
  //adiciona elemento ao topo da pilha
  this.push = (element) => items.push(element);

  //remove elemento do topo da pilha
  this.pop = (element) => items.pop();

  //retorna o ultimo elemento adicionado na pilha
  this.peek = () => items[items.length -1];

  //verifica se a pilha esta vazia
  this.isEmpty = () => items.length == 0;

  //verifica o tamanho da pilha
  this.size = () => items.length;

  //limpando a pilha
  this.clear = () => items = []

  //mostrando a pilha
  this.print = () => console.log(items.toString());

}

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

