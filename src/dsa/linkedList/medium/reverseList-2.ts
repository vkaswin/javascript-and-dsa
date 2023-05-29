import { IListNode, ListNode, buildLinkedList } from "../list";

export const reverseBetween = (
  head: IListNode | null,
  left: number,
  right: number
) => {
  if (!head) return;

  let newHead = new ListNode(0, head);
  let curr: IListNode | null = newHead;
  let i = 0;

  let reverse = (head: IListNode | null) => {
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

  while (curr) {
    if (i == left - 1) {
      let temp: IListNode | null = curr;

      while (temp && temp.next && i < right) {
        temp = temp.next;
        i++;
      }

      let next = temp.next;
      temp.next = null;
      temp = curr.next;
      let node = reverse(temp);
      curr.next = node;
      if (temp) temp.next = next;
      break;
    }
    curr = curr.next;
    i++;
  }

  return newHead.next;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reverseBetween(head, 2, 4));
