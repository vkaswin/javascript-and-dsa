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

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];

    if (!stack.length || curr > 0) {
      stack.push(curr);
    } else {
      while (stack[stack.length - 1] > 0 && -curr > stack[stack.length - 1]) {
        stack.pop();
      }

      if (!stack.length) stack.push(curr);
      else if (stack[stack.length - 1] < 0) stack.push(curr);
      else if (stack[stack.length - 1] === -curr) stack.pop();
    }
  }

  return stack;
};

console.log(asteroidCollision([-2, -2, 1, -2]));
