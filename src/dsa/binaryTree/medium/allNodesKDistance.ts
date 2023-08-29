/*

Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.
You can return the answer in any order.

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

*/

import { ITreeNode } from "../tree";

export const distanceK = (
  root: ITreeNode | null,
  target: ITreeNode | null,
  k: number
) => {
  let result: number[] = [];

  if (!root || !target) return result;

  let map = new Map<ITreeNode, ITreeNode>();

  let dfs = (root: ITreeNode) => {
    if (root.left) {
      map.set(root.left, root);
      dfs(root.left);
    }

    if (root.right) {
      map.set(root.right, root);
      dfs(root.right);
    }
  };

  dfs(root);

  let visited = new Set<ITreeNode>();

  let queue: [ITreeNode, number][] = [[target, 0]];

  while (queue.length) {
    let next: [ITreeNode, number][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [node, distance] = queue[i];
      let { val, left, right } = node;
      let parent = map.get(node);
      visited.add(node);

      if (distance === k) {
        result.push(val);
        continue;
      }

      distance++;

      if (left && !visited.has(left)) next.push([left, distance]);
      if (right && !visited.has(right)) next.push([right, distance]);
      if (parent && !visited.has(parent)) next.push([parent, distance]);
    }

    queue = next;
  }

  return result;
};

// let tree = buildBinaryTree([6, 4, 3, 5, 4.8, 5.2, 8, 9, 7]);
// console.log(distanceK(tree, { val: 4, left: null, right: null }, 2));
