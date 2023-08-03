// const students = [
//   { name: "john", age: 13, gender: "male" },
//   { name: "Sarah", age: 13, gender: "female" },
//   { name: "Bob", age: 15, gender: "male" },
//   { name: "Alex", age: 10, gender: "male" },
//   { name: "Bianca", age: 14, gender: "female" },
// ];

// for (let i = 0; i < students.length; i++) {
//   for (let properties in students[i]) {
//     console.log(students[i][properties]);
//   }
// }

const student_details = [
  { name: "john", age: 13, gender: "male", course: "history", grade: 90 },
  { name: "Sarah", age: 13, gender: "female", course: "history", grade: 50 },
  { name: "Bob", age: 15, gender: "male", course: "biology", grade: 95 },
  { name: "Alex", age: 10, gender: "male", course: "math", grade: 70 },
  { name: "Bianca", age: 14, gender: "female", course: "history", grade: 90 },
];

// for (let i = 0; i < student_details.length; i++) {
//   if (student_details[i].grade > 80) {
//     console.log(
//       student_details[i].name +
//         " Congrats on passing" +
//         " " +
//         student_details[i].course +
//         " test"
//     );
//   } else {
//     console.log(
//       student_details[i].name +
//         " Sorry for not passing" +
//         " " +
//         student_details[i].course +
//         " test"
//     );
//   }
// }

for (let i = 0; i < student_details.length; i++) {
  student_details[i].course = "music";
  console.log(student_details[i]);
}
