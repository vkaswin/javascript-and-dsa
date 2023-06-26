/*

Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findFrequentTreeSum = (root: ITreeNode | null) => {
  if (!root) return null;

  let count = 0;
  let obj: Record<number, number> = {};

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    let sum = root.val + left + right;
    obj[sum] = (obj[sum] || 0) + 1;
    count = Math.max(count, obj[sum]);

    return sum;
  };

  dfs(root);

  let result: number[] = [];

  for (let key in obj) {
    if (obj[key] === count) result.push(+key);
  }

  return result;
};

let tree = buildBinaryTree([2, 1, 3]);
console.log(findFrequentTreeSum(tree));
