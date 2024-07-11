/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  if (count >= array.length) {
    return [];
  }
  const result: any[] = [];
  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
