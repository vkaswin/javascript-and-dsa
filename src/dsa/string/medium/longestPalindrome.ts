/*

Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

*/

export const longestPalindrome = (s: string) => {
  let str = "";

  let isPalindrome = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    let odd = isPalindrome(i, i);
    let even = isPalindrome(i, i + 1);
    let curr = odd.length > even.length ? odd : even;
    if (curr.length > str.length) str = curr;
  }

  return str;
};

console.log(longestPalindrome("babad"));
