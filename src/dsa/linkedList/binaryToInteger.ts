/*

Given head which is a reference node to a singly-linked list. The value of each node in the linked list
is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value 
of the number in the linked list. The most significant bit is at the head of the linked list.

Input: head = [1,0,1]
Output: 5

Input: head = [0]
Output: 0

*/

import { IListNode, convertArrayToListNode } from "./listNode";

export const binaryToInteger = (head: IListNode) => {
  let integer = `${head.val}`;
  let temp = head.next;

  while (temp) {
    integer += `${temp.val}`;
    temp = temp.next;
  }

  return parseInt(integer, 2);
};

let head = convertArrayToListNode([1, 0, 1]);

console.log(binaryToInteger(head));
