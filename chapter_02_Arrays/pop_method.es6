/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers)

for (var i = 0; i<numbers.length; i++) {
    numbers[i] = numbers[i+1];
}
console.log(numbers)