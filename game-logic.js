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

function gameRound (playersSelection, computersSelection) {
    let outcome;
    if (playersSelection.toLowerCase() === computersSelection.toLowerCase()) {
        outcome = "Draw"
    }
    else if (playersSelection.toLowerCase()==="paper" && computersSelection.toLowerCase() === "Rock"){
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