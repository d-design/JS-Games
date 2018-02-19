// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;
var result;

// main function containing the game logic
function play(){
    // "this" in a javascript function context refer to the current owner of the event (the item that was clicked).
	userChoice = this.id; // registering the buttons id!
	computerInput();
	compare();
	display();
}

function computerInput(){
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "Paper";
    }
    
}

function compare(){
    if((userChoice == "Rock" && computerChoice == "Scissors") || (userChoice == "Paper" && computerChoice == "Rock") || (userChoice == "Scissors" && computerChoice == "Paper")){
       result = "You win... Well done!";
    } else if(userChoice == computerChoice){
        result = "It's a draw";
    } else {
        result = "Computer wins... Bad luck";
    }
}

function display(){
    computerChoiceDisplay.innerHTML = computerChoice;
    playerChoiceDisplay.innerHTML = userChoice;
    resultDisplay.innerHTML = result;
}