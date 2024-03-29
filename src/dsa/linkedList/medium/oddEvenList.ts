/*

Given the head of a singly linked list, group all the nodes with odd indices together 
followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

*/

import { IListNode, buildLinkedList } from "../list";

export const oddEvenList = (head: IListNode | null) => {
  if (!head) return null;

  let odd: IListNode | null = head;
  let even: IListNode | null = head.next;
  let evenHead = even;

  while (odd && odd.next && even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }

  if (odd) odd.next = evenHead;

  return head;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(oddEvenList(head));
