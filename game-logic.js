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
    else if (playersSelection.toLowerCase()==="rock" && computersSelection.toLowerCase() === "paper"){
        outcome = "Player wins. Rock beats Paper";
    }
    return outcome;
}
