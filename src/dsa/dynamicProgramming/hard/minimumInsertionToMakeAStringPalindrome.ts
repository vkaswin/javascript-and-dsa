/*

Given a string s. In one step you can insert any character at any index of the string.

Return the minimum number of steps to make s palindrome.

A Palindrome String is one that reads the same backward as well as forward.

Input: s = "leetcode"
Output: 5
Explanation: Inserting 5 characters the string becomes "leetcodocteel".

*/

export const minInsertions = (s: string) => {
  let str1 = s;
  let str2 = s.split("").reverse().join("");
  let dp = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return s.length - dp[str1.length][str2.length];
};

console.log(minInsertions("leetcode"));
