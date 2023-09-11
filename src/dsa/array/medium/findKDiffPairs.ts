/*

Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.

*/

function findPairs(nums: number[], k: number) {
  let count = 0;

  let map = new Map<number, number>();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (map.has(key + k)) count++;
    }
  }

  return count;
}

console.log(findPairs([3, 1, 4, 1, 5], 0));
