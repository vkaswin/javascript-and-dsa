/*

Given a linked list, swap every two adjacent nodes and return its head. You must solve
the problem without modifying the values in the list's nodes
(i.e., only nodes themselves may be changed.)

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const swapPairs = (head: IListNode | null) => {
  if (!head) return null;

  let dummyHead: ListNode | null = new ListNode(0, head);
  let curr: ListNode | null = dummyHead;

  while (curr && curr.next && curr.next.next) {
    let node1: IListNode | null = curr.next;
    let node2: IListNode | null = curr.next.next;

    node1.next = node2.next;
    node2.next = node1;

    curr.next = node2;
    curr = node1;
  }

  return dummyHead.next;
};

let head = buildLinkedList([1, 2, 3]);
console.log(swapPairs(head));
