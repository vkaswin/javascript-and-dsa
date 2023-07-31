/*

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

*/

import { ITreeNode } from "../tree";

export const flipEquiv = (root1: ITreeNode | null, root2: ITreeNode | null) => {
  if (!root1 && !root2) return true;

  if (!root1 || !root2) return false;

  let dfs = (root1: ITreeNode | null, root2: ITreeNode | null): boolean => {
    if (!root1 && !root2) return true;

    if (!root1 || !root2) return false;

    if (root1.left && root2.right && root1.left.val === root2.right.val) {
      [root2.left, root2.right] = [root2.right, root2.left];
    } else if (
      root1.right &&
      root2.left &&
      root1.right.val === root2.left.val
    ) {
      [root2.right, root2.left] = [root2.left, root2.right];
    }

    if (root1.val !== root2.val) return false;

    return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
  };

  return dfs(root1, root2);
};

let root1: ITreeNode = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: {
      val: 5,
      left: { val: 7, right: null, left: null },
      right: { val: 8, left: null, right: null },
    },
  },
  right: {
    val: 3,
    left: { val: 6, right: null, left: null },
    right: null,
  },
};

let root2: ITreeNode = {
  val: 1,
  left: { val: 3, right: { val: 6, left: null, right: null }, left: null },
  right: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: {
      val: 5,
      left: { val: 8, right: null, left: null },
      right: { val: 7, left: null, right: null },
    },
  },
};

console.log(flipEquiv(root1, root2));
