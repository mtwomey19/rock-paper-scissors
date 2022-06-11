const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let count = 0;

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

    const finalResult = document.createElement('p');
    finalResult.setAttribute('id', 'finalResult');

    resultsContain.appendChild(outcomePara);
    resultsContain.appendChild(playerScoreP);
    resultsContain.appendChild(compScoreP);
    resultsContain.appendChild(finalResult);

    body.appendChild(resultsContain);
}

function printResults(outcome) {
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

function endGame() {
    const finalResult = document.querySelector('#finalResult');
    if (playerScore === 2) {
        finalResult.textContent = 'You win the series!';
    } 
    if (computerScore === 2) {
        finalResult.textContent = 'The compuer wins the series.';
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    // Set all children of resultsContain div to empty
    const resultsContain = document.querySelector('#resultsContain');
    let children = resultsContain.childNodes;
    
    children.forEach(child => child.textContent = '');
}

function gameLoop(e) {
    const playerMove = e.srcElement.id;
    const outcome = compareMoves(playerMove);

    if (count === 0) {
        createResultsDiv();
    }
    count += 1;

    printResults(outcome);
    endGame();
    resetGame();
    return;
}