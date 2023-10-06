const showButton = document.getElementById("addBook")
const dialogBox = document.getElementById("bookPopUp")
const closeDialog = document.getElementById("addToLib")

const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const numberInput = document.getElementById("numberInput")
const readInput = document.getElementById("readInput")
const library = [];

var readButton = document.getElementById("button")


let counter = 0

const container = document.getElementById("body")


showButton.addEventListener("click", () =>{
  dialogBox.showModal();
});

readButton.addEventListener("click", () =>{
  if(readButton.classList.contains(bookRead)){
    readButton.classList.remove("bookRead")
    readButton.classList.add("bookNotRead")
    readButton.textContent = "Not Read"

  }else{
    readButton.classList.add("bookRead")
    readButton.classList.remove("bookNotRead")
    readButton.textContent = "Read"
  }

})

closeDialog.addEventListener("click", () =>{

  const newBook = new Book(titleInput.value, authorInput.value, numberInput.value, readInput.checked)
  console.log(newBook)
  library.push(newBook)
  dialogBox.close();
  libraryStorage(library, container,counter);
  counter =+ 1;
})

function Book(title, author, number, read){

  this.title = title,
  this.author = author,
  this.number = number,
  this.read = read;

}

function libraryStorage(library, container, counter){
  for (let i = counter; i <library.length; i++ ){
      const newDiv = document.createElement("div");
      const bookString = library[i]
      const readButton = document.createElement("button")
      //`${bookString.title} ${bookString.author} ${bookString.number} ${bookString.read})`

      newDiv.textContent= `${bookString.title} ${bookString.author} ${bookString.number}`

      switch(true){
        case bookString.read:
          readButton.textContent = "Read"
          readButton.className = "bookRead"
          break;
        default:
          readButton.textContent = "Not Read"
          readButton.className = "bookNotRead"
      }
      readButton.appendChild(button)

      newDiv.append(buttonContainer);

      container.appendChild(newDiv);
  }

}














//Use <dialog> dynamically to make our book entries that will be added to #Body of the page
//Dialog box should be formatted to look like the boxes of info we will see when we input it in the body
// make the dynamics work first? or should I style it with css first, i think dyunamics first will be more impactful and cause I dont know my JS as good as my css, i think it would be good practice.