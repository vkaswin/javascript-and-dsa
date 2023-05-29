/*

Given a linked list, swap every two adjacent nodes and return its head. You must solve
the problem without modifying the values in the list's nodes
(i.e., only nodes themselves may be changed.)

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const swapPairs = (head: IListNode | null) => {
  if (!head) return null;

  let newHead: IListNode | null = new ListNode(0, head);
  let curr: IListNode | null = newHead;

  while (curr && curr.next) {
    let slow: IListNode | null = curr.next;
    let fast: IListNode | null = slow.next;

    if (fast && slow) {
      let next = fast.next;
      curr.next = fast;
      slow.next = next;
      fast.next = slow;
    }

    curr = slow;
  }

  return newHead.next;
};

let head = buildLinkedList([1, 2, 3]);
console.log(swapPairs(head));
