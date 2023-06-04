import { ITreeNode } from "./tree";

export const postOrder = (root: ITreeNode | null) => {
  let nums: number[] = [];

  if (!root) return nums;

  let traverse = (root: ITreeNode | null) => {
    if (!root) return;

    nums.push(root.val);

    if (root.children.length > 0) root.children.forEach(traverse);
  };

  traverse(root);

  return nums;
};
