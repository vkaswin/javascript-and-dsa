/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

*/

export const maxVowels = (s: string, k: number) => {
  let left = 0;
  let right = 0;
  let max = -Infinity;
  let count = 0;
  let set = new Set("aeiou");

  while (right < s.length) {
    if (set.has(s[right++])) count++;

    if (right - left === k) {
      max = Math.max(max, count);
      if (set.has(s[left++])) count--;
    }
  }

  return max;
};
