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

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

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

  let queue: ITreeNode[] = [target];
  let visited = new Set<ITreeNode>();
  let distance = 0;

  while (queue.length) {
    let next: ITreeNode[] = [];
    for (let node of queue) {
      if (visited.has(node)) continue;

      visited.add(node);

      if (distance === k) {
        result.push(node.val);
        continue;
      }

      let { left, right } = node;
      let parent = map.get(node);

      if (left && !visited.has(left)) next.push(left);

      if (right && !visited.has(right)) next.push(right);

      if (parent && !visited.has(parent)) next.push(parent);
    }
    queue = next;
    distance++;
  }
  return result;
};

// let tree = buildBinaryTree([6, 4, 3, 5, 4.8, 5.2, 8, 9, 7]);
// console.log(distanceK(tree, { val: 4, left: null, right: null }, 2));
