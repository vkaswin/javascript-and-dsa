/*

You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
If such a node does not exist, return null.

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

*/

import { buildBinaryTree, ITreeNode } from "../tree";

export const search = (
  root: ITreeNode | null,
  val: number
): ITreeNode | null => {
  if (!root) return null;
  if (root.val === val) return root;
  return search(root[val > root.val ? "right" : "left"], val);
};

const tree = buildBinaryTree([4, 2, 7, 1, 3]);
console.log(search(tree, 2));
