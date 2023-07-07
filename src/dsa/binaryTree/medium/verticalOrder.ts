/*

Given the root of a binary tree, return
the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from
left to right.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const verticalOrder = (root: ITreeNode | null) => {
  if (!root) return [];

  let obj: Record<number, number[]> = {};

  let dfs = (root: ITreeNode | null, level: number) => {
    if (!root) return;

    if (level in obj) {
      obj[level].push(root.val);
    } else {
      obj[level] = [root.val];
    }

    dfs(root.left, level + 1);
    dfs(root.right, level - 1);
  };

  dfs(root, 0);

  return Object.entries(obj)
    .sort((a, b) => +b[0] - +a[0])
    .map((val) => val[1]);
};

let tree = buildBinaryTree([3, 2, 20, 15, 25]);
console.log(verticalOrder(tree)); // [[2],[3,15],[20],[25]]
