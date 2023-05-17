/*

You are given the head of a linked list. Delete the middle node, and return the head of the modified
linked list. The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start 
using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]

*/

import { IListNode, buildLinkedList } from "../list";

export const deleteMiddle = (head: IListNode | null) => {
  if (!head || head.next === null) return null;

  let prev: IListNode | null = head;
  let fast: IListNode | null = head;
  let slow: IListNode | null = head;

  while (fast && fast.next && slow) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev && slow) {
    prev.next = slow?.next;
  }

  return head;
};

let head = buildLinkedList([1]);
console.log(deleteMiddle(head));
