'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
}
