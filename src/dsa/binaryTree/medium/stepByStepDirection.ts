/*

You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

'L' means to go from a node to its left child node.
'R' means to go from a node to its right child node.
'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.

Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const getDirections = (
  root: ITreeNode | null,
  startValue: number,
  destValue: number
) => {
  if (!root) return "";

  let map = new Map<number, ITreeNode>();
  let startNode: ITreeNode | null = null;

  let dfs = (root: ITreeNode) => {
    if (root.val === startValue) startNode = root;

    if (root.left) {
      map.set(root.left.val, root);
      dfs(root.left);
    }

    if (root.right) {
      map.set(root.right.val, root);
      dfs(root.right);
    }
  };

  dfs(root);

  if (!startNode) return "";

  let queue: [ITreeNode, string][] = [[startNode, ""]];
  let visited = new Set<number>();

  while (queue.length) {
    let next: [ITreeNode, string][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [{ val, left, right }, path] = queue[i];

      if (val === destValue) return path;

      let parent = map.get(val);

      visited.add(val);

      if (left && !visited.has(left.val)) next.push([left, path + "L"]);
      if (right && !visited.has(right.val)) next.push([right, path + "R"]);
      if (parent && !visited.has(parent.val)) next.push([parent, path + "U"]);
    }

    queue = next;
  }

  return "";
};

let tree = buildBinaryTree([5, 1, 2, 3, 6, 4]);
console.log(getDirections(tree, 3, 6));
