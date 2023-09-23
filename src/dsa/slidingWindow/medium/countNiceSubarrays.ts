/*

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

*/

export const numberOfSubarrays = (nums: number[], k: number) => {
  let left = 0;
  let right = 0;
  let odds = 0;
  let total = 0;
  let count = 0;

  while (right < nums.length) {
    if (nums[right++] % 2 !== 0) odds++;

    if (odds === k) count = 0;

    while (odds >= k) {
      if (nums[left++] % 2 !== 0) odds--;
      count++;
    }

    total += count;
  }

  return total;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2], 2));
