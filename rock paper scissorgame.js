const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice){
    const a = Math.random()*3
const b = Math.floor(a)
const computerChoice = choices[b]
    let result = "";
    if(playerChoice == computerChoice){
        result = "IT'S A TIE"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice == "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
                case "paper":
                    result = (computerChoice == "rock") ? "YOU WIN" : "YOU LOSE";
                    break;
                    case "scissors":
                    result = (computerChoice == "paper") ? "YOU WIN" : "YOU LOSE";
                    break;
        }
    }
     playerDisplay.textContent = "PLAYER:" + playerChoice;
     computerDisplay.textContent = "Computer:" + computerChoice;
      resultDisplay.textContent = result;
}