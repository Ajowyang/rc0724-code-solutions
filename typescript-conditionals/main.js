'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}
console.log(isUnderFive(4));
// true
console.log(isUnderFive(10));
// false
console.log(isUnderFive(5));
// false
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
// true
console.log(isEven(10));
// true
console.log(isEven(5));
// false
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithJ('JavaScript'));
// true
console.log(startsWithJ('PHP'));
// false
console.log(startsWithJ('HTML'));
// false
console.log(startsWithJ('Java'));
// true
console.log(startsWithJ('Kotlin'));
// false
console.log(startsWithJ('C#'));
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log(isOldEnoughToDrink(bart));
// false
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log(isOldEnoughToDrive(homer));
// true
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(-1));
// "invalid pH level"
console.log(categorizeAcidity(14.0000001));
// "invalid pH level"
console.log(categorizeAcidity(7));
// "neutral"
console.log(categorizeAcidity(2));
// "acid"
console.log(categorizeAcidity(9));
// "base"
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko' || 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute!~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log(introduceWarnerBro('yakko'));
// "We're the warner brothers!"
console.log(introduceWarnerBro('wakko'));
// "We're the warner brothers!"
console.log(introduceWarnerBro('dot'));
// "I'm cute~"
console.log(introduceWarnerBro('cody'));
// "Goodnight everybody!"
console.log(introduceWarnerBro('minerva'));
// "Goodnight everybody!"
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'Wonder';
    case 'musical':
      return 'Wizard of Oz';
    case 'sci-fi':
      return 'Star Trek';
    default:
      return 'Genre not recognized. Choose Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log(recommendMovie('action'));
// "Die Hard"
console.log(recommendMovie('comedy'));
// "The Big Lebowski"
console.log(recommendMovie('random'));
// "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi"
