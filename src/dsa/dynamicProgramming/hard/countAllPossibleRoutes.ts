/*

You are given an array of distinct positive integers locations where locations[i] represents the position of city i. You are also given integers start, finish and fuel representing the starting city, ending city, and the initial amount of fuel you have, respectively.

At each step, if you are at city i, you can pick any city j such that j != i and 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the amount of fuel you have by |locations[i] - locations[j]|. Please notice that |x| denotes the absolute value of x.

Notice that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (including start and finish).

Return the count of all possible routes from start to finish. Since the answer may be too large, return it modulo 109 + 7.

Input: locations = [4,3,1], start = 1, finish = 0, fuel = 6
Output: 5
Explanation: The following are all possible routes:
1 -> 0, used fuel = 1
1 -> 2 -> 0, used fuel = 5
1 -> 2 -> 1 -> 0, used fuel = 5
1 -> 0 -> 1 -> 0, used fuel = 3
1 -> 0 -> 1 -> 0 -> 1 -> 0, used fuel = 5

*/

export const countRoutes = (
  locations: number[],
  start: number,
  finish: number,
  fuel: number
) => {
  let cache: Record<string, number> = {};
  let mod = Math.pow(10, 9) + 7;

  let recurse = (index: number, fuel: number) => {
    let key = `${index},${fuel}`;

    if (key in cache) return cache[key];

    let count = Number(index === finish);

    if (fuel <= 0) return count;

    for (let i = 0; i < locations.length; i++) {
      if (index === i) continue;
      let remaining = Math.abs(locations[index] - locations[i]);
      if (fuel - remaining >= 0) count += recurse(i, fuel - remaining);
    }

    return (cache[key] = count % mod);
  };

  return recurse(start, fuel);
};

console.log(countRoutes([4, 3, 1], 1, 0, 6));
