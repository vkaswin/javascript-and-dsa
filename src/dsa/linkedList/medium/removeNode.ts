import { IListNode, convertArrayToListNode } from "../listNode";

export const removeNodes = (head: IListNode | null) => {
  if (!head) return null;

  let prev: IListNode | null = head;
  let curr: IListNode | null = head.next;

  while (curr) {
    if (prev.val < curr.val) {
      prev = curr;
    }
  }
};

let head = convertArrayToListNode([5, 2, 13, 3, 8]);
console.log(removeNodes(head));
