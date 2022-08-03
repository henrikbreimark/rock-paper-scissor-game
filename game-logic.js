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
