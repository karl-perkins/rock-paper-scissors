//Create string variable for computer selection
let computerSelection = ''
//Create string variable for player selection
let playerSelection = ''

//Create function which picks a random number between 0 and 2, and then returns Rock, Paper, or Scissors based on it's value
function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);

	switch (randomNum) {
		case 0:
			return 'Rock';
		case 1:
			return 'Paper';
		case 2:
			return 'Scissors';
	};
}

//Create function to play a single round
function playRound() {
	//Get player choice via a prompt and put result into variable
	playerSelection = prompt('Choose Rock, Paper, or Scissors.').toLowerCase();
	//Put result of getComputerChoice into variable
	computerSelection = getComputerChoice().toLowerCase();

	//Create string variable for game results
	let results = ''

	//If player choice and computer choice are the same then play again
	if (playerSelection === computerSelection) {
		console.log('A tie has occurred. Play again.');
		results = playRound();
	}
	//If player choice is Rock and computer choice is Paper then computer wins
	else if (playerSelection === 'rock' && computerSelection === 'paper'){
		results = 'You lose. Paper beats Rock.';
	}
	//If player choice is Rock and computer choice is Scissors then player wins
	else if (playerSelection === 'rock' && computerSelection === 'scissors'){
		results = 'You win. Rock beats Scissors.';
	}
	//If player choice is Paper and computer choice is Rock then player wins
	else if (playerSelection === 'paper' && computerSelection === 'rock'){
		results = 'You win. Paper beats Rock.';
	}
	//If player choice is Paper and computer choice is Scissors then computer wins
	else if (playerSelection === 'paper' && computerSelection === 'scissors'){
		results = 'You lose. Scissors beats Paper.';
	}
	//If player choice is Scissors and computer choice is Rock then computer wins
	else if (playerSelection === 'scissors' && computerSelection === 'rock'){
		results = 'You lose. Rock beats Scissors.';
	}
	//If player choice is Scissors and computer choice is Paper then player wins
	else if (playerSelection === 'scissors' && computerSelection === 'paper'){
		results = 'You win. Scissors beats Paper.';
	}
	
	return results;
}

//Log results to console
console.log(playRound());