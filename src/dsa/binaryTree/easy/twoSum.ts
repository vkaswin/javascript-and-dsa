/*

Given the root of a binary search tree and an integer k, return true if there exist 
two elements in the BST such that their sum is equal to k, or false otherwise.

Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findTarget = (root: ITreeNode | null, k: number) => {
  if (!root) return false;

  let obj: Record<number, number> = {};

  let dfs = (root: ITreeNode | null): boolean => {
    if (!root) return false;
    if (k - root.val in obj) return true;
    obj[root.val] = root.val;
    return dfs(root.left) || dfs(root.right);
  };

  return dfs(root);
};

let tree = buildBinaryTree([1, -2, 3, null, -1, null, 4]);
console.log(findTarget(tree, 2));
