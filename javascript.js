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

console.log(getHumanChoice());
console.log(getComputerChoice());


// This line will help later with the turn loop
// for (let i=0; i<20; i++){
//     getComputerChoice();
// }