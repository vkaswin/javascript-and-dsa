/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between
two nodes p and q as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const lowestCommonAncestor = (
  root: ITreeNode | null,
  p: ITreeNode,
  q: ITreeNode
): ITreeNode | null => {
  if (!root) return null;

  if (root.val === p.val || root.val === q.val) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right;
};

console.log(
  lowestCommonAncestor(
    buildBinaryTree([3, 5, 1, 6, 2, 0, 8, 7, 4]),
    { val: 7, left: null, right: null },
    { val: 4, left: null, right: null }
  )
);
