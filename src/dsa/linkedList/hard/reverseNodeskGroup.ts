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

export function reverseKGroupAlternative(
  head: ListNode | null,
  k: number
): ListNode | null {
  let dummyHead = new ListNode(0, head);
  let curr: ListNode | null = dummyHead;

  let reverse = (head: ListNode | null) => {
    if (!head) return null;

    let curr: ListNode | null = head;
    let prev: ListNode | null = null;

    while (curr) {
      let next: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  while (curr) {
    let temp: ListNode | null = curr;
    let i = 0;

    while (i < k && temp && temp.next) {
      temp = temp.next;
      i++;
    }

    if (i !== k) break;

    let next = null;

    if (temp) {
      next = temp.next;
      temp.next = null;
    }

    let last: ListNode | null = curr.next;
    curr.next = reverse(curr.next);
    curr = last;

    if (curr) curr.next = next;
  }

  return dummyHead.next;
}

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reverseKGroup(head, 3));
