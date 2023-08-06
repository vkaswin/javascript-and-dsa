/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const isValidBST = (root: ITreeNode | null) => {
  if (!root) return false;

  let nums: number[] = [];

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) return false;
  }

  return true;
};

let tree = buildBinaryTree([3, 1, 5, 0, 2, 4, 6]);
console.log(isValidBST(tree));
