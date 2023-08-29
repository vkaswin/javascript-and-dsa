import { ITreeNode, buildBinaryTree } from "../tree";

export const inorderSuccessor = (root: ITreeNode | null, target: number) => {
  let successor: ITreeNode | null = null;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    if (root.val > target) successor = root;

    if (target >= root.val) dfs(root.right);
    else dfs(root.left);
  };

  dfs(root);

  return successor;
};

export const alternative = (root: ITreeNode | null, target: number) => {
  if (!root) return null;

  let successor: ITreeNode | null = null;

  while (root) {
    if (root.val > target) successor = root;

    if (target >= root.val) root = root.right;
    else root = root.left;
  }

  return successor;
};

let tree = buildBinaryTree([5, 3, 2, 4, 1, 6, 7, 9, 8, 10]);
console.log(inorderSuccessor(tree, 9));
