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

	//Create integer variable for game results, 1 = win, 0 = lose.
	let results = 0;

	//If player choice and computer choice are the same then play again
	if (playerSelection === computerSelection) {
		console.log('A tie has occurred. Play again.');
		results = playRound();
	}
	//If player choice is Rock and computer choice is Paper then computer wins
	else if (playerSelection === 'rock' && computerSelection === 'paper'){
		console.log('You lose. Paper beats Rock.');
		results = 0;
	}
	//If player choice is Rock and computer choice is Scissors then player wins
	else if (playerSelection === 'rock' && computerSelection === 'scissors'){
		console.log('You win. Rock beats Scissors.');
		results = 1;
	}
	//If player choice is Paper and computer choice is Rock then player wins
	else if (playerSelection === 'paper' && computerSelection === 'rock'){
		console.log('You win. Paper beats Rock.');
		results = 1;
	}
	//If player choice is Paper and computer choice is Scissors then computer wins
	else if (playerSelection === 'paper' && computerSelection === 'scissors'){
		console.log('You lose. Scissors beats Paper.');
		results = 0;
	}
	//If player choice is Scissors and computer choice is Rock then computer wins
	else if (playerSelection === 'scissors' && computerSelection === 'rock'){
		console.log('You lose. Rock beats Scissors.');
		results = 0;
	}
	//If player choice is Scissors and computer choice is Paper then player wins
	else if (playerSelection === 'scissors' && computerSelection === 'paper'){
		console.log('You win. Scissors beats Paper.');
		results = 1;
	}
	
	return results;
}

//Create function to play a best-of-five game
function game() {
	//Create integer variable for number of wins
	let winCount = 0;

	//Play 5 rounds
	for (let round = 1; round < 6; round++) {
		console.log('Round ' + round);

		//If player wins then add 1 to win count
		winCount += playRound();
	}

	//If player wins at least 3 rounds then player wins overall
	//Else player loses
	return (winCount >= 3 ? 'You win.' : 'You lose.');
}

console.log(game());