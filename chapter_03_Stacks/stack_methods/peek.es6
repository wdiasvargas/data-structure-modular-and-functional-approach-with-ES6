/**
 * Write by wdiasvargas on 04/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
export function peek(){
  return this.stack[this.stack.length -1] || -1;
};