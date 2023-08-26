/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

export const rotateRight = (nums: number[], k: number) => {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
};

const rotateLeft = (nums: number[], k: number) => {
  k %= nums.length;
  nums.push(...nums.splice(0, k));
};

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 3));
