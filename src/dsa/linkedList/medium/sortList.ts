/*

Given the head of a linked list, return the list after sorting it in ascending order.

*/

import { IListNode, buildLinkedList } from "../list";

export const sortList = (head: IListNode | null) => {
  if (!head) return null;
};

export const alternative = (head: IListNode | null) => {
  if (!head) return null;

  let swaped: boolean;

  do {
    swaped = false;
    let curr = head;
    while (curr && curr.next) {
      if (curr.val > curr.next.val) {
        [curr.val, curr.next.val] = [curr.next.val, curr.val];
        swaped = true;
      }
      curr = curr.next;
    }
  } while (swaped);

  return head;
};

let head = buildLinkedList([-1, 5, 3, 4, 0]);
console.log(sortList(head));
