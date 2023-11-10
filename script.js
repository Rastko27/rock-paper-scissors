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