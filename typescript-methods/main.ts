const heroes: string[] = ['Loki', 'Shang Chi', 'Black Panther', 'Iron Man'];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library: object[] = [
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

const lastBook: any = library.pop();
// why does object instead of any give me an error? but works in console
console.log('lastBook:', lastBook);
const firstBook: any = library.shift();
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

const fullName: string = 'Andrew Owyang';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

const employee: object = {
  name: 'Emilio',
  age: '25',
  position: 'Basketball Player',
};
const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues: string[] = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs: object[] = Object.entries(employee);
console.log('employeePairs:', employeePairs);
// why do we typecast an array of arrays as object[]? because arrays are objects?
