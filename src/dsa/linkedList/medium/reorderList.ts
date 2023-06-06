import { IListNode, buildLinkedList } from "../list";

export const reorderList = (head: IListNode | null) => {
  if (!head) return null;

  let obj: Record<number, IListNode> = {};

  let curr: IListNode | null = head.next;

  for (let i = 1; curr; i++) {
    let next: IListNode | null = curr.next;
    curr.next = null;
    obj[i] = curr;
    curr = next;
  }

  let len = Object.keys(obj).length;
  let x = 1;
  let y = len;
  curr = head;

  for (let i = 1; i <= len && curr; i++) {
    if (i % 2 === 0) {
      curr.next = obj[x];
      x++;
    } else {
      curr.next = obj[y];
      y--;
    }
    curr = curr.next;
  }
};

let head = buildLinkedList([1, 2, 3, 4]);
console.log(reorderList(head));
