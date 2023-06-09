import { ITreeNode, buildBinaryTree } from "../tree";

export const longestZigZag = (root: ITreeNode | null) => {
  let maxDepth = 0;

  if (!root) return maxDepth;

  let traverse = (root: ITreeNode, depth: number) => {
    if (depth === 0) {
      if (root.left) traverse(root.left, 0);
      if (root.right) traverse(root.right, 0);
    }

    if (depth % 2 === 0 && root.right) traverse(root.right, depth + 1);
    else if (depth % 2 === 1 && root.left) traverse(root.left, depth + 1);
    else if (depth > maxDepth) maxDepth = depth;
  };

  traverse(root, 0);

  return maxDepth;
};

let tree = buildBinaryTree([3, 1, 2, 5, 4, 6, 3, 9]);
console.log(longestZigZag(tree));
