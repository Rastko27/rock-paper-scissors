function getComputerChoice(){
   let computerChoice = Math.floor( Math.random() * 3 ) + 1;
   if(computerChoice == 1){
       return "ROCK";
   }
   else if(computerChoice == 2){
       return "PAPER";
   }
   else{
       return "SCISSORS";
   }
}

function play(playerSelection, computerSelection){
   playerSelection = prompt("Rock, Paper or Scissors?");
   playerSelection = playerSelection.toUpperCase();
   computerSelection = getComputerChoice();
   if(playerSelection === "ROCK"){
       if(computerSelection === "ROCK"){
           console.log("It's a draw! Rock vs Rock.");
           return 0;
       }
       else if(computerSelection === "PAPER"){
           console.log("You lose! Paper beats Rock.");
           return 2;
       }
       else if(computerSelection === "SCISSORS"){
           console.log("You win! Rock beats Scissors.");
           return 1;
       }
   }
   if(playerSelection === "PAPER"){
       if(computerSelection === "ROCK"){
           console.log("You win! Paper beats Rock.");
           return 1;
       }
       else if(computerSelection === "PAPER"){
           console.log("It's a draw! Paper vs Paper.");
           return 0;
       }
       else if(computerSelection === "SCISSORS"){
           console.log("You lose! Scissors beat Rock.");
           return 2;
       }
   }
    if(playerSelection === "SCISSORS"){
       if(computerSelection === "ROCK"){
           console.log("You Lose! Rock beats Scissors.");
           return 2;
       }
       else if(computerSelection === "PAPER"){
           console.log("You win! Scissors beat paper.");
           return 1;
       }
       else if(computerSelection === "SCISSORS"){
           console.log("It's a draw! Scissors vs Scissors.");
           return 0;
       }
    }
}

function game(){
   let player=0,computer=0;
   for(let i=0;i<5;i++){
       let result = play();
       if(result==0){
           player++;
           computer++;
       }
       if(result==1){
           player++;
       }
       if(result==2){
           computer++;
       }
   }
   console.log("Final Score: " + player + ":" + computer);
   if(player>computer){
       console.log("You win!");
   }
   else if(player<computer){
       console.log("You lose!");
   }
   else if(player==computer){
       console.log("It's a draw!");
   }
}