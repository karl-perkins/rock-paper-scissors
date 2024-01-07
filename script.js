//Create string variable for computer selection
let computerSelection = '';

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

//Put result of getComputerChoice into variable
computerSelection = getComputerChoice();