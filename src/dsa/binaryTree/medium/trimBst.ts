import { ITreeNode, buildBinaryTree } from "../tree";

export const trimBst = (
  root: ITreeNode | null,
  low: number,
  high: number
): ITreeNode | null => {
  if (!root) return null;

  root.left = trimBst(root.left, low, high);
  root.right = trimBst(root.right, low, high);

  if (root.val < low) return root.right;
  if (root.val > high) return root.left;

  return root;
};

let tree = buildBinaryTree([3, 0, 4, 2, 1]);
console.log(trimBst(tree, 4, 5));
