/*

Given the head of a sorted linked list, delete all duplicates such that each element appears 
only once. Return the linked list sorted as well.

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

import { IListNode, buildLinkedList } from "../list";

export const deleteDuplicates = (head: IListNode | null) => {
  if (!head) return null;

  let curr: IListNode | null = head.next;
  let prev: IListNode | null = head;

  while (curr && prev) {
    if (curr.val === prev.val && prev.next) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }

  return head;
};

let head = buildLinkedList([1, 1, 1, 2]);
console.log(deleteDuplicates(head));
