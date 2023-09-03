/*

Given an integer array nums, find a 
subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

*/

export const maxProduct = (nums: number[]) => {
  let maxValue = -Infinity;
  let currMin = 1;
  let currMax = 1;

  for (let num of nums) {
    let max = currMax * num;
    let min = currMin * num;
    currMax = Math.max(max, min, num);
    currMin = Math.min(max, min, num);
    maxValue = Math.max(maxValue, currMax);
  }

  return maxValue;
};

export const maxProductAlternative = (nums: number[]) => {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = i; j < nums.length; j++) {
      sum *= nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};

console.log(maxProduct([-2, 3, -4]));
