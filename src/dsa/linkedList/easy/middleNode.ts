/*

Given the head of a singly linked list, return the middle node of the linked list. If there are 
two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]

*/

import { IListNode, buildLinkedList } from "../list";

export const middleNode = (head: IListNode | null) => {
  if (!head) return null;

  let fast: IListNode | null = head;
  let slow: IListNode | null = head;
  while (fast?.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(middleNode(head));
