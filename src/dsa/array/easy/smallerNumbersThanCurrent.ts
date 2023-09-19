/*

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

*/

export const smallerNumbersThanCurrent = (nums: number[]) => {
  let freq: number[] = [];
  let bucket: number[] = [];
  let result: number[] = [];

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let sum = 0;
  for (let i = 0; i < freq.length; i++) {
    sum += freq[i - 1] || 0;
    bucket[i] = sum;
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = bucket[nums[i]];
  }

  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
