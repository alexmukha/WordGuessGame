
var cars = ["Ferrari","Tesla","Jaguar","Lamborghini","Lotus","Maserati","Mercedes","Bentley","Bugatti","Lexus"];
for (var i = 0; i < cars.length; i++) {
// var randomcar = Math.floor(Math.random()) + 1;
}

var randomcar = cars[Math.floor(Math.random()*cars.length)];
console.log(randomcar);

// var disp = document.getElementById("object")
// disp.innerHTML.append(randomcar) = "<ol><li>html data</li></ol>";

var show = document.getElementById("object");
// var d = document.createElement("div");
// d.innerHTML = "text";
// show.appendChild(d);
// show.className += "new" + newClassName;
show.classList.add(randomcar);
// var imgsrc = document.createElement("img");
// show.classList.add(randomcar);
// show.appendChild("div");
// show.appendChild(imgsrc);

// function imgsrc() {
//     var show = document.getElementById("object");
//     show.className.add(randomcar);
//   }
//   var div = document.getElementById("object");
//   div.className += " otherclass";
// myFunction();
// var tttt = document.getElementById("object");
// console.log(tttt);

// function show() {
//     var pic = document.createElement("div");
//     var textnode = document.createTextNode("Water");
//     pic.appendChild(textnode);
//     document.getElementById("object").appendChild(pic);
//   }
// imgsrc();


var car = ["f","e","r","r","a","r","i"];  
for (var i = 0; i < car.length; i++) {
}

var word = (randomcar.split(''));
console.log(word);
var show = document.getElementById("word");


// var test =  car.join('');
// console.log(word.join(''));


function guessed() {
    console.log("RESULT ");
}



// Listen for keyboard input and discriminate input
document.onkeydown = function(event) {
    // console.log("Key pressed");
    var userInput = event.key.toString(); {
    // console.log(userInput);
    if (userInput == userInput.replace(/[^a-z]/g)) {
        // console.log("Correct key " + userInput);
        guessed();
    } else if (userInput == userInput.replace(/[^A-Z]/g)) { 
        var userInput = "Caps ON " + userInput;
        // console.log(userInput);
        guessed();
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
    
    if(userInput == car[""]) {
        // console.log("Lets go");
    } else {
        // console.log("Not right key");
    }
   
}