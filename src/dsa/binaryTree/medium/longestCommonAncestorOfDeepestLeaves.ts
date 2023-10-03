/*

Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest leaf-nodes of the tree.
Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

*/

import { ITreeNode } from "../tree";

export const lcaDeepestLeaves = (root: ITreeNode | null) => {
  let maxDepth = 0;
  let node = null;

  let dfs = (root: ITreeNode | null, depth: number): number => {
    maxDepth = Math.max(maxDepth, depth);

    if (!root) return depth;

    let left = dfs(root.left, depth + 1);
    let right = dfs(root.right, depth + 1);

    if (left === maxDepth && right === maxDepth) node = root;

    return Math.max(left, right);
  };

  dfs(root, 0);

  return node;
};
