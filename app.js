const options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;

//declare variables needed
let buttons = document.querySelectorAll('button.player-button');
const results = document.querySelector('#results');
let cpuScoreboard = document.querySelector('#cpu-score');
let playerScoreboard = document.querySelector('#player-score');
const restartButton = document.querySelector('#restart');


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
            buttons.forEach((button) => {
                button.disabled = true;
            })
        }
    });
    
})

restartButton.addEventListener('click', (e) => {
    resetGame();
});

function announceWinner() {
    playerScore > computerScore ? (results.textContent = "You won the game!") : (results.textContent = "You lost the game :(");
}

function keepPlayerScore(){
    playerScoreboard.textContent = playerScore;
}

function keepCpuScore(){
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

function resetGame(){
    playerScore = 0
    computerScore = 0
    cpuScoreboard.textContent = computerScore;
    playerScoreboard.textContent = playerScore;
    results.textContent = 'Play by picking a choice above.';
    buttons.forEach((button) => {
        button.disabled = false;
    })
}
