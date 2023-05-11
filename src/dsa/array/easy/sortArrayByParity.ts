/*

Given an integer array nums, move all the even integers at the beginning of the array 
followed by all the odd integers.
Return any array that satisfies this condition.

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

*/

export const sortArrayByParity = (nums: number[]) => {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 2 === 0) result.unshift(num);
    else result.push(num);
  }

  return result;
};
