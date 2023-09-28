/*

Input: root = [3,0,0]
Output: 2
Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

*/

import { ITreeNode } from "../tree";

export const distributeCoins = (root: ITreeNode | null) => {
  let moves = 0;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    moves += Math.abs(left) + Math.abs(right);

    return root.val + left + right - 1;
  };

  dfs(root);

  return moves;
};

let root: ITreeNode = {
  val: 1,
  left: { val: 0, left: null, right: { val: 3, left: null, right: null } },
  right: { val: 0, left: null, right: null },
};

console.log(distributeCoins(root));
