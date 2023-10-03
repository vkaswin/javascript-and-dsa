/*

Given the root of a binary tree and an integer limit, delete all insufficient nodes in the tree simultaneously, and return the root of the resulting binary tree.

A node is insufficient if every root to leaf path intersecting this node has a sum strictly less than limit.

A leaf is a node with no children.

Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
Output: [1,2,3,4,null,null,7,8,9,null,14]

*/

import { ITreeNode } from "../tree";

export const sufficientSubset = (
  root: ITreeNode | null,
  limit: number
): ITreeNode | null => {
  let dfs = (root: ITreeNode | null, sum: number): boolean => {
    if (!root) return false;

    sum += root.val;

    if (!root.left && !root.right) return sum >= limit;

    let left = dfs(root.left, sum);
    let right = dfs(root.right, sum);

    if (!left) root.left = null;
    if (!right) root.right = null;

    return left || right;
  };

  let res = dfs(root, 0);

  return res ? root : null;
};
