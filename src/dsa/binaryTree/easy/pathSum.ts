/*

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf 
path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const hasPathSum = (root: ITreeNode | null, targetSum: number) => {
  if (!root) return false;

  let leafNode = (root: ITreeNode | null, sum: number): boolean => {
    if (!root) return false;
    if (!root.left && !root.right && targetSum === root.val + sum) return true;
    return (
      leafNode(root.left, sum + root.val) ||
      leafNode(root.right, sum + root.val)
    );
  };

  return leafNode(root, 0);
};

let tree = buildBinaryTree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
console.log(hasPathSum(tree, 16));
