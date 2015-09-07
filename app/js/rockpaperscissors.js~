////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
  winner = "computer";
  
  if(playerMove.length == computerMove.length)
     winner = "tie";
  else{
    if(playerMove == "rock")
    {
      if(computerMove == "scissors")
       winner = "player";
    }
    else if(playerMove == "paper")
    {
      if(computerMove == "rock")
       winner = "player";
    }
    else if(playerMove == "scissors")
    {
      if(computerMove == "paper")
       winner = "player";
    }
    else
      winner = "computer";
  }
  
    return winner;
}

function playTo(playUntil) {
    alert("Let's play Rock, Paper, Scissors. \nThe person who wins " + playUntil + " rounds will be declared the champion!");
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    var result;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//noprotect
  do{
     alert("Player: " + playerWins + " Computer: " + computerWins + " Tie: " + tie);
 result = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
     alert(result == "tie" ? "Tie match..." : result + " wins this round!");
 if(result == "player") 
  playerWins+=1;
 else if (result == "computer")
  computerWins+=1;
 else 
  tie+=1;
    }while(playerWins <= playUntil && computerWins <= playUntil);
  alert(playerWins == playUntil ? "Player" : "Computer" + " is the champion!" );
    return [playerWins, computerWins];
}

var choice = prompt("How many rounds of rock paper scissors do you want to play?");
playTo(choice);
