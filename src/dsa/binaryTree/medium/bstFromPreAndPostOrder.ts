/*

Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a 
binary tree of distinct values and postorder is the postorder traversal of the same tree, 
reconstruct and return the binary tree.
If there exist multiple answers, you can return any of them.

Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]

*/

import { TreeNode } from "../tree";

export const constructFromPrePost = (
  preorder: number[],
  postorder: number[]
) => {
  if (preorder.length === 0 || postorder.length === 0) return null;
};

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
