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

export const reorderList = (head: IListNode | null) => {
  if (!head) return null;

  let obj: Record<number, IListNode> = {};
  let len = 0;

  let curr: IListNode | null = head.next;

  while (curr) {
    let next: IListNode | null = curr.next;
    curr.next = null;
    obj[++len] = curr;
    curr = next;
  }

  let x = 1;
  let y = len;
  curr = head;

  for (let i = 1; i <= len && curr; i++) {
    if (i % 2 === 0) {
      curr.next = obj[x];
      x++;
    } else {
      curr.next = obj[y];
      y--;
    }
    curr = curr.next;
  }
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reorderList(head));
