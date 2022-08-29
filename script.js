function getComputerChoice(){
    var Myarray = ["rock","paper","scissor"];
    var random=Math.floor(Math.random()*Myarray.length)
    let choice=Myarray[random]
    return choice
}

function round(playerSelection,computerSelection){
    if (computerSelection === "rock"){
        return "Draw"
    }
    else if(computerSelection=== "paper"){
        return "Comp wins"
    }
    else{
        return "you win"
    }
   
}
function game(){
    let playerScore= 0;
    let computerScore=0;
    for (let i = 0 ;i<5;i++){
        let playerSelection = prompt("your choice: ");
        let computerSelection = getComputerChoice();
        if (round(playerSelection,computerSelection)=='Draw'){
            console.log("Draw! Both player gets a point")
            playerScore +=1;
            computerScore +=1;
        }
        else if (round(playerSelection,computerSelection)=="Comp wins"){
            computerScore +=1;
            console.log("Computer wins! +1 for him")
        }
        else{
            playerScore +=1;
            console.log("Youw win! +1 for you")
        }
        console.log("Player Score : " + playerScore  + " Computer score : "+computerScore)
        
    }
}
let playerSelection = "rock"
let computerSelection = getComputerChoice()
game()