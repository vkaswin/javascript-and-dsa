/*

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

*/
export class MedianFinder {
  private nums: number[] = [];

  constructor() {}

  addNum(num: number) {
    let left = 0;
    let right = this.nums.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (num > this.nums[middle]) left = middle + 1;
      else right = middle - 1;
    }

    this.nums.splice(left, 0, num);
  }

  findMedian() {
    let isEven = this.nums.length % 2 === 0;
    let middle = Math.floor(this.nums.length / 2);
    if (isEven) return (this.nums[middle] + this.nums[middle - 1]) / 2;
    return this.nums[middle];
  }
}
