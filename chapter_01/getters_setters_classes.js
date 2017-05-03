/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'

class Person {
    constructor (name){
        this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
    }
}
let lotrChar = new Person('Frodo')
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam';
console.log(lotrChar.name);