/* exported invert */
function invert(source: object): object {
  const result: object = {};
  for (const key in source) {
    result[source[key]] = key;
  }

  return result;
}
