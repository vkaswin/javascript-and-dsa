/*

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary
tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

import { TreeNode } from "../tree";

export const buildTree = (preorder: number[], inorder: number[]) => {
  if (!preorder.length || !inorder.length) return null;

  let value = preorder.shift()!;
  let index = inorder.indexOf(value);

  let root = new TreeNode(value);

  let left = inorder.splice(0, index + 1);
  left.pop();

  root.left = buildTree(preorder, left);
  root.right = buildTree(preorder, inorder);

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
