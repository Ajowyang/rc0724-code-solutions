'use strict';
/* exported chunk */
function chunk(array, size) {
  let added = 0;
  //keeps track of how many elements added into each array of arrays in result
  let curNdx = 0;
  //keeps track of current index of array we are putting elements into
  let result = [];
  //empty array to return at end which will hold result
  for (let i = 0; i < array.length; i++) {
    if (added === 0) {
      //if we have added 0 elements
      result.push([array[i]]);
      //push into results a new array with its first element
      added++;
      //increment added count by 1
    } else {
      //otherwise
      result[curNdx].push(array[i]);
      //push into the array of our current Index in results the next element
      added++;
      //increment added count by 1
    }
    if (added === size) {
      //if we have added as many as the count parameter given
      curNdx++;
      //update the current index of the array we are adding
      added = 0;
      //reset the number added to 0
    }
  }
  console.log(result);
  return result;
}
