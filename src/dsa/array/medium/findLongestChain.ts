/*

You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.

Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].

*/

export const findLongestChain = (pairs: number[][]) => {
  pairs.sort((a, b) => a[1] - b[1]);
  let len = 1;
  let end = pairs[0][1];

  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] <= end) continue;
    end = pairs[i][1];
    len++;
  }

  return len;
};

console.log(
  findLongestChain([
    [1, 8],
    [2, 3],
    [4, 5],
  ])
);
