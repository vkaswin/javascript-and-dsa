/*

Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.

Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

*/

export const subarraysDivByK = (nums: number[], k: number) => {
  let count = 0;
  let sum = 0;
  let map: Record<number, number> = { 0: 1 };

  for (let num of nums) {
    sum += num;

    let rem = ((sum % k) + k) % k;

    if (rem in map) count += map[rem];

    map[rem] = (map[rem] || 0) + 1;
  }

  return count;
};

console.log(subarraysDivByK([-1, 2, 9], 2));
