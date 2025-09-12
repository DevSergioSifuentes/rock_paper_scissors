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

// function getHumanChoice(){
//    const humanChoice=prompt("Select Rock, Paper or Scissors");
//    return humanChoice;
// }

let humanScore = 0;
let computerScore = 0;

const scoreP = document.querySelector("#score_p");
const resultP = document.querySelector("#results_p");
const container = document.querySelector(".container");

const rockButton = document.querySelector("#rock_option");
const paperButton = document.querySelector("#paper_option");
const scissorsButton = document.querySelector("#scissors_option");


function updateScore(){
    scoreP.textContent = "Computer: " +computerScore+ "  Human: "+
    humanScore;
}

function playRound(humanChoice, computerChoice){
   let localHumanChoice = humanChoice.toLowerCase();
   let localComputerChoice = computerChoice.toLowerCase();

   if(localHumanChoice === localComputerChoice){
    resultP.textContent=" ";
    resultP.textContent= "It's a Tie! You both chose "+computerChoice+" No points awarded";
   }
   else if (localHumanChoice === "rock" && localComputerChoice ==="paper" ||
            localHumanChoice === "paper" && localComputerChoice ==="scissors" ||
            localHumanChoice === "scissors" && localComputerChoice ==="rock" ){
        resultP.textContent= " ";
        resultP.textContent= "You lose! Computer's "+computerChoice+" beats your "+humanChoice;
        computerScore ++;
        
   }else{
        resultP.textContent= " ";
        resultP.textContent = "You won! Your "+humanChoice+ " beats Computer's "+computerChoice;
        humanScore ++;
        
   }
}

function playGame(choice){    
    
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScore();
    // if(computerScore === 5 || humanScore === 5){
    //     alert("Game Over");
    // }
}

updateScore();

rockButton.addEventListener("click", () => {
    playGame("Rock");
})

paperButton.addEventListener("click", () => {
    playGame("Paper");
})

scissorsButton.addEventListener("click", () => {
    playGame("Scissors");
})



