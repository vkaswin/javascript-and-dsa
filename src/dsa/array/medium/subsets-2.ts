/*

Given an integer array nums that may contain duplicates, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

*/

export const subsetsWithDup = (nums: number[]) => {
  let result: number[][] = [[]];
  nums.sort((a, b) => a - b);

  let dfs = (index: number, arr: number[]) => {
    if (index >= nums.length) return;

    for (let i = index; i < nums.length; i++) {
      if (index === i || nums[i - 1] !== nums[i]) {
        arr.push(nums[i]);
        result.push([...arr]);
        dfs(i + 1, arr);
        arr.pop();
      }
    }
  };

  dfs(0, []);

  return result;
};

console.log(subsetsWithDup([1, 1, 2]));
