interface INode {
  value: number;
  next: INode | null;
}

export class Node {
  value: number;
  next: INode | null;

  constructor(value: number, next: INode | null = null) {
    this.value = value;
    this.next = next;
  }
}

/* A linked list is a data structure that consists of a sequence of nodes, where each node contains
a value and a reference (or pointer) to the next node in the sequence. */

export class LinkedList {
  private head: Node | null;
  private tail: Node | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: number) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  append(value: number) {
    let node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  indexOf(value: number) {
    if (this.isEmpty()) return -1;

    let i = 0;
    let temp: INode | null = this.head;

    while (temp) {
      if (temp.value === value) return i;
      temp = temp.next;
      i++;
    }

    return -1;
  }

  contains(value: number) {
    return this.indexOf(value) !== -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(index: number, value: number) {
    if (!this.head || index < 0 || index > this.size) return;
    else if (index === 0) this.prepend(value);
    else if (index === this.size - 1) this.append(value);
    else {
      let node = new Node(value);
      let curr = this.head!;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next!;
      }
      node.next = curr;
      prev!.next = node;
      this.size++;
    }
  }

  remove(index: number) {
    // if (!this.head || index < 0 || index >= this.size) return;
    // let temp = this.head;
    // for (let i = 0; i < index; i++) {
    //   temp = temp.next!;
    // }
    // let removedNode = temp.next;
    // temp.next = removedNode!.next;
    // if (index === this.size - 1) {
    //   this.tail = temp;
    // }
    // this.size--;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    let values = "";
    let temp = this.head;
    while (temp) {
      values += `${temp.value}${temp.next ? " --> " : ""}`;
      temp = temp.next;
    }
    console.log(values);
  }
}

let list = new LinkedList();

list.prepend(10);

list.prepend(20);

list.append(30);

list.append(40);

list.append(50);

list.append(60);

console.log(
  list.indexOf(50),
  list.indexOf(60),
  list.contains(60),
  list.contains(5)
);

list.print();

list.reverse();

list.print();

list.insert(3, 1);

list.insert(7, 2);

list.remove(7);

list.print();

console.log(list.getSize());