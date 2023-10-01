/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the 
sequence has an edge connecting them. A node can only appear in the sequence at most once.
Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

*/

import { ITreeNode } from "../tree";

export const maxPathSum = (root: ITreeNode | null) => {
  let maxSum = -Infinity;

  if (!root) return maxSum;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    maxSum = Math.max(maxSum, left + right + root.val);

    return Math.max(0, left + root.val, right + root.val);
  };

  dfs(root);

  return maxSum;
};
let root: ITreeNode = {
  val: -10,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 40,
    right: { val: -7, left: null, right: null },
    left: { val: -15, left: null, right: null },
  },
};

console.log(maxPathSum(root));
