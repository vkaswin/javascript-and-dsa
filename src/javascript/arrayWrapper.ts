export class ArrayWrapper {
  constructor(public nums: number[]) {}

  valueOf() {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString() {
    return `[${this.nums.toString()}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log((obj1 as any) + (obj2 as any)); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
