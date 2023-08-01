/*

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const deleteDuplicates = (head: IListNode | null) => {
  if (!head) return null;

  head = new ListNode(-Infinity, head);
  let curr: IListNode | null = head;
  let prev: IListNode | null = null;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      let val = curr.val;
      while (curr && curr.val === val) {
        curr = curr.next;
      }
      if (prev) prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head.next;
};

let head = buildLinkedList([1, 1, 2, 3, 3, 4, 4, 5]);
console.log(deleteDuplicates(head));
