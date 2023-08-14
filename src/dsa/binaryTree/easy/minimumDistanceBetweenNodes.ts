/*

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

Input: root = [1,0,48,null,null,12,49]
Output: 1

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const minDiffInBST = (root: ITreeNode | null) => {
  let min = Infinity;
  let prev: ITreeNode | null = null;

  if (!root) return 0;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    if (prev) min = Math.min(min, root.val - prev.val);
    prev = root;
    dfs(root.right);
  };

  dfs(root);

  return min;
};

let tree = buildBinaryTree([90, 69, 49, 89, 52]);
console.log(minDiffInBST(tree));
