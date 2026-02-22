// create getComputerChoice function
function getComputerChoice() {
    let randomNumber = Math.random();
    // assign randomly rock, paper or scissor to getComputerChoice
    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// create function
// prompt user for input
function getHumanChoice() {
    let humanInput = prompt("Please, enter your choice: rock, paper, or scissors?");
    humanInput = humanInput.toLowerCase();
    humanInput = humanInput.replace(humanInput.charAt(0), humanInput.charAt(0).toUpperCase());
    return humanInput;
}

// create variables to save the scores
// initialize them with 0
let humanScore = 0;
let computerScore = 0;

// create function playRound
// use the parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    // make human choice case insensitive
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.replace(humanChoice.charAt(0), humanChoice.charAt(0).toUpperCase());
    // write the logic of the game
    switch(humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                announceLoss(humanChoice, computerChoice);
                computerScore++;
                break;
            } else if (computerChoice == "Scissors") {
                announceWin(humanChoice, computerChoice);
                humanScore++;
                break;
            } else {
                console.log("It's a tie!");
                break;
            }
        case "Paper":
            if (computerChoice == "Scissors") {
                announceLoss(humanChoice, computerChoice);
                computerScore++;
                break;
            } else if (computerChoice == "Rock") {
                announceWin(humanChoice, computerChoice);
                humanScore++;
                break;
            } else {
                console.log("It's a tie!");
                break;
            }
        case "Scissors":
            if (computerChoice == "Rock") {
                announceLoss(humanChoice, computerChoice);
                computerScore++;
                break;
            } else if (computerChoice == "Paper") {
                announceWin(humanChoice, computerChoice);
                humanScore++;
                break;
            } else {
                console.log("It's a tie!");
                break;
            }
        default:
            console.log("Something went wrong");
    }
    // announce round winner 
    function announceWin(humanChoice, computerChoice) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    }

    function announceLoss(humanChoice, computerChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
// check variable
console.log(`humanSelection = ${humanSelection}`);
console.log(`computerSelection = ${computerSelection}`);


