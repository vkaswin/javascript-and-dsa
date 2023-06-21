/*

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

*/

export const maxOperations = (nums: number[], k: number) => {
  let count = 0;
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(k - nums[i])) {
      map.delete(k - nums[i]);
      count++;
    } else {
      map.set(nums[i], k - nums[i]);
    }
  }

  return count;
};

console.log(maxOperations([1, 2, 3, 4], 5));
