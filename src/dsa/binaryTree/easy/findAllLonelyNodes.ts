/*

In a binary tree, a
lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list
in any order.

Input: root = [11,99,88,77,null,null,66,55,null,null,44,33,null,null,22]
Output: [77,55,33,66,44,22]
Explanation: Nodes 99 and 88 share the same parent. Node 11 is the root.All other nodes are lonely.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findLonelyNodes = (root: ITreeNode | null) => {
  let nums: number[] = [];

  if (!root) return nums;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    if (!root.right && root.left) nums.push(root.left.val);
    if (!root.left && root.right) nums.push(root.right.val);

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return nums;
};

let tree = buildBinaryTree([0, -3, -2, -1, 1, 2, 3]);
console.log(findLonelyNodes(tree));
