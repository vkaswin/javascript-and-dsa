import { TreeNode } from "../tree";

export const sortedArrayToBST = (nums: number[]) => {
  if (nums.length === 0) return null;

  let middle = Math.floor(nums.length / 2);

  let tree = new TreeNode(nums[middle]);

  let left = nums.slice(0, middle);
  let right = nums.slice(middle + 1);
  console.log(left, right);

  tree.left = sortedArrayToBST(left);
  tree.right = sortedArrayToBST(right);

  return tree;
};

console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
