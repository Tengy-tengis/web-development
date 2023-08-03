const students = ["John", "Jack", "Johny", "Jill", "James"];

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }

// const numbers = [1, 2, 3, 12, 24, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     console.log(numbers[i]);
//   }
// }

// console.log(numbers[4])

// const names = [
//   "Aleksandr",
//   "Elizabeth",
//   "John",
//   "Jane",
//   "Jack",
//   "Jill",
//   "James",
// ];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length >= 5) {
//     console.log(names[i]);
//   }
// }

// for (let i = 0; i < combinations.length; i++) {
//   if (typeof combinations[i] == "boolean") {
//     console.log(combinations[i]);
//   }
// }

// console.log(typeof combinations[2]);

// const names = ["Sage", "Lisa", "Sam", "Micha", "Dave", "Wyatt", "Emma"];

// for (let i = 0; i < names.length; i++) {
//   console.log("Hello! " + names[i]);
// }

// const list1 = [2, 3, 76, 4, 5, 6, 7, 8, 10];

// const list2 = [];

// for (let i = 0; i < list1.length; i++) {
//   console.log(list1[i] * list1[i]);
//   list2.push(list1[i] * list1[i]);
// }

// console.log(list2);

// Nested for-loop
const numbers = [10, 20, 25, 400, 100];

for (let first = 0; first < numbers.length; first++) {
  for (let second = 0; second < numbers.length; second++) {
    if (numbers[first] * numbers[first] == numbers[second]) {
      console.log(numbers[first], numbers[second]);
    }
  }
}
