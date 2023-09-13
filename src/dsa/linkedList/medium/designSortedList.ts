/*

Design a sorted linked list

*/

import { IListNode, ListNode } from "../list";

export class SortedLinkedList {
  head: IListNode | null = null;
  tail: IListNode | null = null;
  size = 0;

  insert(val: number) {
    let node = new ListNode(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else if (val < this.head!.val) {
      node.next = this.head;
      this.head = node;
    } else if (val > this.tail!.val) {
      this.tail!.next = node;
      this.tail = node;
    } else {
      let curr = this.head;

      while (curr?.next && val > curr.next.val) {
        curr = curr.next;
      }

      let next = curr!.next;
      node.next = next;
      curr!.next = node;
    }

    this.size++;
  }

  print() {
    if (this.isEmpty()) return null;

    let curr = this.head;
    let str = "";

    while (curr) {
      str += curr.val;
      curr = curr.next;
      if (curr) str += ",";
    }

    return str;
  }

  isEmpty() {
    return this.size === 0;
  }
}

let list = new SortedLinkedList();
list.insert(4);
list.insert(2);
list.insert(6);
list.insert(3);
list.insert(5);
list.insert(1);
console.log(list.print());
