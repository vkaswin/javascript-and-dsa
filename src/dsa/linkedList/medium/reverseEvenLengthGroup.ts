/*

You are given the head of a linked list.

The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...). The length of a group is the number of nodes assigned to it. In other words,

The 1st node is assigned to the first group.
The 2nd and the 3rd nodes are assigned to the second group.
The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
Note that the length of the last group may be less than or equal to 1 + the length of the second to last group.

Reverse the nodes in each group with an even length, and return the head of the modified linked list.

Input: head = [5,2,6,3,9,1,7,3,8,4]
Output: [5,6,2,3,9,1,4,8,3,7]
Explanation:
- The length of the first group is 1, which is odd, hence no reversal occurs.
- The length of the second group is 2, which is even, hence the nodes are reversed.
- The length of the third group is 3, which is odd, hence no reversal occurs.
- The length of the last group is 4, which is even, hence the nodes are reversed.

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const reverseEvenLengthGroups = (head: IListNode | null) => {
  if (!head) return null;

  let reverse = (head: IListNode | null) => {
    if (!head) return null;

    let curr: IListNode | null = head;
    let prev: IListNode | null = null;

    while (curr) {
      let next: IListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  let length = 1;

  let curr: IListNode | null = head;
  let prev: IListNode | null = null;

  while (curr) {
    let i = 1;
    let temp: ListNode | null = curr;

    while (temp && temp.next && i < length) {
      temp = temp.next;
      i++;
    }

    let next: IListNode | null = temp.next;

    if (i % 2 === 0 && prev) {
      temp.next = null;
      let last = curr;
      prev.next = reverse(curr);
      last.next = next;
      prev = last;
    } else {
      prev = temp;
    }

    curr = next;
    length++;
  }

  return head;
};

let head = buildLinkedList([5, 2, 6, 3, 9, 1, 7, 3, 8, 4]);
console.log(reverseEvenLengthGroups(head));
