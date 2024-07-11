'use strict';
/* exported isLowerCased */
function isLowerCased(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      //if capital letter
      return false;
    }
  }
  return true;
}
