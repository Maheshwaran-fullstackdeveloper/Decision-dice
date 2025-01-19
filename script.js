// DICE 1

function functionality() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);



//DICE 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);



//WINNER


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").style.fontSize = "5rem"
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WON 🚩";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector("h1").innerHTML = "🚩 PLAYER 2 WON 🚩";
}
else {
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector("h1").innerHTML = "🏳️ DRAW 🏳️";
}
}