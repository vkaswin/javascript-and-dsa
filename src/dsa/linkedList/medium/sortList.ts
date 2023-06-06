/*

Given the head of a linked list, return the list after sorting it in ascending order.

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

let merge = (left: IListNode | null, right: IListNode | null) => {
  let head = new ListNode(0);
  let curr = head;

  while (left && right) {
    if (left.val < right.val) {
      let next = left.next;
      left.next = null;
      curr.next = left;
      left = next;
    } else {
      let next = right.next;
      right.next = null;
      curr.next = right;
      right = next;
    }

    curr = curr.next;
  }

  if (right) curr.next = right;
  if (left) curr.next = left;

  return head.next;
};

export const sortList = (head: IListNode | null): IListNode | null => {
  if (!head || !head.next) return head;

  let fast: IListNode | null = head;
  let slow: IListNode | null = head;

  while (slow && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let next = null;
  if (slow) {
    next = slow.next;
    slow.next = null;
  }

  return merge(sortList(head), sortList(next));
};

let head = buildLinkedList([-1, 5, 3, 4, 2]);
console.log(sortList(head));
