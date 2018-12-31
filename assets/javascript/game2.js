
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

for (var i = 0; i < space; i++) {
    spaceLetter.push(" ");
}




var showImg = document.getElementById("object");
showImg.classList.add(randomcar);

var word, text, space, i;
text = '';
for (i = 0; i < space; i++) {
  text += '<div class="letter">' + word[i] + '</div>';
}
text += "";
document.getElementById("letterBoxes").innerHTML = text;
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
Play();