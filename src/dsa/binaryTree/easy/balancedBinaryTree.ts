/*

Given a binary tree, determine if it is height-balanced

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: root = [3,9,20,null,null,15,7]
Output: true

*/

import { ITreeNode } from "../tree";

export const isBalanced = (root: ITreeNode | null) => {
  if (!root) return true;

  let dfs = (root: ITreeNode | null): [boolean, number] => {
    if (!root) return [true, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    let isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [isBalanced, 1 + Math.max(left[1], right[1])];
  };

  return dfs(root)[0];
};
