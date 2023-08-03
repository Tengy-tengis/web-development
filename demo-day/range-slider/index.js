document.getElementById("myRange").oninput = function () {
  const value = document.getElementById("myRange").value;
  document.getElementById("display").innerHTML = value;
  const penalty = (value - 70) / 5;
  console.log(value == 10, penalty == 120);

  if (value < 70) {
    document.getElementById("display2").innerHTML = "Good safe driving";
    document.getElementById("display2").style.fontSize = "40px";
    document.getElementById("image").src =
      "https://media2.giphy.com/media/111ebonMs90YLu/200.gif";
  } else if (value >= 70 && value < 120) {
    document.getElementById("display2").innerHTML =
      "Speed limit crossed by penalty point =  " + penalty;
    document.getElementById("penalty-score").innerHTML = "+" + penalty;
    document.getElementById("image").src =
      "https://i.pinimg.com/originals/32/61/eb/3261ebb0f5d6c8fd952e7f907db91171.png";
  } else if (value >= 120) {
    document.getElementById("display2").innerHTML = "License Suspended";
    document.getElementById("image").src =
      "https://media.tenor.com/1ssDwtDeM7oAAAAM/disappear.gif";
  }
};
