import { IListNode, ListNode } from "../list";

class MyLinkedList {
  public head: IListNode | null = null;
  public tail: IListNode | null = null;
  public size: number = 0;

  constructor() {}

  get(index: number): number {
    let curr = this.head;

    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }

    return curr ? curr.val : -1;
  }

  addAtHead(val: number): void {
    if (this.head) {
      let node = new ListNode(val, this.head);
      this.head = node;
    } else {
      this.head = new ListNode(val);
      this.tail = this.head;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    let node = new ListNode(val);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      if (!this.head) this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number) {
    if (index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    let curr = this.head;
    for (let i = 0; i < index - 1 && curr; i++) {
      curr = curr.next;
    }

    if (!curr) return;

    let node = new ListNode(val, curr.next);
    curr.next = node;
    this.size++;
  }

  private removeFromEnd() {
    let curr = this.head;

    while (curr && curr.next && curr.next.next) {
      curr = curr.next;
    }

    if (!curr) return;

    curr.next = null;
    this.tail = curr;
    this.size--;
  }

  private removeFromFront() {
    if (!this.head) return;
    this.head = this.head.next;
    this.size--;
  }

  deleteAtIndex(index: number) {
    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let curr = this.head;

    for (let i = 0; i < index - 1 && curr; i++) {
      curr = curr.next;
    }

    if (!curr || !curr.next) return;

    curr.next = curr.next.next;
    this.size--;
  }
}

let list = new MyLinkedList();

list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
console.log(list.get(1));
list.deleteAtIndex(0);
console.log(list.get(0));
console.log(list);
