/*

Given the head of a singly linked list, return the middle node of the linked list. If there are 
two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]

*/

import { IListNode, convertArrayToListNode } from "../listNode";

const middleNode = (head: IListNode) => {
  let obj: Record<string, IListNode> = {};
  let temp: IListNode | null = head;
  let length = 0;

  while (temp) {
    obj[length] = temp;
    temp = temp.next;
    length++;
  }

  return obj[Math.floor(length / 2)];
};

const middleNode2 = (head: IListNode) => {
  let fast: IListNode | null = head;
  let slow: IListNode | null = head;
  while (fast?.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const head = convertArrayToListNode([1, 2, 3, 4, 5]);
console.log(middleNode(head));
console.log(middleNode2(head));