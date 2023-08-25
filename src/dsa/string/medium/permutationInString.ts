/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

*/

export const checkInclusion = (s1: string, s2: string) => {
  let freqS1 = new Map<string, number>();
  let freqS2 = new Map<string, number>();
  let left = 0;
  let right = 0;

  for (let char of s1) {
    freqS1.set(char, (freqS1.get(char) || 0) + 1);
  }

  let isExist = () => {
    for (let [char, count] of freqS1) {
      if (!freqS2.has(char) || freqS2.get(char) !== count) return false;
    }
    return true;
  };

  while (right < s2.length) {
    freqS2.set(s2[right], (freqS2.get(s2[right]) || 0) + 1);

    if (s1.length === right - left + 1) {
      if (isExist()) return true;
      freqS2.set(s2[left], freqS2.get(s2[left])! - 1);
      if (freqS2.get(s2[left]) === 0) freqS2.delete(s2[left]);
      left++;
    }

    right++;
  }

  return false;
};
