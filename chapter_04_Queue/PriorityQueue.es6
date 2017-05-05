/**
 * Writen by wdiasvargas on 05/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
function PriorityQueue () {
  let items = [];

  function QueueElement (element, priority){
    this.elements = element;
    this.priority  = priority;
  }
  this.enqueue = function(element, priority){
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for(let i=0; i<items.length; i++){
      if(queueElement.priority < items[i].priority){
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
  if(!added){
      items.push(queueElement);
    }
  };
  this.print = function (){
      for(let i = 0; i<items.length; i++){
        console.log(`${items[i].element} - ${items[i].priority}`);
      }
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("William", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();