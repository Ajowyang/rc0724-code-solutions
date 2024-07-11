/* exported getKeys */
function getKeys(object: object): string[] {
  const result: string[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
