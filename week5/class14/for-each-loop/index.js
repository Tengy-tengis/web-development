// const fruits = ["apple", "banana", "orange"];
// const colors = ["red", "yellow", "orange"];

// const main = document.createElement("div");

// const ordered_list = document.createElement("ol");
// main.appendChild(ordered_list);

// for (let i = 0; i < fruits.length; i++) {
//   const list_fruits = document.createElement("li");
//   list_fruits.innerHTML = fruits[i];
// list_fruits.style.backgroundColor = color[i];
//   ordered_list.appendChild(list_fruits);
// }

// fruits.forEach((fruit, index) => {
//   const list_fruits = document.createElement("li");
//   list_fruits.setAttribute("className", "list_fruit");
//   list_fruits.innerHTML = fruit;
//   list_fruits.style.backgroundColor = colors[index];
//   ordered_list.appendChild(list_fruits);
// });

// const body = document.getElementsByTagName("body")[0];
// body.appendChild(main);

// let i = 1;
// while (i <= 30) {
//   console.log(i);
//   i = i + 2;
// }

// const hopper = (num1, num2) => {
//   let i = 0;
//   while (i < num1) {
//     console.log(i);
//     i = i + num2;
//   }
// };

// hopper(100, 5);

const hopper1 = (num1, num2) => {
  for (let i = 0; i < num1; i = i + num2) {
    console.log(i);
  }
};

hopper1(100, 4);
