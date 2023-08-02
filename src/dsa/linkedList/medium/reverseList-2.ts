/*

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

let reverse = (head: IListNode | null) => {
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

export const reverseBetween = (
  head: IListNode | null,
  left: number,
  right: number
) => {
  if (!head) return;

  let dummyNode = new ListNode(0, head);
  let curr: IListNode | null = dummyNode;

  let i = 1;

  while (curr && i < left) {
    curr = curr.next;
    i++;
  }

  i--;

  let prev = curr;

  while (curr && i < right) {
    curr = curr.next;
    i++;
  }

  if (prev && curr) {
    let start = prev.next;
    let next = curr.next;
    curr.next = null;
    prev.next = reverse(prev.next);
    if (start) start.next = next;
  }

  return dummyNode.next;
};

let head = buildLinkedList([3, 5]);
console.log(reverseBetween(head, 1, 2));
