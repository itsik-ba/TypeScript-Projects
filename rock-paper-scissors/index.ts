const result = document.querySelector("#RESULT")as HTMLHeadElement;  
const playerPick = document.querySelector("#playerpick")as HTMLHeadElement
const computerPick = document.querySelector("#computerpick") as HTMLHeadElement;
const btns = document.querySelectorAll(".btns")!;
let player;
let computer;
let resultes;

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        player =  btn.textContent
        runChoices()
        playerPick.textContent = `player-pick: ${player}`
        computerPick.textContent = `computer-pick: ${computer}`
        result.textContent = `Winner: ${winner()}` 

    })
   })

function runChoices(){
 const randomNumber = Math.floor(Math.random()* 3)+ 1;
  
 switch(randomNumber){
    case 1:
      computer = "ROCK";
      break

     case 2:
        computer = "PAPER";
        break
        
      case 3:
        computer = "SCISSORS" ; 
 }
   
}


function winner(){
if(player == computer){
    return "Draw";
}
else if(computer == "ROCK"){
    return (player == "PAPER") ? "you won" : "you lose"
}
else if(computer == "PAPER"){
 return (player == "SCISSORS") ? "you win" : "you lose"
}
else if(computer == "SCISSORS"){
 return (player == "ROCK") ? "you win" : "you lose"
}
}

