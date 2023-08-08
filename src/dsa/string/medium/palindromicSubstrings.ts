/*

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

*/

export const countSubstrings = (s: string) => {
  let count = 0;

  let isPalindrome = (left: number, right: number) => {
    while (s[left] === s[right] && left >= 0 && right <= s.length) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  return count;
};

console.log(countSubstrings("aaa"));
