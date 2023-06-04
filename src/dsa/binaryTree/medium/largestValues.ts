import { ITreeNode, buildBinaryTree } from "../tree";

export const largestValues = (root: ITreeNode | null) => {
  let nums: number[] = [];

  if (!root) return nums;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let max = -Infinity;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      if (val > max) max = val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    nums.push(max);
  }

  return nums;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(largestValues(tree));
