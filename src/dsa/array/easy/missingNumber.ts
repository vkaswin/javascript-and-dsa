/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number 
in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

*/

export const missingNumber = (nums: number[]) => {
  let len = nums.length;
  let sum = len * ((len + 1) / 2);

  for (let num of nums) {
    sum -= num;
  }

  return sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
