'use strict';
/* exported countdown */
function countdown(num) {
  let result = [];
  while (num >= 0) {
    result.push(num);
    num--;
  }
  return result;
}
