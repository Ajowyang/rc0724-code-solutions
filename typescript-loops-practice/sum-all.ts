/* exported sumAll */
function sumAll(numbers: number[]): number {
  let result: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
