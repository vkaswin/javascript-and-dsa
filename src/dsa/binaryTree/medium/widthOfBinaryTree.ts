import { ITreeNode, buildBinaryTree } from "../tree";

export const widthOfBinaryTree = (root: ITreeNode | null) => {
  if (!root) return;

  let queue: ITreeNode[] = [root];
  let left = 0;
  let right = 0;
  let maxWidth = 1;

  while (queue.length) {
    let next: ITreeNode[] = [];

    for (let i = 0; i < queue.length; i++) {
      let { left, right } = queue[i];
      if (left) next.push(left);
      if (right) next.push(right);
    }

    maxWidth = Math.max(maxWidth, right - left + 1);

    queue = next;
  }

  return maxWidth;
};

let tree = buildBinaryTree([1, 2, 3, 4, -1, -2, -3, -4]);
console.log(widthOfBinaryTree(tree));
