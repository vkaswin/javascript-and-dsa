/*

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

export const jump = (nums: number[]) => {
  let left = 0;
  let right = 0;
  let count = 0;

  while (right < nums.length - 1) {
    let farthest = 0;

    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    left = right + 1;
    right = farthest;
    count++;
  }

  return count;
};

console.log(jump([2, 3, 1, 1, 4]));
