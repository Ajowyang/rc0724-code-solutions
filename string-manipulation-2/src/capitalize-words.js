'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let words = string.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result +=
      words[i][0].toUpperCase() +
      words[i].substring(1, words[i].length).toLowerCase() +
      ' ';
  }
  return result.substring(0, result.length - 1);
}
