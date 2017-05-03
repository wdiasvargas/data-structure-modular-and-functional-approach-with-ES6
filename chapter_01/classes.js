/**
 * Write by wdiasvargas on 03/05/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
class Book {
    constructor (title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn(){
      console.log(this.isbn);
    }
}