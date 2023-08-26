/*

Given an integer array nums, return the third distinct maximum number in this array.
If the third maximum does not exist, return the maximum number.

*/

export const thirdMax = (nums: number[]) => {
  let maxNum: number | undefined = undefined;
  let count = 0;

  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (count === 3) return maxNum;

    if (maxNum) {
      if (nums[i] < maxNum) {
        maxNum = nums[i];
        count++;
      }
    } else {
      maxNum = nums[i];
      count++;
    }
  }

  return count === 3 ? maxNum : nums[0];
};

const thirdMax1 = (nums: number[]) => {
  let unique = [...new Set(nums)].sort((a, b) => b - a);
  return unique[2] ?? unique[0];
};

console.log(thirdMax([2, 2, 3, 1]));
