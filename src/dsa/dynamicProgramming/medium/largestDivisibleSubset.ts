/*

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.

*/

export const largestDivisibleSubset = (nums: number[]) => {
  console.log(nums);
};

console.log(largestDivisibleSubset([1, 2, 3]));
