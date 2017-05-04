/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbers = [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]

function compare(a, b){
  if(a < b) {
    return -1;
  }
  if( a > b) {
    return 1;
  }
  return 0;
}
numbers.sort(compare);
console.log(numbers)