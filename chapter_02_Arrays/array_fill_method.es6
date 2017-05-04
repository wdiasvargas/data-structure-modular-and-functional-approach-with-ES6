/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbersCopy = Array.of(1,2,3,4,5,6);

numbersCopy.fill(Math.random());
numbersCopy.fill(1,3,5)
//console.log(numbersCopy)

let ones = Array(6).fill(1)
console.log(ones)