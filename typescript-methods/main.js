'use strict';
let heroes = ['Loki', 'Shang Chi', 'Black Panther', 'Iron Man'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
let randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
let library = [
  {
    title: 'Summley',
    author: 'Wes Phung',
  },
  {
    title: 'Jook Book',
    author: 'Tarrik Moore',
  },
  {
    title: 'Vegan Mob',
    author: 'Toriano Gordon',
  },
];
// interface Book{
//   title: string;
//   author: string;
// }
let lastBook = library.pop();
//why does object instead of any give me an error? but works in console
console.log('lastBook:', lastBook);
let firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
let fullName = 'Andrew Owyang';
let firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
let firstName = firstAndLastName[0];
let sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
let employee = {
  name: 'Emilio',
  age: '25',
  position: 'Basketball Player',
};
let employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
let employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
let employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
//why do we typecast an array of arrays as object[]? because arrays are objects?
