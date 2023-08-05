/*

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a 
binary tree and postorder is the postorder traversal of the same tree, construct and return 
the binary tree.

*/

import { TreeNode } from "../tree";

export const buildTree = (inorder: number[], postorder: number[]) => {
  if (!inorder.length || !postorder.length) return null;

  let value = postorder.pop()!;
  let root = new TreeNode(value);
  let index = inorder.indexOf(value);

  let left = inorder.splice(0, index + 1);
  left.pop();

  root.right = buildTree(inorder, postorder);
  root.left = buildTree(left, postorder);

  return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
