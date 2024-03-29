/*

Given the head of a linked list, return the node where the cycle begins. If there is no cycle,
return null. There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote the index of the 
node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that
pos is not passed as a parameter. Do not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

*/

import { IListNode, buildLinkedList } from "../list";

export const hasCycle = (head: IListNode | null) => {
  let slow: IListNode | null = head;
  let fast: IListNode | null = head;
  let intersection: IListNode | null = null;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      intersection = slow;
      break;
    }
  }

  if (!intersection) return null;

  let node1 = head;
  let node2: IListNode | null = intersection;

  while (node1 && node2 && node1 !== node2) {
    node1 = node1.next;
    node2 = node2.next;
  }

  return node1;
};

let head = buildLinkedList([3, 2, 0, -4]);
console.log(hasCycle(head));
