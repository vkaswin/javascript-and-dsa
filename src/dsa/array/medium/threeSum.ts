/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

export const threeSum = (nums: number[]) => {
  let result: number[][] = [];

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  return result;
};

const threeSumBruteForce = (nums: number[]) => {
  let result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] + nums[j + 1] === 0)
        result.push([nums[i], nums[j], nums[j + 1]]);
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
