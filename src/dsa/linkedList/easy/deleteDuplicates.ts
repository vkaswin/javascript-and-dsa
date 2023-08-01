/*

Given the head of a sorted linked list, delete all duplicates such that each element appears 
only once. Return the linked list sorted as well.

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const deleteDuplicates = (head: IListNode | null) => {
  if (!head) return null;

  let dummyHead = new ListNode(Infinity, head);
  let curr = dummyHead;

  while (curr && curr.next) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummyHead.next;
};

let head = buildLinkedList([1, 1, 1, 2]);
console.log(deleteDuplicates(head));
