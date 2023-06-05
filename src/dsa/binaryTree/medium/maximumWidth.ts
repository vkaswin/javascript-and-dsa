/*

Given the root of a binary tree, return the maximum width of the given tree.
The maximum width of a tree is the maximum width among all levels.
The width of one level is defined as the length between the end-nodes 
(the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that
would be present in a complete binary tree extending down to that level are also counted into
the length calculation. It is guaranteed that the answer will in the range of a 32-bit signed integer.

Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const widthOfBinaryTree = (root: ITreeNode | null) => {
  let width = 0;

  if (!root) return width;

  let queue = [root];

  while (queue.length) {
    let next: ITreeNode[] = [];

    for (let i = 0; i < queue.length; i++) {
      let { left, right } = queue[i];
      if (left) next.push(left);
      if (right) next.push(right);
      width = width + 2;
    }

    queue = next;
  }

  return width;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(widthOfBinaryTree(tree));
