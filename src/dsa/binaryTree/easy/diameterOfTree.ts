/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

*/

import { ITreeNode, buildBinaryTree } from "../tree";

const diameterOfBinaryTree = (root: ITreeNode | null) => {
  let maxDepth = 0;

  if (!root) return maxDepth;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    maxDepth = Math.max(maxDepth, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);

  return maxDepth;
};

let tree = buildBinaryTree([4, 5, 6, 7, 6, 6, 5]);
console.log(diameterOfBinaryTree(tree));
