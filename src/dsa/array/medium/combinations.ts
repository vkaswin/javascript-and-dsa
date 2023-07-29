/*

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

*/

export const combine = (n: number, k: number) => {
  let result: number[][] = [];

  let dfs = (index: number, arr: number[]) => {
    if (arr.length === k) return result.push([...arr]);

    for (let i = index; i <= n; i++) {
      arr.push(i);
      dfs(i + 1, arr);
      arr.pop();
    }
  };

  dfs(1, []);

  return result;
};

console.log(combine(4, 2));
