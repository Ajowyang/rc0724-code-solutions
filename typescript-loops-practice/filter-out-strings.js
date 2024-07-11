'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] != 'string') {
      result.push(values[i]);
    }
  }
  return result;
}
