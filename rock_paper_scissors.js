var winnerVariable = "Undecided"
//var userChoice = "Undecided"
var startGame = function(){
  var userChoice = prompt("Welcome, please choose rock, paper or scissors");
  console.log("userChoice: " + userChoice);
  makeCompChoice(); //call this function
  console.log("computerChoice: " + computerChoice);
  compare(userChoice, computerChoice); // Arguments that are being passed into 
  showWinner(userChoice, computerChoice);
};

var makeCompChoice = function() { 
	var computerNumber = Math.random();
	if (computerNumber < 0.33) {
		computerChoice = "rock";
	}

	else if (computerNumber < 0.66) {
			computerChoice = "paper";
	}

	else {
		computerChoice = "scissors";
	}
};



var compare = function(choice1, choice2) {
	if (choice1===choice2) {
		alert("Computer choose " + computerChoice.toUpperCase() + " too. The result is a tie!");
	}

	else if (choice1 === "rock"){
		if (choice2 === "scissors"){
		console.log("rock wins");
		winnerVariable = "rock";
		}

		else {
			//return "paper wins";
			console.log("paper wins");
			winnerVariable = "paper";
		}
	}
	

	else if (choice1 === "paper") {
		if (choice2 === "rock"){
			console.log("paper wins");
			winnerVariable = "paper";
		}

		else {
			console.log("scissors wins");
			winnerVariable = "scissors";
		}
	}


	else if (choice1=== "scissors") {
		if (choice2=== "paper"){
			console.log("scissors wins");
			winnerVariable = "scissors";
		}

		else {
			console.log("rock wins");
			winnerVariable = "rock";
		}
	}
};

var showWinner = function(userPick, computerPick) { //modularizing your code
	if (winnerVariable == userPick) {
		console.log("You Win!");
	}

	else if (winnerVariable==computerPick){
		console.log("You Loose!");
	}

	else {
		console.log("It's a Tie!")
	}

	if (winnerVariable=="rock") {
		document.getElementById("winnerPic").className="rockWin";
	}

	else if 
		(winnerVariable=="paper") {
		document.getElementById("winnerPic").className="paperWin";
	}

	else {
		document.getElementById("winnerPic").className="scissorsWin"
	}
};
