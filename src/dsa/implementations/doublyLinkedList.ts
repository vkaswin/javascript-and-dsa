import { IDoublyListNode, DoublyListNode } from "../linkedList/list";

type IListNode<T> = IDoublyListNode<T>;
export class DoublyLinkedList<T> {
  head: IListNode<T> | null = null;
  tail: IListNode<T> | null = null;
  size = 0;

  constructor() {}

  prepend(value: T) {
    let node = new DoublyListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head!.prev = node;
      this.head = node;
    }

    this.size++;
  }

  append(value: T) {
    let node = new DoublyListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
    }

    this.size++;
  }

  removeFromFront() {
    if (!this.head) return;
    let next = this.head.next;
    if (next) next.prev = null;
    this.head.next = null;
    this.head = next;
    if (!this.head) this.tail = null;
    this.size--;
  }

  removeFromEnd() {
    if (!this.tail) return;
    let prev = this.tail.prev;
    if (prev) prev.next = null;
    this.tail.prev = null;
    this.tail = prev;
    if (!prev) this.head = null;
    this.size--;
  }

  insertAt(index: number, value: T) {
    if (!this.head || index < 0 || index > this.size) return;

    if (index === 0) return this.prepend(value);

    if (index === this.size) return this.append(value);

    let node = new DoublyListNode(value);

    let curr: IDoublyListNode<T> | null = this.head;

    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }

    if (!curr) return;

    let prev = curr.prev;

    if (prev) {
      prev.next = node;
      node.prev = prev;
    }

    curr.prev = node;
    node.next = curr;

    this.size++;
  }

  removeAt(index: number) {
    if (!this.head || index < 0 || index >= this.size) return;
    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let curr: IDoublyListNode<T> | null = this.head;

    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }

    if (!curr) return;

    let next = curr.next!;
    let prev = curr.prev!;

    next.prev = prev;
    prev.next = next;

    curr.next = null;
    curr.prev = null;

    this.size--;
  }

  print() {
    let curr = this.head;
    let str = "";

    while (curr) {
      str += curr.val;
      curr = curr.next;
      if (curr) str += ",";
    }

    return str;
  }

  reverse() {
    let curr = this.tail;
    let str = "";

    while (curr) {
      str += curr.val;
      curr = curr.prev;
      if (curr) str += ",";
    }

    return str;
  }

  isEmpty() {
    return this.head === null;
  }
}

/*
let list = new DoublyLinkedList();
list.prepend(10);
list.prepend(11);
list.append(12);
list.append(13);
list.insertAt(2, 100);
list.insertAt(5, 101);
console.log(list.print());
console.log(list.reverse());
list.removeFromEnd();
list.removeFromFront();
console.log(list.print());
list.removeAt(2);
console.log(list.print());
list.removeAt(1);
console.log(list.print());
console.log(list.reverse());
*/
