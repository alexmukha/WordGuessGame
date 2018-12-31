
var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","MercedesBenz","Bentley","Bugatti","Lexus","Koenigsegg","McLaren"];
for (var i = 0; i < cars.length; i++) {
// var randomcar = Math.floor(Math.random()) + 1;
}

var valid = "Keep going";
var invalid = "Try again";

var word = [];
var randomcar = "";
var space = 0;
var spaceLetter = [];
var wrongGuess = [];

var allGuesses = 9;
var wins = 0;
var losses = 0;



function Play() {
randomcar = cars[Math.floor(Math.random()*cars.length)];
// console.log(randomcar);
word = (randomcar.split(''));

// var show = document.getElementById("word");
space = word.length;
var word, space, i;
// text = '';

for (var i = 0; i < space; i++) {
    spaceLetter.push(word[i]);

document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceLetter.join("</div><div class='blank'></div><div class='letter'>") + "</div>";
}

var showImg = document.getElementById("object");
showImg.classList.add(randomcar);

}


function engine() {
    //Audio
    //---------------------------
    if (randomcar === cars[0]) {
        sond.play();
    }
}


function reset() {
    allGuesses = 9;
    wrongGuess = [];
    spaceLetter = [];
    Play()
}



function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomcar is equal to the letter entered... then variable is true
    for (var i = 0; i < space; i++) {
        if (randomcar[i] == letter) {
            letterInWord = true;
            console.log(randomcar);
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < space; i++) {
            if (randomcar[i] == letter) {
                spaceLetter[i] = letter;
                console.log(randomcar);
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(spaceLetter);
}


// console.log(letNums);


document.onkeydown = function(eventKey) {
    var keyInput = eventKey.key.toString(); {
        console.log(keyInput); 
        if (Array.word === keyInput) {
            console.log("You pressed");
        }
    }
}


function alphaKey() {
    console.log("RESULT ");
}



// Listen for keyboard input and discriminate input
document.onkeydown = function(event) {
    // console.log("Key pressed");
    var userInput = event.key.toString(); {
    // console.log(userInput);
    if (userInput == userInput.replace(/[^a-z]/g)) {
        // console.log("Correct key " + userInput);
        alphaKey();
        // if (userInput === word) {
            // console.log(word)
        // }
    } else if (userInput == userInput.replace(/[^A-Z]/g)) { 
        var userInput = "Caps ON " + userInput;
        // console.log(userInput);
        alphaKey();
    } else if (userInput == userInput.replace(/[^0-9]/g)) {
        var userInput = userInput + " is a Number";
        console.log(userInput);
    } else  {
        var userInput = userInput + " is NOT a letter";
        console.log(userInput);
    }


    if (userInput === "a") {
        // console.log("user says " + userInput);
    }
    }
    
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (word.toString() == spaceLetter.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceLetter.join("</div><div class='blank'></div><div class='letter'>") + "</div>";
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
    console.log(spaceLetter);
}



Play();


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}