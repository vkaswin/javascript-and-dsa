/*

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.

Input: root = [1,4,5,4,4,null,5]
Output: 2
Explanation: The shown image shows that the longest path of the same value (i.e. 4).

*/

import { ITreeNode } from "../tree";

export const longestUnivaluePath = (root: ITreeNode | null) => {
  let maxLen = 0;

  let dfs = (root: ITreeNode | null, prev: number): number => {
    if (!root) return 0;

    let left = dfs(root.left, root.val);
    let right = dfs(root.right, root.val);

    maxLen = Math.max(maxLen, left + right);

    return prev === root.val ? 1 + Math.max(left, right) : 0;
  };

  dfs(root, Infinity);

  return maxLen;
};

let root: ITreeNode = {
  val: 1,
  left: {
    val: 4,
    right: {
      val: 4,
      left: null,
      right: { val: 4, left: null, right: { val: 4, left: null, right: null } },
    },
    left: {
      val: 4,
      left: { val: 4, left: { val: 4, left: null, right: null }, right: null },
      right: null,
    },
  },
  right: {
    val: 5,
    right: { val: 5, left: null, right: null },
    left: null,
  },
};

console.log(longestUnivaluePath(root));
