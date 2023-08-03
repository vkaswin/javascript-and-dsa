/*

Given the root of a binary tree, return the leftmost value in the last row of the tree.

Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findBottomLeftValue = (root: ITreeNode | null) => {
  if (!root) return null;

  let queue = [root];
  let num = root.val;

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let { left, right, val } = queue[i] as ITreeNode;
      if (i == 0) num = val;
      if (left) next.push(left);
      if (right) next.push(right);
    }

    queue = next;
  }

  return num;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(findBottomLeftValue(tree));
