/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const addTwoNumbers = (l1: IListNode | null, l2: IListNode | null) => {
  let curr = null;

  let reverse = (head: IListNode | null) => {
    if (!head) return null;

    let curr: IListNode | null = head;
    let prev = null;

    while (curr) {
      let next: IListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  l1 = reverse(l1);
  l2 = reverse(l2);

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
      num %= 10;
    }

    let node = new ListNode(num);
    node.next = curr;
    curr = node;
  }

  if (carry) {
    let node = new ListNode(carry);
    node.next = curr;
    curr = node;
  }

  return curr;
};

let head1 = buildLinkedList([7, 2, 4, 3]);
let head2 = buildLinkedList([5, 6, 4]);
console.log(addTwoNumbers(head1, head2));
