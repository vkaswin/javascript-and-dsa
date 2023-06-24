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

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    let depth = Math.max(left, right);

    if (!result[depth]) result[depth] = [root.val];
    else result[depth].push(root.val);

    return 1 + depth;
  };

  dfs(root);

  return result;
};

let tree = buildBinaryTree([3, 1, 5, 2, 4, 6, 3, 2, 2.5, 9]);
console.log(findLeaves(tree));
