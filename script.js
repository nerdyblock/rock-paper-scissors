function computerPlay () {
    computerChoice = Math.floor(Math.random() * 3);
    let rps = "";

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

function playRound(computerSelection, playerSelection) {
    let str = ''
    if(computerSelection === playerSelection) {
        str = "It's a Tie!!";
        console.log(str);
    }
    else if(computerSelection === 'rock' && playerSelection === 'paper') {
        str = 'You Win!! Paper beats Rock';
        console.log(str);
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissor') {
        str = 'You Lose!! Rock beats Scissor';
        console.log(str);
    }
    else if(computerSelection === 'paper' && playerSelection === 'rock') {
        str = 'You Lose!! Paper beats Rock';
        console.log(str);
    }
    else if(computerSelection === 'paper' && playerSelection === 'scissor') {
        str = 'You Win!! Scissor beats Paper';
        console.log(str);
    }
    else if(computerSelection === 'scissor' && playerSelection === 'paper') {
        str = 'You Lose!! Scissor beats Paper';
        console.log(str);
    }
    else if(computerSelection === 'scissor' && playerSelection === 'rock') {
        str = 'You Win!! Rock beats Scissor';
        console.log(str);
    }
    return str;
}

function game() {

    let playerCount = 0,
        compCount =0; 

    for(let i=0; i<5; i++){
        let regex = /Win/;
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose Rock Paper or Scissor').toLowerCase();
        let winStr = playRound(computerSelection, playerSelection);

        if(/Tie/.test(winStr)){
            playerCount++;
            compCount++;
        }
        else if(regex.test(winStr)){
            playerCount++;
        }
        else {
            compCount++;
        }
        console.log(`your choice: ${playerSelection}  computer choice: ${computerSelection}`);
        console.log("computer :" + compCount + " player :" + playerCount);
    }
    if(compCount > playerCount){
        console.log("You Lose!!");
    }
    else if(compCount === playerCount){
        console.log("It's a Tie!!");
    }
    else {
        console.log("You Win!!");
    }
}


game();


