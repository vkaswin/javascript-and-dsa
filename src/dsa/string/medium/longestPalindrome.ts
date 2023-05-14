/*

Given a string s, return the longest palindromic substring in s.

Input: s = "bamom"
Output: "bab"
Explanation: "aba" is also a valid answer.

*/

export const longestPalindrome = (s: string) => {
  let isPalindrome = (str: string) => {
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  };
};

console.log(longestPalindrome("hellmom"));
