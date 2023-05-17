/*

Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const invertTree = (root: ITreeNode | null): ITreeNode | null => {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

let tree = buildBinaryTree([4, 2, 7, 1, 3, 6]);
console.log(invertTree(tree));
