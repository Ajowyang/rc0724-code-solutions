/* exported countdown */
function countdown(num: number): number[] {
  const result: number[] = [];
  while (num >= 0) {
    result.push(num);
    num--;
  }
  return result;
}
