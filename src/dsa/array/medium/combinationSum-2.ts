/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[ [1,1,6], [1,2,5], [1,7], [2,6] ]

*/

export const combinationSum2 = (candidates: number[], target: number) => {
  let result: number[][] = [];

  candidates.sort((a, b) => a - b);

  let dfs = (num: number, index: number, arr: number[]) => {
    if (num < 0) return;

    if (num === 0) return result.push([...arr]);

    for (let i = index; i < candidates.length; i++) {
      if (i !== index && candidates[i - 1] === candidates[i]) continue;

      arr.push(candidates[i]);
      dfs(num - candidates[i], i + 1, arr);
      arr.pop();
    }
  };

  dfs(target, 0, []);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
