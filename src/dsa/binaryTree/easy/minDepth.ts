/*

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down 
to the nearest leaf node.
Note: A leaf is a node with no children.

Input: root = [3,9,20,null,null,15,7]
Output: 2

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const minDepth = (root: ITreeNode | null) => {
  let depth = 0;
  if (!root) return depth;

  let queue = [root];

  while (queue.length) {
    let next = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let { left, right } = queue[i];
      if (!left && !right) return ++depth;
      if (left) next.push(left);
      if (right) next.push(right);
    }
    queue = next;
    depth++;
  }

  return depth;
};

export const minDepthAlternative = (root: ITreeNode | null): number => {
  if (!root) return 0;
  if (!root.left) return 1 + Math.min(minDepth(root.right));
  if (!root.right) return 1 + Math.min(minDepth(root.left));
  return 1 + Math.min(minDepth(root?.left), minDepth(root?.right));
};

let tree = buildBinaryTree([2, 3, 5, 6, 7, 8, 4]);
console.log(tree);
console.log(minDepth(tree));
