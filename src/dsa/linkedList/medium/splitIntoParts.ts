import { IListNode, ListNode, buildLinkedList } from "../list";

const splitListToParts = (head: IListNode | null, k: number) => {
  let curr = head;
  let arr: (IListNode | null)[] = [];
  let size = 0;

  while (curr) {
    curr = curr.next;
    size++;
  }

  let parts: number[] = [];

  for (let i = k, count = size; i > 0; i--) {
    let val = Math.ceil(count / i);
    parts.push(val);
    count -= val;
  }

  for (let i = 0; i < parts.length; i++) {
    let temp = new ListNode(-1);
    let curr = temp;

    for (let j = 0; j < parts[i] && head; j++) {
      let next = head.next;
      head.next = null;
      curr.next = head;
      head = next;
      curr = curr.next;
    }
    arr[i] = temp.next;
  }

  return arr;
};

let head = buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(splitListToParts(head, 3));
