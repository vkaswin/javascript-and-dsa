/*

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

*/

export class KthLargest {
  constructor(private k: number, private nums: number[]) {
    this.nums.sort((a, b) => b - a);
  }

  add(val: number) {
    let index = this.nums.findIndex((num) => num <= val);
    if (index === -1) this.nums.push(val);
    else this.nums.splice(index, 0, val);
    return this.nums[this.k - 1];
  }
}

let obj = new KthLargest(1, [-2]);
console.log(obj.add(-3));
console.log(obj.add(0));
console.log(obj.add(2));
console.log(obj.add(2));
console.log(obj.add(4));
