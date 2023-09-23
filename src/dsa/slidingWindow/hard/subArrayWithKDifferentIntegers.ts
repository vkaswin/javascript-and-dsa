/*

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

*/

export const subarraysWithKDistinct = (nums: number[], k: number) => {
  const atMostK = (k: number) => {
    let left = 0;
    let right = 0;
    let map = new Map();
    let count = 0;

    while (right < nums.length) {
      map.set(nums[right], (map.get(nums[right]) || 0) + 1);

      while (left <= right && map.size > k) {
        if (map.has(nums[left])) map.set(nums[left], map.get(nums[left]) - 1);
        if (map.get(nums[left]) === 0) map.delete(nums[left]);
        left++;
      }

      right++;
      count += right - left;
    }

    return count;
  };

  //   subracting atMostK - atMostkMinus1 will give you the exact K elements
  return atMostK(k) - atMostK(k - 1);
};

console.log(subarraysWithKDistinct([1, 2], 1));
