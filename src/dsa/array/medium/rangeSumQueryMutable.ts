/*

Given an integer array nums, handle multiple queries of the following types:

Update the value of an element in nums.
Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
void update(int index, int val) Updates the value of nums[index] to be val.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

*/

export class NumArray {
  prefix: number[] = [];

  constructor(public nums: number[]) {
    let sum = 0;
    for (let num of nums) {
      sum += num;
      this.prefix.push(sum);
    }
  }

  update(index: number, val: number) {
    this.nums[index] = val;
    let sum = this.prefix[index - 1] || 0;

    for (let i = index; i < this.nums.length; i++) {
      sum += this.nums[i];
      this.prefix[i] = sum;
    }
  }

  sumRange(left: number, right: number) {
    return this.prefix[right] - (this.prefix[left - 1] || 0);
  }
}

let numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // return 1 + 3 + 5 = 9
numArray.update(1, 2); // nums = [1, 2, 5]
console.log(numArray.sumRange(0, 2)); // return 1 + 2 + 5 = 8
