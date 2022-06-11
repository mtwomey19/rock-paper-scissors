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

function createResultsDiv() {
    const body = document.querySelector('body');

    const resultsContain = document.createElement('div');
    resultsContain.setAttribute('id', 'resultsContain');

    const outcomePara = document.createElement('p');
    outcomePara.setAttribute('id', 'outcomePara');

    const playerScoreP = document.createElement('p');
    playerScoreP.setAttribute('id', 'playerScore');

    const compScoreP = document.createElement('p');
    compScoreP.setAttribute('id', 'compScore');

    resultsContain.appendChild(outcomePara);
    resultsContain.appendChild(playerScoreP);
    resultsContain.appendChild(compScoreP);
    body.appendChild(resultsContain);
}

function printWinner(outcome) {
    const outcomePara = document.querySelector('#outcomePara');
    const playerScoreP = document.querySelector('#playerScore');
    const compScoreP = document.querySelector('#compScore');

    if (outcome === 'p') {
        playerScore += 1;
        outcomePara.textContent = 'You Win!'
    } else if (outcome === 'c') {
        computerScore += 1;
        outcomePara.textContent = 'Computer Wins.'
    } else {
        outcomePara.textContent = 'Tie.'
    }

    playerScoreP.textContent = `Your score: ${playerScore}`;
    compScoreP.textContent = `Computer score: ${computerScore}`;
}

function gameLoop(e) {
    const playerMove = e.srcElement.id;
    const outcome = compareMoves(playerMove);

    let count = 0;
    if (count === 0) {
        createResultsDiv();
    }
    count += count;

    printWinner(outcome);
    return;
}