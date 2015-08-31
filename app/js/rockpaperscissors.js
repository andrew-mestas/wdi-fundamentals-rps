////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   
    return prompt();
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
  console.log("Player " + move);
  return move;
}

function getComputerMove(move) {
    if(move === null)
     move = randomPlay();
    console.log("Comp " + move);
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if(playerMove == computerMove)
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

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tie = 0;
    var result;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
   do{
     console.log("Player: " + playerWins + " Computer " + computerWins + " Tie: " + tie);
 result = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
 if(result == "player") 
  playerWins+=1
 else if (result == "computer")
  computerWins+=1;
 else 
  tie+=1;
    }while(playerWins <= 5 && computerWins <= 5);
    return [playerWins, computerWins];
}

playToFive();
