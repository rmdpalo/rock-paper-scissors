const options = ["Rock", "Paper", "Scissors"];
let computerChoice = options[randomizedChoice()];

//declare variables needed
const buttons = document.querySelectorAll('button');
const playerScoreboard = document.getElementById('#player-score');
const cpuScoreboard = document.getElementById('#cpu-score');
const results = document.getElementById('#results');

let playerScore = 0;
let computerScore = 0;
//for each button we added an event listener, listening for a click.
buttons.forEach((button) => {
    //when clicked do this.
    button.addEventListener('click', (e) => {
        let playerChoice = button.id;
        let computerChoice = options[randomizedChoice()];
        console.log(playRound(playerChoice, computerChoice));
    });
    
})


let playerChoice;

function randomizedChoice(){
    return Math.floor(Math.random() * options.length)
}

function playRound(playerChoice, computerChoice){
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

playerScoreboard.textContent = playerScore;
cpuScoreboard.textContent = computerScore;
let gameEnded = false;

// function resetGame (winner){
//     let reset = prompt("Play again? 'y' to restart.").toLowerCase();
//     if (reset === "y"){
//         playerScore = 0
//         computerScore = 0
//         gameEnded = false
//         game();
//     }
//     console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}.`)
//     console.log(`${winner} won the game!`)
// }

// function game(){
//     while(gameEnded === false){
//         console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}.`)
//         computerChoice = options[randomizedChoice()];
//         console.log(playRound(playerChoice, computerChoice));
//         if (playerScore === 5){
//             // gameEnded = true;
//             resetGame("You");
//             return 
//         } else if (computerScore === 5) {
//             // gameEnded = true;
//             resetGame("The computer");
//             return 
//         }
//     }
// }

// console.log(game());
