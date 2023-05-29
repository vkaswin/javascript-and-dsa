/*

Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points 
to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const flatten = (root: ITreeNode | null) => {
  if (!root) return null;

  let curr: ITreeNode | null = null;

  let traverse = (root: ITreeNode | null) => {
    if (!root) return;

    let right = root.right;
    let left = root.left;
    root.left = null;
    root.right = null;

    if (curr) {
      curr.right = root;
      curr = root;
    } else {
      curr = root;
    }

    traverse(left);
    traverse(right);
  };

  traverse(root);

  return root;
};

let tree = buildBinaryTree([4, 1]);
console.log(flatten(tree));
