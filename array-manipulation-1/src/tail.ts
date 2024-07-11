/* exported tail */
function tail(array: any[]): any[] {
  const result: any[] = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
