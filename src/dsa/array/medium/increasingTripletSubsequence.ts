/*

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

*/

export const increasingTriplet = (nums: number[]) => {
  let stack1: number[] = [];
  let stack2: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (stack1.length === 3) return true;

    while (stack1.length && nums[i] <= stack1.at(-1)!) {
      stack1.pop();
    }

    stack1.push(nums[i]);
  }

  if (stack1.length === 3) return true;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack2.length === 3) return true;

    while (stack2.length && nums[i] >= stack2.at(-1)!) {
      stack2.pop();
    }

    stack2.push(nums[i]);
  }

  return stack2.length === 3;
};

console.log(increasingTriplet([0, 4, 1, -1, 2]));
