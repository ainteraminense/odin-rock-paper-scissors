// create getComputerChoice function
function getComputerChoice() {
    let randomNumber = Math.random();
    // assign randomly rock, paper or scissor to getComputerChoice
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// check variable
console.log(getComputerChoice());
// create function
// prompt user for input
function getHumanChoice() {
    let humanInput = prompt("Please, enter your choice: rock, paper, or scissors?");
    return humanInput;
}
// print the user input
let test = getHumanChoice();
console.log(test);