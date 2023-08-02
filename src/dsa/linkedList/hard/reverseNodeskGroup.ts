import { IListNode, ListNode, buildLinkedList } from "../list";

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
