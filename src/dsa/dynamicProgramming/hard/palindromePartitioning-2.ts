/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

*/

export const minCut = (s: string) => {
  let dp = new Array(s.length);

  let isPalindrome = (left: number, right: number) => {
    for (let i = left, j = right; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }

    return true;
  };

  let dfs = (index: number) => {
    if (index === s.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let min = Infinity;

    for (let i = index; i < s.length; i++) {
      if (!isPalindrome(index, i)) continue;
      let cuts = 1 + dfs(i + 1);
      min = Math.min(min, cuts);
    }

    return (dp[index] = min);
  };

  return dfs(0) - 1;
};

console.log(minCut("aab"));
