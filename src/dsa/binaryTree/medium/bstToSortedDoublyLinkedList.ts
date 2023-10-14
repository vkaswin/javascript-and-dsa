/*

Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous to the previous and next pointers in a doubly-linked list.

Let's take the following BST as an example, it may help you understand the problem better:

Input: {4,2,5,1,3}
        4
       /  \
      2   5
     / \
    1   3
Output: "left:1->5->4->3->2  right:1->2->3->4->5"
Explanation:
Left: reverse output
Right: positive sequence output

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const treeToDoublyList = (root: ITreeNode | null) => {
  if (!root) return null;

  let node: ITreeNode | null = null;
  let curr: ITreeNode | null = null;
  let prev: ITreeNode | null = null;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    if (!node) {
      node = root;
    } else {
      curr!.left = prev!.left;
      curr!.right = root;
    }
    curr = root;
    prev = curr;
    dfs(root.right);
  };

  dfs(root);

  return node;
};

let root = buildBinaryTree([4, 2, 5, 1, 3]);
console.log(treeToDoublyList(root));
