import { ITreeNode, buildBinaryTree } from "../tree";

export const kthLargestLevelSum = (root: ITreeNode | null, k: number) => {
  let sums: number[] = [];

  if (!root) return -1;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
      let { left, right, val } = queue.shift() as ITreeNode;
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    sums.push(sum);
  }

  sums.sort((a, b) => b - a);

  return sums[k - 1] ?? -1;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(kthLargestLevelSum(tree, 2));
