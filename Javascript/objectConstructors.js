

function book (title){

    this.name = title
    this.info = function(){
        console.log("The Hobbit by J.R.R. Tolkien, 295 pages, not read yet")
    }

}


const theHobbit = new book("the Hobbit")
console.log("hello")
console.log(theHobbit.info())
console.log(Object.getPrototypeOf(theHobbit) === book.prototype)

console.log(theHobbit.valueOf())



