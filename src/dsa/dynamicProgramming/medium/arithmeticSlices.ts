/*

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

*/

export const numberOfArithmeticSlices = (nums: number[]) => {
  let count = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    let diff1 = nums[i] - nums[i + 1];
    let diff2 = nums[i + 1] - nums[i + 2];

    if (diff1 === diff2) count++;
    else count = 0;

    total += count;
  }

  return total;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
