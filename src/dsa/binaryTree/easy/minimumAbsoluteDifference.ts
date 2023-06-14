/*

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the
values of any two different nodes in the tree.

Input: root = [4,2,6,1,3]
Output: 1

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const getMinimumDifference = (root: ITreeNode | null) => {
  let minDiff = Infinity;
  let prevNode: ITreeNode | null = null;

  if (!root) return minDiff;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    dfs(root.left);

    if (prevNode) {
      minDiff = Math.min(Math.abs(root.val - prevNode.val), minDiff);
    }

    prevNode = root;

    dfs(root.right);
  };

  dfs(root);

  return minDiff;
};

let tree = buildBinaryTree([236, 104, 701, 227, 911]); // 9
console.log(getMinimumDifference(tree));
