/*

Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
The steps of the insertion sort algorithm:
Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const insertionSortList = (head: IListNode | null) => {
  if (!head) return null;

  let dummy = new ListNode(0, head);
  let curr: IListNode | null = dummy;

  return dummy.next;
};

let list = buildLinkedList([1, 5, 2, 4, 1, 3]);
console.log(insertionSortList(list));
