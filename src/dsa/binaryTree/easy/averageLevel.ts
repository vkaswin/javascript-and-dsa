/*

Given the root of a binary tree, return the average value of the nodes on each level in the
form of an array. Answers within 10-5 of the actual answer will be accepted.

Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const averageOfLevels = (root: ITreeNode | null) => {
  let average: number[] = [];

  if (!root) return average;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let next = [];
    let sum = 0;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.pop() as ITreeNode;
      sum += val;
      if (left) next.push(left);
      if (right) next.push(right);
    }

    average.push(sum / len);
    queue = next;
  }

  return average;
};

let tree = buildBinaryTree([3, 9, 20, 15, 7]);
console.log(averageOfLevels(tree));
