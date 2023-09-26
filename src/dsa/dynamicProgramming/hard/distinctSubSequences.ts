/*

Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit

*/

export const numDistinct = (s: string, t: string) => {
  let dp = new Array(s.length).fill(0).map(() => new Array(t.length));

  let dfs = (i: number, j: number) => {
    if (j === t.length) return 1;

    if (i >= s.length) return 0;

    if (dp[i][j] !== undefined) return dp[i][j];

    let count = 0;

    if (s[i] === t[j]) count += dfs(i + 1, j + 1);

    count += dfs(i + 1, j);

    return (dp[i][j] = count);
  };

  return dfs(0, 0);
};

console.log(numDistinct("rabbbit", "rabbit"));
