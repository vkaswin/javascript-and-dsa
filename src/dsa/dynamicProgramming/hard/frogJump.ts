/*

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.

*/

export const canCross = (stones: number[]) => {
  let directions = [-1, 0, 1];

  let map: Record<number, number> = {};

  let cache: Record<string, boolean> = {};

  for (let i = 0; i < stones.length; i++) {
    map[stones[i]] = i;
  }

  let recurse = (index: number, jump: number, stone: number) => {
    let key = `${index},${jump}`;

    if (key in cache) return cache[key];

    if (index === stones.length - 1) return true;

    if (index >= stones.length) return false;

    for (let direction of directions) {
      let nextJump = jump + direction;
      let nextStone = stone + nextJump;

      if (nextJump <= 0 || !(nextStone in map)) continue;

      if (recurse(map[nextStone], nextJump, nextStone))
        return (cache[key] = true);
    }

    return (cache[key] = false);
  };

  return recurse(0, 0, 0);
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));
