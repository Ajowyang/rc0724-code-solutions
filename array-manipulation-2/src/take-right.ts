/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  let result = [];
  if (count > array.length) {
    result = array;
    return result;
  } else {
    for (let i = array.length - count; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
