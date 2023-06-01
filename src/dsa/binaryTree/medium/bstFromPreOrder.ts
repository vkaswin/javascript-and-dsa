/*

Given an array of integers preorder, which represents the preorder traversal of a BST 
(i.e., binary search tree), construct the tree and return its root.
It is guaranteed that there is always possible to find a binary search tree with the given 
requirements for the given test cases.
A binary search tree is a binary tree where for every node, any descendant of Node.left has a 
value strictly less than Node.val, and any descendant of Node.right has a value strictly 
greater than Node.val.
A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, 
then traverses Node.right.



*/

import { TreeNode } from "../tree";

export const bstFromPreorder = (preorder: number[]) => {
  if (preorder.length === 0) return null;

  let left = [];
  let right = [];

  let root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] >= preorder[0]) right.push(preorder[i]);
    else left.push(preorder[i]);
  }

  root.left = bstFromPreorder(left);
  root.right = bstFromPreorder(right);

  return root;
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
