/*

You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.

*/

import { ITreeNode, TreeNode } from "../tree";

export const createBinaryTree = (descriptions: number[][]) => {
  let nodes: Record<number, ITreeNode> = {};
  let map: Record<number, number> = {};

  for (let [parent, child, isLeft] of descriptions) {
    if (!(parent in nodes)) nodes[parent] = new TreeNode(parent);
    if (!(child in nodes)) nodes[child] = new TreeNode(child);
    nodes[parent][isLeft ? "left" : "right"] = nodes[child];
    map[child] = parent;
  }

  for (let [parent] of descriptions) {
    if (map[parent]) continue;
    return nodes[parent];
  }
};

console.log(
  createBinaryTree([
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
  ])
);
