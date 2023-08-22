import { ITreeNode, TreeNode } from "../tree";

export const cloneTree = (root: ITreeNode | null) => {
  if (!root) return null;

  let node = new TreeNode(root.val);
  node.left = cloneTree(root.left);
  node.right = cloneTree(root.right);

  return node;
};
