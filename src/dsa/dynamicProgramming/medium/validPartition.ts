/*

You are given a 0-indexed integer array nums. You have to partition the array into one or more contiguous subarrays.

We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

The subarray consists of exactly 2, equal elements. For example, the subarray [2,2] is good.
The subarray consists of exactly 3, equal elements. For example, the subarray [4,4,4] is good.
The subarray consists of exactly 3 consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray [3,4,5] is good, but the subarray [1,3,5] is not.
Return true if the array has at least one valid partition. Otherwise, return false.

Input: nums = [4,4,4,5,6]
Output: true
Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
This partition is valid, so we return true.

*/

export const validPartition = (nums: number[]) => {
  let cache: Record<number, boolean> = {};

  let recurse = (index: number) => {
    if (index in cache) return cache[index];

    if (index >= nums.length) return true;

    if (
      index < nums.length - 1 &&
      nums[index] === nums[index + 1] &&
      recurse(index + 2)
    )
      return (cache[index] = true);

    if (
      index < nums.length - 2 &&
      nums[index] === nums[index + 1] &&
      nums[index] === nums[index + 2] &&
      recurse(index + 3)
    )
      return (cache[index] = true);
    if (
      index < nums.length - 2 &&
      nums[index + 1] - nums[index] === 1 &&
      nums[index + 2] - nums[index + 1] === 1 &&
      recurse(index + 3)
    )
      return (cache[index] = true);

    return (cache[index] = false);
  };

  return recurse(0);
};

console.log(validPartition([4, 4, 4, 5, 6]));
