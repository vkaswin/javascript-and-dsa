/*

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const zigzagLevelOrder = (root: ITreeNode | null) => {
  let nums: number[][] = [];

  if (!root) return nums;

  let queue = [root];
  let i = 0;

  while (queue.length) {
    let len = queue.length;
    let num: number[] = [];

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      if (left) queue.push(left);
      if (right) queue.push(right);
      num.push(val);
    }

    if (i % 2 !== 0) num.reverse();

    nums.push(num);
    i++;
  }

  return nums;
};

let tree = buildBinaryTree([3, 9, 20, 15, 7]);
console.log(zigzagLevelOrder(tree));
