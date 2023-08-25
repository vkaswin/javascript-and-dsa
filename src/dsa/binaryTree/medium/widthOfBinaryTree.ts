/*

Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer.

Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const widthOfBinaryTree = (root: ITreeNode | null) => {
  let maxWidth = 0;

  if (!root) return maxWidth;

  let queue: [ITreeNode, number][] = [[root, 1]];

  while (queue.length) {
    let next: [ITreeNode, number][] = [];

    let left = queue[0][1];
    let right = queue[queue.length - 1][1];

    maxWidth = Math.max(maxWidth, right - left + 1);

    for (let i = 0; i < queue.length; i++) {
      let [node, position] = queue[i];
      let pos = position - left;
      if (node.left) next.push([node.left, 2 * pos]);
      if (node.right) next.push([node.right, 2 * pos + 1]);
    }

    queue = next;
  }

  return maxWidth;
};

let tree = buildBinaryTree([1, 2, 3, 4, -1, -2, -3, -4]);
console.log(widthOfBinaryTree(tree));
