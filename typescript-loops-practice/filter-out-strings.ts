/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const result: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      result.push(values[i]);
    }
  }
  return result;
}
