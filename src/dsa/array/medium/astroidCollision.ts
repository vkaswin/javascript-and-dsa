/*

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

*/

export const asteroidCollision = (asteroids: number[]) => {
  let stack: number[] = [];

  for (let asteroid of asteroids) {
    if (!stack.length || asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (stack.length && stack.at(-1)! > 0 && -asteroid > stack.at(-1)!) {
        stack.pop();
      }

      if (-asteroid === stack.at(-1)) stack.pop();
      else if (!stack.length || stack.at(-1)! < 0) stack.push(asteroid);
    }
  }
  return stack;
};

console.log(asteroidCollision([-2, -2, 1, -2]));
