import { IListNode, convertArrayToListNode } from "../listNode";

export const swapNodes = (head: IListNode | null, k: number) => {
  if (!head) return null;

  let size = 0;
  let curr: IListNode | null = head;

  while (curr) {
    curr = curr.next;
    size++;
  }

  let ref1: IListNode | null = head;
  let ref2: IListNode | null = head;

  if (size > 2) {
    for (let i = 1; i < k && ref1; i++) {
      ref1 = ref1.next;
    }

    for (let i = 1; i <= size - k && ref2; i++) {
      ref2 = ref2.next;
    }
  } else {
    ref1 = head;
    ref2 = head.next;
  }

  if (ref1 && ref2) {
    let num1 = ref1.val;
    let num2 = ref2.val;
    ref1.val = num2;
    ref2.val = num1;
  }

  return head;
};

export const alternative = (head: IListNode | null, k: number) => {
  if (!head) return null;

  let slow: IListNode | null = head;
  let fast: IListNode | null = head;

  let firstNode: IListNode;
  let secondNode: IListNode;

  while (fast && k > 0) {
    fast = fast.next;
    k -= 1;
  }

  firstNode = fast as IListNode;

  while (fast && slow) {
    slow = slow.next;
    fast = fast.next;
  }

  secondNode = slow as IListNode;

  let temp = secondNode.val;
  secondNode.val = firstNode.val;
  firstNode.val = temp;

  return head;
};

let head = convertArrayToListNode([1, 2, 3, 4, 5]);
console.log(swapNodes(head, 2));
console.log(alternative(head, 2));
