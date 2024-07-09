function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
const fiveMinSec: number = convertMinutesToSeconds(5); // -> 300
const tenMinSec: number = convertMinutesToSeconds(10); // -> 600
console.log('fiveMinSec:', fiveMinSec);
console.log('tenMinSec:', tenMinSec);

function greet(name: string): string {
  return `Hey ${name}!`;
}
const greetBeavis: string = greet('Beavis'); // -> "Hey Beavis!"
const greetSpongeBob: string = greet('SpongeBob'); // -> "Hey SpongeBob!"
console.log('greetBeavis:', greetBeavis);
console.log('greetSpongeBob:', greetSpongeBob);

function getArea(width: number, height: number): number {
  return width * height;
}
const areaOne: number = getArea(17, 42); // -> 714
const areaTwo: number = getArea(22, 38); // -> 836
console.log('areaOne:', areaOne);
console.log('areaTwo:', areaTwo);

interface Person {
  firstName: string;
  lastName: string;
}
function getFirstName(person: Person): string {
  return person.firstName;
}
const lelouche: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
}); // -> "Lelouche"
const john: string = getFirstName({ firstName: 'John', lastName: 'Henry' }); // -> "John"
console.log('lelouche:', lelouche);
console.log('john:', john);

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};
const lastElemOne: any = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]); // -> "accessories"
const lastElemTwo: any = getLastElement([true, true, false, true]); // -> true
console.log('lastElemOne:', lastElemOne);
console.log('lastElemTwo:', lastElemTwo);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const firstOtherFunc: any = callOtherFunction(convertMinutesToSeconds, 10); // -> 600
const secotherFunc: any = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]); // -> "Aloha"
console.log('firstOtherFunc:', firstOtherFunc);
console.log('secOtherFunc:', secotherFunc);
