/*

We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.

Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)

Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.

*/

export const champagneTower = (
  poured: number,
  query_row: number,
  query_glass: number
) => {
  let prev: number[] = [poured];

  for (let i = 1; i <= query_row; i++) {
    let arr: number[] = new Array(i + 1).fill(0);

    for (let j = 0; j < i; j++) {
      let excess = prev[j] - 1;

      if (excess <= 0) continue;

      arr[j] += excess / 2;
      arr[j + 1] += excess / 2;
    }

    prev = arr;
  }

  return Math.min(1, prev[query_glass]);
};

console.log(champagneTower(1, 1, 1));
