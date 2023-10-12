/*

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

*/

export class MountainArray {
  constructor(public arr: number[]) {}

  get(index: number) {
    return this.arr[index];
  }

  length() {
    return this.arr.length;
  }
}

export const findInMountainArray = (
  target: number,
  mountainArr: MountainArray
) => {
  let findPeak = () => {
    let left = 0;
    let right = mountainArr.length() - 1;
    let index = left;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
        left = mid + 1;
        index = left;
      } else {
        right = mid;
      }
    }

    return index;
  };

  let peak = findPeak()!;

  let search = (left: number, right: number, isIncreasing: boolean) => {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (mountainArr.get(mid) === target) return mid;

      if (
        isIncreasing
          ? target > mountainArr.get(mid)
          : target < mountainArr.get(mid)
      )
        left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  };

  let index = search(0, peak, true);

  if (index !== -1) return index;

  return search(peak, mountainArr.length() - 1, false);
};

let arr = new MountainArray([1, 2, 3, 4, 5, 3, 1]);
console.log(findInMountainArray(3, arr));
