/* exported getValues */
function getValues(object: object): string[] {
  const result: string[] = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
}
