/*

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

*/

export const findMaxLength = (nums: number[]) => {
  let map = new Map().set(0, -1);
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] || -1;
    if (map.has(sum)) max = Math.max(max, i - map.get(sum));
    else map.set(sum, i);
  }

  return max;
};

console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]));
