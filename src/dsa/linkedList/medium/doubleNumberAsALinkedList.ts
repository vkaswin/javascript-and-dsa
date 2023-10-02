/*

You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it.

Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const doubleIt = (head: IListNode | null) => {
  let reverse = (head: IListNode | null) => {
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

  head = reverse(head);

  let dummy = new ListNode(0);
  let node = dummy;
  let curr = head;
  let carry = 0;

  while (curr) {
    let num = curr.val * 2;

    if (carry) {
      num += carry;
      carry = 0;
    }

    if (num > 9) {
      carry = Math.trunc(num / 10);
      num %= 10;
    }

    node.next = new ListNode(num);
    node = node.next;
    curr = curr.next;
  }

  if (carry) node.next = new ListNode(carry);

  return reverse(dummy.next);
};

console.log(doubleIt(buildLinkedList([1, 8, 9])));
