var cars = ["a","e","y","u","i","o"];  

function guess() {
    console.log("RESULT ");
}
console.log(cars["1"]);
document.onkeydown = function(event) {
    // console.log("Key pressed");
    var userInput = event.key.toString(); {
    // console.log(userInput);
    if (userInput == userInput.replace(/[^a-z]/g)) {
        // console.log("Correct key " + userInput);
        guess(+ userInput);
    } else if (userInput == userInput.replace(/[^A-Z]/g)) { 
        var userInput = "Caps ON " + userInput;
        // console.log(userInput);
        guess(+ userInput);
    } else if (userInput == userInput.replace(/[^0-9]/g)) {
        var userInput = "NO Numbers " + userInput;
        console.log(userInput);
    } else  {
        var userInput = "NOT a letter " + userInput;
        console.log(userInput);
    }






    if (userInput === "a") {
        // console.log("user says " + userInput);
    }
    }
    if(userInput == cars[""]) {
        console.log("Lets go");
    } else {
        // console.log("Not right key");
    }
   
}