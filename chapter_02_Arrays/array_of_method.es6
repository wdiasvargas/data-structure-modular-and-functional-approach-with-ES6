/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5,6);

let numbersCopy = Array.of(...numbers4);

console.log(numbersCopy)