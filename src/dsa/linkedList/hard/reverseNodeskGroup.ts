/*

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const reverseKGroup = (head: IListNode | null, k: number) => {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let stack: IListNode[] = [];

  while (head) {
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }

    if (stack.length < k) continue;

    while (stack.length) {
      curr.next = stack.pop()!;
      curr = curr.next;
    }

    curr.next = head;
  }

  return dummyHead.next;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reverseKGroup(head, 3));
