'use strict';
/* exported omit */
function omit(source, keys) {
  let result = {};
  for (let key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
