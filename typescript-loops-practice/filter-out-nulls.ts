/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const result: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      result.push(values[i]);
    }
  }
  return result;
}
