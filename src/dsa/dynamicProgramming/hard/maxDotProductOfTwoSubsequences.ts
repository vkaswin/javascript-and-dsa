/*

Given two arrays nums1 and nums2.

Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not).

Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.

Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.

*/

export const maxDotProduct = (nums1: number[], nums2: number[]) => {
  let dp = new Array(nums1.length).fill(0).map(() => new Array(nums2.length));

  let dfs = (i: number, j: number): number => {
    if (i >= nums1.length || j >= nums2.length) return -Infinity;

    if (dp[i][j] !== undefined) return dp[i][j];

    return (dp[i][j] = Math.max(
      nums1[i] * nums2[j] + Math.max(0, dfs(i + 1, j + 1)),
      dfs(i + 1, j),
      dfs(i, j + 1)
    ));
  };

  return dfs(0, 0);
};

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6]));
