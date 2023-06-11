/*

A binary tree is named Even-Odd if it meets the following conditions:

The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
Output: true
Explanation: The node values on each level are:
Level 0: [1]
Level 1: [10,4]
Level 2: [3,7,9]
Level 3: [12,8,6,2]
Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const isEvenOddTree = (root: ITreeNode | null) => {
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let len = queue.length;
    let next = [];
    let prev = null;
    let isEven = level % 2 === 0;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue[i] as ITreeNode;

      if (isEven) {
        if (val % 2 === 0 || (prev !== null && val <= prev)) return false;
      } else {
        if (val % 2 !== 0 || (prev !== null && val >= prev)) return false;
      }

      prev = val;
      if (left) next.push(left);
      if (right) next.push(right);
    }

    queue = next;
    level++;
  }

  return true;
};

let tree = [1, 10, 4, 3, 7, 9, 12, 8, 6, 2];
console.log(console.log(buildBinaryTree(tree)));
