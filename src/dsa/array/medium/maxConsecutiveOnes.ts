export const longestOnes = (nums: number[], k: number) => {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) count++;
      if (count === k) break;
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
