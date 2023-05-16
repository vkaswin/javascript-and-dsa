/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

*/

import { INode } from "../tree";

export const isSymmetric = (root: INode | null) => {
  if (!root) return false;

  let symmetric = (rootA: INode | null, rootB: INode | null): boolean => {
    if (!rootA && !rootB) return true;
    if (!rootA || !rootB || rootA.left?.val !== rootB.right?.val) return false;
    return (
      symmetric(rootA.left, rootB.right) && symmetric(rootA.right, rootB.left)
    );
  };

  return symmetric(root, root);
};

let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: { val: 10, right: null, left: null },
    },
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: { val: 4, left: { val: 10, right: null, left: null }, right: null },
  },
};

console.log(isSymmetric(tree));
