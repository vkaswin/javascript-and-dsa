import { ITreeNode, TreeNode, buildBinaryTree } from "../tree";

export const insertIntoMaxTree = (root: ITreeNode | null, value: number) => {
  if (!root) return null;

  console.log(root, value);
};

let tree = buildBinaryTree([4, 3, 2, 6]);
console.log(insertIntoMaxTree(tree, 5));
