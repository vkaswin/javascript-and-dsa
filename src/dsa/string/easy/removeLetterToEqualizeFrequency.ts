/*

You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot chose to do nothing.

Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

*/

export const equalFrequency = (word: string) => {
  if (new Set(word).size === word.length) return true;

  let freq = new Map<string, number>();

  for (let char of word) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let isEqual = () => {
    let num: number | null = null;

    for (let [_, count] of freq) {
      if (count === 0) continue;
      if (!num) num = count;
      if (num !== count) return false;
    }

    return true;
  };

  for (let [char] of freq) {
    freq.set(char, freq.get(char)! - 1);
    if (isEqual()) return true;
    freq.set(char, freq.get(char)! + 1);
  }

  return false;
};

console.log(equalFrequency("ddaccb"));
