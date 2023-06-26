/*

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

*/

let merge = (left: number[], right: number[]) => {
  let result: number[] = [];

  while (left.length && right.length) {
    result.push((left[0] < right[0] ? left.shift() : right.shift()) as number);
  }

  if (left) result.push(...left);
  if (right) result.push(...right);

  return result;
};

export const sortArray = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  let middle = Math.floor(nums.length / 2);

  return merge(sortArray(nums.slice(0, middle)), sortArray(nums.slice(middle)));
};

console.log(sortArray([5, 2, 3, 1]));
