/*

Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

*/

import { IListNode, buildLinkedList } from "../list";

export const rotateRight = (head: IListNode | null, k: number) => {
  if (!head) return null;

  if (!head.next || k == 0) return head;

  let size = 0;
  let temp: IListNode | null = head;

  while (temp) {
    temp = temp.next;
    size++;
  }

  if (k >= size) k %= size;

  if (k === 0) return head;

  let curr: IListNode | null = head;
  let prev: IListNode | null = head;

  for (let i = 0; i < size - k && curr; i++) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = null;
  let node: IListNode | null = curr;

  while (curr && curr.next) {
    curr = curr.next;
  }

  if (curr) {
    curr.next = head;
  }

  return node;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);

console.log(rotateRight(head, 2));
