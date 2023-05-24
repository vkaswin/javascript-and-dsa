import { ITreeNode, buildBinaryTree } from "../tree";

export const pathSum = (root: ITreeNode | null, targetSum: number) => {
  let count = 0;

  if (!root) return count;

  let traverse = (root: ITreeNode | null, value?: number) => {
    if (!root) return;

    if (typeof value === "undefined") {
      traverse(root.left);
      traverse(root.right);
    }

    let sum = (value ?? 0) + root.val;

    if (sum === targetSum) count++;

    traverse(root.left, sum);
    traverse(root.right, sum);
  };

  traverse(root);

  return count;
};

let tree = buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
console.log(pathSum(tree, -5));
