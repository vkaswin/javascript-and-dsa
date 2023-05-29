import { ITreeNode, TreeNode } from "../tree";

export const constructMaximumBinaryTree = (nums: number[]) => {
  let tree: ITreeNode | null = null;

  if (nums.length === 0) return tree;

  let buildTree = (nums: number[]): ITreeNode | null => {
    if (nums.length === 0) return null;

    let maxIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[maxIndex]) maxIndex = i;
    }

    let left = nums.slice(0, maxIndex);
    let right = nums.slice(maxIndex + 1);

    let tree = new TreeNode(nums[maxIndex]);
    tree.left = buildTree(left);
    tree.right = buildTree(right);

    return tree;
  };

  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  let left = nums.slice(0, maxIndex);
  let right = nums.slice(maxIndex + 1);
  tree = new TreeNode(nums[maxIndex]);

  tree.left = buildTree(left);
  tree.right = buildTree(right);

  return tree;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
3;
