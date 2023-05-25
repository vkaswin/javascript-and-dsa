/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

*/

import { IListNode, buildLinkedList } from "../list";

export const reverse = (head: IListNode | null) => {
  if (!head) return null;

  let curr: IListNode | null = head;
  let prev: IListNode | null = null;

  while (curr) {
    let next: IListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reverse(head));
