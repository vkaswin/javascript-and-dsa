/*

Given the root of a binary tree, return the sum of values of its deepest leaves.

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

*/

import { INode, convertArrayToTree } from "../tree";

export const deepestLeavesSum = (root: INode | null) => {
  if (!root) return null;

  let obj: Record<number, number> = {};

  let leafNode = (root: INode | null, depth: number) => {
    if (!root) return;
    if (!root.left && !root.right) {
      if (obj[depth]) {
        obj[depth] += root.val;
      } else {
        obj[depth] = root.val;
      }
    }
    leafNode(root.left, depth + 1);
    leafNode(root.right, depth + 1);
  };

  leafNode(root, 1);

  let maxDepth = 0;

  for (let key in obj) {
    if (+key > maxDepth) maxDepth = +key;
  }

  return obj[maxDepth] || 0;
};

let tree = convertArrayToTree([
  1,
  2,
  3,
  4,
  5,
  null,
  6,
  7,
  null,
  null,
  null,
  null,
  8,
]);
console.log(deepestLeavesSum(tree));
