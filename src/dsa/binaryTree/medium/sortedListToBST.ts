/*

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

*/

import { TreeNode } from "@/dsa/implementations/binaryTree";
import { IListNode, buildLinkedList } from "../../linkedList/list";

export const sortedListToBST = (head: IListNode | null) => {
  let arr: number[] = [];
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let buildTree = (arr: number[]) => {
    if (arr.length === 0) return null;

    let middle = Math.floor(arr.length / 2);
    let node = new TreeNode(arr[middle]);

    node.left = buildTree(arr.slice(0, middle));
    node.right = buildTree(arr.slice(middle + 1));

    return node;
  };

  return buildTree(arr);
};

let list = buildLinkedList([-10, -3, 0, 5, 9]);
console.log(sortedListToBST(list));
