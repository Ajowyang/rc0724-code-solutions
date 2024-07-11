/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
