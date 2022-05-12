let playerCount = 0;
let computerCount = 0;
let computerSelection = computerPlay();
let playerSelection;
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let resultText = document.querySelector('.result>h3');
let finalResultText = document.querySelector('#final-result-text');
let playAgain = document.querySelector('.play-again');

// random coputer choices 
function computerPlay() {
    // gives a number between 0-3
    computerChoice = Math.floor(Math.random() * 3);
    let rps = "";

    // assign 0, 1 and 2 with the value of rock, paper and scissor respectively
    switch (computerChoice) {
        case 0: rps = "rock";
            break;
        case 1: rps = "paper";
            break;
        case 2: rps = "scissor"
            break;
    }
    return rps;
}

// nodelist of class choice (div container for rps)
let choice = document.querySelectorAll('.choice');
choice.forEach(item => item.addEventListener('click', playGame));

function playGame() {
    // id of the cliked choice div
    playerSelection = this.id;
    playRound(computerSelection, playerSelection);
    // check if condition to end game satisfy
    endGame(computerCount, playerCount);
    resetGame();
}

// decide winner of one round
function playRound(computerSelection, playerSelection) {
    // tie condition
    if (computerSelection === playerSelection) {
        resultText.textContent = `It's a Tie!! You both chose ${playerSelection}`;
    }
    // winning condition
    else if (computerSelection === 'rock' && playerSelection === 'paper'
        || computerSelection === 'paper' && playerSelection === 'scissor'
        || computerSelection === 'scissor' && playerSelection === 'rock') {
        // show the winning result on screen
        resultText.textContent = `Impressive YOU WIN!! Your ${playerSelection} beat computer's ${computerSelection}`;
        playerCount++;
        // show the player score on screen
        playerScore.textContent = playerCount;
    }
    // losing condition
    else if (computerSelection === 'rock' && playerSelection === 'scissor'
        || computerSelection === 'paper' && playerSelection === 'rock'
        || computerSelection === 'scissor' && playerSelection === 'paper') {
        // show the losing result on screen
        resultText.textContent = `Too bad YOU LOST :( Computer's ${computerSelection} beat your ${playerSelection}`;
        computerCount++;
        // show the computer score on screen
        computerScore.textContent = computerCount;
    }

    return [computerCount, playerCount];
}

function endGame(computerCount, playerCount){
    if(computerCount === 5 || playerCount === 5) {
        // show final result on screen won/lost
        if(playerCount > computerCount) {
            finalResultText.textContent = 'WOW Impressive You Won!!'
            finalResultText.style.fontSize = '18px';
        } 
        else {
            finalResultText.textContent = 'Too Bad YOU LOST :('
            finalResultText.style.fontSize = '18px';
        }
        // remove hover effect and playgame function form choice div so that it is not playable after the game ends to play again press the button
        choice.forEach(item => {
            item.classList.remove('choice-transform');
            item.removeEventListener('click', playGame);
        });
        // make the play again button visible 
        playAgain.style.display = 'block';
    }
} 

function resetGame() {
    // reload the screen if play again button is clicked
    playAgain.addEventListener('click', () => window.location.reload());
}

