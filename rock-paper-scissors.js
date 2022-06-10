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

function getComputerMove() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function compareMoves() {
    let playerMove = checkPlayerMove();
    let computerMove = getComputerMove();

    console.log(`Your move: ${playerMove}`);
    console.log(`Computer move: ${computerMove}`);

    if (playerMove === 'rock' && computerMove === 'paper') {
        return 'c';
    }
    if (playerMove === 'rock' && computerMove === 'scissors') {
        return 'p';
    }
    if (playerMove === 'paper' && computerMove === 'rock') {
        return 'p';
    }
    if (playerMove === 'paper' && computerMove === 'scissors') {
        return 'c';
    }
    if (playerMove === 'scissors' && computerMove === 'rock') {
        return 'c';
    }
    if (playerMove === 'scissors' && computerMove === 'paper') {
        return 'p';
    }
    else {
        return 't';
    }
}