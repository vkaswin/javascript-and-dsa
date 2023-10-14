export const countNicePairs = (nums: number[]) => {
  let arr: number[] = [];
  let freq: Record<string, number> = {};
  let mod = Math.pow(10, 9) + 7;
  let count = 0;

  for (let num of nums) {
    arr.push(num - +num.toString().split("").reverse().join(""));
  }

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    count += (freq[key] * (freq[key] - 1)) / 2;
  }

  return count % mod;
};

console.log(countNicePairs([42, 11, 1, 97]));
