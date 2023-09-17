/*

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

*/

export const canPartition = (nums: number[]) => {
  if (!nums.length) return false;

  let sum = nums.reduce((acc, curr) => acc + curr);

  if (sum % 2 !== 0) return false;

  let target = sum / 2;
  let cache: Record<string, boolean> = {};

  let recurse = (index: number, sum: number) => {
    let key = `${index},${sum}`;

    if (key in cache) return cache[key];

    if (index > nums.length || sum > target) return false;

    if (sum === target) return true;

    if (recurse(index + 1, sum + nums[index]) || recurse(index + 1, sum))
      return (cache[key] = true);

    return (cache[key] = false);
  };

  return recurse(0, 0);
};

console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));
