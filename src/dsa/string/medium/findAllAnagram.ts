/*

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

export const findAnagrams = (s: string, p: string) => {
  let left = 0;
  let right = 0;
  let freqS = new Map<string, number>();
  let freqP = new Map<string, number>();
  let indexes: number[] = [];

  for (let char of p) {
    freqP.set(char, (freqP.get(char) || 0) + 1);
  }

  let isAnagram = () => {
    for (let [key, value] of freqP) {
      if (!freqS.has(key) || freqS.get(key)! !== value) return false;
    }

    return true;
  };

  while (right < s.length) {
    freqS.set(s[right], (freqS.get(s[right]) || 0) + 1);

    if (right - left === p.length - 1) {
      if (isAnagram()) indexes.push(left);
      freqS.set(s[left], freqS.get(s[left])! - 1);
      if (freqS.get(s[left]) === 0) freqS.delete(s[left]);
      left++;
    }
    right++;
  }

  return indexes;
};

console.log(findAnagrams("cbaebabacd", "abc"));
