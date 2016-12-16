
var options = ['a', 'b', 'c', 'd'];
var wins =0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
// var usersGuesses =[];


function resets() {

	guessesLeft=10;
	losses=0;
	wins=0;
}



document.onkeyup =  function(event){

	// var userGuess = string.fromCharCode(event.keyCode).toLowerCase();
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	var computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log(computerGuess);

// usersGuesses = userGuess.split(' ')
// if (usersGuesses.indexof(computerGuess) === -1){

// }
// console.log('array value is', usersGuesses);
guessesSoFar.push(userGuess);
$('.totalGusses').html('Guesses so far: [' + guessesSoFar + ']');
console.log(guessesSoFar);


if(userGuess === computerGuess){

		wins = wins+1;

		$(".wins").html('wins' + wins);
	
	}else{
		losses = losses+1;
		guessesLeft--
		$(".loss").html('losses' + losses);
		$(".guessesLeft").html('Guesses Left' + guessesLeft);

		// if(guessesSoFar.indexof(userGuess) === -1){
		// 	guessesSoFar.push(userGuess);
		// }
		// console.log(guessesSoFar);
			
			if(guessesLeft <= 0){
			resets();
			return;
			
		}
	}












}
