const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', gameLoop)); 

function getComputerMove() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function compareMoves(playerMove) {
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

function printWinner(outcome) {
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

function gameLoop(e) {
    const playerMove = e.srcElement.id;
    const outcome = compareMoves(playerMove);
    printWinner(outcome);
    return;
}