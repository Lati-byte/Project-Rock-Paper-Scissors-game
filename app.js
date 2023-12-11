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