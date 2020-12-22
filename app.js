const options = ["Rock", "Paper", "Scissors"]


function computerPlay(){
    let cpuChoice = Math.floor(Math.random() * 3)
    return options[cpuChoice]
}

let playerChoice;
let computerChoice = computerPlay();

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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameEnded = false;

    while(gameEnded === false){
        console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}.`)
        console.log(playRound(playerChoice, computerChoice));
        if (playerScore === 5){
            gameEnded = true;
            return "Player wins the game!"
        } else if (computerScore === 5) {
            gameEnded = true;
            return "Computer wins the game!"
        }
    }
    let reset = prompt("Play again? y/n").toLowerCase();
    if (reset === "y"){
        playerScore = 0
        computerScore = 0
    }
}

console.log(game());
