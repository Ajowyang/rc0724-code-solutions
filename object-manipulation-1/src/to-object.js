'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  let result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
