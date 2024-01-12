const choices = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

let playerWinCount = 0;
let computerWinCount = 0;

choices.forEach((choice) =>
	choice.addEventListener("click", (event) => {
		const target = event.target;
		playRound(target.id, getComputerChoice());
	})
);

//Create function which picks a random number between 0 and 2, and then returns Rock, Paper, or Scissors based on it's value
function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);

	switch (randomNum) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

//Create function to play a single round
function playRound(playerSelection, computerSelection) {
	// Reset the game
	if (playerWinCount === 5 || computerWinCount === 5) {
		playerWinCount = 0;
		computerWinCount = 0;
	}

	// Tie
	if (playerSelection === computerSelection) {
		result.textContent = "A tie has occurred. Play again.";
	}
	// Win
	else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		result.textContent = `You win. ${playerSelection} beats ${computerSelection}.`;
		playerWinCount++;
	}
	// Lose
	else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		result.textContent = `You lose. ${computerSelection} beats ${playerSelection}.`;
		computerWinCount++;
	}

	score.textContent = `Player: ${playerWinCount} | Computer: ${computerWinCount}`;

	if (playerWinCount == 5) {
		result.textContent = "The player has won 5 points. You win.";
	} else if (computerWinCount == 5) {
		result.textContent = "The computer has won 5 points. You lose.";
	}
}
