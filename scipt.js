function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beat Paper";
  } else if (playerSelection === computerSelection) {
    return "Its a tie";
  }
}

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomChoice = choice[randomNumber];
  return randomChoice;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock Paper or Scissors?");
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
