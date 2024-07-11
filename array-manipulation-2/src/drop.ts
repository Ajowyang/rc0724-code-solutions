/* exported drop */
function drop(array: any[], count: number): any[] {
  if (count > array.length) {
    return [];
  }
  const result: any[] = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
