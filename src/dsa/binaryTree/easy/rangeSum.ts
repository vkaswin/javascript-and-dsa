/*

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const rangeSumBST = (
  root: ITreeNode | null,
  low: number,
  high: number
) => {
  let sum = 0;

  if (!root) return sum;

  let inOrder = (root: ITreeNode | null) => {
    if (!root) return;

    if (root.val >= low && root.val <= high) sum += root.val;
    if (root.val >= low) inOrder(root.left);
    if (root.val <= high) inOrder(root.right);
  };

  inOrder(root);

  return sum;
};

let tree = buildBinaryTree([10, 5, 15, 3, 7, 18, 19]);
console.log(rangeSumBST(tree, 7, 15));
