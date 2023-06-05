/*

Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.
For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should 
become [18,29,11,7,4,3,1,2]. Return the root of the reversed tree.
A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.
The level of a node is the number of edges along the path between it and the root node.

Input: root = [2,3,5,8,13,21,34]
Output: [2,5,3,8,13,21,34]
Explanation: 
The tree has only one odd level.
The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const reverseOddLevels = (root: ITreeNode | null) => {
  if (!root) return null;

  let queue = [root];
  let level = 0;

  while (queue.length) {
    let len = queue.length;
    let next = [];

    if (level % 2 !== 0 && len > 1) {
      for (let i = 0, j = len - 1; i < j; i++, j--) {
        [queue[i].val, queue[j].val] = [queue[j].val, queue[i].val];
      }
    }

    for (let i = 0; i < len; i++) {
      let { left, right } = queue[i];
      if (left) next.push(left);
      if (right) next.push(right);
    }
    level++;
    queue = next;
  }

  return root;
};

export const reverseOddLevelsAlternative = (root: ITreeNode | null) => {
  if (!root) return null;

  let traverse = (
    rootA: ITreeNode | null,
    rootB: ITreeNode | null,
    level: number
  ) => {
    if (!rootA || !rootB) return;

    if (level % 2 === 1) [rootA.val, rootB.val] = [rootB.val, rootA.val];

    traverse(rootA.left, rootB.right, level + 1);
    traverse(rootA.right, rootB.left, level + 1);
  };

  traverse(root.left, root.right, 1);

  return root;
};

let tree = buildBinaryTree([3, 2, 1, 4, 5]);
console.log(reverseOddLevels(tree));
