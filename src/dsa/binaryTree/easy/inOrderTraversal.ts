/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

*/

import { buildBinaryTree, ITreeNode } from "../tree";

export const inorderTraversal = (root: ITreeNode | null) => {
  let arr: number[] = [];

  if (!root) return arr;

  let inOrder = (root: ITreeNode | null) => {
    if (!root) return;
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  };

  inOrder(root);

  return arr;
};

let tree = buildBinaryTree([45, 79, 15, 10, 20, 12, 55, 90]);
console.log(inorderTraversal(tree));
