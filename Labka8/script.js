let userName = prompt("Please, enter your name:");
if (userName === null || userName === "") {
  userName = "User";
}
document.querySelector('#user h2').textContent = userName;
let userScoreElement = document.querySelector("#user .score");
let computerScoreElement = document.querySelector("#computer .score");
let userResultElement = document.querySelector("#user .result");
let computerResultElement = document.querySelector("#computer .result");
let startGameButton = document.querySelector("#startGame");
let userScore = 0;
let computerScore = 0;
function generateRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}
function updateResults(userNumber, computerNumber) {
  userResultElement.innerText = userNumber;
  computerResultElement.innerText = computerNumber;
  if (userNumber > computerNumber) {
    userScore++;
  } else if (userNumber < computerNumber) {
    computerScore++;
  }
  userScoreElement.innerText = userScore;
  computerScoreElement.innerText = computerScore;
  if (userScore === 3) {
    alert(`${userName} won the game!`);
    resetGame();
  } else if (computerScore === 3) {
    alert("Computer won the game!");
    resetGame();
  }
}
function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreElement.innerText = "0";
  computerScoreElement.innerText = "0";
  userResultElement.innerText = "0";
  computerResultElement.innerText = "0";
}
startGameButton.addEventListener("click", () => {
  let userNumber = generateRandomNumber();
  let computerNumber = generateRandomNumber();
  updateResults(userNumber, computerNumber);
});
alert(`Welcome, ${userName}! Let's start the game.`);
