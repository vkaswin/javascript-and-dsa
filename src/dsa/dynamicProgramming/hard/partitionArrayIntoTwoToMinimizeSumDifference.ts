/*

You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays. To partition nums, put each element of nums into one of the two arrays.

Return the minimum possible absolute difference.

Input: nums = [2,-1,0,4,-2,-9]
Output: 0
Explanation: One optimal partition is: [2,4,-9] and [-1,0,-2].
The absolute difference between the sums of the arrays is abs((2 + 4 + -9) - (-1 + 0 + -2)) = 0.

*/

export const minimumDifference = (nums: number[]) => {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let length = nums.length / 2;
  let min = Infinity;

  let dfs = (index: number, currSum: number, n: number) => {
    if (index >= nums.length) return;

    if (n === length) {
      min = Math.min(min, Math.abs(sum - currSum - currSum));
      return;
    }

    dfs(index + 1, currSum + nums[index + 1], n + 1);
    dfs(index + 1, currSum, n);
  };

  dfs(0, 0, 0);

  return min;
};

console.log(minimumDifference([2, -1, 0, 4, -2, -9]));
