export default function startGame(name) {
    const playerX = Player(name, 'X');
    const playerO = Player(name, 'O');
    console.log(playerX);
    console.log(playerO);
}

function Player(name, type){
    return{
        name: name,
        move: type,
    };
}