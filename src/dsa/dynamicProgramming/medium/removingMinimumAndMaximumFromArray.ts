/*

You are given a 0-indexed array of distinct integers nums.

There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation: 
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.

*/

export const minimumDeletions = (nums: number[]) => {
  let max = 0;
  let min = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[max]) max = i;
    if (nums[i] < nums[min]) min = i;
  }

  // left is starts with 0 so we are adding +1 in that case

  let left = Math.max(max, min) + 1;
  let right = nums.length - Math.min(max, min);
  let both = Math.min(max, min) + 1 + (nums.length - Math.max(max, min));

  return Math.min(left, right, both);
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]));
