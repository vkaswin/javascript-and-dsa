/*

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

*/

import { IListNode, buildLinkedList } from "../list";

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

export const reorderList = (head: IListNode | null) => {
  if (!head) return null;

  let slow: IListNode | null = head;
  let fast: IListNode | null = head;

  while (slow && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head1: IListNode | null = head;
  let head2: IListNode | null = slow!.next;
  slow!.next = null;
  head2 = reverse(head2);

  while (head1 && head2) {
    let next = head2.next;
    head2.next = head1.next;
    head1.next = head2;
    head1 = head2.next;
    head2 = next;
  }

  return head;
};

let head = buildLinkedList([1, 2, 3, 4]);
console.log(reorderList(head));
