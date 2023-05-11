/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

*/

import { IListNode, convertArrayToListNode } from "../listNode";

export const removedNode = (head: IListNode, n: number) => {
  let size = 0;
  let curr: IListNode | null = head;

  while (curr) {
    curr = curr.next;
    size++;
  }

  if (size - n == 0) return head.next;

  let prev: IListNode | null = null;
  curr = head;

  for (let i = 0; i < size - n && curr; i++) {
    prev = curr;
    curr = curr.next;
  }

  if (prev && curr) prev.next = curr.next;

  return head;
};

let head = convertArrayToListNode([1, 2]);
console.log(removedNode(head, 2));
