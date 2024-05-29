const gameOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const random = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[random];
}

function getHumanChoice() {
  let choice = prompt('Rock, Paper or Scissors?');
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice.toLowerCase();

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
      console.log('Player won! Rock beats scissors');
      humanScore++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      console.log('Player won! Scissors beat paper');
      humanScore++;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      console.log('Player won! Paper beats rock');
      humanScore++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
      console.log('Computer won! Rock beats scissors');
      computerScore++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
      console.log('Computer won! Scissors beat paper');
      computerScore++;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
      console.log('Computer won! Paper beats rock');
      computerScore++;
    } else if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      console.log('Invalid choice!');
    }

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    roundsPlayed++;
  }

  do {
    playRound(humanSelection, computerSelection);
  } while (roundsPlayed < 5);
}

playGame();
