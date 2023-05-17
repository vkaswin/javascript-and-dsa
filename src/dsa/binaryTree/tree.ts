import { BinaryTree } from "../implementations/binaryTree";
import { ITreeNode, TreeNode } from "../implementations/binaryTree";
export type { ITreeNode };
export { TreeNode };

export const buildBinaryTree = (nums: (number | null)[]) => {
  let tree = new BinaryTree();

  nums.forEach((num) => {
    if (num === null) return;
    tree.insert(num);
  });

  return tree.head;
};
