/*

A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array nums, return the length of the longest wiggle subsequence of nums.

Input: nums = [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length.
One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8).

*/

export const wiggleMaxLength = (nums: number[]) => {
  let dp: number[] = [];

  let dfs = (index: number, positive: boolean | null): number => {
    if (index >= nums.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let max = 0;

    for (let i = index + 1; i < nums.length; i++) {
      let diff = nums[i] - nums[index];
      let isPositive = diff >= 0;

      if (
        nums[i] === nums[index] ||
        (positive !== null && positive === isPositive)
      )
        continue;

      max = Math.max(max, 1 + dfs(i, isPositive));
    }

    return (dp[index] = max);
  };

  return dfs(0, null) + 1;
};

console.log(wiggleMaxLength([1, 1]));
