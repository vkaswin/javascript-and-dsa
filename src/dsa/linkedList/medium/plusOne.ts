/*

Given a non-negative integer represented as a linked list of digits, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list.

Input: head = [1,2,3]
Output: [1,2,4]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const plusOne = (head: IListNode) => {
  let reverse = (head: IListNode) => {
    let curr: IListNode | null = head;
    let prev: IListNode | null = null;

    while (curr) {
      let next: IListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev as IListNode;
  };

  head = reverse(head);
  let carry: number | null = null;

  if (head.val === 9) {
    carry = 1;
    head.val = 0;
  } else {
    head.val += 1;
  }

  if (!carry) return reverse(head);

  let curr = head.next;

  while (curr) {
    if (!carry) break;

    if (curr.val === 9) {
      carry = 1;
      curr.val = 0;
    } else {
      curr.val += 1;
      carry = null;
    }

    if (!curr.next && curr.val === 0) {
      curr.next = new ListNode(1);
      break;
    } else {
      curr = curr.next;
    }
  }

  return reverse(head);
};

let list = buildLinkedList([1, 2, 3]) as IListNode;
console.log(plusOne(list));
