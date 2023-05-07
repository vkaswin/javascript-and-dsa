/*

Given an array of integers nums, return the number of good pairs. 
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

*/

const findPairs = (nums: number[]) => {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) pairs++;
    }
  }
  return pairs;
};

console.log(findPairs([1, 2, 3, 1, 1, 3]));
