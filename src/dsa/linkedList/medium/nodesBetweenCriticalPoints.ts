/*

A critical point in a linked list is defined as either a local maxima or a local minima.
A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.
A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.
Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.
Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].

Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node.
Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.

*/

import { IListNode, buildLinkedList } from "../list";

function nodesBetweenCriticalPoints(head: IListNode | null) {
  if (!head) return [-1, -1];

  let indexes = [];
  let curr: IListNode | null = head;
  let prev: number | null = null;
  let mid: number | null = null;
  let next: number | null = head.val;
  let i = 0;

  while (curr && curr.next) {
    prev = mid;
    mid = next;
    next = curr.next.val;
    curr = curr.next;
    if (
      prev !== null &&
      mid !== null &&
      next !== null &&
      ((mid < next && mid < prev) || (mid > next && mid > prev))
    )
      indexes.push(i);
    i++;
  }

  if (indexes.length <= 1) return [-1, -1];

  indexes.sort((a, b) => b - a);

  let max = indexes[0] - indexes[indexes.length - 1];
  let min = Infinity;

  for (let i = 1; i < indexes.length; i++) {
    min = Math.min(min, Math.abs(indexes[i] - indexes[i - 1]));
  }

  return [min, max];
}

let list = buildLinkedList([5, 3, 1, 2, 5, 1, 2]);
console.log(nodesBetweenCriticalPoints(list));
