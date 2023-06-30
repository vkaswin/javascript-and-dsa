/*

Given the head of a sorted linked list, delete all duplicates such that each element appears 
only once. Return the linked list sorted as well.

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

import { IListNode, buildLinkedList } from "../list";

export const deleteDuplicates = (head: IListNode | null) => {
  if (!head) return null;

  let fast: IListNode | null = head.next;
  let slow: IListNode | null = head;

  while (fast && slow) {
    if (fast.val === slow.val) slow.next = fast.next;
    else slow = slow.next;
    fast = fast.next;
  }

  return head;
};

let head = buildLinkedList([1, 1, 1, 2]);
console.log(deleteDuplicates(head));
