/*

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary
tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

import { TreeNode } from "../tree";

export const buildTree = (preorder: number[], inorder: number[]) => {
  if (preorder.length === 0 || inorder.length == 0) return null;

  let value = preorder[0];
  let index = inorder.indexOf(value);
  let root = new TreeNode(value);
  preorder.splice(0, 1);
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
3;
