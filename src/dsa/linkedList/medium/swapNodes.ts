import { IListNode, buildLinkedList } from "../list";

export const swapNodes = (head: IListNode | null, k: number) => {
  if (!head) return null;

  let length = 0;
  let curr: IListNode | null = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  let firstNode: IListNode | null = null;
  let secondNode: IListNode | null = null;
  curr = head;

  for (let i = 0; i < length && curr; i++) {
    if (i === k - 1) firstNode = curr;
    if (i === length - k) secondNode = curr;
    curr = curr.next;
  }
  if (firstNode && secondNode) {
    [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];
  }

  return head;
};

let head = buildLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);
console.log(swapNodes(head, 5));
