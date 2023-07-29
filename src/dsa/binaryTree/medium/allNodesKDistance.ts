/*

Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.
You can return the answer in any order.

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const distanceK = (
  root: ITreeNode | null,
  target: ITreeNode | null,
  k: number
) => {
  let addParent = (root: ITreeNode | null, parent: ITreeNode | null) => {
    if (!root) return;

    root.parent = parent;
    addParent(root.left, root);
    addParent(root.right, root);
  };

  addParent(root, null);

  let nodes: number[] = [];
  let visited = new Set();

  let dfs = (root: ITreeNode | null, distance: number) => {
    if (!root || visited.has(root)) return;

    visited.add(root);

    if (distance === 0) {
      nodes.push(root.val);
      return;
    }

    dfs(root.parent, distance - 1);
    dfs(root.left, distance - 1);
    dfs(root.right, distance - 1);
  };

  dfs(target, k);

  return nodes;
};

let tree = buildBinaryTree([6, 4, 3, 5, 4.8, 5.2, 8, 9, 7]);
console.log(distanceK(tree, { val: 4, left: null, right: null }, 2)); // 4.8, 5.2, 8
