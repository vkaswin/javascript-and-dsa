/*

Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.

The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.

A subarray is a contiguous part of an array.

Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.

*/

export const maxSumTwoNoOverlap = (
  nums: number[],
  firstLen: number,
  secondLen: number
) => {
  let left: number[] = [];
  let right: number[] = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSum += nums[i];
    rightSum += nums[j];
    left[i] = leftSum;
    right[j] = rightSum;
  }

  console.log(left, right);
};

console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
