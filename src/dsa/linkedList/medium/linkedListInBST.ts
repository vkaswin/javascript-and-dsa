/*

Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree. 

*/

import { ITreeNode } from "@/dsa/implementations/binaryTree";
import { IListNode } from "../list";

export const isSubPath = (head: IListNode | null, root: ITreeNode | null) => {
  if (!head || !root) return false;

  let listNodes = "";

  let curr: IListNode | null = head;

  while (curr) {
    let val = curr.val.toString();
    curr = curr.next;
    listNodes += val + (curr ? "," : "");
  }

  let paths: string[] = [];

  let dfs = (root: ITreeNode | null, path: string) => {
    if (!root) return;

    if (!root.left && !root.right)
      return paths.push(path + root.val.toString());

    let val = path + root.val.toString() + ",";
    dfs(root.left, val);
    dfs(root.right, val);
  };

  dfs(root, "");

  return paths.some((path) => path.includes(listNodes));
};
