/*Difference in Code 2 is that the "book" factory function is now a class function*/



const showButton = document.getElementById("addBook")
const dialogBox = document.getElementById("bookPopUp")
const closeDialog = document.getElementById("addToLib")

const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const numberInput = document.getElementById("numberInput")
const readInput = document.getElementById("readInput")
const library = []

const rButton = document.getElementsByClassName("button")


let counter = 0

const container = document.getElementById("body")


showButton.addEventListener("click", () =>{
  dialogBox.showModal();
});




container.addEventListener("click", function(e) {

  if((e.target.id !== 'body') && (e.target.className !== 'library') ){
    if(e.target.classList.contains('bookRead')){
      e.target.classList.remove("bookRead")
      e.target.classList.add("bookNotRead")
      e.target.textContent = "Not Read"
    }else{
      e.target.classList.add("bookRead")
      e.target.classList.remove("bookNotRead")
      e.target.textContent = "Read"
    }

    if(e.target.classList.contains('delete')){
      var x = e.target.id.match(/\d+/);
      var extracted = parseInt(x[0])


      console.log(extracted)
      library.splice(extracted, 1);
      console.log(library)

      libraryStorage(library, container,0);
    }
  }
})



closeDialog.addEventListener("click", () =>{

  let newBook = new Book(titleInput.value, authorInput.value, numberInput.value, readInput.checked)
  console.log(newBook)
  library.push(newBook)
  dialogBox.close();
  libraryStorage(library, container,counter);
  counter = library.length;
})

class Book{

  constructor(title, author, number, read){
    this.title = title,
    this.author = author,
    this.number = number,
    this.read = read;
  }

}

function libraryStorage(library, container, counter){

  //To remove previous lib
  var gridChild = document.getElementById('body');
  while ( gridChild.firstChild ) gridChild.removeChild( gridChild.firstChild );


  for (let i = 0; i <library.length; i++ ){
      const newDiv = document.createElement("div");
      newDiv.id = "id" + i;
      newDiv.className = "library"
      const bookString = library[i]
      const readButton = document.createElement("button")
      const delButton = document.createElement("button")
      //`${bookString.title} ${bookString.author} ${bookString.number} ${bookString.read})`

      newDiv.textContent= `${bookString.title} ${bookString.author} ${bookString.number}`

      switch(true){
        case bookString.read:
          readButton.textContent = "Read"
          readButton.className = "bookRead"
          readButton.id = "button" + i
          break;
        default:
          readButton.textContent = "Not Read"
          readButton.className = "bookNotRead"
          readButton.id = "button" + i
      }
      //readButton.appendChild(button)
      delButton.textContent = "Delete Book"
      delButton.className = "delete"
      delButton.id = "delete_" + i

      newDiv.append(readButton);
      newDiv.append(delButton);

      container.appendChild(newDiv);
  }

}














//Use <dialog> dynamically to make our book entries that will be added to #Body of the page
//Dialog box should be formatted to look like the boxes of info we will see when we input it in the body
// make the dynamics work first? or should I style it with css first, i think dyunamics first will be more impactful and cause I dont know my JS as good as my css, i think it would be good practice.