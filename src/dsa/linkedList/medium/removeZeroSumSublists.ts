import { IListNode, ListNode, buildLinkedList } from "../list";

export const removeZeroSumSublists = (head: IListNode | null) => {
  if (!head) return null;

  let isRemoved: boolean;
  head = new ListNode(0, head);

  do {
    isRemoved = false;
    let curr: IListNode | null = head;
    let prev: IListNode | null = null;

    while (curr && curr.next) {
      if (curr.val + curr.next.val === 0 && prev) {
        prev.next = curr.next.next;
        curr = curr.next.next;
        isRemoved = true;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  } while (isRemoved);

  return head.next;
};

let head = buildLinkedList([1, -1]);
console.log(removeZeroSumSublists(head));
