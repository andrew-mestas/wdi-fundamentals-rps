////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
  var input;
  do{
    input = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  }while(!check(input));
  return input;
  
}
function check(input){
  switch(input)
    {
      case "rock" :
      case "paper" :
      case "scissors" :
      case "quit" :
       return true;
      default : alert("Please enter rock, paper, or scissors");
       return false;
    }
  }
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  if(move === null)
   move = getInput();
  alert("Player chose " + move);
  return move;
}

function getComputerMove(move) {
    if(move === null)
     move = randomPlay();
    alert("Computer chose " + move);
    return move;
}

function getWinner(playerMove,computerMove) {
  var winner;
  winner = "Computer";
  if(playerMove == "quit")
    return playerMove;
  if(playerMove.length == computerMove.length)
     winner = "tie";
  else{
    if(playerMove == "rock")
    {
      if(computerMove == "scissors")
       winner = "Player";
    }
    else if(playerMove == "paper")
    {
      if(computerMove == "rock")
       winner = "Player";
    }
    else if(playerMove == "scissors")
    {
      if(computerMove == "paper")
       winner = "Player";
    }
    else
      winner = "Computer";
  }
  
    return winner;
}

function playTo(playUntil) {
    alert("Let's play Rock, Paper, Scissors. \nThe person who wins " + playUntil + " rounds will be declared the champion! \nEnter quit to exit at any time.");
 
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    var result;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//noprotect
  do{
     alert("Player: " + playerWins + " Computer: " + computerWins + " Tie: " + tie);
 result = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
   if(result == "quit")
     alert("Exiting Now!");
   else{   
     alert(result == "tie" ? "Tie match..." : result + " wins this round!");
     if(result == "Player") 
       playerWins+=1;
     else if (result == "Computer")
       computerWins+=1;
     else 
       tie+=1;
    } 
  }while(playerWins != playUntil && computerWins != playUntil && result != "quit");
  alert((playerWins == playUntil ? "Player" : "Computer") + " is the champion!" );
    return [playerWins, computerWins];
}
function testNum(){
  var choice;
  
  do{
    choice = prompt("How many rounds of rock paper scissors do you want to play?");
  }while(isNaN(choice));
  return choice;
}

var choice = testNum();
playTo(choice);
