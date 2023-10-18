export class ListNode {
  constructor(
    public val: number,
    public prev: ListNode | null = null,
    public next: ListNode | null = null
  ) {}
}
export class Dequeue {
  head: ListNode | null = null;
  tail: ListNode | null = null;

  push(val: number) {
    let node = new ListNode(val);

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  shift() {
    if (!this.head) return;
    let val = this.head.val;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return val;
  }

  pop() {
    if (!this.tail) return;
    let prev = this.tail.prev;
    this.tail.prev = null;
    if (!prev) this.head = null;
    else prev.next = null;
    this.tail = prev;
  }

  first() {
    if (!this.head) return;
    return this.head.val;
  }

  last() {
    if (!this.tail) return;
    return this.tail.val;
  }

  isEmpty() {
    return !this.head;
  }
}
