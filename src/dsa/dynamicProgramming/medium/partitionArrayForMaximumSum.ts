/*

Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83

*/

export const maxSumAfterPartitioning = (arr: number[], k: number) => {
  let dp = new Array(arr.length);

  let dfs = (index: number) => {
    if (index === arr.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let maxValue = -Infinity;
    let maxSum = -Infinity;

    for (let i = index; i < index + k && i < arr.length; i++) {
      if (arr[i] > maxValue) maxValue = arr[i];
      let sum = dfs(i + 1);
      maxSum = Math.max(maxSum, sum + maxValue * (i - index + 1));
    }

    return (dp[index] = maxSum);
  };

  return dfs(0);
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
