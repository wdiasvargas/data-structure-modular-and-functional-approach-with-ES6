/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
let matrix3x3x3 = [];

for (var i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (var j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (var z = 0; z < 3; z++){
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}


const arrayColumn = (arr, n) => arr.map(x => x[n]);

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const arr = [[1],[2,3],[2]];
console.log(arrayColumn(arr, 2))