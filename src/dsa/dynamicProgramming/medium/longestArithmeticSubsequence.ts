/*

Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

Note that:

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).

Input: nums = [20,1,15,3,10,5,8]
Output: 4
Explanation:  The longest arithmetic subsequence is [20,15,10,5].

Input: nums = [9,4,7,2,10]
Output: 3
Explanation:  The longest arithmetic subsequence is [4,7,10].

*/

export const longestArithSeqLength = (nums: number[]) => {
  let dp: Record<number, number>[] = [];
  let max = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = {};

    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];

      if (!(diff in dp[i])) dp[i][diff] = 1;

      dp[i][diff] = Math.max(dp[i][diff], 1 + (dp[j][diff] || 1));

      max = Math.max(max, dp[i][diff]);
    }
  }

  return max;
};

console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]));
