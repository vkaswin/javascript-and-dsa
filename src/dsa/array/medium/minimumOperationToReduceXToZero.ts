/*

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

*/

export const minOperations = (nums: number[], x: number) => {
  let min = Infinity;
  let left = 0;
  let right = 0;
  let sum = nums.reduce((acc, curr) => acc + curr, 0);

  if (x > sum) return -1;

  let target = sum - x;
  sum = 0;

  while (right < nums.length) {
    sum += nums[right++];

    while (sum >= target) {
      if (sum === target) min = Math.min(min, nums.length - (right - left));
      sum -= nums[left++];
    }
  }

  return min === Infinity ? -1 : min;
};

console.log(minOperations([1, 1], 3));
