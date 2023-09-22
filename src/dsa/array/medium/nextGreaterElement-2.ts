/*

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.

*/

export const nextGreaterElements = (nums: number[]) => {
  let arr: number[] = [];
  let stack: number[] = [];

  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    let index = i % nums.length;
    let num = nums[index];

    while (stack.length && num >= stack.at(-1)!) {
      stack.pop();
    }

    arr[index] = stack.length ? stack.at(-1)! : -1;
    stack.push(num);
  }

  return arr;
};

console.log(nextGreaterElements([1, 2, 1]));
