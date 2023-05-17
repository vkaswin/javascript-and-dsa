/*

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together 
the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const mergeTwoLists = (
  list1: IListNode | null,
  list2: IListNode | null
) => {
  let head: IListNode | null = new ListNode(-Infinity);
  let curr: IListNode | null = head;

  while (list1 && list2 && curr) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  curr.next = list1 || list2;

  return head.next;
};

let head1 = buildLinkedList([3, 5]);
let head2 = buildLinkedList([1, 2, 4]);
console.log(mergeTwoLists(head1, head2));
