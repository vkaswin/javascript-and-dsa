/*

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Input: piles = [3,6,7,11], h = 8
Output: 4

*/

export const minEatingSpeed = (piles: number[], h: number) => {
  let max = -Infinity;

  for (let pile of piles) {
    max = Math.max(pile, max);
  }

  let left = 1;
  let right = max;
  let minSpeed = 0;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    let hours = piles.reduce((acc, pile) => acc + Math.ceil(pile / middle), 0);

    if (hours <= h) {
      minSpeed = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return minSpeed;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
