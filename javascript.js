function getComputerChoice(){
    let choice =Math.floor(Math.random()*3) ;
    if (choice==0){
        console.log("Rock");
    }
    else if(choice == 1) {
        console.log("Paper");
    }
    else if(choice ==2) {
        console.log("Scissors");
    }
}

// This line will help later with the turn loop
// for (let i=0; i<20; i++){
//     getComputerChoice();
// }