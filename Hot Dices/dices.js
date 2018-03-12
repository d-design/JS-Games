	class Player {
		
		constructor(name){
				this.name = name;
				this.score = 0;
		}
		
		get facts(){
            return 'This player is named ' + this.name + ' /  Players current score is ' + this.score;
        }
		
		set points(point){
			this.score = point;
		}		
		
		get points(){
			return this.score;
		}
	
	}


class Dice {
	
	rolldice(){
		return Math.floor((Math.random() * 6) + 1);
	}	
}

	// checks for local storage or else sets game start values in local storage
	if(localStorage.getItem('Playername') === null){
		localStorage.setItem('Playername', prompt('Enter your name'));
		var p1 = new Player(localStorage.getItem('Playername'));
		localStorage.setItem('playerScore', p1.points = 0);
		localStorage.setItem('computerScore', 0);
		
		// Creating a variable to hold each teams scores
		var computerScore = 0;
		var playerScore = 0;
	}else{
		var p1 = new Player(localStorage.getItem('Playername'));
		var playerScore = parseInt(localStorage.getItem('playerScore'));
		p1.points = playerScore;
		var computerScore = parseInt(localStorage.getItem('computerScore'));
	}

	
	// Creating 4 dices
	var dice1 = new Dice();
	var dice2 = new Dice();
	var dice3 = new Dice();
	var dice4 = new Dice();

	function play(){
		"use strict";

		// Creating a variable to hold the dices number after they have been rolled
		var rolledDice1 = dice1.rolldice();
		var rolledDice2 = dice2.rolldice();
		var rolledDice3 = dice3.rolldice();
		var rolledDice4 = dice4.rolldice();
		
		//Human dice round score
		var humanresult = rolledDice1 + rolledDice2;
		
		//Presenting the human result
		document.getElementById('dice1_h').innerHTML  = 'Dice 1 = ' + rolledDice1;
		document.getElementById('dice2_h').innerHTML  = 'Dice 2 = ' + rolledDice2;
		document.getElementById('result_h').innerHTML  = 'Result is ' + humanresult;
		
		//Computer dice round score
		var computerresult = rolledDice3 + rolledDice4;
		
		//Presenting the computer result
		document.getElementById('dice1_c').innerHTML  = 'Dice 1 = ' + rolledDice3;
		document.getElementById('dice2_c').innerHTML  = 'Dice 2 = ' + rolledDice4;
		document.getElementById('result_c').innerHTML  = 'Result is ' + computerresult;
		
		
		//Flowcontrol to see who won the round, presenting win or loose message and adding points to totalscore
		if(humanresult > computerresult){
		   playerScore += 1;
			p1.points += 1;
		   document.getElementById('message').innerHTML = "You win";
		} else if(humanresult == computerresult){
			document.getElementById('message').innerHTML = "It's a draw";
		} else {
			computerScore += 1;
			document.getElementById('message').innerHTML = "You loose";
		}
		
		//Presenting the Total scores
		document.getElementById('h_score').innerHTML  = 'Your score = ' + playerScore;
		document.getElementById('c_score').innerHTML  = 'Computer score = ' + computerScore;
		
		//Saving the Total scores in browser
		localStorage.setItem('playerScore', playerScore);
		localStorage.setItem('computerScore', computerScore);
		
		//Prints the player facts in the console to show that the object also is created and used
		console.log(p1.facts);
	}


	function deletegame(){	
		"use strict";

		if (confirm('are you sure you want to delete game?')) {
			localStorage.removeItem('Playername');
			localStorage.removeItem('playerScore', playerScore);
			localStorage.removeItem('computerScore', computerScore);
			location.reload();
		} else {

		}
		
	}






