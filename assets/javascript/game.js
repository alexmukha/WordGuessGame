
var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","MercedesBenz","Bentley","Bugatti","Lexus","Koenigsegg","McLaren"];
for (var i = 0; i < cars.length; i++) {
// var randomcar = Math.floor(Math.random()) + 1;
}
var valid = "Keep going";
var invalid = "Try again";

var wins = 0;
var losses = 0;
var guessesRemaining = 9;


var randomcar = cars[Math.floor(Math.random()*cars.length)];
// console.log(randomcar);

var showImg = document.getElementById("object");
showImg.classList.add(randomcar);


var word = (randomcar.split(''));
console.log(word);

// var show = document.getElementById("word");
var letNums = word.length;
// console.log(letNums);

var word, text, letNums, i;
text = '';
for (i = 0; i < letNums; i++) {
  text += '<div class="letter">' + word[i] + '</div>';
}
text += "";
document.getElementById("letterBoxes").innerHTML = text;


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