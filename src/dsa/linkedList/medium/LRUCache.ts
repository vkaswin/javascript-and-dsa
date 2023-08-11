export class LRUCacheMap {
  #map: Map<number, number>;

  constructor(public capacity: number) {
    this.#map = new Map();
  }

  get(key: number) {
    let val = this.#map.get(key);
    if (typeof val === "undefined") return -1;
    this.#map.delete(key);
    this.#map.set(key, val);
    return val;
  }

  put(key: number, value: number): void {
    if (this.#map.size >= this.capacity && !this.#map.has(key)) {
      this.#map.delete(this.#map.keys().next().value);
    }
    this.#map.delete(key);
    this.#map.set(key, value);
  }
}

class DoublyListNode {
  constructor(
    public val: number,
    public key: number,
    public prev: DoublyListNode | null = null,
    public next: DoublyListNode | null = null
  ) {}
}

export class LRUCache {
  private head: DoublyListNode | null = null;
  private tail: DoublyListNode | null = null;
  private size = 0;
  private map = new Map<number, DoublyListNode>();

  constructor(public capacity: number) {}

  get(key: number) {
    let node = this.map.get(key);
    if (!node) return -1;
    this.remove(node);
    this.append(node);
    return node.val;
  }

  private append(node: DoublyListNode) {
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  private removeFromEnd() {
    if (!this.tail) return;
    let prev = this.tail.prev;
    if (prev) prev.next = null;
    this.tail.prev = null;
    this.tail = prev;
    if (!prev) this.tail = null;
    this.size--;
  }

  private removeFromFront() {
    if (!this.head) return;
    let next = this.head.next;
    if (next) next.prev = null;
    this.head.next = null;
    this.head = next;
    if (!this.head) this.tail = null;
    this.size--;
  }

  private remove(node: DoublyListNode) {
    if (node === this.tail) return this.removeFromEnd();

    if (node === this.head) return this.removeFromFront();

    let prev = node.prev;
    let next = node.next;

    node.next = null;
    node.prev = null;

    if (prev) prev.next = next || null;
    if (next) next.prev = prev || null;

    this.size--;
  }

  put(key: number, value: number) {
    if (this.map.has(key)) {
      let node = this.map.get(key)!;
      this.remove(node);
      this.append(node);
      node.val = value;
    } else {
      if (this.size === this.capacity && this.head) {
        this.map.delete(this.head.key);
        this.remove(this.head);
      }
      let node = new DoublyListNode(value, key);
      this.append(node);
      this.map.set(key, node);
    }
  }
}

let cache = new LRUCache(2);
cache.put(2, 6);
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1));
console.log(cache.get(2));
