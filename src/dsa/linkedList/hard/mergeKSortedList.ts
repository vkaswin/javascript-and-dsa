/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

let merge = (list1: IListNode | null, list2: IListNode | null) => {
  let head = new ListNode(0);
  let curr = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }

    curr = curr.next;
  }

  curr.next = list1 || list2;

  return head.next;
};

export const mergeKLists = (lists: (IListNode | null)[]) => {
  if (lists.length === 0) return null;

  let head: IListNode | null = lists.pop() as IListNode;

  while (lists.length) {
    head = merge(head, lists.pop() as IListNode);
  }

  return head;
};

console.log(
  mergeKLists([
    buildLinkedList([1, 4, 5]),
    buildLinkedList([1, 3, 4]),
    buildLinkedList([2, 6]),
  ])
);
