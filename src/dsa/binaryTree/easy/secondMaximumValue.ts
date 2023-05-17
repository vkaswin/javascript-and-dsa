/*

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node
in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value 
is the smaller value among its two sub-nodes. More formally, the property 
root.val = min(root.left.val, root.right.val) always holds.
Given such a binary tree, you need to output the second minimum value in the set made of all the 
nodes' value in the whole tree.
If no such second minimum value exists, output -1 instead.

Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.

Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const findSecondMinimumValue = (root: ITreeNode | null) => {
  if (!root) return -1;

  let firstMin = Infinity;
  let secondMin = Infinity;

  let traverse = (root: ITreeNode | null) => {
    if (!root) return;

    if (root.val < firstMin) {
      secondMin = firstMin;
      firstMin = root.val;
    } else if (root.val < secondMin && root.val !== firstMin) {
      secondMin = root.val;
    }

    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);

  return secondMin === Infinity ? -1 : secondMin;
};

let tree = buildBinaryTree([2, 2]);
console.log(findSecondMinimumValue(tree));
