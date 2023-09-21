/*

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).

*/

export const numberOfSubstrings = (s: string) => {
  let left = 0;
  let right = 0;
  let count = 0;
  let a = 0;
  let b = 0;
  let c = 0;

  while (right < s.length) {
    if (s[right] === "a") a++;
    else if (s[right] === "b") b++;
    else c++;

    while (a && b && c) {
      count += s.length - right;
      if (s[left] === "a") a--;
      else if (s[left] === "b") b--;
      else c--;
      left++;
    }

    right++;
  }

  return count;
};

console.log(numberOfSubstrings("abcabc"));
