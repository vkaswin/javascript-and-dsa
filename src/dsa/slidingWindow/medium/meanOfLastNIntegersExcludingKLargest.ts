/*

There is a stream of integers. Every time you see a new element in the stream, return the mean value of the last N elements, excluding the largest K elements.

Example:
N = 5
K = 2
elements so far = [20, 2, -2, 0, 10, 1, 5, -2, 0]

last N elements: [10, 1, 5, -2, 0]
largest K elements: [10, 5]
result = (1+(-2)+0)/3 = -0.3333333

*/

export class MovingAverage {
  arr: number[] = [];
  index: number = 0;
  nums: number[] = [];

  constructor(public n: number, public k: number) {}

  update(val: number, isAdd: boolean) {
    let left = 0;
    let right = this.arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (!isAdd && this.arr[mid] === val) {
        this.arr.splice(mid, 1);
        return;
      }

      if (val < this.arr[mid]) left = mid + 1;
      else right = mid - 1;
    }

    this.arr.splice(left, 0, val);
  }

  findMedian() {
    let sum = 0;

    for (let i = this.k; i < this.arr.length; i++) {
      sum += this.arr[i];
    }

    return sum !== 0 ? sum / (this.arr.length - this.k) : sum;
  }

  next(val: number) {
    this.nums.push(val);
    if (this.arr.length === this.n) this.update(this.nums[this.index++], false);
    this.update(val, true);
    return this.findMedian();
  }
}

const m = new MovingAverage(5, 2);
console.log(m.next(20)); // 0
console.log(m.next(2)); // 0
console.log(m.next(-2)); // -2
console.log(m.next(0)); // -1
console.log(m.next(10)); // 0
console.log(m.next(1)); // -0.3333
console.log(m.next(5)); // -0.3333
console.log(m.next(-2)); // -0.3333
console.log(m.next(0)); // -0.3333
