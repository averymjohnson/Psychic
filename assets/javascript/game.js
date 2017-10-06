var pWins= document.getElementById("wins");
var pLosses= document.getElementById("losses");
var pGuessesLeft = document.getElementById("guessesLeft");
var pGuessesUsed = document.getElementById("guessesUsed");

var wins = 1;
var losses = 1;
var guessesLeft = 8;
var guessesUsed = 1;

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = Math.floor((Math.random()*(letter.length-1)));
var psychicLetter = letter[random];
var previousGuesses = pGuessesUsed.textContent;

function newLetter() {
	random = Math.floor((Math.random()*(letter.length-1)));
	psychicLetter = letter[random];
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	
	if (userGuess === psychicLetter) {
		pWins.textContent = "Wins: " + wins++;
		newLetter();
		guessesLeft = 9;
		pGuessesLeft.textContent = "Guesses Left: " + guessesLeft--;
		previousGuesses = ""
		pGuessesUsed.textContent = previousGuesses;
	} else {
			if(guessesLeft === 0) {
				guessesLeft = 9;
				pGuessesLeft.textContent = "Guesses Left: " + guessesLeft--;
				pLosses.textContent = "Losses: " + losses++;
				newLetter();
				previousGuesses = ""
				pGuessesUsed.textContent = previousGuesses;
			} else {
				pGuessesLeft.textContent = "Guesses Left: " + guessesLeft--;
				pGuessesUsed.textContent = previousGuesses + userGuess;
				previousGuesses = pGuessesUsed.textContent + ", ";
		}
	}
	

}