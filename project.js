const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;
let draw = 0;

let playerWinRound = "You Win!";
let playerLoseRound = "You lose!"

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            return playerLoseRound;
        } else {
            return playerWinRound;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return playerWinRound;
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            return playerLoseRound;
        }
    } else {
        if (computerSelection === "rock") {
            return playerLoseRound;
        } else if (computerSelection === "paper") {
            return playerWinRound;
        } else {
            return "Draw!";
        }
    }
}



for (i=0; i<5; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is: " + playerScore);
    console.log("Computer's score is: " + computerScore);
}

function gameScore(result) {
    if (result === playerWinRound) {
        playerScore++;
    } else if (result === playerLoseRound) {
        computerScore++;
    } else {
        draw++;
    }
}

function score() {
    if (playerScore > computerScore) {
        return "Player wins the game!";
    } else if (computerScore > playerScore) {
        return "Computer wins the game!";
    } else {
        return "Draw! No one wins.";
    }
}
console.log(score());
