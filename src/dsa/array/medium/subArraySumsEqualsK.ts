/*

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,1,1], k = 2
Output: 2

*/

export const subarraySum = (nums: number[], k: number) => {
  let prefix: Record<number, number> = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;

    let diff = sum - k;

    if (diff in prefix) count += prefix[diff];

    prefix[sum] = (prefix[sum] || 0) + 1;
  }

  return count;
};

console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7));
