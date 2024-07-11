'use strict';
/* exported getValues */
function getValues(object) {
  let result = [];
  for (let key in object) {
    result.push(object[key]);
  }
  return result;
}
