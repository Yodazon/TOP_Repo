// Function to create a grid of flexboxes
function createTicTacToeGrid() {
    console.log('ive been called')
    const parent = document.querySelector('#parentContainer');
    sizeOfSquare = (1/(3) *100 + "%");

    //To remove previous grid
    var gridChild = document.getElementById('parentContainer');
    while ( gridChild.firstChild ) gridChild.removeChild( gridChild.firstChild );

    for (let i = 1; i <= 3**2; i++) {
       console.log('im working') 
      const gridItem = document.createElement('div');
      gridItem.id = "id" +i;

      gridItem.style.flexBasis = sizeOfSquare;
  
      gridItem.style.boxSizing = 'border-box';
      gridItem.style.color = 'white';
      gridItem.className = 'gridBox';
      gridItem.addEventListener("mousedown", handleMouseDown)

      parent.appendChild(gridItem);

    }
}

function Player(name, type){
    return{
        name: name,
        move: type,
    };
}
function startGame(){
    const p1 = document.querySelector('#player1');
    const p2 = document.querySelector('#player2');

    const playerX = Player(p1.value, 'X');
    const playerO = Player(p2.value, 'O');
    console.log(playerX)
    console.log(playerO)
}

function handleMouseDown(){

    console.log("SUC MY BALLS, MR GARRISON")
    console.log()
}
