/*

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

*/

export const makesquare = (matchsticks: number[]) => {
  let sum = matchsticks.reduce((acc, curr) => acc + curr);

  if (sum % 4 !== 0) return false;

  let target = sum / 4;

  let visited = new Array(matchsticks.length).fill(false);

  let recurse = (index: number, sum: number, k: number) => {
    if (k === 0) return true;

    if (sum > target) return false;

    if (sum === target) return recurse(0, 0, k - 1);

    for (let i = index; i < matchsticks.length; i++) {
      if (visited[i]) continue;

      visited[i] = true;

      if (recurse(i + 1, sum + matchsticks[i], k)) return true;

      visited[i] = false;
    }

    return false;
  };

  return recurse(0, 0, 4);
};

console.log(makesquare([5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4]));
