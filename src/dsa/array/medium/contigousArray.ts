export const findMaxLength = (nums: number[]) => {
  let maxLength = 0;
  let map: Record<number, number> = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (sum === 0) {
      maxLength = Math.max(maxLength, i + 1);
    } else if (map[sum] !== undefined) {
      maxLength = Math.max(maxLength, i - map[sum]);
      map[sum] = i;
    } else {
      map[sum] = i;
    }
  }

  return maxLength;
};

console.log(findMaxLength([1, 1, 1, 0, 0, 1, 1]));
