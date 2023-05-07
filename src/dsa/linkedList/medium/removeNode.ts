import { IListNode, convertArrayToListNode } from "../listNode";

const removeNodes = (head: IListNode) => {
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
