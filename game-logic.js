

//gets button ID
const onClick = function(bajs) {
    if (bajs.target.nodeName === 'BUTTON') {
      console.log(bajs.target.id);
    }
  }
  window.addEventListener('click', onClick);

/**
 * Generates a random choise of rock, paper or scissors
 * @returns the computers' choice
 */
function getComputerChoice () {
    let computerChoice;
    let randomiser = Math.floor(Math.random()*3)+1;
    if (randomiser===1){
        computerChoice= "Scissors"
    } else if (randomiser===2){
        computerChoice = "Rock"
    } else if (randomiser===3){
        computerChoice = "Paper"
}
return computerChoice;
}

/**
 * Checks the result from one round of rock paper scissors 
 * @param {} the players choise
 * @param {*} the computers choise 
 * @returns Winner of round
 */
function playRound (playersSelection, computersSelection) {
    let outcome;
    if (playersSelection.toLowerCase() === computersSelection.toLowerCase()) {
        outcome = "Draw"
    }
    else if (playersSelection.toLowerCase()==="paper" && computersSelection.toLowerCase() === "rock"){
        outcome = "Player wins. Paper beats Rock";
    }
    else if (playersSelection.toLowerCase()==="scissors" && computersSelection.toLowerCase() === "paper"){
        outcome = "Player wins. Scissors beats Paper";
    }
    else if (playersSelection.toLowerCase()==="rock" && computersSelection.toLowerCase() === "scissors"){
        outcome = "Player wins. Rock beats Scissors";
    }
    else if (playersSelection.toLowerCase()==="rock" && computersSelection.toLowerCase() === "paper"){
        outcome = "Computer wins. Paper beats Rock";
    }
    else if (playersSelection.toLowerCase()==="scissors" && computersSelection.toLowerCase() === "rock"){
        outcome = "Computer wins. Rock beats Scissors";
    }
    else if (playersSelection.toLowerCase()==="paper" && computersSelection.toLowerCase() === "scissors"){
        outcome = "Computer wins. Scissors beats Paper";
    }
    return outcome;
}

/**
 * Runs the game
 */


/*
function game() {
    let winCountComputer = 0;
    let winCountPlayer = 0;
    for (let index = 0; index < 5; index++) {
    let playersSelection = prompt("Rock, paper, scissors");
        let computersSelection = getComputerChoice();
       let
        roundResult = playRound (playersSelection, computersSelection); 
        console.log(roundResult);
        if (roundResult.toLowerCase().includes("computer")){
            winCountComputer ++;
        }
        if (roundResult.toLowerCase().includes("player")){
            winCountPlayer ++;
        }
        console.log(winCountComputer+ " " + winCountPlayer)
    }
    console.log(displayWinner(winCountComputer, winCountPlayer))
}

/**
 * Displays the winner of the game
 * @param {*} The computers number of wins
 * @param {*} The players number of wins
 * @returns The games result
 */
/*
function displayWinner (winCountComputer, winCountPlayer){
    if (winCountComputer > winCountPlayer){
        return("The computer wins")
    } else if (winCountComputer < winCountPlayer){
        return("The player wins")
    } else {
        return("It's a draw")
    }
}
*/