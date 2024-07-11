'use strict';
/* exported pick */
function pick(source, keys) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      if (source[keys[i]] != undefined || source[keys[i]] === null) {
        //if i dont add 2nd part of condition, won't add the key value pair with null
        result[keys[i]] = source[keys[i]];
      }
    }
  }
  console.log(result);
  return result;
}
