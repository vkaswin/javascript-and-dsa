import { IListNode, ListNode, buildLinkedList } from "../list";

export const reverseEvenLengthGroups = (head: IListNode | null) => {
  if (!head) return null;

  let reverse = (head: IListNode | null) => {
    if (!head) return null;

    let curr: IListNode | null = head;
    let prev: IListNode | null = null;

    while (curr) {
      let next: IListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  let length = 1;

  let curr: IListNode | null = head;
  let prev: IListNode | null = null;

  while (curr) {
    let i = 1;
    let temp: ListNode | null = curr;

    while (temp && temp.next && i < length) {
      temp = temp.next;
      i++;
    }

    let next: IListNode | null = temp.next;

    if (i % 2 === 0 && prev) {
      temp.next = null;
      let last = curr;
      prev.next = reverse(curr);
      last.next = next;
      prev = last;
    } else {
      prev = temp;
    }

    curr = next;
    length++;
  }

  return head;
};

let head = buildLinkedList([5, 2, 6, 3, 9, 1, 7, 3, 8, 4]);
console.log(reverseEvenLengthGroups(head));
