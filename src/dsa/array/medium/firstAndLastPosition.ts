/*

Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

*/

export const searchRange = (nums: number[], target: number) => {
  let search = (position: "start" | "end") => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (
        nums[middle] === target &&
        nums[position === "start" ? middle - 1 : middle + 1] !== target
      )
        return middle;
      if (position === "start" ? target > nums[middle] : target >= nums[middle])
        left = middle + 1;
      else right = middle - 1;
    }

    return -1;
  };

  return [search("start"), search("end")];
};

console.log(searchRange([2, 2], 2));
