/*

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

*/

export const firstMissingPositive = (nums: number[]) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;
    if (nums[val] === undefined) continue;
    if (nums[val] === 0) nums[val] = -(nums.length + 1);
    else if (nums[val] > 0) nums[val] = -nums[val];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i + 1;
  }

  return nums.length + 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
