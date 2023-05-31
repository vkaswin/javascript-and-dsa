/*

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root).

Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const levelOrderBottom = (root: ITreeNode | null) => {
  let result: number[][] = [];

  if (!root) return result;

  let queue: ITreeNode[] = [root];

  while (queue.length) {
    let nums: number[] = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      if (left) queue.push(left);
      if (right) queue.push(right);
      nums.push(val);
    }

    result.push(nums);
  }

  return result.reverse();
};

let tree = buildBinaryTree([3, 9, 20, 15, 7]);
console.log(levelOrderBottom(tree));
