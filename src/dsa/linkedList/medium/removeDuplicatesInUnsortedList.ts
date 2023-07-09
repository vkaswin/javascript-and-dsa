/*

Given the head of a linked list, find all the values that appear
more than once in the list and delete the nodes that have any of those values.

Return the linked list after the deletions.

Input: head = [3,2,2,1,3,2,4]
Output: [1,4]
Explanation: 3 appears twice and 2 appears three times. After deleting all 3's and 2's, we are left with [1,4].

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const removeDuplicates = (head: IListNode | null) => {
  if (!head) return null;

  let map = new Map<number, number>();
  let curr: IListNode | null = head;

  while (curr) {
    map.set(curr.val, (map.get(curr.val) || 0) + 1);
    curr = curr.next;
  }

  let dummyNode = new ListNode(0);
  let node = dummyNode;

  for (let [key, value] of map) {
    if (value > 1) continue;
    node.next = new ListNode(key);
    node = node.next;
  }

  return dummyNode.next;
};

let list = buildLinkedList([3, 2, 2, 1, 3, 2, 4]);
console.log(removeDuplicates(list));
