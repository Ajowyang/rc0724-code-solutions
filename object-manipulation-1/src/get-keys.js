'use strict';
/* exported getKeys */
function getKeys(object) {
  let result = [];
  for (let key in object) {
    result.push(key);
  }
  return result;
}
