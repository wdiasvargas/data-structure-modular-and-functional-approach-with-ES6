/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict';

let	numbers	=	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function	multipleOf13(element,	index,	array)	{
  return	(element	%	13	==	0)	?	true	:	false;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));