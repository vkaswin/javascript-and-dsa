/*

We run a preorder depth-first search (DFS) on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.

If a node has only one child, that child is guaranteed to be the left child.

Given the output traversal of this traversal, recover the tree and return its root.

Input: traversal = "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]

*/

import { ITreeNode, TreeNode } from "../tree";

export const recoverFromPreorder = (
  traversal: string,
  depth: number = 1
): ITreeNode | null => {
  let [val, left, right] = traversal.split(
    new RegExp(`(?<=[0-9])-{${depth}}(?=[0-9])`, "g")
  );
  let root = new TreeNode(+val);
  if (left) root.left = recoverFromPreorder(left, depth + 1);
  if (right) root.right = recoverFromPreorder(right, depth + 1);
  return root;
};
