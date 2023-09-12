/*

Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the LFUCache class:

LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

The functions get and put must each run in O(1) average time complexity.

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
cnt(x) = the use counter for key x
cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)

LFUCache lfu = new LFUCache(2);

lfu.put(1, 1);   // cache=[1,_], cnt(1)=1

lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1

lfu.get(1);      // return 1  
cache=[1,2], cnt(2)=1, cnt(1)=2

lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
cache=[3,1], cnt(3)=1, cnt(1)=2

lfu.get(2);      // return -1 (not found)

lfu.get(3);      // return 3
cache=[3,1], cnt(3)=2, cnt(1)=2

lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
cache=[4,3], cnt(4)=1, cnt(3)=2

lfu.get(1);      // return -1 (not found)

lfu.get(3);      // return 3
cache=[3,4], cnt(4)=1, cnt(3)=3

lfu.get(4);      // return 4
cache=[4,3], cnt(4)=2, cnt(3)=3

*/

class Node {
  constructor(
    public key: number,
    public val: number,
    public prev: Node | null = null,
    public next: Node | null = null,
    public count: number = 1
  ) {}
}

class DoublyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size = 0;

  append(node: Node) {
    if (this.isEmpty()) {
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
    this.head.next = null;
    if (next) next.prev = null;
    else this.tail = null;
    this.head = next;
    this.size--;
  }

  removeFromEnd() {
    if (!this.tail) return;

    let prev = this.tail.prev;
    this.tail.prev = null;
    if (prev) prev.next = null;
    else this.head = null;
    this.tail = prev;
    this.size--;
  }

  remove(node: Node) {
    if (node === this.head) return this.removeFromFront();

    if (node === this.tail) return this.removeFromEnd();

    let next = node.next;
    let prev = node.prev;
    node.next = null;
    node.prev = null;
    if (prev) prev.next = next;
    if (next) next.prev = prev;

    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }
}

export class LFUCache {
  nodeMap = new Map<number, Node>();
  freqMap = new Map<number, DoublyLinkedList>();
  minFreq = 1;
  size = 0;

  constructor(public capacity: number) {}

  get(key: number) {
    if (!this.nodeMap.has(key)) return -1;
    let node = this.nodeMap.get(key)!;
    this.incrementCount(node);
    return node.val;
  }

  put(key: number, value: number) {
    if (this.nodeMap.has(key)) {
      let node = this.nodeMap.get(key)!;
      this.incrementCount(node);
      node.val = value;
    } else {
      let node = new Node(key, value);

      if (this.size === this.capacity) this.evict();

      this.nodeMap.set(key, node);

      if (!this.freqMap.has(node.count))
        this.freqMap.set(node.count, new DoublyLinkedList());
      this.freqMap.get(node.count)!.append(node);
      if (!this.freqMap.has(this.minFreq) || node.count < this.minFreq)
        this.minFreq = node.count;
      this.size++;
    }
  }

  incrementCount(node: Node) {
    let doublyList = this.freqMap.get(node.count)!;

    doublyList.remove(node);

    if (doublyList.isEmpty()) this.freqMap.delete(node.count);

    node.count++;

    if (!this.freqMap.has(node.count))
      this.freqMap.set(node.count, new DoublyLinkedList());

    this.freqMap.get(node.count)!.append(node);

    if (!this.freqMap.has(this.minFreq) || node.count < this.minFreq)
      this.minFreq = node.count;
  }

  evict() {
    let doublyList = this.freqMap.get(this.minFreq)!;
    let key = doublyList.head!.key;
    doublyList.removeFromFront();
    if (doublyList.size === 0) this.freqMap.delete(this.minFreq);
    this.nodeMap.delete(key);
    this.size--;
  }
}

let lfu = new LFUCache(2);

lfu.put(1, 1); // cache=[1,_], cnt(1)=1
// console.log(lfu.put(1, 2));
lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
console.log(lfu.get(1)); // return 1
// cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3); // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
// cache=[3,1], cnt(3)=1, cnt(1)=2
console.log(lfu.get(2)); // return -1 (not found)
console.log(lfu.get(3)); // return 3
// cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4); // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
// cache=[4,3], cnt(4)=1, cnt(3)=2
console.log(lfu.get(1)); // return -1 (not found)
console.log(lfu.get(3)); // return 3
// cache=[3,4], cnt(4)=1, cnt(3)=3
console.log(lfu.get(4)); // return 4
// cache=[4,3], cnt(4)=2, cnt(3)=3
