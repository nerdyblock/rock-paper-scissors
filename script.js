// for player score
let playerCount = 0;
// for computer score
let computerCount = 0;
// for computer choice
let computerSelection = computerPlay();
// for player choice
let playerSelection;
// span to show player score
let playerScore = document.querySelector('#player-score');
// span to show computer score
let computerScore = document.querySelector('#computer-score');
// result of one round in text form
let resultText = document.querySelector('.result>h3');
// to show final result on screen through text
let finalResultText = document.querySelector('#final-result-text');
// div to play again
let playAgain = document.querySelector('.play-again');

// random coputer choices 
function computerPlay() {
    // gives a number between 0-3
    computerChoice = Math.floor(Math.random() * 3);
    // to hold computer's choice (rps)
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
    // play one round
    playRound(computerSelection, playerSelection);
    // check if condition to end game satisfy
    endGame(computerCount, playerCount);
    // reset the game if it has ended
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
        // increase the player score count
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
        // increase the computer score count
        computerCount++;
        // show the computer score on screen
        computerScore.textContent = computerCount;
    }

    // return the player score and computer score after one round
    return [computerCount, playerCount];
}

function endGame(computerCount, playerCount){
    // function will only run if either one reaches the score of 5
    if(computerCount === 5 || playerCount === 5) {
        // show final result on screen won/lost
        if(playerCount > computerCount) {
            finalResultText.textContent = 'WOW Impressive You Won!!'
        } 
        else {
            finalResultText.textContent = 'Too Bad YOU LOST :('
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

