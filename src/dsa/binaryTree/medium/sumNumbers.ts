/*

You are given the root of a binary tree containing digits from 0 to 9 only.
Each root-to-leaf path in the tree represents a number.
For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will 
fit in a 32-bit integer.

A leaf node is a node with no children.

Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const sumNumbers = (root: ITreeNode | null) => {
  if (!root) return 0;

  let nums: string[] = [];

  let traverse = (root: ITreeNode | null, num: string) => {
    if (!root) return;
    if (!root.left && !root.right) return nums.push(num + root.val);
    traverse(root.left, num + root.val);
    traverse(root.right, num + root.val);
  };

  traverse(root, "");

  return nums.reduce((acc, curr) => acc + +curr, 0);
};

let tree = buildBinaryTree([2, 1, 3]);
console.log(sumNumbers(tree));
