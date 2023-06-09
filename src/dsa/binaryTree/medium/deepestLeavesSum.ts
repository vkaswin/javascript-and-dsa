/*

Given the root of a binary tree, return the sum of values of its deepest leaves.

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const deepestLeavesSum = (root: ITreeNode | null) => {
  if (!root) return null;

  let obj: Record<number, number> = {};

  let leafNode = (root: ITreeNode | null, depth: number) => {
    if (!root) return;

    if (!root.left && !root.right) {
      if (obj[depth]) {
        obj[depth] += root.val;
      } else {
        obj[depth] = root.val;
      }
    }
    leafNode(root.left, depth + 1);
    leafNode(root.right, depth + 1);
  };

  leafNode(root, 1);

  let maxDepth = 0;

  for (let key in obj) {
    if (+key > maxDepth) maxDepth = +key;
  }

  return obj[maxDepth] || 0;
};

export const deepestLeavesSumAlternative = (root: ITreeNode | null) => {
  if (!root) return null;

  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let next = [];
    sum = 0;

    for (let i = 0; i < queue.length; i++) {
      let { left, right, val } = queue[i];
      if (left) next.push(left);
      if (right) next.push(right);
      sum += val;
    }

    queue = next;
  }

  return sum;
};

let tree = buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(deepestLeavesSum(tree));
