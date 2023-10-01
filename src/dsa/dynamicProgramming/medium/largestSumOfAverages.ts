/*

You are given an integer array nums and an integer k. You can partition the array into at most k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each subarray.

Note that the partition must use every integer in nums, and that the score is not necessarily an integer.

Return the maximum score you can achieve of all the possible partitions. Answers within 10-6 of the actual answer will be accepted.

Input: nums = [9,1,2,3,9], k = 3
Output: 20.00000
Explanation: 
The best choice is to partition nums into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned nums into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.

*/

export const largestSumOfAverages = (nums: number[], k: number) => {
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(k + 1));

  let dfs = (index: number, partition: number) => {
    if (index >= nums.length && partition === k) return 0;

    if (dp[index][partition] !== undefined) return dp[index][partition];

    let sum = 0;
    let max = -Infinity;

    for (let i = index; i < nums.length; i++) {
      sum += nums[i];
      max = Math.max(max, sum / (i - index + 1) + dfs(i + 1, partition + 1));
    }

    return (dp[index][partition] = max);
  };

  return dfs(0, 0);
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3));
