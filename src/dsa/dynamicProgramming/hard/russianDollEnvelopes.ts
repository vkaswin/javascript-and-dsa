/*

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

*/

export const maxEnvelopes = (envelopes: number[][]) => {
  let dp: number[] = [];

  envelopes.sort((a, b) => b[0] - a[0]);

  for (let i = envelopes.length - 1; i >= 0; i--) {
    let max = 1;

    for (let j = i + 1; j < envelopes.length; j++) {
      if (
        envelopes[j][0] >= envelopes[i][0] ||
        envelopes[j][1] >= envelopes[i][1]
      )
        continue;

      max = Math.max(max, 1 + dp[j]);
    }

    dp[i] = max;
  }

  return Math.max(...dp);
};

console.log(
  maxEnvelopes([
    [2, 100],
    [3, 200],
    [4, 300],
    [5, 500],
    [5, 400],
    [5, 250],
    [6, 370],
    [6, 360],
    [7, 380],
  ])
);
