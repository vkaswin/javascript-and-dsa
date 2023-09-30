/*

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*/

export const minDistance = (word1: string, word2: string) => {
  let dp = new Array(word1.length).fill(0).map(() => new Array(word2.length));

  let dfs = (i: number, j: number): number => {
    if (i === word1.length) return word2.length - j;

    if (j === word2.length) return word1.length - i;

    if (dp[i][j] !== undefined) return dp[i][j];

    if (word1[i] === word2[j]) return dfs(i + 1, j + 1);

    let insert = dfs(i, j + 1);
    let remove = dfs(i + 1, j);
    let replace = dfs(i + 1, j + 1);

    return (dp[i][j] = 1 + Math.min(insert, remove, replace));
  };

  return dfs(0, 0);
};

console.log(minDistance("horse", "ros"));
