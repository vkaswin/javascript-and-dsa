/*

Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

*/

export const checkSubarraySum = (nums: number[], k: number) => {
  let map = new Map<number, number>().set(0, -1);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = sum % k;
    if (!map.has(mod)) map.set(mod, i);
    else if (i - map.get(mod)! > 1) return true;
  }

  return false;
};

console.log(checkSubarraySum([5, 0, 0, 0], 3));
