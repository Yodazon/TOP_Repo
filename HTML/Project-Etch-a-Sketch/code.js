// Function to create a grid of flexboxes
function createFlexboxGrid(gridSize) {
    const parent = document.querySelector('#parentContainer');
    sizeOfSquare = (1/(gridSize) *100 + "%");

    //To remove previous grid
    var gridChild = document.getElementById('parentContainer');
    while ( gridChild.firstChild ) gridChild.removeChild( gridChild.firstChild );

    for (let i = 1; i <= gridSize**2; i++) {
      const gridItem = document.createElement('div');
      gridItem.id = "id" +i;

      gridItem.style.flexBasis = sizeOfSquare;
  
      gridItem.style.boxSizing = 'border-box';
      gridItem.style.color = 'white'
      gridItem.className = 'gridBox'

      parent.appendChild(gridItem);

    }
}
function changeColor(event, colour) {
  event.style.backgroundColor = colour; // Change the background color as needed
}
// Add event listener to the container/grid to handle clicks on dynamically generated divs
const container = document.getElementById("parentContainer");
let isMouseDown = false;
let previousDiv = null;
let colourInput = 'black';
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseover", handleMouseOver);
//container.addEventListener("mouseup", handleMouseUp);
document.addEventListener("mouseup", handleMouseUp);
// Function to handle the mousedown event on the container
function handleMouseDown(event) {
  isMouseDown = true;
  previousDiv = event.target;
  changeColor(previousDiv, colourInput);
}
// Function to handle the mouseover event on the container
function handleMouseOver(event) {
    if (isMouseDown) {
      const currentDiv = event.target;
      if (currentDiv !== previousDiv ) {
        changeColor(currentDiv, colourInput);
        previousDiv = currentDiv;
      }
    }
}
// Function to handle the mouseup event on the container
function handleMouseUp() {
  isMouseDown = false;
}

function handleKeyDown(keyDown){
  if (keyDown.key === 'Enter'){
    calcGridSize();
  }
}
function calcGridSize(){
  const inputElement = document.querySelector('.js-grid-input');
  let gridSize = Number(inputElement.value);

  if(gridSize <= 64 && gridSize >= 1){
      createFlexboxGrid(gridSize);
  }
  else{
    alert('Invalid Input! Try again');
  }
}
function randomColourGenerator(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  randomColor = "#" + randomColor;
  PickGridBoxColour(randomColor);
}
function PickGridBoxColour(colour){
  console.log(colour)
  colourInput = colour;
}