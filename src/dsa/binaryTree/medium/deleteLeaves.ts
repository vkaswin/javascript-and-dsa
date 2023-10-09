/*

Given a binary tree root and an integer target, delete all the leaf nodes with value target.
Note that once you delete a leaf node with value target, if its parent node becomes a leaf node
and has the value target, it should also be deleted (you need to continue doing that until you cannot).

Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const removeLeafNodes = (root: ITreeNode | null, target: number) => {
  if (!root) return null;

  let isLeafNode = (root: ITreeNode | null) => {
    if (!root || (!root.left && !root.right && target === root.val))
      return null;

    return root;
  };

  let traverse = (root: ITreeNode | null) => {
    if (!root) return;

    traverse(root.left);
    traverse(root.right);

    root.left = isLeafNode(root.left);
    root.right = isLeafNode(root.right);
  };

  traverse(root);

  return isLeafNode(root);
};

let tree = buildBinaryTree([2, 1, 3, 2, 2, 4]);
console.log(removeLeafNodes(tree, 4));
