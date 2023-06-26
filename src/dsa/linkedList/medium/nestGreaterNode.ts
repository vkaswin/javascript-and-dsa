/*

You are given the head of a linked list with n nodes.

For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]

*/

import { IListNode, buildLinkedList } from "../list";

export const nextLargerNode = (head: IListNode | null) => {
  let result: number[] = [];

  if (!head) return result;

  let nums: number[] = [];
  let curr: IListNode | null = head;

  let findMax = (start: number, value: number) => {
    for (let i = start; i < nums.length; i++) {
      if (nums[i] > value) return nums[i];
    }

    return 0;
  };

  while (curr) {
    nums.push(curr.val);
    curr = curr.next;
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(findMax(i + 1, nums[i]));
  }

  return result;
};

let list = buildLinkedList([2, 7, 4, 3, 5]);
console.log(nextLargerNode(list));
