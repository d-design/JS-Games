// JavaScript Document

	//Global variables
	var number1 = 1;
	var number2 = 11;

	// regular function with a return value 
	function calculate() {

	var result = number1 + number2;
		
		return result;
	}
	
	console.log(calculate());
	
	
	//ECMA6 arrow function, with multible fuctions you need to include the function body arround {}
	var result = () => number1 + number2;
	
	console.log(result());
	
	//Function with user input
	function userinput(){
		"use strict";
		
		// let is restricting the scope to the actual code block, statement or expression
		let number1 = parseInt(prompt('Type a number: ', ''));
		let number2 = parseInt(prompt('Type a number: ', ''));
		let result = number1 + number2;
		document.getElementById("output").innerHTML = "resultat = " + result;

	}
	
	userinput();


	function player(name, score){
		"use strict";
		
		this.name = name;
		this.score = score;
		
		this.greeting = function(){
			alert('Hi ' + this.name + ' your score is ' + this.score);
		};
	}

	var newplayer = new player('Daniel', 100);	
	newplayer.greeting();

	//arrays  - players and their scores
	
	//Creating and n dimentional array using literal notation
	var playerScore = [
		['Jessica', 0], 
		['Daniel', 10],
		['Morten', 6],
		['Simone', 1],
	];

	playerScore.push['Peter', 2];

	console.log(playerScore);

var output1 = document.getElementById("output1");

 function getplayers(){
	 "use strict";
		for(var i = 0; i < playerScore.length; i++) {
		  output1.innerHTML += ' Your score: ' + playerScore[i] + '<br>';
	 }
 }

getplayers();


