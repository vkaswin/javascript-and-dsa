/*

You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:

nums1[i] == nums2[j], and
the line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).

Return the maximum number of connecting lines we can draw in this way.

Input: nums1 = [1,4,2], nums2 = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.

*/

export const maxUncrossedLines = (nums1: number[], nums2: number[]) => {
  let dp = new Array(nums1.length).fill(0).map(() => new Array(nums2.length));

  let dfs = (i: number, j: number) => {
    if (i >= nums1.length || j >= nums2.length) return 0;

    let count = 0;

    if (dp[i][j] !== undefined) return dp[i][j];

    if (nums1[i] === nums2[j]) count += 1 + dfs(i + 1, j + 1);
    else count += Math.max(dfs(i + 1, j), dfs(i, j + 1));

    return (dp[i][j] = count);
  };

  return dfs(0, 0);
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
