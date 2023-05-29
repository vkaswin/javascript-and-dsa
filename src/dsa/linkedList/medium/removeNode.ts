import { IListNode, buildLinkedList } from "../list";

export const removeNodes = (head: IListNode | null): IListNode | null => {
  if (!head) return null;

  head.next = removeNodes(head.next);

  if (head.next && head.val < head.next.val) return head.next;

  return head;
};

export const alternative = (head: IListNode | null) => {
  if (!head) return null;

  let remove = (head: IListNode, val: number) => {
    let curr: IListNode | null = head;

    while (curr) {
      if (curr.val > val) return true;
      curr = curr.next;
    }

    return false;
  };

  let curr: IListNode | null = head.next;
  let prev: IListNode | null = head;

  while (curr) {
    if (remove(curr, curr.val)) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return remove(head, head.val) ? head.next : head;
};

let head = buildLinkedList([5, 2, 13, 3, 9, 8]);
console.log(removeNodes(head));

// 5.next = remove(2,13,3,8);
// 2.next = remove(13,3,8);
// 13.next = remove(2,8);
// 3.next = remove(8)
// 8.next = remove(null);
