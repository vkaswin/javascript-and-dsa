/*

Given the head of a linked list and an integer val, remove all the nodes of the linked list that 
has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []

*/

import { IListNode, buildLinkedList } from "../list";

export const removeElements = (head: IListNode | null, val: number) => {
  if (!head) return null;

  let prev: IListNode | null = head;
  let curr: IListNode | null = head.next;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  if (head.val === val) return head.next;

  return head;
};

let head = buildLinkedList([6, 2, 6, 3, 4, 5, 6]);
console.log(removeElements(head, 6));
