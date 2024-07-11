'use strict';
/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
