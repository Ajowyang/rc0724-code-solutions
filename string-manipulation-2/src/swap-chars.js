'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let firstChar = string[firstIndex];
  let secChar = string[secondIndex];
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += secChar;
    } else if (i === secondIndex) {
      result += firstChar;
    } else {
      result += string[i];
    }
  }
  return result;
}
