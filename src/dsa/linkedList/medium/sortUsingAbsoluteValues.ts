/*

Given the head of a singly linked list that is sorted in
non-decreasing order using the
absolute values of its nodes, return the list sorted in
non-decreasing order using the
actual values of its nodes.

Input: head = [0,2,-5,5,10,-10]
Output: [-10,-5,0,2,5,10]
Explanation:The list sorted in non-descending order using the absolute values of the nodes is [0,2,-5,5,10,-10]
The list sorted in non-descending order using the actual values is [-10,-5,0,2,5,10]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const sortList = (head: IListNode | null) => {
  if (!head) return null;

  let positiveHead: IListNode | null = new ListNode(0, head);
  let negativeHead = new ListNode(0);
  let curr: IListNode | null = positiveHead;
  let negative = negativeHead;

  while (curr && curr.next) {
    if (curr.next.val < 0) {
      negative.next = curr.next;
      negative = negative.next;
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  if (negative) negative.next = positiveHead.next;

  return negativeHead.next;
};

let list = buildLinkedList([0, 2, -5, 5, 10, -10]);
console.log(sortList(list));
