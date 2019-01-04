$(document).ready(function() {
var playing = false;
    console.log(playing);

var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","MercedesBenz","Bentley","Bugatti","Lexus","Koenigsegg","McLaren"];
var pickedCar = cars.slice(); // duplicate the array
console.log(pickedCar);


function Start() {
    playing = true;
    console.log(playing);

}
function Choose() {
    pickCar = pickedCar[Math.floor(Math.random()*cars.length)];
    for (var i = 0; i < cars.length; i++) {
    }
    randomcar = pickCar.toLowerCase();
    
    pickedCar.splice(pickedCar.indexOf(pickCar), 1 ); // remove played car
    console.log(pickedCar);
}

function reset() {
    allGuesses = 29;
    wrongGuess = [];
    spaceOrLetter = [];
    // pickedCar.push(cars);
    // console.log(pickedCar);
    Choose()
    // document.getElementById("guesses").innerHTML = " " + allGuesses;
}


function Guess() {
    console.log("Guessing the game");

}


document.onkeypress = function(event) {
    playing = true;
    var userInput = (event.key); 
        if (userInput == userInput.replace(/[^a-z]/g)) {
        Guess()    
        userInput = "Correct input " + userInput;
        }else if (userInput == userInput.replace(/[^A-Z]/g)) {
        userInput = "Caps ON " + userInput;
        }else if (userInput == userInput.replace(/[^0-9]/g)) {
        userInput = userInput + " is a Number";
        }else  {userInput = userInput + " is NOT a letter";
        }
        console.log(userInput + " " + playing);  

        if (playing === true) {
            Start()
            console.log("Lets play " + pickCar);
            console.log(pickedCar);

        } else {
            console.log("No game today " + playing);
        }
        
}

reset()
}) // closing document.ready function()