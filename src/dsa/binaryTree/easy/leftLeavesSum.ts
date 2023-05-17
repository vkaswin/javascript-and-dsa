/*

Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const sumOfLeftLeaves = (root: ITreeNode | null) => {
  let sum = 0;

  if (!root) return sum;

  let traverse = (root: ITreeNode | null, isLeftNode: boolean) => {
    if (!root) return;
    if (isLeftNode && root.left === null && root.right === null)
      sum += root.val;
    traverse(root.left, true);
    traverse(root.right, false);
  };

  traverse(root.left, true);
  traverse(root.right, false);

  return sum;
};

function sumOfLeftLeaves2(
  root: ITreeNode | null,
  isLeftNode: boolean = false
): number {
  if (!root) return 0;
  if (isLeftNode && !root.left && !root.right) return root.val;
  return sumOfLeftLeaves2(root.left, true) + sumOfLeftLeaves2(root.right);
}

let tree = buildBinaryTree([3, 9, 20, null, null, 15, 7, 22]);
console.log(sumOfLeftLeaves(tree));
