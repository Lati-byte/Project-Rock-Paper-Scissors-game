function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'Rock') ||
      (playerSelection === 'rock' && computerSelection === 'Paper') ||
      (playerSelection === 'paper' && computerSelection === 'Scissors')
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return 'It\'s a Tie! Play again.';
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(roundResult);
  
      if (roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Sorry, you lose the game. Better luck next time!');
    } else {
      console.log('It\'s a tie game!');
    }
  }

  game();