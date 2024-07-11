'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
