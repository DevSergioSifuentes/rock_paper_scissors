function getComputerChoice(){
    let choice =Math.floor(Math.random()*3) ;
    let sign ="";
    if (choice==0){
        sign = "Rock";
    }
    else if(choice == 1) {
        sign = "Paper";
    }
    else if(choice ==2) {
        sign = "Scissors";
    }
    return sign;
}

function getHumanChoice(){
   const humanChoice=prompt("Select Rock, Paper or Scissors");
   return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   let localHumanChoice = humanChoice.toLowerCase();
   let localComputerChoice = computerChoice.toLowerCase();

   if(localHumanChoice === localComputerChoice){
    console.log("It's a Tie! You both chose "+computerChoice+" No points awarded");
   }
   else if (localHumanChoice === "rock" && localComputerChoice ==="paper" ||
            localHumanChoice === "paper" && localComputerChoice ==="scissors" ||
            localHumanChoice === "scissors" && localComputerChoice ==="rock" ){
        console.log("You lose! Computer's "+computerChoice+" beats your "+humanChoice);
        computerScore ++;
        console.log ("Computer: "+computerScore+" Human: "+humanScore);
   }else{
        console.log("You won! Your "+humanChoice+ " beats Computer's "+computerChoice);
        humanScore ++;
        console.log ("Computer: "+computerScore+" Human: "+humanScore);
   }
}


function playGame(){
    
    for( let i=0; i<5 ; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
}

playGame();

// This line will help later with the turn loop
// for (let i=0; i<20; i++){
//     getComputerChoice();
// }