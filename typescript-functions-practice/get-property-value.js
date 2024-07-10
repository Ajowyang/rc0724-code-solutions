'use strict';
/* exported getPropertyValue */
function getPropertyValue(object, key) {
  //keyof: creates union type of all known property types in
  //typeof object: the type of the variable named 'object'
  return object[key];
  //return the value of the key property of object
  //as typecasts the variable key to the union type of all known
  //property types in the object variable
  //we do this because we have a dynamic key
}
