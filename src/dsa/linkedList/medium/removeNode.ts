/*

You are given the head of a linked list.

Remove every node which has a node with a strictly greater value anywhere to the right side of it.

Return the head of the modified linked list.

Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

*/

import { IListNode, buildLinkedList } from "../list";

export const removeNodes = (head: IListNode | null): IListNode | null => {
  if (!head) return null;

  head.next = removeNodes(head.next);

  if (head.next && head.val < head.next.val) return head.next;

  return head;
};

let head = buildLinkedList([5, 2, 13, 3, 8]);
console.log(removeNodes(head));

// 5.next = remove(2,13,3,8);
// 2.next = remove(13,3,8);
// 13.next = remove(2,8);
// 3.next = remove(8)
// 8.next = remove(null);
