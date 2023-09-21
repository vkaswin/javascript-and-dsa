/*

Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

A substring is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

Input: word = "aba"
Output: 6
Explanation: 
All possible substrings are: "a", "ab", "aba", "b", "ba", and "a".
- "b" has 0 vowels in it
- "a", "ab", "ba", and "a" have 1 vowel each
- "aba" has 2 vowels in it
Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6. 

*/

export const countVowels = (word: string) => {
  const vowels = new Set("aeiou");
  let total = 0;
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) count += i + 1;

    total += count;
  }
  return total;
};

console.log(countVowels("aba"));
