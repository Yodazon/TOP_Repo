const showButton = document.getElementById("addBook")
const dialogBox = document.getElementById("bookPopUp")
const closeDialog = document.getElementById("addToLib")

const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const numberInput = document.getElementById("numberInput")
const readInput = document.getElementById("readInput")
const library = [];

const container = document.getElementById("body")


showButton.addEventListener("click", () =>{
  dialogBox.showModal();
});

closeDialog.addEventListener("click", () =>{


  library.push(Book(titleInput.value, authorInput.value, numberInput.value, readInput.checked));
  dialogBox.close();
  libraryStorage(library, container);
})

function Book(title, author, number, read){

  this.title = title,
  this.author = author,
  this.number = number,
  this.read = read;

}

function libraryStorage(library, container){
  const newDiv = document.createElement("div");

  newDiv.textContent=library.join(', ');
  container.appendChild(newDiv);



}














//Use <dialog> dynamically to make our book entries that will be added to #Body of the page
//Dialog box should be formatted to look like the boxes of info we will see when we input it in the body
// make the dynamics work first? or should I style it with css first, i think dyunamics first will be more impactful and cause I dont know my JS as good as my css, i think it would be good practice.