const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const body = document.querySelector("body");
const lost = document.getElementsByClassName("game-modal")[0];
const hangmanImg = document.getElementById("hangman-img");
const win = document.getElementsByClassName("game-modal-victory")[0];
const correctDisplay = document.getElementById("correct-word-display");
const btns = document.querySelectorAll("button");
console.log(btns);
const container = document.getElementById("container");
const svg = document.querySelector("svg");
// const easyModeSet = new Set();
// const mediumMode = [];
// const hardMode = [];

// // separating the words to easy, medium, and hard
// randomWords.forEach((word) => {
//   const wordLength = word.length;
//   if (/\s/.test(word)) {
//     return;
//   }
//   if (wordLength >= 3 && wordLength <= 4) {
//     easyModeSet.add(word);
//   } else if (wordLength >= 5 && wordLength <= 6) {
//     mediumMode.push(word);
//   } else if (wordLength >= 7) {
//     hardMode.push(word);
//   }
// });

// const easyMode = Array.from(easyModeSet);

// console.log("EasyMode:", easyMode);
// console.log("MediumMode:", mediumMode);
// console.log("HardMode:", hardMode);

// refresh
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.getElementById("refreshBtn");

  refreshButton.addEventListener("click", () => {
    location.reload();
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const refreshButton2 = document.getElementById("refreshBtn2");

//   refreshButton2.addEventListener("click", () => {
//     location.reload();
//   });
// });

let currentWord;
let mistakes = 0;
let correctWord = [];

// picking random words
function pickRandom() {
  const word =
    nonCapitalizedWords[Math.floor(Math.random() * randomWords.length)];
  currentWord = word;
  console.log(word);
  return word;
}

// making the first letter unCapitalized
const nonCapitalizedWords = randomWords.map((word) => {
  return word.charAt(0).toLowerCase() + word.slice(1);
});

// console.log(nonCapitalizedWords);

let randomWord = pickRandom();
let randomWordLength = randomWord?.length;

// adding under line scaling to the words length
for (let i = 0; i < randomWordLength; i++) {
  let li = document.createElement("li");
  li.setAttribute("class", "letter");
  li.style.fontSize = "56px";
  document.getElementsByClassName("word-display")[0].appendChild(li);
}

// matching the letters to the currentword if it is or not
function initGame(button, clickedLetter) {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctWord.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        wordDisplay.querySelectorAll("li")[index].style.fontSize = "32px";

        if (correctWord.length == currentWord.length) {
          gameVictory();
        }
      }
    });
  } else {
    mistakes++;
    document.getElementById("mistake-display").innerHTML = mistakes;
    hangmanImg.src = `images/hangman-${mistakes}.svg`;

    button.disabled = true;
    if (mistakes == 6) {
      console.log(gameOver());
      gameOver();
    }
  }
}

// button
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

function gameOver() {
  lost.style.display = "flex";
}

function gameVictory() {
  win.style.display = "flex";
}

correctDisplay.innerHTML = currentWord;
correctDisplay.style.textTransform = "uppercase";

function startGame() {
  document.getElementById("big-div").style.display = "flex";
  document.getElementById("starting-menu").style.display = "none";
}

function returnBtn() {
  document.getElementById("big-div").style.display = "none";
  document.getElementById("starting-menu").style.display = "flex";
}

function nextBtn() {
  document.getElementsByClassName("game-modal-victory")[0].style.display =
    "none";
  location.reload();
}

// Get the button element by its ID
const changePathButton2 = document.getElementById("btn2");

// Add a click event listener to the button
changePathButton2.addEventListener("click", () => {
  // Change the path to your own index.html
  window.location.href = "start.html";
});

document.getElementById("mode-changer").onchange = function () {
  let theme_mode = document.getElementById("mode-changer").value;

  if (theme_mode === "black") {
    body.style.backgroundImage =
      "url(https://i.pinimg.com/originals/d3/7c/f6/d37cf6a8f0aea8a3183b5bdea812b5c7.gif)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "100% 100%";
    container.style.backgroundColor = "blue";
    container.style.color = "white";
    document.getElementById("btn2").style.backgroundColor = "blue";
    document.getElementById("btn2").style.color = "white";
    document.getElementById("imgs").src =
      "https://www.iconsdb.com/icons/preview/white/arrow-91-xxl.png";
    for (let i = 0; i < document.getElementsByClassName("btn").length; i++) {
      document.getElementsByClassName("btn")[i].style.backgroundColor = "white";
      document.getElementsByClassName("btn")[i].style.color = "black";
      document.getElementsByClassName("btn")[i].style.boxShadow = "none";
      document.getElementsByClassName("btn")[i].style.hover = "gray ";
    }
    document
      .getElementById("hangman-img")
      .setAttribute("src", `images1/hangman-${mistakes}-white.svg`);
  } else {
    body.style.backgroundImage =
      "url(https://i.pinimg.com/originals/e4/15/c4/e415c48c6387706cc02f92b09501cab5.gif)";
    container.style.backgroundColor = "white";
    container.style.color = "darkblue";
    document.getElementById("btn2").style.backgroundColor = "white";
    document
      .getElementById("hangman-img")
      .setAttribute("src", `images/hangman-${mistakes}.svg`);
  }
};
