/*

Given the root of a binary tree, return the length of the longest
consecutive sequence path.

A
consecutive sequence path is a path where the values
increase by one along the path.

Note that the path can start
at any node in the tree, and you cannot go from a node to its parent in the path.

Input: root = [1,null,3,2,4,null,null,null,5]
Output: 3
Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const longestSequence = (root: ITreeNode | null) => {
  let maxLen = 0;

  if (!root) return 0;

  let dfs = (root: ITreeNode | null, length: number) => {
    if (!root) return;

    maxLen = Math.max(maxLen, length);

    if (root.left)
      dfs(root.left, root.val + 1 === root.left.val ? length + 1 : 1);

    if (root.right)
      dfs(root.right, root.val + 1 === root.right.val ? length + 1 : 1);
  };

  dfs(root, 1);

  return maxLen;
};

let tree = buildBinaryTree([1, 3, 2, 4, 5]);
console.log(longestSequence(tree));
