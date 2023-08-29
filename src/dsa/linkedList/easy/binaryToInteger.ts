/*

Given head which is a reference node to a singly-linked list. The value of each node in the linked list
is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value 
of the number in the linked list. The most significant bit is at the head of the linked list.

Input: head = [1,0,1]
Output: 5

Input: head = [0]
Output: 0

*/

import { IListNode, buildLinkedList } from "../list";

export const binaryToInteger = (head: IListNode | null) => {
  if (!head) return null;

  let curr: IListNode | null = head;
  let num = "";

  while (curr) {
    num += `${curr.val}`;
    curr = curr.next;
  }

  return parseInt(num, 2);
};

let head = buildLinkedList([1, 0, 1]);

console.log(binaryToInteger(head));
