/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, x=> (x % 2 == 0));
console.log(evens)