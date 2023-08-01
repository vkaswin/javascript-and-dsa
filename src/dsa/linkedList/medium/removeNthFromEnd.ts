/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

*/

import { IListNode, buildLinkedList } from "../list";

export const removedNode = (head: IListNode | null, n: number) => {
  if (!head) return null;
  let curr: IListNode | null = head;
  let size = 0;

  while (curr) {
    curr = curr.next;
    size++;
  }

  if (size - n === 0) return head.next;

  curr = head;
  for (let i = 1; i < size - n && curr; i++) {
    curr = curr.next;
  }

  if (curr) curr.next = curr.next ? curr.next.next : null;

  return head;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(removedNode(head, 2));
