const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getPlayerMove() {
    return prompt('What\'s your move?');
}

function getComputerMove() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function compareMoves() {
    let playerMove = getPlayerMove();
    let computerMove = getComputerMove();

    if (playerMove === 'rock' && computerMove === 'paper') {
        return 'c';
    } if (playerMove === 'rock' && computerMove === 'scissors') {
        return 'p';
    } if (playerMove === 'paper' && computerMove === 'rock') {
        return 'p';
    } if (playerMove === 'paper' && computerMove === 'scissors') {
        return 'c';
    } if (playerMove === 'scissors' && computerMove === 'rock') {
        return 'c';
    } if (playerMove === 'scissors' && computerMove === 'paper') {
        return 'p';
    } else {
        return 't';
    }
}

function printWinner() {
    let outcome = compareMoves();

    if (outcome === 'p') {
        playerScore += 1;
        alert('You win!');
    } else if (outcome === 'c') {
        computerScore += 1;
        alert('Computer wins.');
    } else {
        alert('Tie.');
    }

    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`)
}

function playAgain() {
    return prompt('Would you like to play again?').toLowerCase();
}

function gameLoop() {
    // Triggers gameplay
    printWinner();
    
    let repeat = playAgain();
    let responses = ['yes', 'y', 'yeah', 'ya', 'ye'];
    if (responses.includes(repeat)) {
        gameLoop();
    } else {
        alert('Thank you for playing!');
    }
}