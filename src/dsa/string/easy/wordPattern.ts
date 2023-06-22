/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

*/

export const wordPattern = (pattern: string, s: string) => {
  let words = s.split(" ");
  let patternMap = new Map<string, string>();
  let wordMap = new Map<string, string>();

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (
      (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== words[i]) ||
      (wordMap.has(words[i]) && wordMap.get(words[i]) !== pattern[i])
    )
      return false;

    patternMap.set(pattern[i], words[i]);
    wordMap.set(words[i], pattern[i]);
  }

  return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));
