/*

Given the root of a binary search tree, and an integer k, return the kth smallest value
(1-indexed) of all the values of the nodes in the tree.

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const kthSmallest = (root: ITreeNode | null, k: number) => {
  if (!root) return;

  let nums: number[] = [];

  let traverse = (root: ITreeNode | null) => {
    if (!root) return;
    traverse(root.left);
    nums.push(root.val);
    traverse(root.right);
  };

  traverse(root);

  return nums[k - 1];
};

let tree = buildBinaryTree([5, 3, 6, 2, 4, 1, -4]);
console.log(kthSmallest(tree, 3));
