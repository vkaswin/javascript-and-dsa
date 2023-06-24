/*

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

*/
import { ITreeNode, buildBinaryTree } from "../tree";

export const pathSum = (root: ITreeNode | null, targetSum: number) => {
  let count = 0;

  if (!root) return count;

  let traverse = (root: ITreeNode | null, value?: number) => {
    if (!root) return;

    if (value === undefined) {
      traverse(root.left);
      traverse(root.right);
    }

    let sum = (value ?? 0) + root.val;

    if (sum === targetSum) count++;

    traverse(root.left, sum);
    traverse(root.right, sum);
  };

  traverse(root);

  return count;
};

let tree = buildBinaryTree([5, 4, 8, 11, 13, 4, 7, 2, 5, 1]);
console.log(pathSum(tree, -5));
