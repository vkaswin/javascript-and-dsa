/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

*/

export const longestPalindrome = (s: string) => {
  let obj: Record<string, number> = {};
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
    if (obj[s[i]] % 2 === 0) length += 2;
  }

  if (s.length > length) length++;

  return length;
};

console.log(longestPalindrome("abccccdd"));
