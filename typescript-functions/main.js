'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
let fiveMinSec = convertMinutesToSeconds(5); // -> 300
let tenMinSec = convertMinutesToSeconds(10); // -> 600
console.log('fiveMinSec:', fiveMinSec);
console.log('tenMinSec:', tenMinSec);
function greet(name) {
  return `Hey ${name}!`;
}
let greetBeavis = greet('Beavis'); // -> "Hey Beavis!"
let greetSpongeBob = greet('SpongeBob'); // -> "Hey SpongeBob!"
console.log('greetBeavis:', greetBeavis);
console.log('greetSpongeBob:', greetSpongeBob);
function getArea(width, height) {
  return width * height;
}
let areaOne = getArea(17, 42); // -> 714
let areaTwo = getArea(22, 38); // -> 836
console.log('areaOne:', areaOne);
console.log('areaTwo:', areaTwo);
function getFirstName(person) {
  return person.firstName;
}
let lelouche = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }); // -> "Lelouche"
let john = getFirstName({ firstName: 'John', lastName: 'Henry' }); // -> "John"
console.log('lelouche:', lelouche);
console.log('john:', john);
const getLastElement = (array) => {
  return array[array.length - 1];
};
let lastElemOne = getLastElement(['propane', 'and', 'propane', 'accessories']); // -> "accessories"
let lastElemTwo = getLastElement([true, true, false, true]); // -> true
console.log('lastElemOne:', lastElemOne);
console.log('lastElemTwo:', lastElemTwo);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
let firstOtherFunc = callOtherFunction(convertMinutesToSeconds, 10); // -> 600
let secotherFunc = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]); // -> "Aloha"
console.log('firstOtherFunc:', firstOtherFunc);
console.log('secOtherFunc:', secotherFunc);
