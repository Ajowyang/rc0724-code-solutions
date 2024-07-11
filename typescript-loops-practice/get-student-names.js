'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}
