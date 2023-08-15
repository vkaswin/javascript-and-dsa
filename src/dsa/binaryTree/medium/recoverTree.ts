/*

You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

*/

import { ITreeNode } from "../tree";

export const recoverTree = (root: ITreeNode | null) => {
  let arr: number[] = [];

  let dfs = (root: ITreeNode | null, updateTree: boolean) => {
    if (!root) return;
    dfs(root.left, updateTree);
    if (updateTree) root.val = arr.pop()!;
    else arr.push(root.val);
    dfs(root.right, updateTree);
  };

  dfs(root, false);
  arr.sort((a, b) => b - a);
  dfs(root, true);
};
