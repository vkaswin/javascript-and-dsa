/*

Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

Input: root = [1,null,2,null,0,3]
Output: 3

*/

import { ITreeNode } from "../tree";

export const maxAncestorDiff = (root: ITreeNode | null) => {
  let maxDiff = 0;

  let dfs = (root: ITreeNode | null, max: number, min: number) => {
    if (!root) {
      maxDiff = Math.max(maxDiff, max - min);
      return;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);

    dfs(root.left, max, min);
    dfs(root.right, max, min);
  };

  dfs(root, -Infinity, Infinity);

  return maxDiff;
};

let root: ITreeNode = {
  val: 8,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: {
      val: 6,
      left: { val: 4, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  },
  right: {
    val: 10,
    left: null,
    right: { val: 14, right: null, left: { val: 13, right: null, left: null } },
  },
};

console.log(maxAncestorDiff(root));
