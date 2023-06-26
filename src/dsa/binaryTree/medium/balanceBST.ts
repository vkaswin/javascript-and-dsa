/*

Given the root of a binary search tree, return a balanced binary search tree with the same node values.
If there is more than one answer, return any of them.
A binary search tree is balanced if the depth of the two subtrees of every node never differs by
more than 1.

Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

*/

import { ITreeNode, TreeNode, buildBinaryTree } from "../tree";

export const balanceBST = (root: ITreeNode | null) => {
  if (!root) return null;

  let nums: number[] = [];

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  let buildTree = (arr: number[]) => {
    if (arr.length === 0) return null;

    let middle = Math.floor(arr.length / 2);
    let root = new TreeNode(arr[middle]);

    root.left = buildTree(arr.slice(0, middle));
    root.right = buildTree(arr.slice(middle + 1));

    return root;
  };

  return buildTree(nums);
};

let tree = buildBinaryTree([1, 2, 3, 4]);
console.log(balanceBST(tree));
