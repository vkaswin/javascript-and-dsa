export const longestCommonSubsequenceTopDown = (
  text1: string,
  text2: string
) => {
  let cache: Record<string, number> = {};

  let dfs = (i: number, j: number) => {
    if (i >= text1.length || j >= text2.length) return 0;

    let key = i + "," + j;

    if (key in cache) return cache[key];

    let count = 0;

    if (text1[i] === text2[j]) count = 1 + dfs(i + 1, j + 1);
    else count = Math.max(dfs(i, j + 1), dfs(i + 1, j));

    cache[key] = count;

    return cache[key];
  };

  return dfs(0, 0);
};

export const longestCommonSubsequence = (text1: string, text2: string) => {
  let row = text1.length;
  let col = text2.length;
  let dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[row][col];
};

console.log(longestCommonSubsequence("abc", "def"));
