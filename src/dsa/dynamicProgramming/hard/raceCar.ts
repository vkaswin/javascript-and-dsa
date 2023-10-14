/*

Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse):

When you get an instruction 'A', your car does the following:
position += speed
speed *= 2
When you get an instruction 'R', your car does the following:
If your speed is positive then speed = -1
otherwise speed = 1
Your position stays the same.
For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.

Given a target position target, return the length of the shortest sequence of instructions to get there.

Input: target = 6
Output: 5
Explanation: 
The shortest instruction sequence is "AAARA".
Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.

*/

export const racecar = (target: number) => {
  let visited = new Set();
  let queue: number[][] = [[0, 1, 0]];
  let count = 0;

  while (queue.length) {
    let next: number[][] = [];

    for (let [position, speed] of queue) {
      let key = `${position},${speed}`;

      if (position === target) return count;

      if (visited.has(key)) continue;

      visited.add(key);

      if (position + speed > 0 && position + speed <= 2 * target)
        next.push([position + speed, 2 * speed]);

      next.push([position, speed > 0 ? -1 : 1]);
    }

    queue = next;
    count++;
  }
};

console.log(racecar(6));
