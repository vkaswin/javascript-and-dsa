/*

The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.

Input: nums = [4,2,5,3]
Output: 7
Explanation: It is optimal to choose the subsequence [4,2,5] with alternating sum (4 + 5) - 2 = 7.

*/

export const maxAlternatingSum = (nums: number[]): number => {
  let dp = new Array(nums.length).fill(0).map(() => new Array(2));

  let dfs = (index: number, even: number): number => {
    if (index >= nums.length) return 0;

    if (dp[index][even] !== undefined) return dp[index][even];

    let sum = nums[index];

    if (!even) sum *= -1;

    let include = sum + dfs(index + 1, Number(!even));
    let exclude = dfs(index + 1, even);

    return (dp[index][even] = Math.max(include, exclude));
  };

  return dfs(0, 1);
};

console.log(maxAlternatingSum([4, 2, 5, 3]));
