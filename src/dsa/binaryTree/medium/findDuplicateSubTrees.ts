import { buildBinaryTree, ITreeNode } from "../tree";

export const findDuplicateSubtrees = (root: ITreeNode | null) => {
  if (!root) return;
  console.log(root);
};

let tree = buildBinaryTree([1, 2, 3, 4, 2, 4, 4]);
console.log(findDuplicateSubtrees(tree));
