/*

You are given the head of a linked list containing unique integer values and an integer array nums that is a subset of the linked list values.

Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list.

Input: head = [0,1,2,3,4], nums = [0,3,1,4]
Output: 2
Explanation: 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.

*/

import { IListNode, buildLinkedList } from "@/dsa/linkedList/list";

export const numComponents = (head: IListNode | null, nums: number[]) => {
  let count = 0;

  if (!head) return count;

  let curr: IListNode | null = head;
  let set = new Set(nums);

  while (curr) {
    if (!set.has(curr.val)) {
      curr = curr.next;
      continue;
    }

    while (curr) {
      if (!set.has(curr.val)) break;
      curr = curr.next;
    }

    count++;
  }

  return count;
};

let list = buildLinkedList([0, 1, 2, 3, 4]);
console.log(numComponents(list, [0, 3, 1, 4]));
