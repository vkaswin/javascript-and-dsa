/*

Given an integer array nums of unique elements, return all possible 
subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

*/

export const subsets = (nums: number[]) => {
  let result: number[][] = [[]];

  let dfs = (index: number, arr: number[]) => {
    if (index >= nums.length) return;

    for (let i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      result.push([...arr]);
      dfs(i + 1, arr);
      arr.pop();
    }
  };

  dfs(0, []);

  return result;
};

console.log(subsets([1, 2, 3]));
