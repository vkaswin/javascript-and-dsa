/*

Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

*/

export const minDistance = (word1: string, word2: string) => {
  let dp = new Array(word1.length + 1)
    .fill("")
    .map(() => new Array(word2.length + 1).fill(0));

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let lcs = dp[word1.length][word2.length];

  return word1.length - lcs + (word2.length - lcs);
};

console.log(minDistance("sea", "eat"));
