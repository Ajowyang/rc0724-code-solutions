'use strict';
/* exported invert */
function invert(source) {
  let result = {};
  for (let key in source) {
    result[source[key]] = key;
  }
  return result;
}
