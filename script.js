const gameOptions = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const iconWrapper = document.querySelectorAll('.icon-wrapper');
const resultText = document.querySelector('.result-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const roundNumber = document.getElementById('round-number');

let choice = '';
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[random];
}

let computerChoice = getComputerChoice();

function addPlayerIcon(playerChoice) {
  const icon = document.createElement('img');
  icon.src = `images/${playerChoice}.png`;
  icon.classList.add('game-icon');
  iconWrapper.item(3).appendChild(icon);
}

function addComputerIcon() {
  const computerIcon = document.createElement('img');
  computerIcon.src = `images/${computerChoice}.png`;
  computerIcon.classList.add('game-icon');
  iconWrapper.item(4).appendChild(computerIcon);
}

function clearIcons(wrapper) {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
}

rock.addEventListener('click', function () {
  clearIcons(iconWrapper.item(3));
  clearIcons(iconWrapper.item(4));
  if (roundsPlayed < 5) {
    playRound('rock', computerChoice);
    addComputerIcon();
    addPlayerIcon('rock');
    computerChoice = getComputerChoice();
  }
});

paper.addEventListener('click', function () {
  clearIcons(iconWrapper.item(3));
  clearIcons(iconWrapper.item(4));
  if (roundsPlayed < 5) {
    playRound('paper', computerChoice);
    addComputerIcon();
    addPlayerIcon('paper');
    computerChoice = getComputerChoice();
  }
});

scissors.addEventListener('click', function () {
  clearIcons(iconWrapper.item(3));
  clearIcons(iconWrapper.item(4));
  if (roundsPlayed < 5) {
    playRound('scissors', computerChoice);
    addComputerIcon();
    addPlayerIcon('scissors');
    computerChoice = getComputerChoice();
  }
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    resultText.innerText = 'Player won! Rock beats scissors';
    humanScore++;
    playerScoreText.textContent = humanScore;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    resultText.innerText = 'Player won! Scissors beat paper';
    humanScore++;
    playerScoreText.textContent = humanScore;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    resultText.innerText = 'Player won! Paper beats rock';
    humanScore++;
    playerScoreText.textContent = humanScore;
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    resultText.innerText = 'Computer won! Rock beats scissors';
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    resultText.innerText = 'Computer won! Scissors beat paper';
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    resultText.innerText = 'Computer won! Paper beats rock';
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (humanChoice === computerChoice) {
    resultText.innerText = "It's a tie!";
  } else {
    console.log('Invalid choice!');
  }

  roundsPlayed++;
  roundNumber.textContent = roundsPlayed;

  if (roundsPlayed === 5) {
    if (computerScore > humanScore) {
      resultText.textContent = `Computer won the game with ${computerScore} points!`;
    } else if (humanScore > computerScore) {
      resultText.textContent = `Player won the game with ${humanScore} points!`;
    } else if (humanScore === computerScore) {
      resultText.textContent = `The game ended as a tie!`;
    }
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
    playerScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
  }
}
