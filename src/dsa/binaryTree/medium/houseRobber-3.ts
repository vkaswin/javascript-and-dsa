/*

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

*/

import { ITreeNode } from "../tree";

export const rob = (root: ITreeNode | null) => {
  if (!root) return 0;

  let dfs = (root: ITreeNode | null): [number, number] => {
    if (!root) return [0, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);

    return [
      root.val + left[1] + right[1],
      Math.max(...left) + Math.max(...right),
    ];
  };

  return Math.max(...dfs(root));
};

let root: ITreeNode = {
  val: 3,
  left: {
    val: 4,
    right: { val: 3, right: null, left: null },
    left: { val: 1, left: null, right: null },
  },
  right: {
    val: 5,
    right: { val: 1, left: null, right: null },
    left: null,
  },
};

console.log(rob(root));
