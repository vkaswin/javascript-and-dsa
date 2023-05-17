/*

You are given two linked lists: list1 and list2 of sizes n and m respectively.
Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.

*/

import { IListNode, buildLinkedList } from "../list";

export const mergeInBetween = (
  list1: IListNode | null,
  a: number,
  b: number,
  list2: IListNode | null
) => {
  let curr: IListNode | null = list1;
  let removeNode: IListNode | null = null;
  let i = 1;

  while (curr?.next) {
    if (i === a) {
      removeNode = curr.next;
      if (curr) curr.next = list2;
      while (removeNode) {
        if (i === b) break;
        removeNode = removeNode.next;
        i++;
      }
    }
    curr = curr.next;
    i++;
  }

  if (curr && removeNode) curr.next = removeNode?.next;

  return list1;
};

let head1 = buildLinkedList([0, 1, 2, 3, 4, 5, 6]);
let head2 = buildLinkedList([1000000, 1000001, 1000002, 1000003, 1000004]);
console.log(mergeInBetween(head1, 2, 5, head2));
