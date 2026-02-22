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