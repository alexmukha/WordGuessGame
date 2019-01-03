
var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","MercedesBenz","Bentley","Bugatti","Lexus","Koenigsegg","McLaren"];
// var cars = ["Ferrari","Tesla","MercedesBenz"];
for (var i = 0; i < cars.length; i++) {
}

var valid = "Keep going";
var invalid = "Try again";

var wordCap = [];
var word = [];
var randomcar = "";
var space = 0;
var spaceOrLetter = [];
var wrongGuess = [];
var pickedCar = [];

var allGuesses = 9;
var wins = 0;
var losses = 0;
var carsPlayed = [];


function Play() {
pickCar = cars[Math.floor(Math.random()*cars.length)];
randomcar = pickCar.toLowerCase();

for (var i = 0; i < carsPlayed; i++) {
    if (pickCar === pickedCar[i]){
        console.log("Match");
    }
    // console.log(">" + pickCar);
    // console.log(">>" + pickedCar[i]);

}


pickedCar.push(pickCar);
carsPlayed = pickedCar.length;

    console.log(">" + pickCar);
    console.log(">>" + pickedCar[i]);

// randomcarLow = randomcar.toLowerCase();
// 

// console.log(rancar);
// wordCap = (randomcar.split(''));
// word = (randomcarLow.split(''));
word = (randomcar.split(''));
// space = wordCap.length;
space = word.length;
// if (carsPlayed == cars.length) {
    // alert("No more cars");
// }
// console.log(randomcarLow);
// console.log(word);
// var word, space, i; 
for (var i = 0; i < space; i++) {
    spaceOrLetter.push("&nbsp;");
document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";

}


// console.log(word.length);
console.log(pickedCar);
// console.log(word[i]);
console.log(spaceOrLetter);


// var showImg = document.getElementById("object");
// showImg.classList.add(pickCar);

// document.getElementById("carImg").src = "./assets/images/" + pickCar + "-No.png";
document.getElementById("carImgBox").innerHTML = "<div class=\"imgBox1\"><img src=\"./assets/images/spacer.png\" height=\"450px\" width=\"600px\"></div><div class=\"imgBox2\"><img src=\"./assets/images/" + pickCar + "-No.png\" height=\"450px\" width=\"617px\"></div>";
// document.getElementById("carImgBox").innerHTML = "<div class=\"imgBox1\"><img src=\"./assets/images/" + pickCar + "-No.png\" height=\"450px\" width=\"617px\"></div><div class=\"imgBox2\"><img id=\"gone\" src=\"./assets/images/" + pickCar + ".png\" height=\"450px\" width=\"600px\"></div>";


// document.getElementById("carImgBox").innerHTML = "<div class=\"imgBox1\"><img src=\"./assets/images/" + pickCar + ".png\" height=\"450px\" width=\"600px\"></div><div class=\"imgBox2\"><img src=\"./assets/images/" + pickCar + "-No.png\" height=\"450px\" width=\"617px\" id=\"gone\"></div>";

// document.getElementById("carImgBox").innerHTML = "<div class=\"imgBox2\"><img src=\"./assets/images/" + pickCar + "-No.png\"></div>";

// var showImg = document.getElementById("object").innerHTML = "<div class='" + pickCar + "'></div>";
document.getElementById("losses").innerHTML = " " + losses;
    
}


var a = document.getElementById("Ferrari");
var b = document.getElementById("Tesla");


function engine() {
    //Audio
    //---------------------------
    if (pickCar === cars[0]) {
        a.play();
    }
 else if (pickCar === cars[1]) {
        b.play();
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
            // console.log(randomcar);
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < space; i++) {
            if (randomcar[i] == letter) {
                spaceOrLetter[i] = letter;
                // console.log(randomcar);
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        allGuesses--;
    }
    // console.log(spaceOrLetter);
}


// console.log(letNums);


document.onkeydown = function(eventKey) {
    var keyInput = eventKey.key.toString(); {
        console.log(keyInput); 
        // if (Array.wordCap === keyInput) {
        if (Array.word === keyInput) {
            // console.log("You pressed");
        }
    }
}


function alphaKey() {
    // console.log("RESULT ");
}


var fade = setInterval(fadeout, 4000);



function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + allGuesses)
    // console.log(pickedCar);
    // console.log(carsPlayed);
    //if WON...then alert, play audio, display image and reset new round
    // if (wordCap.toString() == spaceOrLetter.toString()) {
    if (word.toString() == spaceOrLetter.toString()) {
            // if (wordCap.toString() == spaceOrLetter.toString().toLowerCase()) {
        wins++;
        // engine();
        // document.getElementById("carImg").src = "./assets/images/" + pickCar + ".png";
        document.getElementById("carImgBox").innerHTML = "<div class=\"imgBox1\"><img id=\"gone\" src=\"./assets/images/" + pickCar + "-No.png\" height=\"450px\" width=\"617px\"></div><div class=\"imgBox2\"><img id=\"see\" src=\"./assets/images/" + pickCar + ".png\" height=\"450px\" width=\"600px\"></div>";
        document.getElementById("replay").innerHTML = "<button onclick=\"reset()\"  tabindex=\"1\">NEXT</button>";
        
        // reset()
        
        // replay()
        //display wins on screen
        document.getElementById("wins").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (allGuesses === 0) {
        losses++;
        reset()
        // document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losses").innerHTML = " " + losses;
    }
    // document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='blank'></div><div class='letter'>") + "</div>";
    document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";

    // var lowercase = spaceOrLetter[i].toLowerCase();
    // document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + lowercase.join("</div><div class='letter'>") + "</div>";

    document.getElementById("guesses").innerHTML = " " + allGuesses;
    // console.log(spaceOrLetter);
}
function fadeout() {
    document.getElementById("gone").classList.add("gone");
}



// Play();
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
        // console.log(userInput);
    } else  {
        var userInput = userInput + " is NOT a letter";
        // console.log(userInput);
    }


    if (userInput === "a") {
        // console.log("user says " + userInput);
    }
    }
    complete();
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

reset();
