document.getElementById("rock").addEventListener("click", function() {
  getResult("rock");
}, false);

document.getElementById("paper").addEventListener("click", function() {
  getResult("paper");
}, false);

document.getElementById("scissors").addEventListener("click", function() {
  getResult("scissors");
}, false);

let compChoice = null; //computer choice
genRandom();

function genRandom () {
let choices = ["rock", "paper", "scissors"];
let randNum = Math.floor((Math.random() * 3));
for (var i = 0; i < choices.length; i++) {
  if (i == randNum) {
    compChoice = choices[i];
  }
}
}


function getResult(selection) {
if (selection == "rock") {
  if (compChoice == "rock"){
    printScreen(selection, "Tie");
  }
  else if (compChoice == "scissors") {
    printScreen(selection, "You win!");
  }
  else {
    printScreen(selection, "You lose!");
  }
}
else if (selection == "paper") {
  if (compChoice == "paper"){
    printScreen(selection, "Tie");
  }
  else if (compChoice == "rock") {
    printScreen(selection, "You win!");
  }
  else {
    printScreen(selection, "You lose!");
  }
}
else {
  if (compChoice == "scissors"){
    printScreen(selection, "Tie");
  }
  else if (compChoice == "paper") {
    printScreen(selection, "You win!");
  }
  else {
    printScreen(selection, "You lose!");
  }
}
compChoice = null; //reset compChoice 
genRandom(); //call function again for new game
}

function printScreen(selection, message) {

document.getElementById("message1").innerHTML = "Rock, Paper, Scissors...";
document.getElementById("message2").innerHTML = "You threw " + selection;
document.getElementById("message3").innerHTML = "Your opponenet threw " + compChoice;
document.getElementById("message4").innerHTML = message;
}