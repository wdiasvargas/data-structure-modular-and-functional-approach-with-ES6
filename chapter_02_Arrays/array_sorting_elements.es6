/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
numbers.reverse();
console.log(numbers)
numbers.sort();
let numbers2 = [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]
numbers2.sort();
console.log(numbers2)

numbers2.sort(function (a, b){
  return a - b;
});
console.log(numbers2)