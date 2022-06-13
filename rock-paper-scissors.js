const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let count = 0;

const buttons = document.querySelectorAll('.move');
buttons.forEach(button => button.addEventListener('click', gameLoop)); 


function getCpuMove() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function compareMoves(playerMove, cpuMove) {
    if (playerMove === 'rock' && cpuMove === 'paper') {
        return 'c';
    } if (playerMove === 'rock' && cpuMove === 'scissors') {
        return 'p';
    } if (playerMove === 'paper' && cpuMove === 'rock') {
        return 'p';
    } if (playerMove === 'paper' && cpuMove === 'scissors') {
        return 'c';
    } if (playerMove === 'scissors' && cpuMove === 'rock') {
        return 'c';
    } if (playerMove === 'scissors' && cpuMove === 'paper') {
        return 'p';
    } else {
        return 't';
    }
}

function createResultsDiv() {
    const body = document.querySelector('body');

    const resultsContain = document.createElement('div');
    resultsContain.setAttribute('id', 'resultsContain');

    const cpuMove = document.createElement('p');
    cpuMove.setAttribute('id', 'cpuMove');

    const outcomePara = document.createElement('p');
    outcomePara.setAttribute('id', 'outcomePara');

    const playerScoreP = document.createElement('p');
    playerScoreP.setAttribute('id', 'playerScore');

    const cpuScore = document.createElement('p');
    cpuScore.setAttribute('id', 'cpuScore');

    const finalResult = document.createElement('p');
    finalResult.setAttribute('id', 'finalResult');

    resultsContain.appendChild(cpuMove);
    resultsContain.appendChild(outcomePara);
    resultsContain.appendChild(playerScoreP);
    resultsContain.appendChild(cpuScore);
    resultsContain.appendChild(finalResult);

    body.appendChild(resultsContain);

    const children = resultsContain.childNodes;
    console.log(children);
    children.forEach(child => child.setAttribute('class', 'results'));
}

function createNewGameBtn() {
    const body = document.querySelector('body');
    const newGameBtn = document.createElement('button');
    newGameBtn.setAttribute('id', 'newGame');
    newGameBtn.textContent = 'New Game';
    body.appendChild(newGameBtn);
    return newGameBtn;
}

function printResults(outcome, cpuMove) {
    const outcomePara = document.querySelector('#outcomePara');
    const playerScoreP = document.querySelector('#playerScore');
    const cpuScore = document.querySelector('#cpuScore');

    const cpuMoveP = document.querySelector('#cpuMove');
    cpuMove = cpuMove.substr(0, 1).toUpperCase() + cpuMove.substr(1);
    cpuMoveP.textContent = `Computer Move: ${cpuMove}`;

    if (outcome === 'p') {
        playerScore += 1;
        outcomePara.textContent = 'Outcome: Win'
    } else if (outcome === 'c') {
        computerScore += 1;
        outcomePara.textContent = 'Outcome: Loss'
    } else {
        outcomePara.textContent = 'Outcome: Tie'
    }

    playerScoreP.textContent = `Your Score: ${playerScore}`; cpuScore.textContent = `Computer Score: ${computerScore}`;
}

function endGame(winsNeeded) {
    const finalResult = document.querySelector('#finalResult');
    if (playerScore !== winsNeeded && computerScore !== winsNeeded) {
        return;
    }

    if (playerScore === winsNeeded) {
        finalResult.textContent = 'You win the series!';
    } 
    if (computerScore === winsNeeded) {
        finalResult.textContent = 'The compuer wins the series.';
    }

    const newGameBtn = createNewGameBtn();
    newGameBtn.addEventListener('click', resetGame);

    const moveButtons = document.querySelectorAll('.move');
    moveButtons.forEach(button => button.disabled = true);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    const resultsContain = document.querySelector('#resultsContain');
    let children = resultsContain.childNodes;
    
    children.forEach(child => child.textContent = '');

    const body = document.querySelector('body');
    const newGameBtn = document.querySelector('#newGame');
    body.removeChild(newGameBtn);

    const moveButtons = document.querySelectorAll('.move');
    moveButtons.forEach(button => button.disabled = false);
}

function gameLoop(e) {
    const playerMove = e.srcElement.id;
    const cpuMove = getCpuMove();

    const outcome = compareMoves(playerMove, cpuMove);

    if (count === 0) {
        createResultsDiv();
    }
    count += 1;

    printResults(outcome, cpuMove);
    endGame(2);
    return;
}