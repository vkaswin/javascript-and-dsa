/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

export const permute = (nums: number[]) => {
  let result: number[][] = [];
  let arr: number[] = [];

  let recurse = (nums: number[], arr: number[], result: number[][]) => {
    if (nums.length === 0) return result.push([...arr]);

    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      let filter = nums.filter((_, index) => index !== i);
      recurse(filter, arr, result);
      arr.pop();
    }
  };

  recurse(nums, arr, result);

  return result;
};

console.log(permute([1, 2, 3]));
