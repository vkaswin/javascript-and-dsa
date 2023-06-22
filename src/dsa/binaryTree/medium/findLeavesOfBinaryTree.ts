/*

Given the root of a binary tree, collect a tree's nodes as if you were doing this:
Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.

Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]Explanation:[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findLeaves = (root: ITreeNode | null) => {
  let result: number[][] = [];

  if (!root) return result;

  let dfs = (root: ITreeNode | null, nums: number[]): ITreeNode | null => {
    if (!root) return null;

    if (!root.right && !root.left) {
      nums.push(root.val);
      return null;
    }

    root.left = dfs(root.left, nums);
    root.right = dfs(root.right, nums);

    return root;
  };

  while (root.left || root.right) {
    let nums: number[] = [];
    dfs(root, nums);
    result.push(nums);
  }

  result.push([root.val]);

  return result;
};

let tree = buildBinaryTree([3, 1, 5, 2, 4, 6, 3, 9]);
console.log(findLeaves(tree));
