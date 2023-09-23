/*

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

*/

export const findLength = (nums1: number[], nums2: number[]) => {
  let dp = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] !== nums2[j - 1]) continue;

      dp[i][j] = 1 + dp[i - 1][j - 1];
      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }

  return maxLen;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
