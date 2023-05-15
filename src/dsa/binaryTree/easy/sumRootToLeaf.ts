/*

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path 
represents a binary number starting with the most significant bit.
For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. 
Return the sum of these numbers. The test cases are generated so that the answer fits in a 32-bits integer.

Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

*/

import { INode, convertArrayToTree } from "../tree";

export const sumRootToLeaf = (root: INode | null) => {
  let paths: string[] = [];

  let findPath = (root: INode | null, path: string) => {
    if (!root) return;
    if (!root.left && !root.right) paths.push(path + root.val.toString());
    findPath(root.left, path + root.val.toString());
    findPath(root.right, path + root.val.toString());
  };

  findPath(root, "");

  return paths.reduce((acc, curr) => acc + parseInt(curr, 2), 0);
};

let tree = convertArrayToTree([1, 0, 1, 0, 1, 0, 1]);
console.log(sumRootToLeaf(tree));
