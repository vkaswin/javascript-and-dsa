import { ITreeNode, buildBinaryTree } from "../tree";

export const evaluateTree = (root: ITreeNode | null): boolean => {
  if (!root) return false;
  if (root.left && root.right)
    return root.val === 2
      ? evaluateTree(root.left) || evaluateTree(root.right)
      : evaluateTree(root.left) && evaluateTree(root.right);
  return Boolean(root.val);
};

let tree = buildBinaryTree([2, 1, 3, null, null, 0, 1]);
console.log(evaluateTree(tree));
