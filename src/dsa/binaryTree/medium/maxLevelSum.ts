/*



*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const largestValues = (root: ITreeNode | null) => {
  let level: number = 0;
  let maxSum: number = -Infinity;

  if (!root) return level;

  let queue = [root];
  let i = 1;

  while (queue.length) {
    let len = queue.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    if (sum > maxSum) {
      level = i;
      maxSum = sum;
    }

    i++;
  }

  return level;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(largestValues(tree));
