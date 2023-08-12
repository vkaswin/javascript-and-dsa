import { buildLinkedList, IListNode, ListNode } from "../list";

export const zipperList = (
  list1: IListNode | null,
  list2: IListNode | null
) => {
  if (!list1 && list2) return null;

  if (!list1) return list2;

  if (!list2) return list1;

  let dummy = new ListNode(0);
  let curr: IListNode | null = dummy;
  let curr1: IListNode | null = list1;
  let curr2: IListNode | null = list2;
  let i = 0;

  while (curr && curr1 && curr2) {
    if (i % 2 === 0) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }
    curr = curr.next;
    i++;
  }

  if (curr) curr.next = curr1 || curr2;

  return dummy.next;
};

let list1 = buildLinkedList([1, 2, 3, 4, 5]);
let list2 = buildLinkedList([100, 101]);

console.log(zipperList(list1, list2));
