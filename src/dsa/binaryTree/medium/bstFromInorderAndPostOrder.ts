/*

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a 
binary tree and postorder is the postorder traversal of the same tree, construct and return 
the binary tree.

*/

import { TreeNode } from "../tree";

export const buildTree = (inorder: number[], postorder: number[]) => {
  if (inorder.length === 0 || postorder.length === 0) return null;

  let value = postorder.pop() as number;
  let root = new TreeNode(value);
  let index = inorder.indexOf(value);
  root.right = buildTree(inorder.slice(index + 1), postorder);
  root.left = buildTree(inorder.slice(0, index), postorder);

  return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
