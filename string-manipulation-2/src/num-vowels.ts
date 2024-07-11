/* exported numVowels */
function numVowels(string: string): number {
  let result: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      result++;
    }
  }
  return result;
}
