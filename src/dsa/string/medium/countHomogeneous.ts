/*

Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.

A string is homogenous if all the characters of the string are the same.

A substring is a contiguous sequence of characters within a string.

Input: s = "abbcccaa"
Output: 13
Explanation: The homogenous substrings are listed as below:
"a"   appears 3 times.
"aa"  appears 1 time.
"b"   appears 2 times.
"bb"  appears 1 time.
"c"   appears 3 times.
"cc"  appears 2 times.
"ccc" appears 1 time.
3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.

*/

export const countHomogenous = (s: string) => {
  let count = 1;
  let total = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else count = 1;
    total += count;
  }

  return total % (Math.pow(10, 9) + 7);
};

console.log(countHomogenous("abbcccaa"));
