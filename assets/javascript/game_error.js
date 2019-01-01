
// var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","MercedesBenz","Bentley","Bugatti","Lexus","Koenigsegg","McLaren"];
var cars = ["Ferrari","Tesla"];
for (var i = 0; i < cars.length; i++) {
// var randomcar = Math.floor(Math.random()) + 1;
}

var valid = "Keep going";
var invalid = "Try again";

var wordCap = [];
var wordLow = [];
var randomcar = "";
var space = 0;
var spaceOrLetter = [];
var wrongGuess = [];

var allGuesses = 9;
var wins = 0;
var losses = 0;


function Play() {
// randomcar = cars[Math.floor(Math.random()*cars.length)];
pickCar = cars[Math.floor(Math.random()*cars.length)];
randomcar = pickCar.toLowerCase();

randomcarLow = randomcar.toLowerCase();


// console.log(rancar);
// wordCap = (randomcar.split(''));
wordLow = (randomcarLow.split(''));
// space = wordCap.length;
space = wordLow.length;

console.log(randomcarLow);
console.log(wordLow);
// var word, space, i; 
for (var i = 0; i < space; i++) {
    spaceOrLetter.push("_");
document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";
// document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='blank'></div><div class='letter'>") + "</div>";
}

// var showImg = document.getElementById("object");
// showImg.classList.add(pickCar);

var showImg = document.getElementById("imageCar").src = "./assets/images/" + pickCar + "-No.png";
// var showImg = document.getElementById("object").innerHTML = "<div class='" + pickCar + "-No" + "' id='objectIn'></div>";
// var showImg = document.getElementById("object").innerHTML = "<div class='" + pickCar + "-No" + " fadeOut'></div>";

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
    spaceOrLetter = [];
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
                spaceOrLetter[i] = letter;
                console.log(randomcar);
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        allGuesses--;
    }
    console.log(spaceOrLetter);
}


// console.log(letNums);


document.onkeydown = function(eventKey) {
    var keyInput = eventKey.key.toString(); {
        console.log(keyInput); 
        // if (Array.wordCap === keyInput) {
        if (Array.wordLow === keyInput) {
            console.log("You pressed");
        }
    }
}


function alphaKey() {
    console.log("RESULT ");
}



function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + allGuesses)

    //if WON...then alert, play audio, display image and reset new round
    // if (wordCap.toString() == spaceOrLetter.toString()) {
    if (wordLow.toString() == spaceOrLetter.toString()) {
            // if (wordCap.toString() == spaceOrLetter.toString().toLowerCase()) {
        wins++;
        showImg = document.getElementById("imageCar").src = "./assets/images/" + pickCar + ".png";

        // aud()
        // delay();
        showImg = document.getElementById("object").innerHTML = "<div class='" + pickCar + "-No" + " fadeOut' id='objectIn'></div>";
        // delay();
        showImg = document.getElementById("object").innerHTML = "<div class='" + pickCar + "></div>";
        // reset()
        //display wins on screen
        // document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (allGuesses === 0) {
        losses++;
        // reset()
        // document.getElementById("image").src = "./assets/images/try-again.png"
        // document.getElementById("losstracker").innerHTML = " " + losses;
    }
    // document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='blank'></div><div class='letter'>") + "</div>";
    document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";

    // var lowercase = spaceOrLetter[i].toLowerCase();
    // document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + lowercase.join("</div><div class='letter'>") + "</div>";

    // document.getElementById("allGuesses").innerHTML = " " + allGuesses;
    console.log(spaceOrLetter);
}



Play();
// Listen for keyboard input and discriminate input
document.onkeydown = function(event) {
    // console.log("Key pressed");
    // var userInput = event.key.toString(); {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();{
        
        // console.log(userInput);
    if (userInput == userInput.replace(/[^a-z]/g)) {
        // console.log("Correct key " + userInput);
        alphaKey();
        checkLetters(userInput);
        // if (userInput === wordCap) {
            // console.log(wordCap)
        // }
    } else if (userInput == userInput.replace(/[^A-Z]/g)) { 
        var userInput = "Caps ON " + userInput;
        // console.log(userInput);
        alphaKey();
        checkLetters(userInput);
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
    complete();
}

reset();
