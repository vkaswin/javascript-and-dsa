/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

export const canJump = (nums: number[]) => {
  let finalPosition = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= finalPosition - i) finalPosition = i;
  }

  return finalPosition === 0;
};

console.log(canJump([2, 0, 0]));
