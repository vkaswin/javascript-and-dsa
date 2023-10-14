/*

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3

*/

export const maxScore = (s: string) => {
  let zeros = 0;
  let ones = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") ones++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") zeros++;
    else ones--;
    max = Math.max(max, zeros + ones);
  }

  return max;
};

console.log(maxScore("00"));
