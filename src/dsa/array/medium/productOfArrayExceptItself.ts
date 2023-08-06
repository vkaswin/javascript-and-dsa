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
  let left = [];
  let right = [];
  let leftSum = 1;
  let rightSum = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSum *= nums[i];
    rightSum *= nums[j];
    left[i] = leftSum;
    right[j] = rightSum;
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = (left[i - 1] ?? 1) * (right[i + 1] ?? 1);
    result.push(num);
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
