$(document).ready(function() {

var displayDash = "";
var randomComputerGuess;
var wrongGuess = [];

// question to be created

var currentQuestion = ['hello', 'good evening'];


function computerGuess(){

	randomComputerGuess = currentQuestion[Math.floor(Math.random() * currentQuestion.length)];

for (var i = 0; i < randomComputerGuess.length; i++){
 	console.log(randomComputerGuess[i]); 
	// if(randomComputerGuess[i] === " ") {
		// displayDash = " ";
	// } else {

		displayDash += ' _ ';
	// }


	$('#mainContainer').html('<div id="dash">' + displayDash + '</div>');
	// console.log(randomComputerGuess);

	// console.log(displayDash);
};


};


function userGuess() {

	var randomUserGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var currentQuestion = randomComputerGuess.split('');


		// for(var z=0; z<currentQuestion.length; z++) {
			var displayDashSplit = displayDash.split('');
			for(var a=0; a<displayDashSplit.length; a++){

				if (currentQuestion.indexOf(randomUserGuess) !== -1) {
	 			// console.log(currentQuestion[z])
	 			// $('#dash').before(randomUserGuess);
	 			displayDashSplit[a] = randomUserGuess;

			}
			}
		}
	 			
	 		// console.log(displayDash);
		// 	} else {
	 // 		wrongGuess.push(randomUserGuess);
	 // 		$('#wrongGuess').append(wrongGuess);
	 // }

		// }
	 
// + '[' + wrongGuess + ']' + '</div>'
	 

	// console.log(randomUserGuess);

	// var checkingUserGuess = true;

	
					
	// {
			
			// $('#mainContainer').html(randomUserGuess);
	
		// return true;
	
		
	// }
	// console.log(checkingUserGuess + 'true');
	// var split = randomComputerGuess.split('');
		// console.log(split);

	// if(randomUserGuess !== -1){
		
	// 	for (var z = 0; z < checkingUserGuess.length; z++){
	// 		$('#mainContainer').html('<div class="answer">' + randomUserGuess + '</div>');


		// }
		// displayDash = randomUserGuess;
		
		
	







computerGuess();


$(document).on('keyup', userGuess);










// win case
	// if the alphabet is twice then it should consider on click.

// within 15 chances if user answered all blanks then wins
	// increase win

// if not then lose case
	// increase loss
	
// words already guessed by user
	// array of words already guesses
	// if word is repeated then it doesn't reduce the guess count





});