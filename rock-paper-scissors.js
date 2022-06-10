const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function openingMessage() {
    console.log('It\'s game time!');
}

function getPlayerMove() {
    return prompt('What\'s your move?');
}

function checkPlayerMove() {
    let playerMove = getPlayerMove();

    while (!moves.includes(playerMove.toLowerCase())) {
        alert('Invalid move. Please try again.');
        playerMove = getPlayerMove();
    }
    return playerMove.toLowerCase();
}