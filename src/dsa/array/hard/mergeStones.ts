export const mergeStones = (stones: number[], k: number) => {
  let cost = 0;

  while (stones.length >= k) {
    debugger;
    let left = 0;
    let right = 0;
    let sum = 0;
    let minSum = Infinity;
    let index = 0;

    while (right < stones.length) {
      sum += stones[right++];

      if (right - left === k) {
        if (sum < minSum) {
          index = left;
          minSum = sum;
        }
        sum -= stones[left++];
      }
    }

    stones.splice(index, 0, minSum);
    stones.splice(index + 1, k);
    cost += minSum;
  }

  return stones.length === 1 ? cost : -1;
};

console.log(mergeStones([6, 4, 4, 6], 2));
