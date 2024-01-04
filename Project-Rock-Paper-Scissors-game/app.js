const buttons = document.querySelectorAll('button');
const compScore = document.querySelector('#compScore')
const myScore = document.querySelector('#myScore')
//initailize the variables of the score
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id.toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        const result = playRound(playerSelection, computerSelection);
        const divResult = document.querySelector('#result');
        divResult.textContent = result;

        

        //increamentaion of the scores if one wins
        if (result.startsWith('You Win!')) {
            playerScore++;
        } else if (result.startsWith('You Lose!')) {
            computerScore++;
        }

        if (playerScore === 5) {
            divResult.textContent = `You won the game! Final score: ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            divResult.textContent = `You lost the game! Final score: ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else {
            compScore.textContent = `Computer Score: ${computerScore}`;
        myScore.textContent = `My Score: ${playerScore}`;
            divResult.textContent += ` Current score: ${playerScore}-${computerScore}`;
           
        }
    });
});



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'It\'s a Tie! Play again.';
    }
}