/*

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const subtreeWithAllDeepest = (root: ITreeNode | null) => {
  if (!root) return null;

  let dfs = (root: ITreeNode | null): [ITreeNode | null, number] => {
    if (!root) return [null, 0];

    let [leftNode, leftDepth] = dfs(root.left);
    let [rightNode, rightDepth] = dfs(root.right);

    if (leftDepth > rightDepth) {
      return [leftNode, leftDepth + 1];
    } else if (rightDepth > leftDepth) {
      return [rightNode, rightDepth + 1];
    } else {
      return [root, leftDepth + 1];
    }
  };

  return dfs(root)[0];
};

let tree = buildBinaryTree([0, 1, 3, -2]);
console.log(subtreeWithAllDeepest(tree));
