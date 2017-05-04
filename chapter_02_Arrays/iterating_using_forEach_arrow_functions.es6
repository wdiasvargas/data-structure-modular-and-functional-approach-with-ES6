/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */





'use strict'
let isEven = function (x){
  console.log(x);
  return (x % 2 == 0) ? true : false;
};

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//ES5
// numbers .forEach(function (x){
//   console.log(x % 2 == 0);
// });
// //ES6
numbers.forEach(x => {
  console.log(x % 2 == 0);
});
console.log(numbers)