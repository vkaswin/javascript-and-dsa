/*

Given the root of a binary tree, return the leftmost value in the last row of the tree.

Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findBottomLeftValue = (root: ITreeNode | null) => {
  if (!root) return null;

  let queue = [root];
  let num: number = root.val;

  while (queue.length) {
    let len = queue.length;
    num = NaN;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      if (isNaN(num)) num = val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  return num;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(findBottomLeftValue(tree));
