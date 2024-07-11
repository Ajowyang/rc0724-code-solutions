/* exported getStudentNames */
function getStudentNames(students: { name: string }[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}
