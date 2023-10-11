/*

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

*/

export const isMatch = (s: string, p: string) => {
  let dp = new Array(s.length).fill(0).map(() => new Array(p.length));

  let dfs = (i: number, j: number) => {
    if ((i >= s.length && j >= p.length) || i >= s.length) return true;

    if (j >= p.length) return false;

    if (dp[i][j] !== undefined) return dp[i][j];

    if ((s[i] == p[j] || p[j] === ".") && dfs(i + 1, j + 1))
      return (dp[i][j] = true);

    if (
      p[j] == "*" &&
      (s[i] === p[j - 1] || (p[j - 1] == "." && s[i] === s[i - 1])) &&
      (dfs(i + 1, j + 1) || dfs(i + 1, j))
    )
      return (dp[i][j] = true);

    if (s[i] !== p[j] && dfs(i, j + 1)) return (dp[i][j] = true);

    return (dp[i][j] = false);
  };

  return dfs(0, 0);
};

console.log(isMatch("ab", ".*"));
