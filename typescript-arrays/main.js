'use strict';
let colors = ['red', 'white', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]: ${colors[i]}`);
}
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('Value of colors:', colors);
console.log('typeof colors:', typeof colors);
let students = ['Connor', 'Manny', 'Brock', 'Ashley'];
let numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);
console.log(
  `The last student in the array is ${students[students.length - 1]}.`
);
console.log('Value of students:', students);
console.log('typeof students:', typeof students);
