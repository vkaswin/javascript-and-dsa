/*

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
substrings respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.

*/

export const isInterleave = (s1: string, s2: string, s3: string) => {
  if (s1.length + s2.length !== s3.length) return false;

  let dp: boolean[][] = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1));

  let dfs = (i: number, j: number) => {
    if (i >= s1.length && j >= s2.length) return true;

    if (dp[i][j] !== undefined) return dp[i][j];

    if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j))
      return (dp[i][j] = true);

    if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1))
      return (dp[i][j] = true);

    return (dp[i][j] = false);
  };

  return dfs(0, 0);
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
