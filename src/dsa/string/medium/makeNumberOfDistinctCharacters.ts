/*

You are given two 0-indexed strings word1 and word2.

A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

Input: word1 = "abcc", word2 = "aab"
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.

*/

export const isItPossible = (word1: string, word2: string) => {
  let getFreq = (word: string) => {
    let freq = new Map<string, number>();

    for (let char of word) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }

    return freq;
  };

  let freq1 = getFreq(word1);
  let freq2 = getFreq(word2);

  let keys1 = Array.from(freq1.keys());
  let keys2 = Array.from(freq2.keys());

  for (let char1 of keys1) {
    freq1.set(char1, freq1.get(char1)! - 1);
    if (!freq1.get(char1)) freq1.delete(char1);

    for (let char2 of keys2) {
      freq2.set(char2, freq2.get(char2)! - 1);
      if (!freq2.get(char2)) freq2.delete(char2);

      // swap two words
      freq2.set(char1, (freq2.get(char1) || 0) + 1);
      freq1.set(char2, (freq1.get(char2) || 0) + 1);

      if (freq1.size === freq2.size) return true;

      freq2.set(char2, (freq2.get(char2) || 0) + 1);
      freq2.set(char1, freq2.get(char1)! - 1);
      if (!freq2.get(char1)) freq2.delete(char1);

      freq1.set(char2, freq1.get(char2)! - 1);
      if (!freq1.get(char2)) freq1.delete(char2);
    }

    freq1.set(char1, (freq1.get(char1) || 0) + 1);
  }

  return false;
};

console.log(isItPossible("abcc", "aab"));
