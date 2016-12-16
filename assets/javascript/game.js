var option = ["lord of the rings", "avatar", "casino royale", "interstellar",
"jurassic park", "harry potter", "sherlock homes", "life of pi"]; //options is a random questions
var wins = 0; 	//number of games won
var hiddenAns = "";	//hidden answer are dashes which will come according to the length of the guess
var lose = 10; //lose are the number of chances given to the user to guess
var currentOption; //current option is the current question
// var addUserGuess = [];
var wrongGuess = []; //wrong guess is an array of letters already guessed by the user







function nextQuestion() { //This is a function for resetting to get the next question

    currentOption = option[Math.floor(Math.random() * option.length)]; //math operator for picking randon array index
    console.log(currentOption);

    lose = 10; //initialising losing chances
    hiddenAns = ""; //initialising the hidden answer after reaching to next question
    wrongGuess = [];

    for (var i = 0; i < currentOption.length; i++) { //this forLoop will is running for a particular index
    	if(currentOption[i] === " "){
    		hiddenAns = hiddenAns + " ";
    	}else{
    		  hiddenAns += "-";
    	}

    }
    // console.log(hiddenAns);


    document.querySelector(".dash")
        .innerHTML = hiddenAns;


}

nextQuestion();







document.addEventListener("keyup", function(event) { //can also be written as document.onkeyup = function(event){}

    document.querySelector(".title")
        .innerHTML = 'Press Any Key to get Started';
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //converting user guesses into a string of lowercase

    var revealing = currentOption.indexOf(userGuess);




    // value below 0
    if (lose < 0) {

        // document.querySelector('.betterLuck')
        // 		.innerHTML = '<h1>' + "Try Next Question!" + '</h1>';

        // console.log('betterLuck')

        nextQuestion();

        return;

    }



    // win case
    if (revealing !== -1) {
        // hiddenAns = hiddenAns.substr(0, revealing) + userGuess + hiddenAns.substr(revealing+1);


        var hiddenAnsArray = hiddenAns.split('');
        for (var z = 0; z < hiddenAnsArray.length; z++) {
            if (currentOption[z] === userGuess) {
                hiddenAnsArray[z] = userGuess;
            }

            hiddenAns = hiddenAnsArray.join('');
        }
        // console.log(hiddenAns);



        if (hiddenAns === currentOption) {
            wins++;
            nextQuestion();


            return;

        }




        document.querySelector(".dash")
            .innerHTML = hiddenAns;


        document.querySelector('.wins')
            .innerHTML = 'Wins : ' + wins;


        // lose case

    } else {


        if (wrongGuess.indexOf(userGuess) === -1) {
            wrongGuess.push(userGuess);
            // console.log(wrongGuess);


            document.querySelector(".lose")
                .innerHTML = '<br>' + 'Number of Guesses Remaining' + '</br>' + lose--;

        }



        document.querySelector(".alreadyGuessed")
            .innerHTML = 'Letters Already Guessed [' + wrongGuess + ']';
        // console.log('wrongGuess' + wrongGuess);



    }



});