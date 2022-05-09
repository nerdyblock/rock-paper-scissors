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

// decide winner of one round
function playRound(computerSelection, playerSelection) {
    // store the winning result
    let str = ''
    // tie condition
    if (computerSelection === playerSelection) {
        str = "It's a Tie!!";
    }
    // winning condition
    else if (computerSelection === 'rock' && playerSelection === 'paper'
        || computerSelection === 'paper' && playerSelection === 'scissor'
        || computerSelection === 'scissor' && playerSelection === 'rock') {
        str = 'You Win!!';
    }
    // losing condition
    else if (computerSelection === 'rock' && playerSelection === 'scissor'
        || computerSelection === 'paper' && playerSelection === 'rock'
        || computerSelection === 'scissor' && playerSelection === 'paper') {
        str = 'You Lose!!';
    }

    return str;
}

// function game() {

//     let playerCount = 0,
//         compCount = 0;

//     for (let i = 0; i < 5; i++) {
//         let regex = /Win/;
//         let computerSelection = computerPlay();
//         let playerSelection = prompt('Choose Rock Paper or Scissor').toLowerCase();
//         let winStr = playRound(computerSelection, playerSelection);

//         if (/Tie/.test(winStr)) {
//             playerCount++;
//             compCount++;
//         }
//         else if (regex.test(winStr)) {
//             playerCount++;
//         }
//         else {
//             compCount++;
//         }
//         console.log(`your choice: ${playerSelection}  computer choice: ${computerSelection}`);
//         console.log("computer :" + compCount + " player :" + playerCount);
//     }
//     if (compCount > playerCount) {
//         console.log("You Lose!!");
//     }
//     else if (compCount === playerCount) {
//         console.log("It's a Tie!!");
//     }
//     else {
//         console.log("You Win!!");
//     }
// }


// game();


