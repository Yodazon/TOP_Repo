const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function printName(player) {
    console.log(player.name)
  }


//This code below is an object Constructor, when youn have something you want to make duplicates of and not hard code it. As that is not worth the time
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
      }
}

//To call the above function and make a new object, you use the "new" attribute
const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return (`The ${title}, is by ${author} and has ${pages} pages. ${read} I have read it`)

    }
}

const book = new Book('john doe', 'Dickens', '69', 'no')

console.log(book.info())