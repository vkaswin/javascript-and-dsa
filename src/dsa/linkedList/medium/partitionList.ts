/*

Given the head of a linked list and a value x, partition it such that all nodes less than x 
come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const partition = (head: IListNode | null, x: number) => {
  let dummyLess = new ListNode(0);
  let dummyMore = new ListNode(0);

  let less = dummyLess;
  let more = dummyMore;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = null;

    if (curr.val < x) {
      less.next = curr;
      less = curr;
    } else {
      more.next = curr;
      more = curr;
    }
    curr = next;
  }

  less.next = dummyMore.next;

  return dummyLess.next;
};

let head = buildLinkedList([1, 4, 3, 2, 5, 2]);
console.log(partition(head, 3));
