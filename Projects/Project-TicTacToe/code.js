let player = []
move = true
let gridData = [[1,2,3],[4,5,5],[7,8,9]]

// Function to create a grid of flexboxes
function createTicTacToeGrid() {
    const parent = document.querySelector('#parentContainer');

    //To remove previous grid
    var gridChild = document.getElementById('parentContainer');
    while ( gridChild.firstChild ) gridChild.removeChild( gridChild.firstChild );

    x = 1
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++){
            const gridItem = document.createElement('div');
            gridItem.id = `${i}` + `${j}`;
            console.log(gridItem.id)


            /*gridItem.style.alignItems = 'Center'*/
            /*gridItem.style.justifyContent = 'Center'*/
            gridItem.style.height = '100px';
            gridItem.style.width = '100px'
        
            gridItem.style.boxSizing = 'border-box';
            gridItem.style.color = 'white';
            gridItem.className = 'gridBox';
            gridItem.addEventListener("mousedown", handleMouseDown)

            parent.appendChild(gridItem);
            x++;
        }

    }
}
function reset(){
    player = []
    move = true
    gridData = [[1,2,3],[4,5,5],[7,8,9]]
}

function Player(name, type){
    return{
        name: name,
        move: type,
    };
}
function startGame(name, type) {
    for (let i = 0; i < 2; i++) {
        x = document.querySelector('#player'+ (i + 1))
        switch(i){
            case 0:
                player[i] = Player(x.value, 'X')
                break;
            case 1:
                player[i] = Player(x.value, 'O')
                break;
        }
    }
    console.log(player[0]);
    console.log(player[1]);
}



function handleMouseDown(){
    if (typeof player !== 'undefined' && player.length > 0){

        if(!this.classList.contains("Used")){
            switch (move){
                case true:

                    img = embedLetter('X')
                    this.appendChild(img)

                    this.className =this.className + ' Used'
                    playMove(player[0], this.id, 'X')
                    break;
                case false:


                    img = embedLetter('O')
                    this.appendChild(img)

                    this.className =this.className + ' Used'
                    playMove(player[1], this.id, 'O')
                    break;
            }
        }else{
            alert('Invalid Move')
        }


        move = counter(move)
    }else {
        alert('Please press start game to begin')
    }

function counter(x){
    switch (x) {
        case true:
            return false;
            break;
    
        default:
            return true;
            break;
    }
}
function embedLetter(img){
    var elem = document.createElement("p");
    elem.innerText = img
    elem.style.fontSize = '30px'
    elem.style.color = 'black'
    elem.style.height = '30px'
    elem.style.width = '30px'
    return elem;


}

}
function playMove(player, div, play){
    gridData[div[0]][div[1]] = play
    console.log(gridData[div[0]][div[1]])
    checkForWin(player)
}
function checkForWin(player){
    /*Check for row win*/
    for( let row = 0; row <3; row++){
        console.log(gridData[row][0])
        if(gridData[row][0] == gridData[row][1] && gridData[row][1] == gridData[row][2]){
            Win(player)
        }
    }
    /*Check for Column win*/
    for( let column = 0; column <3; column++){
        console.log(gridData[0][column])
        if(gridData[0][column] == gridData[1][column] && gridData[1][column] == gridData[2][column]){
            Win(player)
        }
    }
    /*check for Diagonal win*/
    if (gridData[0][0] == gridData[1][1] && gridData[1][1] == gridData[2][2]) 
    { 
        Win(player)

    } else if (gridData[0][2] == gridData[1][1] &&  
        gridData[1][1] == gridData[2][0]){
        Win(player)

    } 


}

function Win(player){
    alert(`${player.name} wins!`)
    reset()
}