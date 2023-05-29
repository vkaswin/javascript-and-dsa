/*

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

import { IListNode, buildLinkedList, ListNode } from "../list";

export const addTwoNumbers = function (
  l1: IListNode | null,
  l2: IListNode | null
) {
  let head = new ListNode(0);
  let curr = head;
  let carry: number | null = null;

  while (l1 || l2) {
    let num = 0;

    if (l1) {
      num += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      num += l2.val;
      l2 = l2.next;
    }

    if (carry !== null) {
      num += carry;
      carry = null;
    }

    if (num > 9) {
      carry = Math.trunc(num / 10);
      num = num % 10;
    }

    curr.next = new ListNode(num);
    curr = curr.next;
  }

  if (carry !== null) curr.next = new ListNode(carry);

  return head.next;
};

let head1 = buildLinkedList([2, 4, 3]);
let head2 = buildLinkedList([5, 6, 4]);
console.log(addTwoNumbers(head1, head2));

export {};
