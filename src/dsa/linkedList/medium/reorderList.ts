import { IListNode, buildLinkedList } from "../list";

export const reorderList = (head: IListNode | null) => {
  if (!head) return null;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reorderList(head));
