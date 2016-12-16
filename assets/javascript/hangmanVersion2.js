var options = ['hello', 'goodbye'];
var blanks = "";
var chancesRemaining = 10;
var rightAnswer=[];
var wrongAnswer = [];

var computerGuess = options[Math.floor(Math.random() * options.length)];


function nextGame() {
    // var computerGuess = options[Math.floor(Math.random()* options.length)];
    chancesRemaining = 10;


}



function blanksSetUp() {


    console.log(computerGuess);
    var computer = computerGuess.split('');
    for (var i = 0; i <= computer.length; i++) {
        blanks += " _ ";

    }
    console.log(blanks);
    // document.querySelector('.blanks').innerHTML = blanks;
}
blanksSetUp();




document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase;
    var answer = computerGuess.indexOf(userGuess);

    if (answer !== -1) {
       rightAnswer.push(userGuess);
        console.log(rightAnswer)
        // document.querySelector('.blank').innerHTML = rightAnswer;


    } else{
    	wrongAnswer.push(userGuess);
    	document.querySelector('.guessedAlphabets')
    			.innerHTML = 'guessed Alphabets' + wrongAnswer;
    	chancesRemaining--;
        if (chancesRemaining <= 0) {
            nextGame();
            return;
    	
    }
}



    document.querySelector('.chancesRemaining')
    		.innerHTML = 'Chances Remaining: ' + chancesRemaining;

}

