/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

*/

export const maxVowels = (s: string, k: number) => {
  let maxCount = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  k--;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k) {
      maxCount = Math.max(maxCount, count);
      if (vowels.has(s[i - k])) count -= 1;
    }
  }

  return maxCount;
};

console.log(maxVowels("aeiou", 2));
