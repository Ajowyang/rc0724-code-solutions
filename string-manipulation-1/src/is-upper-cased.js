'use strict';
/* exported isUpperCased */
function isUpperCased(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      //if lowercase letter
      // console.log(`${string.charCodeAt(i)} ${string[i]}`);
      return false;
    }
  }
  return true;
}
