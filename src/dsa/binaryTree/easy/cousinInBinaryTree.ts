/*

Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

Input: root = [1,2,3,4], x = 4, y = 3
Output: false

*/

import { ITreeNode } from "../tree";

export const isCousins = (root: ITreeNode | null, x: number, y: number) => {
  if (!root) return false;

  let queue = [root];

  while (queue.length) {
    let next = [];
    let foundX = false;
    let foundY = false;
    for (let i = 0; i < queue.length; i++) {
      let { val, left, right } = queue[i];

      if (
        (left && right && left.val === x && right.val === y) ||
        (left && right && left.val === y && right.val === x)
      )
        return false;

      if (val === x) foundX = true;
      if (val === y) foundY = true;

      if (left) next.push(left);
      if (right) next.push(right);
    }

    queue = next;

    if (foundX && foundY) return true;
  }

  return false;
};
