/*

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [1,null,2,2]
Output: [2]

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findMode = (root: ITreeNode | null) => {
  let result: number[] = [];

  if (!root) return result;

  let obj: Record<number, number> = {};
  let maxFreq = 0;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    obj[root.val] = (obj[root.val] || 0) + 1;
    maxFreq = Math.max(obj[root.val], maxFreq);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  for (let key in obj) {
    if (obj[key] === maxFreq) result.push(+key);
  }

  return result;
};

console.log(findMode(buildBinaryTree([1, 2, 2])));
