/*

Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

const moveZeroes = (nums: number[]) => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) [nums[j++], nums[i]] = [nums[i], nums[j]];
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
