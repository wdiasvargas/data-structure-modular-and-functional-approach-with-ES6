/**
 * Writen by wdiasvargas on 05/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
import Queue from './Queue'


let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("William");
queue.enqueue("Adria");
queue.enqueue("Wesly");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print()
queue.dequeue();
queue.print();