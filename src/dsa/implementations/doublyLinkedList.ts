import { IDoublyListNode, DoublyListNode } from "../linkedList/list";

type IListNode<T> = IDoublyListNode<T>;
export class DoublyLinkedList<T> {
  head: IListNode<T> | null = null;
  tail: IListNode<T> | null = null;
  size = 0;

  constructor() {}

  prepend(value: T) {
    let node = new DoublyListNode(value);

    if (this.head) {
      node.next = this.head;
      this.head.prev = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  append() {}

  removeFromFront() {}

  removeFromEnd() {}

  print() {}

  reverse() {}
}

let list = new DoublyLinkedList();
list.prepend(10);
list.prepend(11);
console.log(list);
