/* exported omit */
function omit(source: object, keys: string[]): object {
  const result: object = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
