/*

Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const bstToGst = (root: ITreeNode | null) => {
  let sum = 0;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
  };

  dfs(root);

  return root;
};

let root = buildBinaryTree([4, 1, 6, 0, 2, 5, 7, 3, 8]);
console.log(bstToGst(root));
