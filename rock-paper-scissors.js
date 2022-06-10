const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function openingMessage() {
    console.log('It\'s game time!');
}

function getPlayerMove() {
    return prompt('What\'s your move?');
}

