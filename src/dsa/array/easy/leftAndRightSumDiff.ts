/*

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:
leftSum[i] is the sum of elements to the left of the index i in the array nums. 
If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. 
If there is no such element, rightSum[i] = 0.
Return the array answer.

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

*/

export const leftRightDifference = (nums: number[]) => {
  let leftSum = 0;
  let rightSum = 0;

  let diff: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    rightSum -= nums[i];
    diff.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return diff;
};

console.log(leftRightDifference([10, 4, 8, 3]));
