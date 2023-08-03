function randomSelector() {
  const choices = ["rock", "paper", "scissors"];
  const randomResult = choices[Math.floor(Math.random() * 3)];
  return randomResult;
}
document.getElementById("rockBtn").addEventListener("click", function () {
  const randomResult = randomSelector();
  if (randomResult == "rock") {
    document.getElementById("winners-display").innerHTML = "Tied";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "paper") {
    document.getElementById("winners-display").innerHTML =
      "You lost :< good luck on next one kid :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "scissors") {
    document.getElementById("winners-display").innerHTML = "You Won :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  }
});

document.getElementById("paperBtn").addEventListener("click", function () {
  const randomResult = randomSelector();
  if (randomResult == "rock") {
    document.getElementById("winners-display").innerHTML = "You Won :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "paper") {
    document.getElementById("winners-display").innerHTML = "Tied";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "scissors") {
    document.getElementById("winners-display").innerHTML =
      "You lost :< good luck on next one kid :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  }
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
  const randomResult = randomSelector();
  if (randomResult == "rock") {
    document.getElementById("winners-display").innerHTML =
      "You lost :< good luck on next one kid :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "paper") {
    document.getElementById("winners-display").innerHTML = "You Won :>";
    document.getElementById("winners-display").style.fontSize = "50px";
  } else if (randomResult == "scissors") {
    document.getElementById("winners-display").innerHTML = "Tied";
    document.getElementById("winners-display").style.fontSize = "50px";
  }
});
