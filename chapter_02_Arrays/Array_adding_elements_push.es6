/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

for (var i = numbers.length; i>=0; i--) {
    numbers[i] = numbers[i - 1];
}
numbers[0] = -1;

console.log(numbers)