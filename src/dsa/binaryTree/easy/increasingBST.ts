/*

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in 
the tree is now the root of the tree, and every node has no left child and only one right child.

Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

*/

import { ITreeNode, buildBinaryTree, TreeNode } from "../tree";

export const increasingBST = (root: ITreeNode | null) => {
  let nums: number[] = [];

  let inOrder = (root: ITreeNode | null) => {
    if (!root) return null;
    inOrder(root.left);
    nums.push(root.val);
    inOrder(root.right);
  };

  inOrder(root);

  if (nums.length === 0) return null;

  let tree = new TreeNode(nums[0]);
  let curr = tree;

  for (let i = 1; i < nums.length; i++) {
    let node = new TreeNode(nums[i]);
    curr.right = node;
    curr = node;
  }

  return tree;
};

let tree = buildBinaryTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]);
console.log(increasingBST(tree));
