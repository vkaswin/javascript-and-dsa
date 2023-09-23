/*

You are given two strings s and t of the same length and an integer maxCost.

You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).

Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.

*/

export const equalSubstring = (s: string, t: string, maxCost: number) => {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let cost = 0;

  while (right < s.length) {
    if (s[right] !== t[right])
      cost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (cost > maxCost) {
      if (s[left] !== t[left])
        cost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }

    right++;
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};

console.log(equalSubstring("abcd", "bcdf", 3));
