/*

Given the root of a binary tree, return the postorder traversal of its nodes' values.

*/

import { buildBinaryTree, ITreeNode } from "../tree";

export const postorderTraversal = (root: ITreeNode | null) => {
  let arr: number[] = [];

  if (!root) return arr;

  let postOrder = (root: ITreeNode | null) => {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    arr.push(root.val);
  };

  postOrder(root);

  return arr;
};

let tree = buildBinaryTree([1, null, 2, 3]);
console.log(postorderTraversal(tree));
