/*

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

import { IListNode, convertArrayToListNode, ListNode } from "../listNode";

export const addTwoNumbers = function (
  l1: IListNode | null,
  l2: IListNode | null
) {
  return;
};

let head1 = convertArrayToListNode([2, 4, 3]);
let head2 = convertArrayToListNode([5, 6, 4]);
console.log(addTwoNumbers(head1, head2));

export {};
