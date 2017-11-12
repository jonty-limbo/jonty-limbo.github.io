var guessInput = document.querySelector('#guess-input');
var guessForm = document.querySelector('#guess-form');
var guessLog = document.querySelector('#guess-log');
var guessresults = document.querySelector('#guess-results');
var guessnumber = Math.floor(Math.random()*100)+1;


function makeGuess(guess) {
    //guessLog.textContent = guessLog.textContent + "";
    guessLog.textContent += " " + guess;
    
    if (parseInt(guess) > guessnumber) {
        // the user's number was too large
        return "too high";
    }
    else if (parseInt(guess) < guessnumber) {
        return "too low";
    }
    else if (parseInt(guess) === guessnumber) {
        return "well done";
    }
    else {
        return "";
    }
}

guessForm.addEventListener("submit", function(event) {
    guessresults.textContent = makeGuess(guessInput.value);
    guessInput.value = "";
    event.preventDefault();
});
