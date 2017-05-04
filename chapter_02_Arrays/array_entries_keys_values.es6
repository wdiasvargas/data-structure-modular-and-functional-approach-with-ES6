/**
 * Created by William Dias on 03/05/17.
 *    www.williamdiasvargas.com.br
 */
'use strict'
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

let	aValues	=	numbers.values;

console.log(aValues.next());	//	{value:	1,	done:	false	}
console.log(aValues.next());	//	{value:	2,	done:	false	}
console.log(aValues.next());	//	{value:	3,	done:	false	}