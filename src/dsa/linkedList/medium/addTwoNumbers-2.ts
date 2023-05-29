import { IListNode, ListNode, buildLinkedList } from "../list";

export const addTwoNumbers = (l1: IListNode | null, l2: IListNode | null) => {
  let arr1: number[] = [];
  let arr2: number[] = [];

  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  let carry = null;
  let prev: IListNode | null = null;

  while (arr1.length || arr2.length) {
    let num = 0;

    if (arr1.length) {
      num += arr1.pop() as number;
    }

    if (arr2.length) {
      num += arr2.pop() as number;
    }

    if (carry !== null) {
      num += carry;
      carry = null;
    }

    if (num > 9) {
      carry = Math.trunc(num / 10);
      num = num % 10;
    }

    let node = new ListNode(num);
    node.next = prev;
    prev = node;
  }

  if (carry !== null) {
    let node = new ListNode(carry);
    node.next = prev;
    prev = node;
  }

  return prev;
};

let head1 = buildLinkedList([7, 2, 4, 3]);
let head2 = buildLinkedList([5, 6, 4]);
console.log(addTwoNumbers(head1, head2));
