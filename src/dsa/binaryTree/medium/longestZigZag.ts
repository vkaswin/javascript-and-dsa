/*

You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const longestZigZag = (root: ITreeNode | null) => {
  let maxDepth = 0;

  if (!root) return maxDepth;

  let dfs = (root: ITreeNode | null, isLeft: boolean, depth: number) => {
    if (!root) return;

    maxDepth = Math.max(maxDepth, depth);

    if (isLeft) {
      dfs(root.right, false, depth + 1);
      dfs(root.left, true, 1);
    } else {
      dfs(root.left, true, depth + 1);
      dfs(root.right, false, 1);
    }
  };

  dfs(root.left, true, 1);
  dfs(root.right, false, 1);

  return maxDepth;
};

let tree = buildBinaryTree([3, 5, 4, 15, 10, 12, 11]);
console.log(longestZigZag(tree));
