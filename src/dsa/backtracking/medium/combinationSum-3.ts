/*

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.

*/

export const combinationSum3 = (k: number, n: number) => {
  let result: number[][] = [];

  let backtrack = (index: number, sum: number, arr: number[]) => {
    if (arr.length > k) return;

    if (sum === n && arr.length === k) {
      result.push([...arr]);
      return;
    }

    for (let i = index; i <= 9; i++) {
      arr.push(i);
      backtrack(i + 1, sum + i, arr);
      arr.pop();
    }
  };

  backtrack(1, 0, []);

  return result;
};

console.log(combinationSum3(9, 45));
