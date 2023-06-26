/*

Given a binary tree root, a node X in the tree is named good if in the path from root to X 
there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const goodNodes = (root: ITreeNode | null) => {
  let count = 0;

  if (!root) return 0;

  let dfs = (root: ITreeNode | null, maxValue: number) => {
    if (!root) return;
    console.log(root.val);
    let isMax = root.val >= maxValue;
    maxValue = isMax ? root.val : maxValue;

    if (isMax) count++;

    dfs(root.left, maxValue);
    dfs(root.right, maxValue);
  };

  dfs(root, -Infinity);

  return count;
};

let tree = buildBinaryTree([3, 1, 4, 3, 1, 5]);
console.log(goodNodes(tree));
