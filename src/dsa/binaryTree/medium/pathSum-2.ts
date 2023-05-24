/*

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the 
sum of the node values in the path equals targetSum. Each path should be returned as a list of 
the node values, not node references.
A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a 
node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const pathSum = (root: ITreeNode | null, targetSum: number) => {
  let paths: number[][] = [];

  let traverse = (root: ITreeNode | null, arr: number[]) => {
    if (!root) return;

    if (!root.left && !root.right) return paths.push([...arr, root.val]);

    traverse(root.left, [...arr, root.val]);
    traverse(root.right, [...arr, root.val]);
  };

  traverse(root, []);

  return paths.filter(
    (nums) => nums.reduce((acc, curr) => acc + curr, 0) === targetSum
  );
};

let tree = buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
console.log(pathSum(tree, 22));
