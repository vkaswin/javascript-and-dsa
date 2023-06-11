import { IListNode, ListNode, buildLinkedList } from "../list";

export const reverseKGroupAlternative = (head: ListNode | null, k: number) => {
  let dummyHead = new ListNode(0, head);
  let curr: ListNode | null = dummyHead;

  let reverse = (head: ListNode | null) => {
    if (!head) return null;

    let curr: ListNode | null = head;
    let prev: ListNode | null = null;

    while (curr) {
      let next: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  while (curr) {
    let temp: ListNode | null = curr;
    let i = 0;

    while (i < k && temp && temp.next) {
      temp = temp.next;
      i++;
    }

    if (i !== k) break;

    let next = null;

    if (temp) {
      next = temp.next;
      temp.next = null;
    }

    let last: ListNode | null = curr.next;
    curr.next = reverse(curr.next);
    curr = last;

    if (curr) curr.next = next;
  }

  return dummyHead.next;
};

export const reverseKGroup = (head: IListNode | null, k: number) => {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let stack: IListNode[] = [];

  while (head) {
    for (let i = 0; i < k && head; i++) {
      let next: IListNode | null = head.next;
      stack.push(head);
      head = next;
    }

    if (stack.length < k) continue;

    while (stack.length) {
      let node = stack.pop() as IListNode;
      curr.next = node;
      curr = node;
    }

    curr.next = head;
  }

  return dummyHead.next;
};

let head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(reverseKGroup(head, 3));
