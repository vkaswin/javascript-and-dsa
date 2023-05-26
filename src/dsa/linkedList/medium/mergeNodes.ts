import { IListNode, buildLinkedList } from "../list";

export const mergeNodes = (head: IListNode | null) => {
  if (!head) return null;

  let curr = head.next;
  let prev = head;
  let sum = 0;

  while (curr) {
    if (curr.val === 0 && sum !== 0) {
      curr.val = sum;
      sum = 0;
      prev = curr;
      curr = curr.next;
    } else {
      sum += curr.val;
      prev.next = curr.next;
      curr = curr.next;
    }
  }

  return head.next;
};

let head = buildLinkedList([0, 1, 0, 3, 0, 2, 2, 0]);
console.log(mergeNodes(head));
