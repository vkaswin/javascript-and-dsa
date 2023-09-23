/*

Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.

Input: root = [1,null,0,0,1]
Output: [1,null,0,null,1]
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

*/

import { ITreeNode } from "../tree";

export const pruneTree = (root: ITreeNode | null) => {
  if (!root) return null;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (!left) root.left = null;
    if (!right) root.right = null;

    return left || right || root.val;
  };

  dfs(root);

  if (!root.val && !root.left && !root.right) return null;

  return root;
};

let root: ITreeNode = {
  val: 1,
  left: null,
  right: {
    val: 0,
    left: { val: 0, right: null, left: null },
    right: { val: 1, right: null, left: null },
  },
};

console.log(pruneTree(root));
