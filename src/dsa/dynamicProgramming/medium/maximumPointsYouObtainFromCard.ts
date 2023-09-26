/*

There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

*/

export const maxScoreDp = (cardPoints: number[], k: number) => {
  if (k === cardPoints.length)
    return cardPoints.reduce((acc, curr) => acc + curr, 0);

  let dp = new Array(cardPoints.length)
    .fill(0)
    .map(() => new Array(cardPoints.length).fill(0));

  let recurse = (left: number, right: number, cards: number): number => {
    if (cards === 0) return 0;

    if (dp[left][right] !== 0) return dp[left][right];

    let includeLeft = cardPoints[left] + recurse(left + 1, right, cards - 1);
    let includeRight = cardPoints[right] + recurse(left, right - 1, cards - 1);

    return (dp[left][right] = Math.max(includeLeft, includeRight));
  };

  return recurse(0, cardPoints.length - 1, k);
};

export const maxScore = (cardPoints: number[], k: number) => {
  let sum = 0;
  let left = 0;
  let right = cardPoints.length - k;

  for (let i = right; i < cardPoints.length; i++) {
    sum += cardPoints[i];
  }

  let max = sum;

  while (right < cardPoints.length) {
    sum -= cardPoints[right++];
    sum += cardPoints[left++];
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
