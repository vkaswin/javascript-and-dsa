/*

You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].

*/

export const rearrangeArray = (nums: number[]) => {
  let positive: number[] = [];
  let negative: number[] = [];
  let result: number[] = [];
  let len = nums.length / 2;

  for (let i = nums.length - 1; i >= 0; i--) {
    (nums[i] >= 0 ? positive : negative).push(nums[i]);
  }

  for (let i = 0; i < len; i++) {
    result.push(positive.pop()!, negative.pop()!);
  }

  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
