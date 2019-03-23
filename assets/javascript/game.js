
var cars = ["Ferrari", "Tesla", "Jaguar", "Lamborghini", "Lotus", "Maserati", "MercedesBenz", "Bentley", "Bugatti", "Lexus", "Koenigsegg", "McLaren"];
var carList = cars.slice(); // duplicate the array

// Assign default values to some of the variables
var word = [];
var randomcar = "";
var space = 0;
var spaceOrLetter = [];
var wrongGuess = [];
var allGuesses = 11;
var wins = 0;
var losses = 0;
var engine = document.createElement("audio")

document.getElementById("guesses").innerHTML = " " + allGuesses;

// activate the game
function Play() {

    totalCars = carList.length; // Tracking number of cars left

    // Stop game when array is empty
    if (totalCars <= 0) {
        pauseGame = true
    } else {
        pickCar = carList[Math.floor(Math.random() * carList.length)] // Picking a random car
        carList.splice(carList.indexOf(pickCar), 1); // Removing picked car from array
        randomcar = pickCar.toLowerCase(); // Car name to lower case

    }

    word = (randomcar.split('')); // Breaking up the word into letter array
    space = word.length; // Counting words in the word

    // Creating a box for each letter of the word
    for (var i = 0; i < space; i++) {
        // spaceOrLetter.push("&nbsp;");
        spaceOrLetter.push("<input type='text' class='lspace'/>");
        // document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";
        document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";
    }

    // Placing image matching the word
    document.getElementById("carImgBox").innerHTML = "<div class='imgBox1'><img id='gone' src='./assets/images/spacer.png' height='450px' width='600px'></div><div class='imgBox2'><img src='./assets/images/" + pickCar + "-No.png' height='450px' width='617px'></div>";

    // Displaying losses
    document.getElementById("losses").innerHTML = " " + losses;

}
// Reseting the game
function reset() {
    allGuesses = 11;
    wrongGuess = [];
    spaceOrLetter = [];
    Play()
    document.getElementById("guesses").innerHTML = " " + allGuesses;
    engine.pause();
}
// Check letters
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomcar is equal to the letter entered... then variable is true
    for (var i = 0; i < space; i++) {
        if (randomcar[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < space; i++) {
            if (randomcar[i] == letter) {
                spaceOrLetter[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        allGuesses--;
        for (var i = 0; i < wrongGuess; i++) {
            document.getElementById("error").innerHTML = wrongGuess;

        }
    }
}

function complete() {

    if (word.toString() == spaceOrLetter.toString()) {
        wins++; // Add 1 to wining number
        engine.setAttribute("src", "assets/audio/" + pickCar + ".mp3") // Match the sound to the name of the car
        engine.play() // Play engine sound
        // Display images of the random car
        document.getElementById("carImgBox").innerHTML = "<div class='imgBox1'><img id='gone' src='./assets/images/" + pickCar + "-No.png' height='450px' width='617px'></div><div class='imgBox2'><img id='see' src='./assets/images/" + pickCar + ".png' height='450px' width='600px'></div>";
        // Add continiue button
        document.getElementById("replay").innerHTML = "<button onclick='reset()'  tabindex='1'>NEXT</button>";

        var fade = setInterval(fadeout, 4000); // timeout for removing black image

        function fadeout() {
            document.getElementById("gone").classList.add("gone"); // Hiding black image
        }
        //display wins on screen
        document.getElementById("wins").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (allGuesses === 0) {
        losses++;
        reset()
        document.getElementById("losses").innerHTML = " " + losses;
    }
    document.getElementById("letterBoxes").innerHTML = "<div class='letter'>" + spaceOrLetter.join("</div><div class='letter'>") + "</div>";

    document.getElementById("guesses").innerHTML = " " + allGuesses;
}

// Listen for keyboard input and discriminate input
document.onkeypress = function (event) {
    var userInput = String.fromCharCode(event.keyCode); {

        if (userInput == userInput.replace(/[^a-z]/g)) {
            checkLetters(userInput);
            document.getElementById("error").innerHTML = "";
        } else if (userInput == userInput.replace(/[^A-Z]/g)) {
            var userAlert = "Caps ON - " + userInput;
            document.getElementById("error").innerHTML = userAlert;
            checkLetters(userInput);
        } else if (userInput == userInput.replace(/[^0-9]/g)) {
            var userAlert = userInput + " - is a Number";
            document.getElementById("error").innerHTML = userAlert;
        } else {
            var userAlert = userInput + " - is NOT a letter";
            document.getElementById("error").innerHTML = userAlert;
        }
    }
    complete();
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

reset();
