/*

We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length encoded array of even length encoding (0-indexed), for all even i, encoding[i] tells us the number of times that the non-negative integer value encoding[i + 1] is repeated in the sequence.

For example, the sequence arr = [8,8,8,5,5] can be encoded to be encoding = [3,8,2,5]. encoding = [3,8,0,9,2,5] and encoding = [2,8,1,8,2,5] are also valid RLE of arr.
Given a run-length encoded array, design an iterator that iterates through it.

Implement the RLEIterator class:

RLEIterator(int[] encoded) Initializes the object with the encoded array encoded.
int next(int n) Exhausts the next n elements and returns the last element exhausted in this way. If there is no element left to exhaust, return -1 instead.

*/

export class RLEIterator {
  nums: number[] = [];

  constructor(encoding: number[]) {
    for (let i = 0; i < encoding.length; i = i + 2) {
      if (encoding[i] === 0) continue;
      this.nums.push(encoding[i], encoding[i + 1]);
    }
  }

  next(n: number): number {
    if (this.nums.length === 0) return -1;

    let val = this.nums[1];

    if (n > this.nums[0]) {
      n -= this.nums[0];
      this.nums.splice(0, 2);
      return this.next(n);
    } else {
      this.nums[0] -= n;
      if (this.nums[0] === 0) this.nums.splice(0, 2);
    }

    return val;
  }
}

let obj = new RLEIterator([784, 303, 477, 583, 909, 505]);
[[130], [333], [238], [87], [301], [276]].forEach(([num]) =>
  console.log(obj.next(num))
);
