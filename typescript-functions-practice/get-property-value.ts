/* exported getPropertyValue */

function getPropertyValue(object: object, key: string): any {
  type ObjKeys = keyof typeof object;
  // keyof: creates union type of all known property types in
  // typeof object: the type of the variable named 'object'
  return object[key as ObjKeys];
  // return the value of the key property of object
  // as typecasts the variable key to the union type of all known
  // property types in the object variable
  // we do this because we have a dynamic key
}
