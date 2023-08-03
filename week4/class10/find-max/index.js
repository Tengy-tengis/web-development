function findMax(a, b) {
  if (Number(a) > Number(b)) {
    return a;
  } else {
    return b;
  }
}
document.getElementById("userBtn").addEventListener("click", function () {
  let user_inp = document.getElementById("userInp").value;
  let user_inp2 = document.getElementById("userInp2").value;
  console.log(user_inp, user_inp2);
  let highest_number = findMax(user_inp, user_inp2);
  console.log(highest_number);
  document.getElementById("display").innerHTML = highest_number;
});
