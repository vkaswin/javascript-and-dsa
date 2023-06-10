import { IListNode, ListNode, buildLinkedList } from "../list";

let merge = (left: IListNode | null, right: IListNode | null) => {
  let head = new ListNode(0);
  let curr = head;

  while (left && right) {
    if (left.val > right.val) {
      let next = right.next;
      right.next = null;
      curr.next = right;
      right = next;
    } else {
      let next = left.next;
      left.next = null;
      curr.next = left;
      left = next;
    }

    curr = curr.next;
  }

  if (right) curr.next = right;
  if (left) curr.next = left;

  return head.next;
};

let sortLinkedList = (head: IListNode | null): IListNode | null => {
  if (!head || !head.next) return head;

  let slow: IListNode | null = head;
  let fast: IListNode | null = head;

  while (slow && fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let next = null;
  if (slow) {
    next = slow.next;
    slow.next = null;
  }

  return merge(sortLinkedList(head), sortLinkedList(next));
};

export const mergeKLists = (lists: (IListNode | null)[]) => {
  let head = new ListNode(0);
  let curr = head;

  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    curr.next = node;
    let temp = node;

    while (temp && temp.next) {
      temp = temp.next;
    }

    if (temp) curr = temp;
  }

  return sortLinkedList(head.next);
};

console.log(
  mergeKLists([
    buildLinkedList([1, 4, 5]),
    buildLinkedList([1, 3, 4]),
    buildLinkedList([2, 6]),
  ])
);
