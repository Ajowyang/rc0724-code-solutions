'use strict';
/* exported isVowel */
function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}
