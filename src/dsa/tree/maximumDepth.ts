/*

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Input: root = [1,null,3,2,4,null,5,6]
Output: 3

*/
import { ITreeNode } from "./tree";

export const maxDepth = (root: ITreeNode | null): number => {
  if (!root) return 0;

  return 1 + Math.max(0, ...root.children.map(maxDepth));
};

export const maxDepth1 = (root: ITreeNode | null) => {
  let depth = 0;

  if (!root) return depth;

  let queue = [root];

  while (queue.length) {
    let next: ITreeNode[] = [];

    queue.forEach((node) => node?.children?.forEach((node) => next.push(node)));

    queue = next;
    depth++;
  }

  return depth;
};
