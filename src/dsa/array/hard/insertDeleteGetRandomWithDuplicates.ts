class RandomizedCollection {
  nums: [number, number][] = [];
  map = new Map<number, number[]>();

  insert(val: number) {
    let isExist = this.map.has(val);

    if (!isExist) this.map.set(val, []);

    this.nums.push([val, this.map.get(val)!.length]);
    this.map.get(val)!.push(this.nums.length - 1);

    return !isExist;
  }

  remove(val: any) {
    let isExist = this.map.has(val);

    if (!isExist) return false;

    let last = this.nums.at(-1)!;
    this.map.get(last[0])![last[1]] = this.map.get(val)!.at(-1)!;
    this.nums[this.map.get(val)!.pop()!] = last;
    if (this.map.get(val)!.length === 0) this.map.delete(val);
    this.nums.pop();

    return true;
  }

  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)][0];
  }
}

let randomizedSet = new RandomizedCollection();
console.log(randomizedSet.insert(1)); // return true since the collection does not contain 1.
// Inserts 1 into the collection.
console.log(randomizedSet.insert(1)); // return false since the collection contains 1.
// Inserts another 1 into the collection. Collection now contains [1,1].
console.log(randomizedSet.insert(2)); // return true since the collection does not contain 2.
// Inserts 2 into the collection. Collection now contains [1,1,2].
console.log(randomizedSet.getRandom()); // getRandom should:
// - return 1 with probability 2/3, or
// - return 2 with probability 1/3.
console.log(randomizedSet.remove(1)); // return true since the collection contains 1.
// Removes 1 from the collection. Collection now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom should return 1 or 2, both equally likely.
