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
  let level = 0;

  while (queue.length) {
    let num: number[] = [];
    let next: ITreeNode[] = [];
    let isEvenLevel = level % 2 === 0;

    for (let i = 0, j = queue.length - 1; i < queue.length; i++, j--) {
      let { left, right, val } = queue[i] as ITreeNode;
      if (left) next.push(left);
      if (right) next.push(right);
      num[isEvenLevel ? i : j] = val;
    }

    nums.push(num);
    queue = next;
    level++;
  }

  return nums;
};

let tree = buildBinaryTree([3, 9, 20, 15, 7]);
console.log(zigzagLevelOrder(tree));
