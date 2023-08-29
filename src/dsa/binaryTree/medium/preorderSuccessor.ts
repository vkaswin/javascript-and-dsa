import { ITreeNode, buildBinaryTree } from "../tree";

export const preorderSuccessor = (root: ITreeNode | null, target: number) => {
  let successor: ITreeNode | null = null;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    if (root.val < target) successor = root;

    if (target >= root.val) dfs(root.right);
    else dfs(root.left);
  };

  dfs(root);

  return successor;
};

let tree = buildBinaryTree([5, 3, 2, 4, 1, 6, 7, 9, 8, 10]);
console.log(preorderSuccessor(tree, 10));
