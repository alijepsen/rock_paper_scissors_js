var winLose = document.getElementById('winner');
var results = '';
var tieCount = 0;
var winCount = 0;
var loseCount = 0;
var scoreboard = document.getElementById('scoreboard');

//User Choice by Class Name
var userChoice = document.getElementsByClassName('choice');

// array of options for computer
var options = ['Rock', 'Paper', 'Scissors'];

// Computer Choice
var comChoice;

// Computer Choice
function computerChoice() {
  var index = Math.floor(Math.random() * options.length);
  comChoice = options[index];
}

// USER CHOICE
for(var i=0; i < userChoice.length; i+=1) {
  var selected = userChoice[i];
  selected.addEventListener('click', function(){
    document.getElementById('ali').innerHTML = ("You selected: " + this.id)
    computerChoice();
    document.getElementById('computer').innerHTML=("Computer selected: " + comChoice)
    compare(this.id,comChoice);
  })
}

// COMPARE
var compare = function(choice1,choice2) {
    if(choice1 === choice2) {
        results = "The result is a tie!";
        tieCount++
    }
    else if(choice1 === "Rock") {
        if(choice2 === "Scissors") {
            results = "You Win!";
            winCount++
        }
        else {
            results = "You Lose!!";
            loseCount++
        }
    }
    else if(choice1 === "Paper") {
        if(choice2 === "Rock") {
            results = "You Win!";
            winCount++
        }
        else {
            results = "You Lose!!";
            loseCount++
        }
    }
    else if(choice1 === "Scissors") {
        if(choice2 === "Paper") {
            results = "You Win!";
            winCount++
        }
        else {
            results = "You Lose!!";
            loseCount++
        }
    }
     winLose.innerText = results;
     scoreboard.innerText = "Wins: " + winCount + " | Losses: " + loseCount + " | Ties: " + tieCount
};

