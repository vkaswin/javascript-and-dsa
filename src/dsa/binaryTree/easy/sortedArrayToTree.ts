import { TreeNode } from "../tree";

export const sortedArrayToBST = (nums: number[]) => {
  let buildTree = (left: number, right: number) => {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = buildTree(left, mid - 1);
    root.right = buildTree(mid + 1, right);

    return root;
  };
  return buildTree(0, nums.length - 1);
};

console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
