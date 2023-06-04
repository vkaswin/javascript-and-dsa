/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values
of the nodes you can see ordered from top to bottom

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const rightSideView = (root: ITreeNode | null) => {
  let nums: number[] = [];
  if (!root) return nums;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let num: number | null = null;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      num = val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    if (num !== null) nums.push(num);
  }

  return nums;
};

let tree = buildBinaryTree([1, 2, 3, 5, 4]);
console.log(rightSideView(tree));
