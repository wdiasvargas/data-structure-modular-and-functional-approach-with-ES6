/**
 * Writen by wdiasvargas on 05/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//ES5
//QUEUE FIFO
//FIRST IN FIRST OUT
//QUEUE FIFO
//FIRST IN FIRST OUT
function Queue() {
  let items = [];
  //propriedades e metodos aqui

  //unqueue add new elements na queue
  this.enqueue = function(element){
    items.push(element);
  };

  //dequeue remove os items da queue
  this.dequeue = function(){
    return items.shift();
  };

  //retorna o primeiro item da queue
  this.front = function(){
    return items[0];
  };
  //verifica se o queue esta vazio
  this.isEmpty = function(){
    return items.length == 0;
  };

  //verifica o tamanho da queue
  this.size = function(){
    return items.length;
  };

  //metodo print
  this.print = function(){
    return console.log(items.toString());
  }
}