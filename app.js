const options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;

//declare variables needed
let buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;
//for each button we added an event listener, listening for a click.
buttons.forEach((button) => {
    //when clicked do this.
    button.addEventListener('click', (e) => {
        let playerChoice = button.id;
        let computerChoice = options[randomizedChoice()];
        console.log(playRound(playerChoice, computerChoice));

        if (playerScore === 5 || computerScore === 5) {
            announceWinner();
        }
    });
    
})

function announceWinner() {
    playerScore > computerScore ? (results.textContent = "You won the game!") : (results.textContent = "You lost the game :(");
}

function keepPlayerScore(){
    let playerScoreboard = document.querySelector('#player-score');
    playerScoreboard.textContent = playerScore;
}

function keepCpuScore(){
    let cpuScoreboard = document.querySelector('#cpu-score');
    cpuScoreboard.textContent = computerScore;
}

function randomizedChoice(){
    return Math.floor(Math.random() * options.length)
}

function playRound(playerChoice, computerChoice){
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice === computerChoice){ //draw
        results.textContent = "Draw."
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){ //win conditions
        playerScore++
        keepPlayerScore();
        results.textContent = `You win, ${playerChoice} beats ${computerChoice}.`
    } else { //if not win conditions, it's lose.
        computerScore++
        keepCpuScore();
        results.textContent = `You lose, ${computerChoice} beats ${playerChoice}.`
    }
}







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
