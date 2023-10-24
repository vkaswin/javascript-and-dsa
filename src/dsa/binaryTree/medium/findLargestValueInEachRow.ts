/*

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const largestValues = (root: ITreeNode | null) => {
  let result: number[] = [];

  if (!root) return result;

  let queue: ITreeNode[] = [root];

  while (queue.length) {
    let next: ITreeNode[] = [];
    let max = -Infinity;

    for (let { val, left, right } of queue) {
      max = Math.max(max, val);
      if (left) next.push(left);
      if (right) next.push(right);
    }

    queue = next;
    result.push(max);
  }

  return result;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(largestValues(tree));
