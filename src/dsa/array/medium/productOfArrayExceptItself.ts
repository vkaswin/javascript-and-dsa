/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

export const productExceptSelf = (nums: number[]) => {
  let left: number[] = [];
  let right: number[] = [];
  let val = 1;

  for (let i = 0; i < nums.length; i++) {
    val *= nums[i];
    left[i] = val;
  }

  val = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    val *= nums[i];
    right[i] = val;
  }

  let result: number[] = [];
  result[0] = right[1];
  result[nums.length - 1] = left[nums.length - 2];

  for (let i = 1; i < nums.length - 1; i++) {
    result[i] = left[i - 1] * right[i + 1];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
