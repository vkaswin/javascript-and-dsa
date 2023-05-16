/*

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down 
to the nearest leaf node.
Note: A leaf is a node with no children.

Input: root = [3,9,20,null,null,15,7]
Output: 2

*/

import { INode, convertArrayToTree } from "../tree";

export const minDepth = (root: INode | null): number => {
  if (!root) return 0;
  if (!root.left) return 1 + Math.min(minDepth(root.right));
  if (!root.right) return 1 + Math.min(minDepth(root.left));
  return 1 + Math.min(minDepth(root?.left), minDepth(root?.right));
};

let tree = convertArrayToTree([2, 3, 5, 6, 7, 8, 4]);
console.log(tree);
console.log(minDepth(tree));
