/*

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

*/

export const canPartitionKSubsets = (nums: number[], k: number) => {
  let sum = nums.reduce((acc, curr) => acc + curr);

  if (sum % k !== 0) return false;

  let target = sum / k;

  let visited = new Array(nums.length).fill(false);

  let backTrack = (index: number, sum: number, k: number) => {
    if (k === 0) return true;

    if (sum === target) return backTrack(0, 0, k - 1);

    for (let i = index; i < nums.length; i++) {
      if (visited[i] || sum + nums[i] > target) continue;

      visited[i] = true;

      if (backTrack(i + 1, sum + nums[i], k)) return true;

      visited[i] = false;
    }

    return false;
  };

  return backTrack(0, 0, k);
};

console.log(
  canPartitionKSubsets([6, 5, 9, 6, 3, 5, 1, 10, 4, 1, 4, 3, 9, 9, 3, 3], 9)
);
