/*

Given an integer array nums, return all the different possible non-decreasing subsequences of 
the given array with at least two elements. You may return the answer in any order.

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

*/

export const findSubsequences = (nums: number[]) => {
  let result: number[][] = [];

  let backtrack = (index: number, arr: number[]) => {
    if (arr.length >= 2) result.push([...arr]);

    if (index >= nums.length) return;

    let set = new Set<number>();

    for (let i = index; i < nums.length; i++) {
      if ((arr.length && nums[i] < arr.at(-1)!) || set.has(nums[i])) continue;
      set.add(nums[i]);
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  };

  backtrack(0, []);

  return result;
};

console.log(findSubsequences([4, 6, 7, 7]));
