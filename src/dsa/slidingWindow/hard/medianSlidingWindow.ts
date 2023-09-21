/*

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6

*/

export const medianSlidingWindow = (nums: number[], k: number) => {
  let left = 0;
  let right = 0;
  let arr: number[] = [];
  let isEven = k % 2 === 0;
  let mid = Math.floor(k / 2);
  let result = [];

  let updateArray = (val: number, isAdd: boolean) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (!isAdd && arr[mid] === val) {
        arr.splice(mid, 1);
        return;
      }

      if (val > arr[mid]) left = mid + 1;
      else right = mid - 1;
    }

    arr.splice(left, 0, val);
  };

  while (right < nums.length) {
    updateArray(nums[right++], true);

    if (right - left === k) {
      result.push(isEven ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid]);
      updateArray(nums[left++], false);
    }
  }
  return result;
};

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
