/*
Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.

A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.

*/

export const shortestCommonSupersequence = (str1: string, str2: string) => {
  let dp: string[][] = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(""));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }

  let lcs = dp[str1.length][str2.length];

  let i = 0;
  let j = 0;
  let str = "";

  for (let char of lcs) {
    while (str1[i] !== char) str += str1[i++];

    while (str2[j] !== char) str += str2[j++];

    str += char;
    i++;
    j++;
  }

  str += str1.slice(i) + str2.slice(j);

  return str;
};

console.log(shortestCommonSupersequence("abac", "cab"));
