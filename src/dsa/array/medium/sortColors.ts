/*

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

export const sortColors = (nums: number[]) => {
  let left = 0;
  let index = 0;
  let right = nums.length - 1;

  while (index <= right) {
    if (nums[index] === 0) {
      [nums[index], nums[left]] = [nums[left], nums[index]];
      left++;
      index++;
    } else if (nums[index] === 2) {
      [nums[index], nums[right]] = [nums[right], nums[index]];
      right--;
    } else {
      index++;
    }
  }

  return nums;
};

console.log(sortColors([1, 2, 0]));
