/*

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

*/

import { IListNode, buildLinkedList } from "../list";

export const getIntersectionNode = (
  headA: IListNode | null,
  headB: IListNode | null
) => {
  if (!headA || !headB) return null;

  let getLength = (head: IListNode | null) => {
    let len = 0;

    let curr = head;
    while (curr) {
      curr = curr.next;
      len++;
    }

    return len;
  };

  let len1 = getLength(headA);
  let len2 = getLength(headB);

  while (len1 > len2 && headA) {
    headA = headA.next;
    len1--;
  }

  while (len2 > len1 && headB) {
    headB = headB.next;
    len2--;
  }

  while (headA && headB && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

console.log(
  getIntersectionNode(
    buildLinkedList([1, 9, 1, 2, 4]),
    buildLinkedList([3, 2, 4])
  )
);
