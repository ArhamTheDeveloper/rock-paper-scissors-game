let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beat Paper";
  } else {
    return "It's a tie";
  }
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomChoice = choice[randomNumber];
  return randomChoice;
}
function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, or Scissors?")
      .trim()
      .toLowerCase();
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt(
        "Invalid input. Please enter Rock, Paper, or Scissors:"
      )
        .trim()
        .toLowerCase();
    }
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  }
  console.log(
    `Score : Your Score:${playerScore} Computer Score:${computerScore}`
  );
  if (playerScore > computerScore) {
    console.log("You are the Winner!");
  } else if (computerScore > playerScore) {
    console.log("Computer is the winner");
  } else {
    console.log("Its a Tie");
  }
}

game();
