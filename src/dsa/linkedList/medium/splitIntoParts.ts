/*

Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.

Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.

*/

import { IListNode, buildLinkedList } from "../list";

const splitListToParts = (head: IListNode | null, k: number) => {
  let curr = head;
  let arr: (IListNode | null)[] = [];
  let size = 0;

  while (curr) {
    curr = curr.next;
    size++;
  }

  curr = head;

  while (curr) {
    let j = Math.ceil(size / k);
    let temp = curr;

    for (let i = 1; i < j && curr; i++) {
      curr = curr.next;
    }

    if (curr) {
      let next = curr.next;
      curr.next = null;
      curr = next;
    }

    arr.push(temp);

    k--;
    size -= j;
  }

  for (let i = 0; i < k; i++) {
    arr.push(null);
  }

  return arr;
};

let head = buildLinkedList([1, 2, 3]);
console.log(splitListToParts(head, 5));
