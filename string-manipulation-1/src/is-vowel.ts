/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}
