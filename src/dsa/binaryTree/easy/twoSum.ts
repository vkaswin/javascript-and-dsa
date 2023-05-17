/*

Given the root of a binary search tree and an integer k, return true if there exist 
two elements in the BST such that their sum is equal to k, or false otherwise.

Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findTarget = (root: ITreeNode | null, k: number) => {
  if (!root) return false;

  let isExist = false;
  let obj: Record<number, number> = {};

  let preOrder = (root: ITreeNode | null) => {
    if (!root) return;
    let diff = k - root.val;
    if (diff in obj) isExist = true;
    obj[root.val] = root.val;
    preOrder(root.left);
    preOrder(root.right);
  };

  preOrder(root);

  return isExist;
};

let tree = buildBinaryTree([1, -2, 3, null, -1, null, 4]);
console.log(findTarget(tree, 2));
