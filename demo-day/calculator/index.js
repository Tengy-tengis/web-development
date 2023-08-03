const display = document.getElementById("display");

let final_operation = "";

appendToString = (x) => {
  final_operation = final_operation + x;
  document.getElementById("display").innerHTML = final_operation;
};

const remove = () => {
  final_operation = "";
  display.innerHTML = "0";
};

let finalValue = () => {
  display.innerHTML = eval(final_operation);
  final_operation = "";
};

let changeToNegativePositive = () => {
  final_operation = final_operation * -1;
  display.innerHTML = final_operation;
};

const deleteLast = () => {
  final_operation = final_operation.substring(0, final_operation.length - 1);
  display.innerHTML = final_operation;

  if (final_operation.length === 0) {
    display.innerHTML = "0";
  }
};
