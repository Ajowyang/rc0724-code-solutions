/* exported toObject */
function toObject(keyValuePair: [string, any]): object {
  const result: object = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
