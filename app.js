const options = ["Rock", "Paper", "Scissors"]

let playerChoice;
let computerChoice = options[randomizedChoice()];

function randomizedChoice(){
    return Math.floor(Math.random() * options.length)
}

function playRound(playerChoice, computerChoice){
    while(true) {
        playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        if ((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors")) {
            break;
        }
        alert("Please enter a valid choice.")
    }
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice === computerChoice){ //draw
        return "Draw."
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){ //win conditions
        playerScore++
        return `You win, ${playerChoice} beats ${computerChoice}.`
    } else { //if not win conditions, it's lose.
        computerScore++
        return `You lose, ${computerChoice} beats ${playerChoice}.`
    }
}

let gameEnded = false;
let playerScore = 0;
let computerScore = 0;

function resetGame (winner){
    let reset = prompt("Play again? 'y' to restart.").toLowerCase();
    if (reset === "y"){
        playerScore = 0
        computerScore = 0
        gameEnded = false
        game();
    }
    console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}.`)
    console.log(`${winner} won the game!`)
}

function game(){
    while(gameEnded === false){
        console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}.`)
        computerChoice = options[randomizedChoice()];
        console.log(playRound(playerChoice, computerChoice));
        if (playerScore === 5){
            gameEnded = true;
            resetGame("You");
            return 
        } else if (computerScore === 5) {
            gameEnded = true;
            resetGame("The computer");
            return 
        }
    }
}

console.log(game());
