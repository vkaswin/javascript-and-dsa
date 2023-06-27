/*

You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.
Return the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

*/

export const mergeAlternately = (word1: string, word2: string) => {
  let str = "";
  let min = Math.min(word1.length, word2.length);

  for (let i = 0; i < min; i++) {
    str += word1[i] + word2[i];
  }

  if (word1.length === word2.length) return str;

  str += word1.length === min ? word2.slice(min) : word1.slice(min);

  return str;
};
