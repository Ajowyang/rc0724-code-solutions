/* exported take */
function take(array: any[], count: number): any[] {
  if (array.length === 0) {
    return [];
  }
  const result: any[] = [];
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
