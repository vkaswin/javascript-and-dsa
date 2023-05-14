class LRUCache {
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

let cache = new LRUCache(2);

cache.put(2, 1);
cache.put(1, 1);
cache.put(2, 3);
cache.put(4, 1);
console.log(cache.get(1), cache.get(2));
